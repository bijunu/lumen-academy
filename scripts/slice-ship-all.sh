#!/usr/bin/env bash
# slice-ship-all.sh — infra-owner ships up to N subjects in parallel and seeds them.
# For each subject argv, runs scripts/slice-finish.sh in a background job. After all jobs
# finish, runs `npm run seed -- --subject=<each>` in parallel. Single command, replaces
# the slice-2 sequence of 4 manual ship steps + 4 manual seed steps.
#
# Usage:
#   slice-ship-all.sh maths biology chemistry physics
#   slice-ship-all.sh chemistry physics                  # only ship subset
#   slice-ship-all.sh --dry-run maths biology
#
# Logs from each background job are written to /tmp/lumen-ship-<subject>.log so failures
# can be inspected after the fact.

set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

DRY_RUN=0
SUBJECTS=()

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=1 ;;
    maths|biology|chemistry|physics) SUBJECTS+=("$arg") ;;
    *) echo "unknown arg: $arg (expected --dry-run or one of maths/biology/chemistry/physics)" >&2; exit 2 ;;
  esac
done

if [[ ${#SUBJECTS[@]} -eq 0 ]]; then
  echo "usage: slice-ship-all.sh [--dry-run] <subject> [<subject> ...]" >&2
  exit 2
fi

echo "==> shipping ${#SUBJECTS[@]} subject(s) in parallel: ${SUBJECTS[*]}"
[[ "$DRY_RUN" == "1" ]] && echo "    (dry-run mode)"

# Phase 1: ship in parallel.
declare -A SHIP_PIDS=()
for s in "${SUBJECTS[@]}"; do
  LOG="/tmp/lumen-ship-$s.log"
  if [[ "$DRY_RUN" == "1" ]]; then
    bash "$SCRIPT_DIR/slice-finish.sh" "$s" --dry-run > "$LOG" 2>&1 &
  else
    bash "$SCRIPT_DIR/slice-finish.sh" "$s" > "$LOG" 2>&1 &
  fi
  SHIP_PIDS["$s"]=$!
  echo "    [$s] ship started (pid ${SHIP_PIDS[$s]}, log $LOG)"
done

SHIP_FAILED=()
for s in "${SUBJECTS[@]}"; do
  if wait "${SHIP_PIDS[$s]}"; then
    echo "    [$s] ship ✓"
  else
    echo "    [$s] ship ✗ (see /tmp/lumen-ship-$s.log)"
    SHIP_FAILED+=("$s")
  fi
done

if [[ ${#SHIP_FAILED[@]} -gt 0 ]]; then
  echo ""
  echo "==> ship failures: ${SHIP_FAILED[*]}"
  echo "    refusing to seed; inspect logs at /tmp/lumen-ship-<subject>.log"
  exit 1
fi

if [[ "$DRY_RUN" == "1" ]]; then
  echo ""
  echo "==> dry-run complete. Logs:"
  for s in "${SUBJECTS[@]}"; do echo "    /tmp/lumen-ship-$s.log"; done
  exit 0
fi

echo ""
echo "==> all ships succeeded; pulling main"
git -C "$REPO_ROOT" pull --ff-only origin main

echo ""
echo "==> seeding ${#SUBJECTS[@]} subject(s) in parallel"
declare -A SEED_PIDS=()
for s in "${SUBJECTS[@]}"; do
  LOG="/tmp/lumen-seed-$s.log"
  ( cd "$REPO_ROOT" && npm run seed -- --subject="$s" > "$LOG" 2>&1 ) &
  SEED_PIDS["$s"]=$!
  echo "    [$s] seed started (pid ${SEED_PIDS[$s]}, log $LOG)"
done

SEED_FAILED=()
for s in "${SUBJECTS[@]}"; do
  if wait "${SEED_PIDS[$s]}"; then
    echo "    [$s] seed ✓"
  else
    echo "    [$s] seed ✗ (see /tmp/lumen-seed-$s.log)"
    SEED_FAILED+=("$s")
  fi
done

if [[ ${#SEED_FAILED[@]} -gt 0 ]]; then
  echo ""
  echo "==> seed failures: ${SEED_FAILED[*]}"
  exit 1
fi

echo ""
echo "==> done. ${#SUBJECTS[@]} subject(s) shipped and seeded."
