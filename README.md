# Boosther

A minimal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Requirements

- Node.js >= 18.17
- npm

## Getting started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser. (Port 3001 is used to avoid conflicts with other apps on 3000.)

## Project structure

- `app/` – Next.js App Router (layout, pages)
- `components/` – Reusable UI components (Navbar, Hero, ProjectCard, Footer, Section)
- `lib/` – Portfolio data and utilities

## Customization

Edit `lib/portfolio-data.ts` to update your name, tagline, projects, skills, and contact links.

## Build & deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) by connecting your repository.
