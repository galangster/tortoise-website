# Tortoise Website - Product Requirements Document
## Marathon Training App Landing Page

---

## 1. Project Overview

### 1.1 Purpose
Create a high-converting, visually stunning landing page for the Tortoise marathon training app that communicates its unique value proposition: "Duolingo for Running."

### 1.2 Goals
- **Primary:** Drive app downloads from the landing page
- **Secondary:** Communicate brand personality (playful, encouraging, beginner-friendly)
- **Tertiary:** Build trust through transparency (privacy policy, clear pricing)

### 1.3 Success Criteria
- Lighthouse performance score 90+
- Conversion rate 15%+ (CTA clicks)
- All animations run at 60fps
- WCAG 2.1 AA accessibility compliance

---

## 2. Information Architecture

### 2.1 Page Structure

```
Landing Page
├── Navigation (fixed, sticky)
├── Hero Section
├── Social Proof Bar
├── Features Grid
├── How It Works (Timeline)
├── Pricing Section
├── FAQ Section
├── CTA Banner
└── Footer

Legal Pages
├── /privacy (Privacy Policy)
├── /terms (Terms of Service)
└── /cookies (Cookie Policy - optional)
```

### 2.2 Navigation Flow
- Single-page scroll with anchor links
- Smooth scroll behavior
- Mobile hamburger menu with full-screen overlay

---

## 3. Detailed Section Specifications

### 3.1 Navigation

**Layout:** Fixed top, full-width, blur backdrop  
**Height:** 72px desktop, 64px mobile  
**Z-index:** 50

**Components:**
- Logo (left): Tortoise icon + wordmark
- Nav links (center): Features, How it Works, Pricing, FAQ
- CTA button (right): "Get Started"
- Mobile: Hamburger menu icon

**Interactions:**
- Scroll: Background opacity increases from 0.8 to 1
- Active link: Underline animation on hover
- Mobile menu: Slide-in from right with backdrop blur

---

### 3.2 Hero Section

**Layout:** Two-column (text left, mascot right)  
**Height:** 100vh minimum  
**Background:** Subtle gradient mesh (green/orange)

**Left Column (Content):**
- Badge: "Duolingo for Running" with star icon
- Headline: "Marathon Training That Feels Like a Game"
  - Line 1: "Marathon Training" (black)
  - Line 2: "That Feels Like a Game" (gradient text)
- Subheadline: "The first running app that makes you addicted to becoming a runner. AI-powered coaching meets Duolingo-style gamification."
- CTAs: 
  - Primary: "Start Your Journey" (green button, play icon)
  - Secondary: "See How It Works" (outline button)
- Stats row: 10K+ Active Runners | 89% Finish Rate | 4.9 App Store

**Right Column (Visual):**
- Large Tortoise mascot (240px) in celebrating mood
- Floating elements:
  - "+50 XP!" badge (top-right, bouncing)
  - "7 Day Streak!" badge (bottom-left, with flame icon)
  - Sparkle effects around mascot

**Animations:**
- Text: Staggered fade-in (0.1s delay between elements)
- Mascot: Float animation (3s infinite)
- Badges: Independent bounce animations
- Background: Subtle gradient shift

**Responsive:**
- Desktop: Side-by-side
- Mobile: Stacked, mascot above text

---

### 3.3 Social Proof Bar

