# Lumen Academy

UK KS3 learning web app for a Year 7 grammar school student. Desktop primary.

## Read these first
- docs/00-build-prompt.md is the source of truth for product scope
- docs/01-tutor-system-prompt.md is the AI tutor system prompt, do not modify without asking
- docs/02-content-schema.md defines the data shape for skill nodes

## Hard rules
- Stack: Next.js 14 App Router, TypeScript, Tailwind, shadcn/ui, MongoDB Atlas
- UK English everywhere (colour, metre, learnt, maths)
- No em dashes in any user facing copy or in code comments
- Minimise hyphens, prefer restructured sentences
- Metric units, GBP currency, UK examples only
- No third party behavioural trackers, no ad SDKs, no children's data sent to non essential services
- Desktop is the primary surface, 1280px and up, mouse and keyboard input assumed
- All user facing strings must work with the dyslexia friendly font and high contrast modes

## Code conventions
- TypeScript strict mode
- Server components by default, "use client" only when needed
- Tailwind utility classes, no inline styles
- One component per file, named exports
- Tests with Vitest, colocated as `*.test.ts`
- No console.log in committed code, use a proper logger

## Workflow
- Before writing code, restate the goal in your own words and propose a file by file plan
- Wait for approval before generating more than one file at a time on a new feature
- After any change, run typecheck and tests, fix what breaks
- Never invent curriculum content, always pull from docs/03-curriculum-map.md
- Never modify docs/01-tutor-system-prompt.md without explicit instruction

## What not to do
- Do not add features not in docs/00-build-prompt.md
- Do not add gamification mechanics that reward time spent rather than mastery
- Do not add notifications, push or otherwise, in v1
- Do not add social or peer features
- Do not introduce new dependencies without flagging the trade off