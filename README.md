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
- `components/` – Reusable UI components (Navbar, Hero, Footer, Section, FlashcardStack, etc.)
- `lib/` – Portfolio data and utilities

## Customization

Edit `lib/portfolio-data.ts` to update your content. Edit `lib/images.ts` for image paths.

## Build & deploy

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New Project** and import your repository.
4. Vercel will auto-detect Next.js – click **Deploy**.
5. Your site will be live at `your-project.vercel.app`.

No environment variables or custom config needed for this project.
