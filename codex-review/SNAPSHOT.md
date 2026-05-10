# Review snapshot

| field | value |
| --- | --- |
| commit | `0fbef97e22257c36baa6d8d88e8ab33f364a7763` |
| short SHA | `0fbef97` |
| branch | `main` |
| commit subject | `feat(content): Year 7 particle-model starter node (states of matter) (#5)` |
| working tree | clean apart from untracked `docs/_drafts/` (out of scope for this review) |
| node engines | `>=18` |
| package manager | npm (lockfile `package-lock.json`) |
| review prepared at | 2026-05-09 (project local date) |

## State of the build

Lumen Academy is a single-learner UK KS3 tutoring web app, mid-build. As of `0fbef97` the production deploy on Railway is serving Phases 0 through 9 plus the Phase 10 content authoring slices through `10e.10` (renderers for sketch, drag-drop-builder, and data-extraction question types). MongoDB Atlas holds 17 skill nodes across 15 zones spanning all four subjects, with zone-aware swim-lane skill-tree layout (`d16fb00`). The reward loop (SM-2 mastery, XP, Insight, Spark, badges, daily challenge, daily quest, boss arenas) is wired end-to-end and exercised by roughly 400 vitest specs, all passing on this commit. Auth.js v5 with database sessions and parental verification is live; magic links log to the server console only because no SMTP is wired up at this stage. The Atlas IP allowlist is `0.0.0.0/0` (a known Phase 12 followup) and the build emits a Next.js standalone bundle for Railway.

This is the snapshot Codex should pin its review to. If the working tree changes during the review, do not chase it. The SHA above is authoritative.

## Reproduction

```sh
git fetch origin
git checkout 0fbef97e22257c36baa6d8d88e8ab33f364a7763
# read-only review, no install or run required
```
