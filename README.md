# CJ Portfolio — README

A portfolio website for Jignesh Nishad (CJ), documentary video editor and motion graphics designer. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

---

## Prerequisites

- Node.js 18+
- npm (comes with Node)

---

## Run locally

```bash
# 1. Clone / copy the project
cd cj-portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# then open .env.local and fill in the values

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Add a project

1. Open `content/projects.json`.
2. Copy the last object in the array and paste it as a new entry.
3. Fill in every field:

| Field | Description |
|---|---|
| `slug` | URL-safe string, e.g. `"wildlife-doc-2024"`. Must be unique. |
| `title` | Project title shown on cards and the detail page. |
| `clientType` | e.g. `"YouTube Channel"`, `"Brand"`, `"Agency"`. |
| `category` | Must be one of: `"Documentary"`, `"Motion graphics"`, `"Short-form"`. |
| `role` | Your role, e.g. `"Editor & Motion Designer"`. |
| `tools` | Array of software names, e.g. `["DaVinci Resolve", "After Effects"]`. |
| `thumbnailUrl` | Path relative to `/public`, e.g. `"/assets/thumbnails/my-project.jpg"`. Use 16:9 images. |
| `hoverPreviewUrl` | Optional. Short muted MP4 or WebM (5–10 s, 720p, under 4 MB). Leave `""` to skip. |
| `embedUrl` | YouTube or Vimeo URL. Paste the share URL — the site converts it automatically. |
| `brief` | One paragraph: what the client needed. |
| `approach` | One paragraph: how you tackled it. |
| `result` | One paragraph: measurable outcome. |
| `featured` | `true` to show in the Featured Case Studies section. Keep to 2–3 max. |
| `beforeUrl` | Optional. Path to raw/before clip (720p, under 8 MB). For larger files host on Vimeo and leave `""`. |
| `afterUrl` | Optional. Path to final/after clip (same size limit). Pair with `beforeUrl` for the slider. |

4. Drop the thumbnail into `/public/assets/thumbnails/`.
5. If you have a hover preview, drop it into `/public/assets/previews/`.
6. Before/after clips go into `/public/assets/before/` and `/public/assets/after/`. Keep them at 720p and under 8 MB each. For anything larger, host on Vimeo (or similar) and link directly from the embed rather than the before/after slider.

---

## Change contact details

Open `content/site.json` and update the `contact` block:

```json
"contact": {
  "email": "you@yourdomain.com",
  "whatsapp": "https://wa.me/9190XXXXXXXX",
  "discord": "yourDiscordUsername",
  "youtube": "https://youtube.com/@yourchannel",
  "instagram": "https://instagram.com/yourhandle",
  "formEndpoint": ""
}
```

Leave `formEndpoint` empty — the form uses the `NEXT_PUBLIC_FORM_ENDPOINT` environment variable instead (see `.env.local.example`).

Any field that starts with `[` is treated as a placeholder and is hidden from visitors.

---

## Fill in a placeholder

All outstanding placeholders are listed in `PLACEHOLDERS.md`. For each one:

1. Find the field in `content/site.json` or `content/projects.json`.
2. Replace the `[PLACEHOLDER]` value with the real value.
3. Add any required files to `/public/assets/`.

---

## Set up the contact form (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form. Copy the endpoint URL (looks like `https://formspree.io/f/xxxxxxxx`).
3. Paste it as `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.local`.
4. Formspree handles spam filtering, email delivery, and submission storage.

---

## Add analytics

In `.env.local`:

```bash
# For Plausible Analytics
NEXT_PUBLIC_ANALYTICS_TYPE=plausible
NEXT_PUBLIC_ANALYTICS_ID=yourdomain.com

# For Google Analytics 4
NEXT_PUBLIC_ANALYTICS_TYPE=ga
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX
```

---

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), import the repository.
3. Vercel auto-detects Next.js — no build config needed.
4. In the Vercel dashboard → Settings → Environment Variables, add:
   - `NEXT_PUBLIC_FORM_ENDPOINT`
   - `NEXT_PUBLIC_ANALYTICS_TYPE` (optional)
   - `NEXT_PUBLIC_ANALYTICS_ID` (optional)
   - `NEXT_PUBLIC_SITE_URL` (your production domain)
5. Deploy. Future pushes to `main` deploy automatically.

---

## Project structure

```
cj-portfolio/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (fonts, header, footer, analytics)
│   ├── page.tsx          # Home page
│   ├── work/[slug]/      # Individual project pages
│   ├── sitemap.ts        # Auto-generated sitemap
│   └── robots.ts         # robots.txt
├── components/
│   ├── home/             # One component per home section
│   ├── layout/           # Header, Footer
│   ├── seo/              # JSON-LD schemas
│   ├── ui/               # Reusable UI primitives
│   └── work/             # ProjectCard
├── content/
│   ├── site.json         # All copy: hero, services, process, FAQ, contact…
│   └── projects.json     # Project list
├── lib/
│   └── types.ts          # Shared TypeScript types
├── public/
│   └── assets/
│       ├── headshot.jpg       # Your photo
│       ├── og-image.jpg       # 1200×630 Open Graph image
│       ├── reel-loop.mp4      # 10–15 s muted hero loop (under 4 MB)
│       ├── reel-loop.webm     # WebM version of the same loop
│       ├── reel-poster.jpg    # Poster frame for the loop
│       ├── thumbnails/        # 16:9 project thumbnails
│       ├── previews/          # Short muted hover previews (under 4 MB)
│       ├── before/            # Raw footage clips for before/after slider (720p, under 8 MB)
│       └── after/             # Final edit clips for before/after slider (720p, under 8 MB)
├── PLACEHOLDERS.md
└── .env.local.example
```
