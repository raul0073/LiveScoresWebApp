# ⚽ Live Scores

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
