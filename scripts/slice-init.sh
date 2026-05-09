#!/usr/bin/env bash
# slice-init.sh — first action of every author session at slice start.
# Resets the worktree to origin/main, then writes the initial .claude/slice-state.json.
# See docs/07-slice-protocol.md.
#
# Usage:
#   slice-init.sh <subject> <nodeId>
#   slice-init.sh maths maths-decimals-rounding
#
# Subject must match the worktree's expected subject.

set -euo pipefail

SUBJECT="${1:-}"
NODE_ID="${2:-}"

if [[ -z "$SUBJECT" || -z "$NODE_ID" ]]; then
  echo "usage: slice-init.sh <subject> <nodeId>" >&2
  echo "example: slice-init.sh maths maths-decimals-rounding" >&2
  exit 2
fi

case "$SUBJECT" in
  maths|biology|chemistry|physics) ;;
  *) echo "subject must be one of: maths, biology, chemistry, physics" >&2; exit 2 ;;
esac

if [[ "$NODE_ID" != "$SUBJECT"-* ]]; then
  echo "nodeId '$NODE_ID' must start with '$SUBJECT-'" >&2
  exit 2
fi

REPO_ROOT="$(git rev-parse --show-toplevel)"
EXPECTED_BRANCH="content/$SUBJECT"
CURRENT_BRANCH="$(git -C "$REPO_ROOT" rev-parse --abbrev-ref HEAD)"

if [[ "$CURRENT_BRANCH" != "$EXPECTED_BRANCH" ]]; then
  echo "current branch is '$CURRENT_BRANCH' but expected '$EXPECTED_BRANCH'" >&2
  echo "are you running this from the correct subject worktree?" >&2
  exit 1
fi

# Verify clean before destructive reset
if [[ -n "$(git -C "$REPO_ROOT" status --porcelain)" ]]; then
  echo "worktree is not clean. Refusing to reset --hard:" >&2
  git -C "$REPO_ROOT" status --short >&2
  echo "" >&2
  echo "If this is intentional in-progress work, commit or stash first." >&2
  exit 1
fi

echo "==> fetching origin"
git -C "$REPO_ROOT" fetch origin --quiet

echo "==> resetting $CURRENT_BRANCH to origin/main"
git -C "$REPO_ROOT" reset --hard origin/main

# Look up node metadata if the seed file already declares this node.
# Otherwise, infer the seed file path from the node id (zone is the second hyphen-delimited segment).
ZONE_ID="$(echo "$NODE_ID" | awk -F- 'BEGIN{OFS="-"} {if (NF >= 3) print $1"-"$2; else print $1}')"
ZONE_TAIL="$(echo "$ZONE_ID" | sed "s/^$SUBJECT-//")"
SEED_DIR="$REPO_ROOT/src/content/seed/$SUBJECT"
SEED_FILE_REL="src/content/seed/$SUBJECT/$ZONE_TAIL.ts"
SEED_FILE_ABS="$SEED_DIR/$ZONE_TAIL.ts"

# If the file doesn't exist yet, slice-init still writes the slice-state with the inferred path.
# Author can correct it before committing.
if [[ ! -f "$SEED_FILE_ABS" ]]; then
  echo "note: seed file $SEED_FILE_REL does not exist yet; will be created during drafting"
fi

mkdir -p "$REPO_ROOT/.claude"
SLICE_STATE="$REPO_ROOT/.claude/slice-state.json"

NOW="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

cat > "$SLICE_STATE" <<EOF
{
  "version": 1,
  "subject": "$SUBJECT",
  "nodeId": "$NODE_ID",
  "nodeTitle": "",
  "zoneId": "$ZONE_ID",
  "tier": "core",
  "seedFilePath": "$SEED_FILE_REL",
  "status": "drafting",
  "startedAt": "$NOW",
  "lastReviewVerdict": null,
  "lastReviewFindings": [],
  "lastReviewSummary": null,
  "handoffNotes": [],
  "shippedPr": null,
  "shippedCommit": null
}
EOF

echo ""
echo "==> slice-state initialised at .claude/slice-state.json"
cat "$SLICE_STATE"
echo ""
echo "next steps:"
echo "  1. Update nodeTitle and tier in .claude/slice-state.json after you've decided them"
echo "  2. Draft the node in $SEED_FILE_REL"
echo "  3. Add the curriculum-map row to docs/03-curriculum-map.md"
echo "  4. Add eval probes to docs/04-eval-set.md if needed"
echo "  5. Run: npm run lint:content && npm run eval-content && npm run typecheck && npm run lint"
echo "  6. git add the scoped files; git commit; do NOT push"
echo "  7. Update slice-state.json: status to 'ready-for-review'"
echo "  8. Report ready to infra-owner"
