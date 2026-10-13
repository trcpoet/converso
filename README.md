# Converso

A real-time AI teaching platform. Learners pick (or build) an AI tutor for a subject and topic, then hold a live voice lesson with it.

> Built while following the [JavaScript Mastery](https://jsmastery.pro/) LMS SaaS course, as my own version of the project.

## Status

🚧 Early setup. The project scaffold, design tokens, and base UI components are in place; features are being built out.

- [x] Next.js app with Tailwind CSS v4 and shadcn/ui
- [x] Design tokens, subject colours, icons, and shared types
- [ ] Home, companion library, and subject/topic filters
- [ ] Companion builder (subject, topic, voice, style, duration)
- [ ] Live voice lessons with transcript
- [ ] Authentication
- [ ] Bookmarks and session history ("My Journey")
- [ ] Subscription plans and usage limits

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router) + React 19 |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) (Radix) |
| Forms | react-hook-form + [Zod](https://zod.dev/) |
| URL query helpers | [@jsmastery/utils](https://www.npmjs.com/package/@jsmastery/utils) |
| Planned | Clerk (auth & billing), Supabase (database), Vapi (voice AI), Sentry (monitoring) |

## Getting started

Requires Node.js 20 or newer.

```bash
git clone https://github.com/trcpoet/converso.git
cd converso
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
app/          Routes, root layout, global styles
components/   App components; shadcn/ui primitives live in components/ui
constants/    Subjects, subject colours, voices, sample data
lib/          Shared helpers (cn, getSubjectColor)
public/       Icons and images
types/        Global TypeScript types
```

## Environment variables

None are needed yet. As auth, database, and voice features land, keys will go in `.env.local` (gitignored).
