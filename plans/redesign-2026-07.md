# Tortoise Website Redesign — 2026-07

**Goal:** Turn tortoiseapp.co from a generic, AI-slop waitlist page into the best possible pre-launch
site for Tortoise — honest, distinctive, and grounded in the *real* product and brand.

Register: **Brand** (marketing landing / waitlist). Distinctiveness is the bar (Impeccable v3.5 SOP).
Primary user action: **join the waitlist** (email capture; existing `@vercel/kv` API preserved).

---

## Why the current site fails

- **AI-slop components**: AuroraBackground, TextScramble, MagneticButton, SpotlightCard, GradientBorder,
  Confetti, AnimatedCounter, StaggeredText — every 2026 generated-UI tell in the SOP's ban list.
- **Fabricated social proof**: "10K+ Active Runners / 89% Finish Rate / 4.9 App Store." The app has
  never publicly launched (TestFlight-only) → zero App Store ratings. These are invented. **Delete.**
- **Wrong pricing**: shows $6/mo · $30/yr. Real app prices are **$7.99/mo · $49.99/yr** (free trial).
- **Emoji mascot** (🐢 in a colored circle) instead of the real illustrated tortoise character.
- **Light-only**, ignoring the app's signature **dark navy (#131A2B / #0D1117)** identity.
- Gradient text, Nunito loaded via render-blocking CSS `@import`, no real product shown.

## Design direction (shape brief)

- **Theme scene:** a beginner runner, phone in hand at 6am in the blue pre-dawn dark before their first
  long run — nervous, but pulled forward by a calm voice saying *"just today's run, you've got this."*
  → forces **dark**. The navy is the pre-dawn sky; the green is the trail / go; the tortoise is the companion.
- **Color strategy:** Committed, dark-first. Base navy `#0D1117`→`#131A2B`; brand green `#58CC02`
  (CTA fill uses AA-safe `#3B8A00` under white); XP gold `#FFC800` for achievement accents; sky/teal/
  violet used sparingly for feature tint. Earned (it's the app's real skin), not a fintech-navy recipe.
- **Anchor references (not adjectives):** (1) pre-dawn sky before a morning run — deep navy easing to
  the first warm light at the horizon (hero backdrop is a *sky*, not a decorative aurora); (2) a trail
  finish-line arch / race bib — real running texture; (3) the app's own screens rebuilt faithfully in
  CSS with the real tokens (today's-run card, streak ring, league podium) — show the product, not
  abstract cards. The illustrated tortoise (with moods) is the charm anchor — earthy/steady, not candy.
- **Inverse test pass:** must not reduce to "a running app with a hero, feature grid, pricing, FAQ."
  Differentiators: dawn-sky narrative, the tortoise as a recurring character (Waving→Determined→
  Trophy→Resting→FinishLine across sections), real app UI shown, honest pre-launch voice.
- **Aesthetic-lane dodge:** not a Duolingo candy clone (manic green + confetti). Keep the pressable
  bottom-border button + mascot charm (both match the app), but ground everything in trail-dawn dark +
  real marathon seriousness + honest copy. The tortoise is calm and steady.
- **Anti-references (must NOT do):** hustle "NO EXCUSES," Strava elite comparison, Garmin data overload,
  corporate-blue SaaS, and every slop component/gradient-text/fake-stat listed above.
- **Voice:** playful, steady, smart. Real app lines: "Slow and steady wins the race,"
  "Consistency beats intensity, every time," "Train smarter. Run stronger." No buzzwords, no em-dash
  cadence, no "Not X. Y." punchlines.

## Information architecture (grounded in real features)

1. **Nav** — tortoise mark + wordmark; How it works / Features / Pricing / FAQ; "Join waitlist" CTA.
   Sticky, subtle solidify-on-scroll (not glass).
2. **Hero** — dawn navy. Headline on the core loop: *"Train for your first marathon. One run at a time."*
   Subhead: adaptive AI coaching that fits your real life; consistency over intensity. Waitlist form.
   Honest chip: "Launching Spring 2026 · TestFlight beta" + real "N of 100 early spots." Tortoise
   (waving/determined). A faithful "today's run" app card as the visual (no fake phone screenshot).
3. **Core loop — "Know exactly what to run today."** Show-don't-tell on the adaptive plan (adjusts to
   missed days, energy, recovery). Faithful UI card + tortoise analyzing.
