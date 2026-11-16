# PLACEHOLDERS

Every item below must be supplied before the site goes live. Placeholders are displayed in `[square brackets]` so you can preview layout and copy, while sections with no data (such as Testimonials) are automatically hidden until you add entries.

---

## Media files (add to `/public/assets/`)

| ID | File path | What to supply |
|---|---|---|
| `REEL_LOOP` | `/public/assets/reel-loop.mp4` + `.webm` | 10–15 s muted hero background loop. Keep under 4 MB. |
| `REEL_POSTER` | `/public/assets/reel-poster.jpg` | Still frame shown while the loop loads. |
| `HEADSHOT` | `/public/assets/headshot.jpg` | Your real headshot. Any aspect ratio works; the component crops to 3:4. |
| `OG_IMAGE` | `/public/assets/og-image.jpg` | Open Graph image, 1200 × 630 px. |

---

## content/site.json

| Field path | Placeholder value | What to supply |
|---|---|---|
| `hero.reelUrl` | `[REEL_URL]` | Full showreel YouTube or Vimeo URL. |
| `hero.reelTranscriptUrl` | `[REEL_TRANSCRIPT_URL]` | URL to a transcript or captions file for the reel (accessibility). |
| `meta.twitterHandle` | `[TWITTER_HANDLE]` | Your Twitter/X handle, or remove the field. |
| `proof[2].value` | `""` (empty, hidden) | Verifiable view count or watch-hours figure. Leave empty to hide. |
| `proof[3].value` | `[TURNAROUND]` | Typical turnaround time, e.g. `"5-day turnaround"`. |
| `services[0].priceFrom` | `[PRICE_DOCUMENTARY]` | Starting price for documentary editing, e.g. `"$800"`. |
| `services[1].priceFrom` | `[PRICE_MOTION]` | Starting price for motion graphics, e.g. `"$400"`. |
| `services[2].priceFrom` | `[PRICE_SHORTFORM]` | Starting price for short-form edits, e.g. `"$150"`. |
| `testimonials` | `[]` (empty, section hidden) | Add real testimonials. Each needs: `quote`, `name`, `role`, optional `channelUrl`. |
| `about.bio` | `[BIO]` | 2–3 sentences in first person about how you got into editing and what you care about. |
| `faq[4].a` | `[PAYMENT_TERMS]` | Your real payment terms and accepted methods. |
| `faq[5].a` | `[RUSH_FEE]` | Rush fee percentage, e.g. `50`. |
| `contact.email` | `[CONTACT_EMAIL]` | Your email address. |
| `contact.whatsapp` | `[WHATSAPP_LINK]` | WhatsApp link, e.g. `https://wa.me/919876543210`. |
| `contact.discord` | `[DISCORD_USERNAME]` | Your Discord username. |
| `contact.youtube` | `[YOUTUBE_URL]` | Your YouTube channel URL. |
| `contact.instagram` | `[INSTAGRAM_URL]` | Your Instagram profile URL. |

---

## content/projects.json

All six placeholder projects (3 Documentary, 2 Motion Graphics, 1 Short-form) need to be replaced with real projects. For each project supply:

- `slug` — unique URL-safe identifier
- `title` — project name
- `clientType` — who you worked for
- `thumbnailUrl` — 16:9 thumbnail (or 9:16 for short-form) in `/public/assets/thumbnails/`
- `embedUrl` — YouTube or Vimeo URL
- `brief`, `approach`, `result` — one paragraph each
- `featured: true` on 2–3 projects for the Case Studies section
- `beforeUrl` & `afterUrl` (optional MP4 video or JPG still) for the Before/After comparison slider in featured case studies

---

## Environment variables (`.env.local`)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORM_ENDPOINT` | Formspree endpoint URL. If omitted, the form automatically uses the internal `/api/contact` route. |
| `NEXT_PUBLIC_ANALYTICS_TYPE` | `"plausible"` or `"ga"` |
| `NEXT_PUBLIC_ANALYTICS_ID` | Plausible domain or GA measurement ID |
| `NEXT_PUBLIC_SITE_URL` | Your production domain, used in the sitemap and JSON-LD schemas |

---

## SEO schemas (update after going live)

In `components/seo/JsonLd.tsx`, replace `[YOUR_DOMAIN]`, `[YOUTUBE_URL]`, and `[INSTAGRAM_URL]` with real URLs once the site is deployed.
