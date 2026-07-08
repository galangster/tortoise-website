# Plan 001: Website security + repo hygiene — enumeration oracle, Next.js bump, untracked artifacts, env docs, tests

> **Executor instructions**: Follow step by step; verify each step; honor STOP conditions;
> update your row in `plans/README.md` when done (unless your reviewer maintains the index).
>
> **Drift check (run first)**: `git rev-parse --short HEAD` → expect `f43eb4b`. Different HEAD = STOP (this repo has known origin divergence; do not pull/rebase yourself).

## Status

- **Priority**: P1 · **Effort**: S-M · **Risk**: LOW (Step 3 MED: framework bump)
- **Depends on**: none
- **Category**: security + dx
- **Planned at**: commit `f43eb4b`, 2026-06-11

## Why this matters

Findings WEB-01/02/05/06/09/10 (orchestrator-verified). The deployed-era waitlist API on this repo is an **email-enumeration oracle**: it returns `alreadyJoined: true` distinctly, and lacks the honeypot/Turnstile/rate-limiting its sibling repo (`~/clawd/work/tortoise-waitlist`) already ships. Next.js is pinned at **14.2.0 — 35 patch versions and 25+ security advisories behind** the sibling's 14.2.35 (cache poisoning, request smuggling, DoS, XSS, SSRF classes). `.next/` and `out/` build artifacts are **tracked in git** despite .gitignore intent. There is no `.env.example` (the sibling's documents identical env requirements) and no test script at all. Separately, local main has diverged from origin (ahead 3 / behind 7 — origin holds newer design work: mascots, SF Rounded, SEO foundation) — this plan PREPARES that resolution but does not perform it (Nick decision).

## Current state (verified at f43eb4b)

- `src/app/api/waitlist/route.ts:20-29` (orchestrator-read):
```ts
const alreadyExists = await kv.sismember(KV_SET_KEY, trimmed)
if (alreadyExists) {
  const count = await kv.scard(KV_SET_KEY)
  return NextResponse.json({ position: null, spotsLeft: ..., gotEarlySpot: false, alreadyJoined: true })
}
await kv.sadd(KV_SET_KEY, trimmed)
```
No Turnstile, no honeypot, no rate limit, distinct already-joined response. Reference implementation with all four fixes: `~/clawd/work/tortoise-waitlist/src/app/api/waitlist/route.ts` + `src/lib/waitlist-security.ts` + its `.env.example` + its `route.test.ts`.
- `package.json:12`: `"next": "14.2.0"`; scripts have no `test`.
- `git ls-files | grep -c "^.next/\|^out/"` → nonzero (tracked artifacts); `.gitignore` lists them but they were committed before ignoring.
- No `.env.example`, no `README.md`.

## Commands

| Purpose | Command | Expected |
|---|---|---|
| Lint | `npm run lint` | exit 0 |
| Build | `npm run build` | exit 0 |
| Tests (after Step 5) | `npm test` | all pass |

## Scope

**In scope**: `src/app/api/waitlist/route.ts`, `src/lib/` (ported security helper), `package.json` (next bump, vitest, test script), `.gitignore` + `git rm --cached` of artifacts, `.env.example`, `README.md` (minimal), new test file, a `DIVERGENCE.md` note (Step 6).

**Out of scope**: pulling/rebasing/merging origin (Nick-gated decision); visual components; the sibling waitlist repo; deploys; KV data.

## Git workflow

Branch `audit/e2e-001-website-hygiene` off `f43eb4b`; conventional commits per step; no push.

## Steps

### Step 1: Untrack build artifacts
`git rm -r --cached .next out` (keep on disk), confirm `.gitignore` covers both, commit.

**Verify**: `git ls-files | grep -E "^\.next/|^out/" | wc -l` → 0.

### Step 2: Port the hardened waitlist API
Copy the security model from the sibling repo: same-shape response whether or not the email already exists (always `sadd`, never reveal membership — mirror `tortoise-waitlist`'s response contract exactly), honeypot field check, Turnstile verification, and its rate limiting. Port `waitlist-security.ts` (adapt imports). Keep this repo's response fields the frontend actually reads (`grep -rn "alreadyJoined\|gotEarlySpot\|spotsLeft" src/components/` first — update the form handling if it branches on `alreadyJoined`, matching the sibling's UX of a uniform success message).

**Verify**: `grep -n "alreadyJoined" src/app/api/waitlist/route.ts` → no distinct-membership response remains; build green.

### Step 3: Next.js security bump
`package.json` → `"next": "14.2.35"` (match sibling exactly), `npm install`, build + lint, and smoke the dev render of the home page (`npm run build` is the gate; note any breaking warnings).

**Verify**: `npm run lint` + `npm run build` exit 0; `npm ls next` shows 14.2.35.

### Step 4: Env + docs
Copy `.env.example` from the sibling (requirements identical: Turnstile + KV). Minimal `README.md`: purpose (pre-launch waitlist), setup (`npm install && npm run dev`, env vars), commands, relationship + divergence note pointing to the sibling repo.

### Step 5: Tests
Add vitest (devDependency + `"test": "vitest run"` script, config mirroring the sibling's `vitest.config`). Port/adapt the sibling's `route.test.ts`: valid signup, malformed email, missing email, honeypot trips, membership non-disclosure (same response shape for repeat email), KV-failure path.

**Verify**: `npm test` all pass.

### Step 6: Divergence resolution prep (no action)
Write `DIVERGENCE.md`: `git log --oneline origin/main..HEAD` and `HEAD..origin/main` outputs, files conflicting between the two lines (`git diff --name-only HEAD origin/main | head -30`), and the two options (A: merge origin design work into local + keep hardening; B: rebase local onto origin) with a recommendation based on what you see. Nick decides.

**Verify**: file exists with both commit lists + a recommendation.

## Done criteria (ALL)

- [ ] lint/build/test green on Next 14.2.35
- [ ] No tracked `.next`/`out`; `.env.example` + README exist
- [ ] API: membership non-disclosure + honeypot + Turnstile + rate limit (parity with sibling), frontend updated accordingly
- [ ] DIVERGENCE.md written; origin untouched
- [ ] Only in-scope files modified; README row updated

## STOP conditions

- Next 14.2.35 breaks the build/render beyond trivial fixes (hero animation APIs) — report; do not downgrade the security model to save the bump.
- The frontend critically depends on `alreadyJoined` UX in a way the uniform response can't express — report the UX decision instead of leaking membership.
- Any temptation to resolve the origin divergence — that's Nick's call.

## Maintenance notes

- If Nick chooses repo consolidation (deferred direction decision), this hardening ports with it — the work isn't wasted; the API model is the durable piece.
- Reviewer: verify the response-shape parity claim against the sibling file directly, and that KV failure still fails closed on POST.
