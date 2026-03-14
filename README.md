# Live Scores

A personal football dashboard delivering live match data from leagues worldwide. Built out of frustration with mainstream sports apps — this is fast, ad-free, and shows only what you actually follow.

Users authenticate via Clerk, pin their favourite leagues, and set a custom UI theme color. Preferences persist across devices.

**[Live](https://rmscores.netlify.app/)**

---

## Highlights

- Live scores, fixtures, and match stats across global leagues
- Personalized feed — pin the leagues you follow
- Custom theme color per user account
- Auth via Clerk oAuth — preferences sync across devices
- Mobile-first layout built for quick glanceability

## Tech

**Frontend** — Next.js, React, Tailwind CSS, Sass  
**Auth** — Clerk (oAuth)  
**Data** — Rapid API (football)

Rapid API feeds live match data. Clerk handles auth and gives each user a persistent profile for their pinned leagues and theme preference — no custom auth layer needed.

## Run locally

```bash
git clone https://github.com/raul0073/LiveScores.git
cd LiveScores
npm install
cp .env.example .env.local
npm run dev
```

```env
NEXT_PUBLIC_RAPIDAPI_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```