**Layout:** Full-width band  
**Background:** Light gray (#F7F7F7)  
**Height:** 80px

**Content:**
- Logos: Featured in [TechCrunch], [Product Hunt], [App Store Featured]
- Social proof: "Join 10,000+ runners"

---

### 3.4 Features Section

**Layout:** 3-column grid (2-column tablet, 1-column mobile)  
**Background:** White  
**Padding:** 120px vertical

**Header:**
- Eyebrow: "Why Tortoise?"
- Headline: "Everything You Need to Go From Couch to Marathon"
- Subheadline: "We combined running science with game design to create the most effective (and fun) training experience."

**Feature Cards (6 total):**

1. **Adaptive AI Training**
   - Icon: Target/bullseye
   - Description: "Your plan evolves with you. Missed a day? We adjust. Feeling strong? We push."
   - Mascot: Thinking
   - Color: Primary green

2. **Duolingo-Style Gamification**
   - Icon: Zap/lightning
   - Description: "Streaks, XP, leagues, and daily quests. Every run feels rewarding."
   - Mascot: Celebrating
   - Color: XP gold

3. **Running Knowledge Hub**
   - Icon: Book open
   - Description: "Learn form, nutrition, pacing, and mental toughness through bite-sized lessons."
   - Mascot: Happy
   - Color: Sky blue

4. **Effort-Normalized Social**
   - Icon: Users
   - Description: "Compete fairly with runners at your level. A 12-min mile effort = 7-min mile effort."
   - Mascot: Cheering
   - Color: Purple

5. **Rest Day Engagement**
   - Icon: Moon
   - Description: "Most apps abandon you on rest days. We keep you learning and stretching."
   - Mascot: Resting
   - Color: Trail green

6. **Marathon Journey Map**
   - Icon: Trophy
   - Description: "Visualize your path from couch to marathon. Unlock milestones and celebrate progress."
   - Mascot: Celebrating
   - Color: Shell orange

**Card Design:**
- White background
- Rounded corners (24px)
- Shadow on hover
- Icon in colored circle
- Title (bold)
- Description
- Mascot (bottom-right, 60px)

**Interactions:**
- Cards fade in on scroll (staggered 0.1s)
- Hover: Scale 1.02, shadow increases
- Icon: Slight bounce on hover

---

### 3.5 How It Works Section

**Layout:** Zigzag timeline (alternating left/right)  
**Background:** Light gray  
**Padding:** 120px vertical

**Header:**
- Eyebrow: "How It Works"
- Headline: "From Your First Step to the Finish Line"
- Subheadline: "We guide you every mile of the journey."

**Steps (4 total):**

1. **Set Your Goal**
   - Step number: 01
   - Mascot: Thinking
   - Description: "Tell us your experience level and target race. Couch to 5K? Half marathon? Full marathon? We've got you."

2. **Get Your Plan**
   - Step number: 02
   - Mascot: Happy
   - Description: "Our AI creates a personalized training plan that adapts to your life, not the other way around."

3. **Run & Learn**
   - Step number: 03
   - Mascot: Running
   - Description: "Complete workouts, earn XP, and unlock bite-sized running knowledge. Every day counts."

4. **Level Up**
   - Step number: 04
   - Mascot: Celebrating
   - Description: "Join leagues, compete with friends, and celebrate milestones. Slow and steady wins the race."

**Design:**
- Alternating layout (image left/right)
- Step number large (gradient text)
- Mascot bubble with message
- Connecting line between steps (animated on scroll)

**Animations:**
- Steps fade in as user scrolls
- Mascot bounces when step enters viewport
- Connecting line draws progressively

---

### 3.6 Pricing Section

**Layout:** 3-column cards (center card featured/elevated)  
**Background:** White  
**Padding:** 120px vertical

**Header:**
- Eyebrow: "Simple Pricing"
- Headline: "Start Free. Upgrade When You're Ready."
- Subheadline: "No hidden fees. Cancel anytime."

**Pricing Cards:**

1. **Free**
   - Price: $0/month
   - Description: "Start your journey"
   - Features: Basic training plans, streak tracking, knowledge hub, community leagues
   - CTA: "Get Started"
   - Style: Standard card

2. **Tortoise Pro** (Featured)
   - Price: $9.99/month
   - Badge: "Most Popular"
   - Description: "Everything you need to finish"
   - Features: AI adaptive training, advanced analytics, all knowledge modules, friend quests, streak freezes, custom workouts
   - CTA: "Start Free Trial"
   - Style: Elevated card, border highlight, scale 1.05

3. **Elite**
   - Price: $19.99/month
   - Description: "For serious runners"
   - Features: Everything in Pro, 1-on-1 coach chat, race strategy, form analysis, nutrition plans
   - CTA: "Go Elite"
   - Style: Standard card

**Card Design:**
- White background
- Rounded corners (24px)
- Shadow (larger for featured)
- Checkmark icons for features
- Price large and bold
- Period small and gray

**Interactions:**
- Cards fade in on scroll
- Featured card has subtle glow animation
- Hover: Slight lift effect

---

### 3.7 FAQ Section

**Layout:** Accordion-style (2-column on desktop)  
**Background:** Light gray  
**Padding:** 120px vertical

**Header:**
- Eyebrow: "FAQ"
- Headline: "Questions? We've Got Answers."

**Questions (8 total):**

1. Is Tortoise good for complete beginners?
2. How is this different from other running apps?
3. What if I miss a workout?
4. Do I need an Apple Watch?
5. How does the AI adaptation work?
6. Can I use this for non-marathon goals?
7. What happens after I finish my race?
8. How do I cancel my subscription?

**Design:**
- Question in bold
- Answer in regular text
- Plus/minus icon for expand/collapse
- Smooth height animation

---

### 3.8 CTA Banner

**Layout:** Full-width, centered content  
**Background:** Gradient (green to orange)  
**Height:** 400px

**Content:**
- Headline: "Ready to Become a Runner?"
- Subheadline: "Join 10,000+ people who discovered they could run a marathon."
- CTA: "Download the App" (large white button)
- App Store + Google Play badges

**Mascot:** Large celebrating tortoise (200px)

---

### 3.9 Footer

**Layout:** Multi-column links + bottom bar  
**Background:** Dark (#1C2333)  
**Padding:** 80px top, 40px bottom

**Columns:**
- Brand (logo, tagline, social links)
- Product (Features, How it Works, Pricing, Download)
- Company (About, Blog, Careers, Press)
- Legal (Privacy, Terms, Cookies)
- Support (Help Center, Contact, Community)

**Bottom Bar:**
- Copyright
- "Made with 🐢 for runners everywhere"

---

## 4. Visual Design System

### 4.1 Colors

**Primary:**
- Primary Green: #58CC02
- Primary Dark: #46A302
- Primary Light: #7ED839

**Secondary:**
- Shell Orange: #FF9600
- Trail Green: #2EC27E
- Sky Blue: #1CB0F6
- XP Gold: #FFC800
- Streak Red: #FF4B4B
- Purple: #CE82FF

**Neutrals:**
- Background Light: #FFFFFF
- Surface Light: #F7F7F7
- Card Light: #FFFFFF
- Text Primary: #1F1F1F
- Text Secondary: #6B7280
- Border: #E5E7EB

**Dark Mode (optional):**
- Background Dark: #131A2B
- Surface Dark: #1C2333
- Card Dark: #232B3E

### 4.2 Typography

**Font Family:** Nunito (Google Fonts)
- Weights: 400, 600, 700, 800, 900

**Scale:**
- Hero: 72px/80px (desktop), 48px/56px (mobile)
- H1: 48px/56px
- H2: 36px/44px
- H3: 24px/32px
- Body: 18px/28px
- Small: 14px/20px

**Hierarchy:**
- Headlines: Extra bold (900)
- Subheadlines: Bold (700)
- Body: Regular (400) or Semi-bold (600)
- Captions: Regular (400)

### 4.3 Spacing

**Section Padding:**
- Desktop: 120px vertical
- Tablet: 80px vertical
- Mobile: 60px vertical

**Container:**
- Max-width: 1280px
- Padding: 16px (mobile), 24px (tablet), 32px (desktop)

**Component Spacing:**
- Card padding: 32px
- Grid gap: 32px
- Stack gap: 16px (tight), 24px (normal), 32px (loose)

### 4.4 Border Radius

- Buttons: 16px
- Cards: 24px
- Inputs: 12px
- Pills/Badges: 999px (full)
- Mascot circles: 50%

### 4.5 Shadows

- Card: 0 4px 6px -1px rgba(0,0,0,0.1)
- Card Hover: 0 20px 25px -5px rgba(0,0,0,0.1)
- Button: 0 4px 0 rgba(0,0,0,0.1) (for depth)
- Mascot Glow: 0 0 40px rgba(88,204,2,0.3)

---

## 5. Animation Specifications

### 5.1 Global Animations

**Page Load:**
- Duration: 600ms
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Stagger: 100ms between elements

**Smooth Scroll:**
- Behavior: smooth
- Duration: ~500ms

### 5.2 Component Animations

**Mascot Float:**
```css
animation: float 3s ease-in-out infinite;
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

**Mascot Breathe:**
```css
animation: breathe 2.5s ease-in-out infinite;
@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}
```

**Button Press:**
- Active state: translateY(2px), scale(0.98)
- Duration: 150ms
- Easing: ease-out

**Card Hover:**
- Transform: translateY(-4px), scale(1.02)
- Shadow: increase spread
- Duration: 300ms
- Easing: cubic-bezier(0.22, 1, 0.36, 1)

**Scroll Reveal:**
- Initial: opacity 0, translateY 30px
- Final: opacity 1, translateY 0
- Duration: 600ms
- Threshold: 0.2 (trigger when 20% visible)

**Progress Line Draw:**
- Stroke-dasharray animation
- Duration: 1000ms
- Easing: ease-in-out

### 5.3 Performance Requirements

- Use `transform` and `opacity` only for animations
- Apply `will-change` sparingly
- Support `prefers-reduced-motion`
- Target 60fps on all animations

---

## 6. Interaction Specifications

### 6.1 Buttons

**Primary Button:**
- Background: Primary green
- Text: White, bold
- Border: None
- Shadow: 0 4px 0 Primary Dark
- Hover: Brightness increase, shadow grows
- Active: translateY(4px), shadow 0 0 0

**Secondary Button:**
- Background: White
- Text: Primary green
- Border: 2px solid Primary green
- Hover: Background light green

**Icon Button:**
- Size: 40px × 40px
- Border-radius: 50%
- Background: Transparent or light gray

### 6.2 Cards

- Cursor: pointer
- Hover: Lift + shadow increase
- Focus: Ring outline (accessibility)

### 6.3 Links

- Default: Text secondary color
- Hover: Primary green + underline
- Transition: 150ms

### 6.4 Form Inputs

- Border: 2px solid gray-200
- Focus: Border primary green + shadow
- Border-radius: 12px
- Padding: 16px

---

## 7. Responsive Breakpoints

### 7.1 Breakpoints

- **Mobile:** 0 - 639px
- **Tablet:** 640px - 1023px
- **Desktop:** 1024px - 1279px
- **Large Desktop:** 1280px+

### 7.2 Key Changes

**Mobile:**
- Single column layouts
- Stacked hero (mascot above text)
- Hamburger navigation
- Reduced section padding (60px)
- Smaller typography scale

**Tablet:**
- 2-column grids
- Side-by-side hero (smaller)
- Full navigation (if space permits)

**Desktop:**
- Full layouts as designed
- 3-column feature grid
- All animations enabled

---

## 8. Technical Stack

### 8.1 Framework
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**

### 8.2 Styling
- **Tailwind CSS** (utility-first)
- **CSS Variables** for theming
- **Framer Motion** for animations

### 8.3 Components
- Custom components (no UI library)
- Lucide React for icons

### 8.4 Performance
- Static export for fast hosting
- Optimized images (WebP)
- Lazy loading for below-fold content
- Preload critical fonts

### 8.5 SEO
- Meta tags for all pages
- Open Graph tags
- Structured data (JSON-LD)
- Sitemap.xml

---

## 9. Legal Page Requirements

### 9.1 Privacy Policy
- GDPR compliance
- HealthKit data disclosure
- Third-party service providers
- User rights (access, delete, export)
- Contact information

### 9.2 Terms of Service
- Subscription terms
- Refund policy
- Liability limitations
- Arbitration clause
- Termination conditions

### 9.3 Cookie Policy (optional)
- Types of cookies used
- Analytics and marketing
- How to opt-out

---

## 10. File Structure

```
tortoise-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   └── terms/
│   │       └── page.tsx
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTABanner.tsx
│   │   ├── Footer.tsx
│   │   └── TortoiseMascot.tsx
│   └── lib/
│       └── utils.ts
├── public/
│   └── (images, favicon)
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## 11. Acceptance Criteria

### 11.1 Functional
- [ ] All navigation links work
- [ ] Smooth scroll to sections
- [ ] Mobile menu toggles correctly
- [ ] FAQ accordion expands/collapses
- [ ] All CTAs link to app store (or placeholder)

### 11.2 Visual
- [ ] Matches design system exactly
- [ ] All animations work as specified
- [ ] Responsive at all breakpoints
- [ ] Mascot animations smooth (60fps)
- [ ] No layout shifts on load

### 11.3 Performance
- [ ] Lighthouse score 90+
- [ ] First Contentful Paint < 1.5s
- [ ] No render-blocking resources
- [ ] Images optimized

### 11.4 Accessibility
- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Reduced motion support

### 11.5 Legal
- [ ] Privacy Policy complete
- [ ] Terms of Service complete
- [ ] All legal pages linked in footer

---

*PRD Version 1.0 - February 20, 2024*
