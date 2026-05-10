#!/usr/bin/env bash
# slice-init.sh — first action of every author session at slice start.
# Resets the worktree to origin/main (unless HEAD is ahead — auto-skip),
# then writes the initial .claude/slice-state.json.
# See docs/07-slice-protocol.md.
#
# Usage:
#   slice-init.sh <subject> <nodeId> [--seed-file=<path>] [--zone=<zoneId>] [--new-file] [--keep-head] [--reset-anyway]
#
# Examples:
#   slice-init.sh maths maths-decimals-rounding --seed-file=src/content/seed/maths/decimals-rounding.ts --zone=maths-decimals --new-file
#   slice-init.sh physics physics-electricity-current-voltage   # auto-resolves seed file via grep on existing id
#   slice-init.sh biology biology-body-systems-digestive --seed-file=src/content/seed/biology/body-systems.ts --new-file
#
# Reset behaviour:
#   - If HEAD is at origin/main:   reset is a no-op, runs anyway (idempotent).
#   - If HEAD is ahead of origin/main (mid-slice multi-node session): SKIPS reset to preserve work.
#     Pass --reset-anyway to override (destructive). --keep-head is the same auto-skip behaviour, made explicit.
#
# File resolution order:
#   1. --seed-file=<rel_path>          → use as-is (must exist unless --new-file)
#   2. --zone=<zoneId>                 → grep src/content/seed/<subject>/*.ts for `id: '<zoneId>'`
#                                         (zone declarations) → unique match wins
#   3. grep for `id: '<nodeId>'`       → unique match wins (existing nodes)
#   4. error                           → user must pass --seed-file or --zone

set -euo pipefail

SUBJECT=""
NODE_ID=""
SEED_FILE_OVERRIDE=""
ZONE_OVERRIDE=""
ALLOW_NEW_FILE=0
KEEP_HEAD=0
RESET_ANYWAY=0

for arg in "$@"; do
  case "$arg" in
    --seed-file=*)   SEED_FILE_OVERRIDE="${arg#--seed-file=}" ;;
    --zone=*)        ZONE_OVERRIDE="${arg#--zone=}" ;;
    --new-file)      ALLOW_NEW_FILE=1 ;;
    --keep-head)     KEEP_HEAD=1 ;;
    --reset-anyway)  RESET_ANYWAY=1 ;;
    --*)
      echo "unknown flag: $arg" >&2
      echo "see: scripts/slice-init.sh (header) for usage" >&2
      exit 2
      ;;
    *)
      if [[ -z "$SUBJECT" ]]; then
        SUBJECT="$arg"
      elif [[ -z "$NODE_ID" ]]; then
        NODE_ID="$arg"
      else
        echo "unexpected positional arg: $arg" >&2
        exit 2
      fi
      ;;
  esac
done

if [[ -z "$SUBJECT" || -z "$NODE_ID" ]]; then
  echo "usage: slice-init.sh <subject> <nodeId> [--seed-file=<path>] [--zone=<zoneId>] [--new-file] [--keep-head] [--reset-anyway]" >&2
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

# --- Reset handling ---
if [[ -n "$(git -C "$REPO_ROOT" status --porcelain)" ]]; then
  echo "worktree is not clean. Refusing to proceed:" >&2
  git -C "$REPO_ROOT" status --short >&2
  echo "" >&2
  echo "If this is intentional in-progress work, commit or stash first." >&2
  exit 1
fi

echo "==> fetching origin"
git -C "$REPO_ROOT" fetch origin --quiet

AHEAD="$(git -C "$REPO_ROOT" rev-list --count origin/main..HEAD 2>/dev/null || echo 0)"
if [[ "$AHEAD" -gt 0 ]]; then
  if [[ "$RESET_ANYWAY" -eq 1 ]]; then
    echo "==> --reset-anyway: HEAD is $AHEAD commit(s) ahead of origin/main; resetting (DESTRUCTIVE)"
    git -C "$REPO_ROOT" reset --hard origin/main
  elif [[ "$KEEP_HEAD" -eq 1 ]]; then
    echo "==> --keep-head: HEAD is $AHEAD commit(s) ahead of origin/main; preserving"
  else
    echo "==> HEAD is $AHEAD commit(s) ahead of origin/main; auto-preserving (multi-node slice in progress)"
    echo "    pass --reset-anyway to override, --keep-head to make this explicit"
  fi
else
  echo "==> resetting $CURRENT_BRANCH to origin/main (no-op: already at origin/main)"
  git -C "$REPO_ROOT" reset --hard origin/main
fi

# --- Seed file resolution ---
SEED_DIR_REL="src/content/seed/$SUBJECT"
SEED_DIR_ABS="$REPO_ROOT/$SEED_DIR_REL"
SEED_FILE_REL=""
SEED_FILE_ABS=""
RESOLVED_VIA=""