4. **Features** — varied (bento / alternating), NOT a 6-identical-card grid: Adaptive AI plan;
   **Effort-fair scoring** (headline differentiator — "a 12-min mile counts as much as a 7-min mile");
   Weekly leagues (real Bronze→Elite badge PNGs, promotion/relegation); Streaks & XP without the guilt;
   Knowledge hub; Apple Watch + Live Activity; Rest-day respect ("CHILL DAY," not shame).
5. **How it works** — Tell us your goal → Get your adaptive plan → Run today's session (live coaching) →
   Keep the streak, climb the league.
6. **Pricing** — Free $0 vs **Pro $7.99/mo or $49.99/yr (~$4.17/mo, Best value)**, free trial. Honest
   unlock list. Pressable buttons → waitlist.
7. **FAQ** — when does it launch (Spring 2026), is there a free plan, do I need to be a runner already
   (no — built for beginners), Apple Watch, how effort scoring works, Android (iOS first).
8. **Final CTA** — dawn band, tortoise finish-line/trophy, "Be first in line," waitlist form.
9. **Footer** — Privacy / Terms (existing pages), waitlist, "Made for the back of the pack,"
   © The Creative Company.
10. **Sticky mobile CTA** — restyled, tasteful.

## Design system

- **Type:** Nunito via `next/font/google` (self-hosted, no render-block) — web proxy for the app's SF Rounded.
- **Tokens (tailwind):** keep existing `tortoise.*` palette; ADD dark surfaces — `ink.900 #0D1117`,
  `ink.850 #131A2B`, `ink.800 #1A1A2E`, `ink.750 #1C2333`, `ink.700 #232B3E`, `ink.650 #2A3347`.
  Text on navy: off-white `#F2F4F8` primary, `#AEB6C6` secondary.
- **Buttons:** keep the pressable bottom-border pattern (matches app); CTA green fill `#3B8A00` for AA.
- **Motion:** framer-motion `whileInView` fade/slide, 150–250ms; gentle mascot float; `prefers-reduced-
  motion` fully honored. One small tasteful mascot swap→celebrating on waitlist success. NO scramble/
  magnetic/aurora/confetti-cannon.
- **Imagery:** real mascot PNGs (`public/mascot/*.png`) + league badges (`public/badges/*.png`) via
  `next/image` with width/height (no CLS). Faithful app-UI cards built in JSX with real tokens.

## Tech / perf / a11y

- Dark-first; verify **WCAG AA** contrast on every text/bg pair.
- Semantic HTML, alt text on every mascot/badge, visible focus states, form aria/labels.
- `next/image` sized; Nunito subset via `next/font`; target **Lighthouse ≥95** (perf/a11y/best/SEO).
- Metadata + OpenGraph (+ app-icon favicon). Kill `.gradient-text`.

## AASA (unblocks Task 033 invite deep-links — website half only)

- Ship `public/.well-known/apple-app-site-association` (JSON) for appID
  `2M8UE59WH7.app.tortoise-ai-marathon-coach`, paths `/i/*`, `/invite/*`. Force `Content-Type:
  application/json` via `next.config.mjs` headers().
- **App-side still required (Nick / plan 033):** add `com.apple.developer.associated-domains`
  (`applinks:tortoiseapp.co`) entitlement + construct `https://tortoiseapp.co/i/<code>` invite URLs.
  The website AASA does nothing until the app opts in. Confirm the path pattern before app-side lands.

## Build order

1. Assets copied → `public/mascot`, `public/badges`, `public/app-icon.png` (done).
2. `tailwind.config.ts` (dark surfaces) · `globals.css` (dark base, kill gradient-text, dawn utils) ·
   `layout.tsx` (next/font Nunito, dark bg, metadata/OG) · `next.config.mjs` (AASA headers + image).
3. Rebuild components: Navigation, Hero, AppCard (new), Features, HowItWorks, Pricing, FAQ, CTABanner,
   Footer, StickyMobileCTA, TortoiseMascot (image), WaitlistForm (restyle, drop MagneticButton/Confetti).
4. Delete slop: AuroraBackground, TextScramble, MagneticButton, SpotlightCard, GradientBorder, Confetti,
   AnimatedCounter, StaggeredText.
5. `next build` + `tsc` clean.
6. Lean adversarial critique workflow (Fable/Sonnet tier): anti-slop, brand-fidelity, conversion/a11y.
   Fix confirmed findings.
7. Deploy Vercel **preview** → visual verify (screenshots, states, Lighthouse) → promote **production**.

## Preserve

- `src/app/api/waitlist/route.ts` (KV capture) · `terms/`, `privacy/` pages · `tortoise.*` palette ·
  the pressable-button idiom · Spring-2026 waitlist framing (honest; keep).
