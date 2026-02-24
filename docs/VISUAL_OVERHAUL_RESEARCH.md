# Visual Overhaul Research — "Duolingo for Running"

## Design direction
**Playful discipline**: game energy + athletic credibility.

Core principle:
- Keep delight in motion/mascot/progress feedback
- Keep trust in structure, typography, and race-specific language

## Component patterns to use
1. **Mission Board Hero**
   - Timeline from today to race day
   - Progress chips + milestone markers
2. **Quest Cards**
   - Daily run = quest card with XP reward
3. **Streak + XP Strip**
   - Persistent visual scoreline near CTA
4. **Race Milestone Track**
   - 4-6 stage visual from base to taper to race
5. **Comparison Block (future)**
   - Tortoise vs generic static plan
6. **Social Proof Cards**
   - Outcome-focused testimonials

## Asset sources (high quality)
- **Icons**: Lucide (already in use)
- **Illustrations**: Storyset / Blush / unDraw (customizable, lightweight)
- **Motion graphics**: LottieFiles (for celebration moments only)
- **Textures/noise**: Hero Patterns + subtle SVG grain overlay
- **Charts/mini-viz**: Recharts or lightweight SVG custom components

## Motion guidelines
- Primary interactions: 120–180ms
- Enter animations: 220–320ms ease-out
- Use springs only for playful moments (mascot, badges)
- Avoid heavy motion on every element; focus on high-impact zones

## Copy/UX principles from Duolingo-style systems
- Emphasize streak/consistency over perfection
- Show progress visually before explaining it
- Keep microcopy short, energetic, and action-led
- Reward language: "Unlocked", "Quest complete", "Keep streak alive"

## Next visual sprint backlog
1. Build real Race Timeline component with dynamic markers
2. Add sticky mobile CTA bar
3. Add app screenshot carousel framed as in-app quest screens
4. Add achievements strip (XP, streak, finish-rate)
5. Add comparison section vs static plans
6. Add mascot state system per section