resolve_via_grep() {
  # $1 = pattern to search for (literal)
  # echoes matching files (one per line) under SEED_DIR_ABS
  if [[ ! -d "$SEED_DIR_ABS" ]]; then
    return 0
  fi
  grep -lE "id:[[:space:]]*['\"]$1['\"]" "$SEED_DIR_ABS"/*.ts 2>/dev/null || true
}

if [[ -n "$SEED_FILE_OVERRIDE" ]]; then
  SEED_FILE_REL="$SEED_FILE_OVERRIDE"
  SEED_FILE_ABS="$REPO_ROOT/$SEED_FILE_OVERRIDE"
  RESOLVED_VIA="--seed-file"
elif [[ -n "$ZONE_OVERRIDE" ]]; then
  MATCHES="$(resolve_via_grep "$ZONE_OVERRIDE")"
  MATCH_COUNT=0
  if [[ -n "$MATCHES" ]]; then
    MATCH_COUNT="$(printf '%s\n' "$MATCHES" | grep -c .)"
  fi
  if [[ "$MATCH_COUNT" -eq 1 ]]; then
    SEED_FILE_ABS="$MATCHES"
    SEED_FILE_REL="${SEED_FILE_ABS#$REPO_ROOT/}"
    RESOLVED_VIA="--zone grep"
  elif [[ "$MATCH_COUNT" -gt 1 ]]; then
    echo "ambiguous: zoneId '$ZONE_OVERRIDE' declared in multiple files:" >&2
    printf '  %s\n' $MATCHES >&2
    echo "pass --seed-file=<path> to disambiguate" >&2
    exit 1
  else
    echo "zoneId '$ZONE_OVERRIDE' not found in $SEED_DIR_REL/" >&2
    echo "this is a new zone — pass --seed-file=<path> --new-file to declare it" >&2
    exit 1
  fi
else
  MATCHES="$(resolve_via_grep "$NODE_ID")"
  MATCH_COUNT=0
  if [[ -n "$MATCHES" ]]; then
    MATCH_COUNT="$(printf '%s\n' "$MATCHES" | grep -c .)"
  fi
  if [[ "$MATCH_COUNT" -eq 1 ]]; then
    SEED_FILE_ABS="$MATCHES"
    SEED_FILE_REL="${SEED_FILE_ABS#$REPO_ROOT/}"
    RESOLVED_VIA="nodeId grep"
  elif [[ "$MATCH_COUNT" -gt 1 ]]; then
    echo "ambiguous: nodeId '$NODE_ID' declared in multiple files:" >&2
    printf '  %s\n' $MATCHES >&2
    echo "pass --seed-file=<path> to disambiguate" >&2
    exit 1
  else
    echo "could not resolve seed file for '$NODE_ID'." >&2
    echo "" >&2
    echo "options:" >&2
    echo "  pass --seed-file=<path>            → explicit file (must exist unless --new-file)" >&2
    echo "  pass --zone=<zoneId>               → looked up via zone declaration in $SEED_DIR_REL/" >&2
    echo "  pass --seed-file=<path> --new-file → for a brand-new file (e.g. opening a new zone)" >&2
    exit 1
  fi
fi

# --- Verify file existence (unless explicitly a new file) ---
if [[ ! -f "$SEED_FILE_ABS" ]]; then
  if [[ "$ALLOW_NEW_FILE" -eq 1 ]]; then
    echo "==> seed file $SEED_FILE_REL does not exist yet — will be created during drafting (--new-file)"
  else
    echo "seed file does not exist: $SEED_FILE_REL" >&2
    echo "if this is a brand-new file (e.g. opening a new zone), pass --new-file" >&2
    exit 1
  fi
else
  echo "==> resolved seed file via $RESOLVED_VIA: $SEED_FILE_REL"
fi

# --- Zone resolution for slice-state metadata ---
ZONE_ID="$ZONE_OVERRIDE"
if [[ -z "$ZONE_ID" && -f "$SEED_FILE_ABS" ]]; then
  # Look for the node's zoneId field nearby. Best effort: grep the file for any zoneId line.
  ZONE_ID="$(grep -hE "zoneId:[[:space:]]*['\"][^'\"]+['\"]" "$SEED_FILE_ABS" | head -1 | sed -E "s/.*zoneId:[[:space:]]*['\"]([^'\"]+)['\"].*/\1/" || true)"
fi
if [[ -z "$ZONE_ID" ]]; then
  ZONE_ID=""  # Author can fill in by hand
  echo "note: zoneId not derivable; leaving empty in slice-state (author should fill in)"
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
