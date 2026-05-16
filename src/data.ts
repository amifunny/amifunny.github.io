// Single source of truth for the portfolio. Mirrors the resume bullet-by-bullet.

export const profile = {
  name: 'Hemant Singh',
  handle: 'amifunny',
  role: 'Full-Stack Engineer · Tech Lead',
  location: 'Bengaluru, India',
  available: 'Open to opportunities',
  yoe: 3.5,
  email: 'hemantsingh.buenodev@gmail.com',
  phone: '+91 8619564020',
  socials: {
    github: 'https://github.com/amifunny',
    linkedin: 'https://linkedin.com/in/hemant-singh-sde',
    site: 'https://amifunny.github.io',
  },
  resume: '/resume.pdf',
  bio: [
    'Full-Stack Engineer with 3.5 years of experience building scalable, user-friendly SaaS products.',
    'Built WisdomCircle from the ground up, scaling from 1K to 130K users and $1.6M+ revenue.',
    'Shipped realtime chat, notifications, recommendations, AI recruiter assistants and subscription systems.',
  ],
  // Headline numbers used in the StatsWall section
  stats: [
    { value: '130K', label: 'users scaled from 1K to 130K' },
    { value: '3.5y', label: 'shipping product end-to-end' },
    { value: '$1.6M+', label: 'platform revenue delivered' },
    { value: '40%', label: 'release regressions cut with e2e tests' },
  ],
} as const;

// Each highlight is `**BoldPrefix:** rest of the sentence` so the Work component
// can render the prefix in bold. Stays 1:1 in sync with the resume bullets.
export type WorkItem = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  accent: 'zap' | 'hot' | 'electric' | 'mint';
};

export const work: WorkItem[] = [
  {
    company: 'WisdomCircle',
    role: 'Tech Lead',
    period: 'Nov 2024 / Now',
    blurb:
      'Leading product engineering and delivery for a senior-talent SaaS marketplace.',
    highlights: [
      '**AI Recruitment Assistant:** Designed and shipped WizAI to unify candidate search, profile comparison, outreach drafting and role matching in one interface, cutting shortlist time by 40%.',
      '**Recommendation Engine:** Engineered an OpenAI embedding pipeline with cosine similarity and top-K ranking on PostgreSQL; reduced spam applications by 10% and improved opportunity targeting by 25%.',
      '**Payment & Subscription Management:** Implemented end-to-end subscription and tier-upgrade flows using NestJS, Stripe and Prisma, increasing revenue by 10% and reducing drop rate by 20%.',
      '**Automation Testing:** Led project-wide Playwright automation for critical user journeys, cutting release regression bugs by 40%.',
      '**Speed Up Release Cycle:** Led sprint cycles across prioritization, code reviews and PR evaluations; streamlined Agile release flow to unlock weekly shipping.',
      '**Reduce Production Issues:** Supported infrastructure and on-call observability, resolving production failures by 80% and improving notification engagement by 20% via rich media.',
    ],
    stack: ['NestJS', 'Stripe', 'Prisma', 'PostgreSQL', 'OpenAI', 'Playwright', 'AWS'],
    accent: 'zap',
  },
  {
    company: 'WisdomCircle',
    role: 'Full-Stack Software Engineer',
    period: 'Dec 2022 / Nov 2024',
    blurb:
      'Built core user-facing and platform systems as the product scaled rapidly.',
    highlights: [
      '**Platform Scale & Revenue:** Implemented performance, growth and monetization optimizations to scale users from 1K to 130K and drive $1.6M revenue.',
      '**Realtime Chat:** Architected candidate-recruiter realtime chat on WebSocket gateway with Prisma, PostgreSQL and Redis, including edit/delete, read receipts, block and report flows.',
      '**Notification Center:** Built a centralized notification center using Node.js, Vue, Redis and sockets, integrating real-time and scheduled channels to lift engagement by 40%.',
      '**Social Community Platform:** Created interactive social commenting with replies, likes, edit, report and share, increasing platform usability by 50%.',
      '**Optimize Search:** Optimized user/job search with degree and college listings, highlighted results, quick toggles and query-based implicit filters via REST APIs.',
      '**TypeScript Migration:** Migrated frontend and backend to strict TypeScript and modernized legacy Vue 2 modules, resolving 60% of recurring application errors.',
      '**Cron Jobs & Weekly Digest:** Built scheduled daily and weekly digest jobs for unread threads and personalized opportunity summaries to improve re-engagement.',
      '**Video Recording & Streaming:** Implemented cross-browser video recording and uploads with Cloudflare Stream, Next.js and Nuxt.js.',
      '**Authentication Flow:** Integrated LinkedIn OAuth 2.0, Google one-tap and one-time email-link signup, increasing verified users by 15%.',
    ],
    stack: ['Node.js', 'Vue', 'Nuxt', 'Prisma', 'PostgreSQL', 'Redis', 'WebSockets', 'Cloudflare'],
    accent: 'hot',
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: 'shipping' | 'in-progress' | 'shipped';
  links: { label: string; href: string }[];
  accent: 'zap' | 'hot' | 'electric' | 'mint';
};

export const projects: Project[] = [
  {
    name: 'GovSim AI',
    tagline: 'Multi-Agent Public-Policy Evaluator',
    description:
      'Multi-agent public-policy evaluator with 8 specialised AI agents, judge agents and MCP tool adapters.',
    stack: ['Next.js', 'FastAPI', 'OpenAI', 'Qdrant'],
    status: 'shipping',
    links: [
      { label: 'github', href: 'https://github.com/amifunny/GovSimAI' },
    ],
    accent: 'electric',
  },
  {
    name: 'InterviewerOS',
    tagline: 'AI Mock Interview Platform',
    description:
      'AI mock interview platform with voice interviews and automated performance reports.',
    stack: ['Next.js', 'FastAPI', 'Tailwind', 'MongoDB'],
    status: 'shipping',
    links: [
      { label: 'github', href: 'https://github.com/amifunny/interviewer-os' },
    ],
    accent: 'zap',
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    group: 'Frontend',
    items: ['Vue 3', 'Nuxt 3', 'React', 'Next.js', 'Redux', 'Pinia', 'Tailwind CSS'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'WebSockets'],
  },
  {
    group: 'Other',
    items: ['Tensorflow', 'Deep Learning', 'AWS', 'Cloudflare', 'Docker', 'Playwright', 'OAuth 2.0', 'Git'],
  },
];

export const aboutTags = [
  'Ships fast',
  'Mentors faster',
  'Loves system design',
  'Pets cats',
  'Endlessly curious',
  'Browses Reddit too much',
];

