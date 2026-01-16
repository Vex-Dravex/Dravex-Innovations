# Dravex Innovations Website

A modern, full-stack business website showcasing software and hardware development solutions.

## Setup

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
npm start
```

## Tech Stack

- **Frontend**: Next.js 14+ with App Router, TypeScript, React
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel-ready

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── projects/          # Projects showcase
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/            # Reusable React components
├── lib/                   # Utility functions and configurations
│   └── supabase/         # Supabase client setup
└── public/               # Static assets
```

## Features

- Dark futuristic theme with purple accents
- Responsive design
- Project showcase (MasterSet, Creative Finance Platform, Real Estate Extension, FRAMEWORK Dock)
- Contact form with Supabase integration
- Newsletter subscription
- SEO optimized
