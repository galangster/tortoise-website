export const siteConfig = {
  name: 'Tortoise',
  description:
    'AI-native marathon training app that lets runners set race day and builds a personalized plan backwards from that goal.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://tortoise-website-opal.vercel.app',
}

export type SolutionPage = {
  slug: string
  title: string
  description: string
  h1: string
  intro: string
  bullets: string[]
  faqs: Array<{ question: string; answer: string }>
}

export const solutionPages: SolutionPage[] = [
  {
    slug: 'ai-marathon-training-plan',
    title: 'AI Marathon Training Plan App',
    description:
      'Build an AI-powered marathon training plan personalized to your schedule, current fitness, and race date.',
    h1: 'AI marathon training plan built around your race day',
    intro:
      'Set your race date, then Tortoise works backward to generate a plan that fits your pace, life schedule, and consistency level.',
    bullets: [
      'Race-day-first planning engine',
      'Adaptive weekly workouts based on progress',
      'Beginner to advanced marathon support',
    ],
    faqs: [
      {
        question: 'How is Tortoise different from a static marathon plan PDF?',
        answer:
          'Tortoise adapts your training as you progress instead of locking you into one fixed schedule.',
      },
      {
        question: 'Can I set a specific marathon race date?',
        answer: 'Yes. Tortoise is built around race-day-based planning from day one.',
      },
    ],
  },
  {
    slug: 'marathon-training-for-beginners',
    title: 'Marathon Training App for Beginners',
    description:
      'Beginner-friendly marathon training plans that guide you step by step from your current level to race day.',
    h1: 'Marathon training for beginners without the overwhelm',
    intro:
      'Tortoise helps first-time runners train confidently with clear daily runs, recovery guidance, and pace-aware progression.',
    bullets: [
      'Beginner-safe weekly mileage progression',
      'Guided daily runs and rest days',
      'Motivating, game-like training flow',
    ],
    faqs: [
      {
        question: 'Is Tortoise good for first-time marathon runners?',
        answer:
          'Yes. Tortoise is designed to make marathon training approachable for beginners.',
      },
      {
        question: 'Do I need prior race experience?',
        answer: 'No. Plans are personalized based on your starting fitness.',
      },
    ],
  },
  {
    slug: 'half-marathon-training-plan-app',
    title: 'Half Marathon Training Plan App',
    description:
      'Train smarter for your half marathon with an AI plan that adjusts to your pace and race timeline.',
    h1: 'Half marathon training plan that adapts as you improve',
    intro:
      'Tortoise builds a practical half-marathon plan from your race date backward, so each week has purpose.',
    bullets: [
      'Race-specific half marathon structure',
      'Pace-aware and schedule-aware planning',
      'Designed for consistency and confidence',
    ],
    faqs: [
      {
        question: 'Can I use Tortoise for half marathon prep?',
        answer: 'Yes. Tortoise supports half marathon goals with personalized schedules.',
      },
      {
        question: 'Will the plan adapt if I miss workouts?',
        answer: 'Yes. The app can adjust your plan as your training reality changes.',
      },
    ],
  },
  {
    slug: 'running-plan-by-race-date',
    title: 'Running Plan by Race Date',
    description:
      'Set your race date and get a custom running plan that works backward from your goal event.',
    h1: 'Set race day. Get the exact plan to reach it.',
    intro:
      'Most apps start with generic blocks. Tortoise starts with your target race and engineers your progression backward from that date.',
    bullets: [
      'Goal-date-first training architecture',
      'Clear weekly milestones toward race day',
      'Personalized for your availability and level',
    ],
    faqs: [
      {
        question: 'What does race-day planning mean?',
        answer:
          'It means your workouts are sequenced backward from your event date for peak readiness.',
      },
      {
        question: 'Can I change my race date later?',
        answer: 'Yes. Tortoise can recalculate your training timeline.',
      },
    ],
  },
  {
    slug: 'adaptive-running-coach-app',
    title: 'Adaptive Running Coach App',
    description:
      'An adaptive AI running coach that updates your plan as your fitness, consistency, and goals evolve.',
    h1: 'Your adaptive running coach in your pocket',
    intro:
      'Tortoise behaves like a smart coach, updating recommendations as your training data changes.',
    bullets: [
      'Adaptive plan updates',
      'Personalized coaching logic',
      'Built for long-term consistency',
    ],
    faqs: [
      {
        question: 'Is this like having a personal running coach?',
        answer: 'Tortoise provides coach-like personalization and adaptive planning through AI.',
      },
      {
        question: 'Does it work for different race goals?',
        answer: 'Yes. Tortoise supports 5K, half marathon, and marathon style goals.',
      },
    ],
  },
  {
    slug: 'running-app-for-busy-people',
    title: 'Running App for Busy People',
    description:
      'A running plan app that fits work, family, and real-life schedules while still preparing you for race day.',
    h1: 'Running plans that fit real life, not ideal life',
    intro:
      'Tortoise is designed for people with packed calendars, helping you keep momentum without burnout.',
    bullets: [
      'Schedule-aware planning',
      'Time-efficient workouts',
      'Sustainable progression toward your race goal',
    ],
    faqs: [
      {
        question: 'Can I train with only a few run slots per week?',
        answer: 'Yes. Tortoise can build plans around limited availability.',
      },
      {
        question: 'Does missing a run ruin the plan?',
        answer: 'No. Tortoise helps you adjust and keep progressing.',
      },
    ],
  },
  {
    slug: 'gamified-running-app',
    title: 'Gamified Running App',
    description:
      'Stay consistent with gamified running progress, streaks, and motivation loops designed for race goals.',
    h1: 'A gamified running app that keeps you coming back',
    intro:
      'Tortoise combines serious training outcomes with game-like engagement so consistency feels rewarding.',
    bullets: [
      'Streak and progress mechanics',
      'Motivational loops without sacrificing training quality',
      'Built for long-term adherence',
    ],
    faqs: [
      {
        question: 'Is Tortoise more fun than traditional training apps?',
        answer: 'Yes. Gamification is core to the product experience.',
      },
      {
        question: 'Will gamification still support serious race goals?',
        answer: 'Yes. Training structure remains race-focused and performance-oriented.',
      },
    ],
  },
  {
    slug: '5k-to-marathon-training-app',
    title: '5K to Marathon Training App',
    description:
      'Progress from 5K fitness toward marathon readiness with an AI-guided, race-date-based training system.',
    h1: 'Go from 5K base to marathon finish line',
    intro:
      'Whether you are rebuilding fitness or leveling up, Tortoise maps your path from your current base to your race goal.',
    bullets: [
      'Progressive distance and endurance development',
      'Personalized intensity and volume',
      'Milestones mapped to your timeline',
    ],
    faqs: [
      {
        question: 'Can Tortoise help me progress beyond 5K?',
        answer: 'Yes. Plans can evolve from shorter-distance fitness to longer race prep.',
      },
      {
        question: 'How quickly can I progress to marathon training?',
        answer: 'It depends on your baseline and race timeline; Tortoise personalizes this progression.',
      },
    ],
  },
]

export const solutionBySlug = Object.fromEntries(
  solutionPages.map((page) => [page.slug, page]),
)
