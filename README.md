This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or# ⚽ Live Scores

> Live football scores, fixtures and stats from across the globe — personalized by league and theme.

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white)

**Live →** [rmscores.netlify.app](https://rmscores.netlify.app/)

---

## About

A mobile-first football dashboard delivering real-time match data from leagues around the world. Built as a personal side project — the goal was a fast, clean sports app without the ads, noise, and clutter of mainstream platforms.

Users can follow their favourite leagues and set a custom theme color that persists across sessions via their account.

## Problem

Mainstream sports apps are bloated with ads and irrelevant content. Getting to live scores for the leagues you actually follow takes too many taps.

## Solution

A lightweight, focused dashboard powered by Rapid API for live data, with Clerk oAuth for persistent personalization — pinned leagues and custom UI theme saved per account.

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js |
| Frontend | React |
| Auth | Clerk (oAuth) |
| Data | Rapid API (football data) |
| Styling | Tailwind CSS, Sass |

## Features

- Live match scores and fixtures worldwide
- Follow and pin favourite leagues
- Personalized theme color per user
- Auth via Clerk — preferences persist across devices
- Mobile-first design

## Getting Started

```bash
# Clone the repo
git clone https://github.com/raul0073/LiveScores.git
cd LiveScores

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Rapid API key and Clerk credentials

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

```env
NEXT_PUBLIC_RAPIDAPI_KEY=your_rapid_api_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

---

Built by [Raul](https://github.com/raul0073)
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
