#!/usr/bin/env bash
# slice-finish.sh — infra-owner ships a passed draft.
# Reads .claude/slice-state.json from the subject worktree, force-pushes the branch,
# opens the PR, squash-merges, and updates the slice-state to 'shipped'.
# See docs/07-slice-protocol.md.
#
# Usage:
#   slice-finish.sh <subject> [--dry-run]
#   slice-finish.sh maths
#   slice-finish.sh biology --dry-run
#
# Force-with-lease push is required because slice-init.sh resets the branch to origin/main,
# leaving the remote pointing at the previous slice's pre-squash commit. That commit is already
# represented in main via its squash-merge, so abandoning it on the branch is safe.

set -euo pipefail

SUBJECT="${1:-}"
DRY_RUN=0
shift || true
for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=1 ;;
    *) echo "unknown arg: $arg" >&2; exit 2 ;;
  esac
done

if [[ -z "$SUBJECT" ]]; then
  echo "usage: slice-finish.sh <subject> [--dry-run]" >&2
  exit 2
fi

case "$SUBJECT" in
  maths|biology|chemistry|physics) ;;
  *) echo "subject must be one of: maths, biology, chemistry, physics" >&2; exit 2 ;;
esac

WORKTREE="$HOME/lumen-academy-$SUBJECT"
SLICE_STATE="$WORKTREE/.claude/slice-state.json"

if [[ ! -d "$WORKTREE" ]]; then
  echo "worktree not found: $WORKTREE" >&2
  exit 1
fi

if [[ ! -f "$SLICE_STATE" ]]; then
  echo "slice-state not found: $SLICE_STATE" >&2
  echo "did the author session run scripts/slice-init.sh?" >&2
  exit 1
fi

require_jq() {
  if ! command -v jq >/dev/null 2>&1; then
    echo "jq is required to parse .claude/slice-state.json" >&2
    exit 1
  fi
}
require_jq

STATUS="$(jq -r '.status' "$SLICE_STATE")"
VERDICT="$(jq -r '.lastReviewVerdict // "null"' "$SLICE_STATE")"
NODE_ID="$(jq -r '.nodeId' "$SLICE_STATE")"
NODE_TITLE="$(jq -r '.nodeTitle' "$SLICE_STATE")"
SEED_FILE="$(jq -r '.seedFilePath' "$SLICE_STATE")"
SUMMARY="$(jq -r '.lastReviewSummary // ""' "$SLICE_STATE")"

echo "==> slice state for $SUBJECT:"
echo "    nodeId: $NODE_ID"
echo "    nodeTitle: $NODE_TITLE"
echo "    status: $STATUS"
echo "    lastReviewVerdict: $VERDICT"

if [[ "$STATUS" != "reviewed-pass" ]]; then
  echo "" >&2
  echo "refusing to ship: status is '$STATUS', expected 'reviewed-pass'" >&2
  exit 1
fi

if [[ "$VERDICT" != "pass" ]]; then
  echo "" >&2
  echo "refusing to ship: lastReviewVerdict is '$VERDICT', expected 'pass'" >&2
  exit 1
fi

# Verify the draft is committed (not in working tree) and HEAD touches the seed file.
cd "$WORKTREE"
if [[ -n "$(git status --porcelain)" ]]; then
  echo "" >&2
  echo "refusing to ship: worktree has uncommitted changes." >&2
  git status --short >&2
  exit 1
fi

HEAD_FILES="$(git diff --name-only HEAD~1 HEAD 2>/dev/null || git diff --name-only $(git merge-base HEAD origin/main) HEAD)"
if ! echo "$HEAD_FILES" | grep -qx "$SEED_FILE"; then
  echo "" >&2
  echo "warning: HEAD commit doesn't appear to touch $SEED_FILE" >&2
  echo "files in HEAD's diff against main:" >&2
  echo "$HEAD_FILES" | sed 's/^/  /' >&2
  if [[ "$DRY_RUN" == "0" ]]; then
    echo "aborting; pass --dry-run to inspect or commit the seed file first" >&2
    exit 1
  fi
fi

BRANCH="content/$SUBJECT"
PR_TITLE="feat(content): $NODE_TITLE"
PR_BODY_FILE="$(mktemp -t lumen-pr-body.XXXXXX)"
cat > "$PR_BODY_FILE" <<EOF
## Summary
Adds \`$NODE_ID\` ($NODE_TITLE) to \`$SEED_FILE\`.

## Reviewer verdict
Pass via \`/lumen-content-review\`.

$SUMMARY

## Test plan
- [x] \`npm run lint:content\` clean
- [x] \`npm run eval-content\` passes
- [x] \`npm run typecheck\` clean
- [x] \`npm run lint\` clean
- [ ] After merge: pull main on infra-owner checkout, run \`npm run seed -- --subject=$SUBJECT\` to upsert into Atlas
- [ ] Spot-check \`/learn/$NODE_ID\` after Railway deploy

🤖 Generated via scripts/slice-finish.sh
EOF

if [[ "$DRY_RUN" == "1" ]]; then
  echo ""
  echo "==> dry-run: would execute the following sequence:"
  echo "    cd $WORKTREE"
  echo "    git push --force-with-lease origin $BRANCH"
  echo "    gh pr create --base main --head $BRANCH --title '$PR_TITLE' --body \"\$(cat $PR_BODY_FILE)\""
  echo "    gh pr merge <pr#> --squash --auto"
  echo ""
  echo "==> PR body that would be sent:"
  cat "$PR_BODY_FILE"
  rm -f "$PR_BODY_FILE"
  exit 0
fi

echo ""
echo "==> pushing $BRANCH (force-with-lease)"
git push --force-with-lease origin "$BRANCH"

echo "==> opening PR"
PR_URL="$(gh pr create --base main --head "$BRANCH" --title "$PR_TITLE" --body "$(cat "$PR_BODY_FILE")")"
PR_NUMBER="$(echo "$PR_URL" | sed -E 's|.*/pull/([0-9]+).*|\1|')"
echo "    PR: $PR_URL"

echo "==> squash-merging PR #$PR_NUMBER"
gh pr merge "$PR_NUMBER" --squash --auto --delete-branch=false

MERGE_COMMIT="$(gh pr view "$PR_NUMBER" --json mergeCommit -q '.mergeCommit.oid')"
echo "    merge commit: $MERGE_COMMIT"

# Update slice-state to shipped
TMP="$(mktemp -t lumen-state.XXXXXX)"
jq \
  --argjson pr "$PR_NUMBER" \
  --arg sha "$MERGE_COMMIT" \
  '.status = "shipped" | .shippedPr = $pr | .shippedCommit = $sha' \
  "$SLICE_STATE" > "$TMP"
mv "$TMP" "$SLICE_STATE"

rm -f "$PR_BODY_FILE"

echo ""
echo "==> shipped: PR #$PR_NUMBER, merge $MERGE_COMMIT"
echo "    next: pull main on the infra-owner checkout and run npm run seed -- --subject=$SUBJECT"
