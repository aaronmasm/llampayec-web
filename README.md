# Llampayec · Web portal

Single-page web portal for **Llampayec**, a cultural music magazine about Lambayeque (Peru),
Issue No. 01, November 2026. Made for the School of Communication Sciences,
Universidad de San Martín de Porres.

The portal presents the same content as the printed magazine, adapted to the web:
real text instead of page images, photos that open in a lightbox, and the interview videos.
The site content is in Spanish; code, comments and docs are in English.

## Stack

| Tool | Purpose |
| --- | --- |
| [Vite](https://vite.dev) + [React](https://react.dev) | App and build |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling, with the magazine palette as design tokens |
| [Motion](https://motion.dev) | Scroll reveals, tab transitions |
| [yet-another-react-lightbox](https://yet-another-react-lightbox.com) | Photo pop-ups (zoom + captions) |

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build locally
npm run lint
```

## Project structure

```
public/img/             optimized WebP photos + logo
public/video/           compressed interview videos + posters
src/
  data/                 ALL the content (text and image paths) - no JSX here
  context/              LightboxContext: one global lightbox
  hooks/                useActiveSection: scroll-spy for the navbar
  components/
    layout/             Navbar, Footer
    sections/           one component per page section
    ui/                 small reusable pieces (Section, Figure, Reveal, ...)
  index.css             Tailwind theme (design tokens) + a few custom utilities
```

Design principle: **data is separated from presentation.** To fix a typo or swap a photo,
edit a file in `src/data/`; the components never hold magazine text.

## Design tokens

The magazine palette lives in the `@theme` block of `src/index.css` and becomes Tailwind
utilities automatically (`bg-terracotta`, `text-gold`, `border-ink`, ...):

| Token | Use |
| --- | --- |
| `ink`, `ink-soft` | Text and dark backgrounds |
| `paper`, `cream`, `sand` | Light backgrounds |
| `terracotta`, `clay` | Brand red, accents and buttons |
| `gold` | Ornaments and highlights on dark backgrounds |

Fonts: `font-display` (Playfair Display), `font-body` (Lora), `font-label` (Montserrat).

## Videos

The three interview videos (Yim Sampietegui, César Chima, Manuel De La Cruz) live in
`public/video/` and play inside each person's tab in the "Voces" section. They are
**compressed to 720p H.264** (about 40 MB in total) and load only when the visitor presses play.

To add or replace one:

1. Compress it (keeps size small, `+faststart` lets playback begin before the download ends):

   ```bash
   ffmpeg -i input.mp4 -map 0:v:0 -map 0:a:0 -vf scale=1280:-2 \
     -c:v libx264 -preset medium -crf 28 -pix_fmt yuv420p \
     -c:a aac -b:a 96k -ac 2 -movflags +faststart public/video/name.mp4
   ffmpeg -ss 3 -i input.mp4 -frames:v 1 -vf scale=1280:-2 -q:v 3 public/video/name.jpg   # poster
   ```

2. Add `video: { src: '/video/name.mp4', poster: '/video/name.jpg', title: '...' }` to the
   person's file in `src/data/voices/`.

Keep every file under 50 MB: GitHub warns above that and rejects files over 100 MB.
## Deployment

Static site. On Netlify: build command `npm run build`, publish directory `dist`.
Every push to `main` deploys automatically.