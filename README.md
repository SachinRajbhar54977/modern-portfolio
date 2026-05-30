# 🚀 Khan Aarav — AI Engineer Portfolio

A **premium, production-ready** portfolio for AI Engineers & GenAI Developers. Built with the latest Next.js App Router, Framer Motion animations, glassmorphism UI, Prisma ORM, and Resend for emails.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/khan-aarav/ai-engineer-portfolio)

---

## ✨ Features

| Feature | Stack |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom CSS variables |
| Animations | Framer Motion |
| Auth | Clerk |
| Database | PostgreSQL + Prisma ORM |
| Emails | Resend |
| Deployment | Vercel |
| Analytics | Vercel Analytics + Speed Insights |

### Portfolio Sections
1. **Hero** — Animated particles, typing effect, CTAs, live status badge
2. **About** — Journey timeline, professional bio, skill badges
3. **Skills** — Categorized skill cards with animated progress bars
4. **Projects** — Filterable project cards with GitHub + live demo links
5. **Experience** — Timeline with work, certifications, and education
6. **Services** — Freelancing service cards with pricing
7. **GitHub Activity** — Live contribution graph + repo stats
8. **Testimonials** — Interactive testimonial carousel
9. **Blog** — Article cards with tags and read times
10. **Contact** — Form with email notification via Resend
11. **Footer** — Quick links, social icons, copyright

### Advanced Features
- Custom animated cursor
- Scroll progress indicator
- Smooth page transitions
- Interactive particle network background
- Fully responsive (mobile + tablet + desktop)
- SEO optimized with OpenGraph + Twitter cards
- Production security headers
- Rate-limited API routes

---

## 🏗️ Project Structure

```
ai-engineer-portfolio/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Main page assembling all sections
│   └── api/
│       ├── contact/route.ts    # Contact form handler (Resend + DB)
│       ├── projects/route.ts   # Projects API with filtering
│       └── github/route.ts     # Live GitHub stats + fallback
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with active section tracking
│   │   └── Footer.tsx          # Footer with links + social icons
│   ├── sections/
│   │   ├── HeroSection.tsx     # Particle canvas, typing effect
│   │   ├── AboutSection.tsx    # Bio + journey timeline
│   │   ├── SkillsSection.tsx   # Skill category cards
│   │   ├── ProjectsSection.tsx # Filterable project grid
│   │   ├── ExperienceSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── GitHubSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── CustomCursor.tsx
│       └── ScrollProgress.tsx
├── data/
│   └── portfolio.ts            # All content — projects, skills, experience
├── hooks/
│   └── index.ts                # useTypingEffect, useParticles, useContactForm…
├── lib/
│   ├── utils.ts                # cn(), color maps, scroll helpers
│   └── prisma.ts               # Prisma client singleton
├── prisma/
│   └── schema.prisma           # DB schema — messages, analytics
├── styles/
│   └── globals.css             # CSS variables, keyframes, components
├── types/
│   └── index.ts                # Full TypeScript types
├── .env.example                # Environment variable template
├── vercel.json                 # Vercel config + security headers
├── tailwind.config.ts          # Tailwind with custom tokens
└── tsconfig.json
```

---

## ⚡ Quick Start

### 1. Clone and install

```bash
git clone https://github.com/khan-aarav/ai-engineer-portfolio
cd ai-engineer-portfolio
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
# Fill in your values — see comments in .env.example
```

Required variables:
- `DATABASE_URL` — PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` + `CLERK_SECRET_KEY` — from [clerk.com](https://clerk.com)
- `RESEND_API_KEY` — from [resend.com](https://resend.com)
- `CONTACT_EMAIL` — where to receive contact form messages

### 3. Set up the database

```bash
# Generate Prisma client
npx prisma generate

# Push schema to your database
npx prisma db push

# (Optional) Open Prisma Studio to view data
npx prisma studio
```

### 4. Run development server

```bash
npm run dev
# Open http://localhost:3000
```

### 5. Build for production

```bash
npm run build
npm run start
```

---

## 🌍 Deploy to Vercel

### Option A — One-click deploy

Click the **Deploy with Vercel** button at the top of this README.

### Option B — Manual deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Setting up Vercel environment variables

Go to your project on [vercel.com](https://vercel.com) → Settings → Environment Variables and add all values from `.env.example`.

For the database, use [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres), [Neon](https://neon.tech), or [Supabase](https://supabase.com) — all work with the Prisma schema.

---

## 📝 Customization

### Update your information

Edit `data/portfolio.ts`:
- `PERSONAL_INFO` — name, title, location, email, roles
- `PROJECTS_DATA` — your real projects
- `SKILLS_DATA` — skill categories and percentages
- `EXPERIENCE_DATA` — work history and certifications
- `SERVICES_DATA` — freelancing services and pricing
- `TESTIMONIALS_DATA` — client testimonials
- `BLOG_POSTS_DATA` — your blog articles
- `SOCIAL_LINKS` — GitHub, LinkedIn, Twitter, email

### Change the color scheme

All colors are in `styles/globals.css` under `:root`. The primary accent is `--cyan: #06b6d4`. Swap it for any color — all components reference this variable.

### Add your profile image

Place `profile.jpg` in `/public/` and update `AboutSection.tsx` to use the `<Image>` component instead of the initials avatar.

---

## 🔌 Tech Stack Details

| Tool | Purpose | Docs |
|---|---|---|
| Next.js 14 | Framework + SSR | [nextjs.org](https://nextjs.org) |
| Framer Motion | Animations | [framer.com/motion](https://framer.com/motion) |
| Tailwind CSS | Utility styling | [tailwindcss.com](https://tailwindcss.com) |
| Clerk | Authentication | [clerk.com/docs](https://clerk.com/docs) |
| Prisma | ORM + type-safe DB | [prisma.io](https://prisma.io) |
| Resend | Transactional email | [resend.com/docs](https://resend.com/docs) |
| Vercel | Deployment + CDN | [vercel.com/docs](https://vercel.com/docs) |
| Zod | Input validation | [zod.dev](https://zod.dev) |

---

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com) to send emails.

1. Create a free account at resend.com
2. Add and verify your domain (or use `onboarding@resend.dev` for testing)
3. Create an API key and add it to `RESEND_API_KEY`
4. Set `CONTACT_EMAIL` to your inbox

When someone submits the form:
- A notification email is sent to you
- A confirmation email is sent to the sender
- The message is saved to your PostgreSQL database

---

## 🔒 Security

- All API inputs validated with Zod
- Security headers set in `vercel.json`
- Environment variables never exposed to client
- Rate limiting can be added via [Upstash Redis](https://upstash.com) (see `lib/rateLimit.ts`)
- Clerk handles auth securely

---

## 📊 Analytics

The portfolio uses:
- **Vercel Analytics** — page views, unique visitors, top pages
- **Vercel Speed Insights** — Core Web Vitals monitoring
- **Custom DB tracking** — project view events, contact form submissions

---

## 📄 License

MIT — free to use, customize, and distribute.

---

Built with ⚡ by **Khan Aarav** — AI Engineer, Hyderabad 🇮🇳
