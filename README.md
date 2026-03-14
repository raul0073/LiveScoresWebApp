# 🏆 Score Predictor

> Predict scores for Euro 2024 — play with friends and compete on who sees the future.

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?logo=redux&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)

**Live →** [luzone.netlify.app](https://luzone.netlify.app/)

---

## About

A real-time score prediction game built around the Euro 2024 Championship. Friends can join, predict match scores for every fixture, and compete on a leaderboard to see who called it right.

Built mobile-first — designed to be used on your phone during the tournament.

## Problem

Friends wanted a fun, competitive way to predict match scores during Euro 2024 without the overhead of spreadsheets or manual tracking.

## Solution

A real-time prediction app with friend groups, per-match score inputs, and a live leaderboard — so everyone can see the standings update as results come in.

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js, React |
| State | Redux |
| Database | MongoDB (Atlas) |
| Styling | Tailwind CSS |

## Features

- Predict scores for every Euro 2024 match
- Compete with friends on a live leaderboard
- Mobile-first responsive design
- Real-time standings as results come in

## Getting Started

```bash
# Clone the repo
git clone https://github.com/raul0073/euro24-score-predictor.git
cd euro24-score-predictor

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your MongoDB URI and any required API keys

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
```

---

Built by [Raul](https://github.com/raul0073)
