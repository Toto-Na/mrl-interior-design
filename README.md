# MR L PRODUCTION — Architecture / Interiors / Landscapes

A pixel-perfect React (Next.js 16 + TypeScript) recreation of an architectural studio homepage, expanded into a full 5-page SPA.

## Live Preview

The sandbox auto-runs `bun run dev` on port 3000. The dev server is started automatically — do **not** run it yourself.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript 5
- **Styling**: Tailwind CSS 4 + custom CSS (`src/app/arch-studio.css`)
- **Icons**: lucide-react
- **Fonts**: Cormorant Garamond (serif headlines) + Inter (sans body) via `next/font/google`
## Screenshots
![Homepage](./screenshots/1.png)
## project screen
![Projects](./screenshots/2.png)
## favorte screen
![Favorte](./screenshots/3.png)
## Project Structure

```
src/
  app/
    layout.tsx              # Root layout, loads Google Fonts
    page.tsx                # SPA state container (Home/Projects/Services/About/Contact)
    globals.css             # Tailwind base
    arch-studio.css         # All custom styles for the architecture studio UI
  components/
    arch-studio/
      types.ts              # PageName type + PROJECTS data array
      Header.tsx            # Logo + nav pill + Search + Start a Project
      Sidebar.tsx           # Vertical icon rail (Home/Projects/Services/About/Contact + Showreel)
      pages/
        HomePage.tsx        # Hero + Featured Project + Stats + Vision cards
        ProjectsPage.tsx    # Filter chips + grid + project detail modal
        ServicesPage.tsx    # 3 services + Process steps + CTA band
        AboutPage.tsx       # Intro + Values + Team + Timeline
        ContactPage.tsx     # Form + Studio info + Map
```

## Pages & Navigation

The site is a single-page app. The active page is held in `page.tsx` state and switched by the `navigate(page)` function. All navigation entries (header nav, sidebar icons, in-page CTAs) call `navigate`.

| Page | Highlights |
|------|------------|
| Home | Hero "Spaces That Inspire", Featured Project carousel, Stats card, Vision card |
| Projects | 6 projects, Architecture/Interiors/Landscapes filter, click card → detail modal |
| Services | 3 service rows, Process (Discover/Design/Develop/Deliver), CTA band |
| About | Studio story, 4 values, 4 team members, 4 timeline entries |
| Contact | Form (Name/Email/Phone/Type/Location/Message), dark info card, map pin |

## Overlays (shared across all pages)

- **Showreel modal** — backdrop image + center play button + caption
- **Search overlay** — pill input with submit arrow
- **Start a Project modal** — short brief form
- All overlays: close on ESC, close on backdrop click, lock body scroll

## Run Locally

```bash
bun install
bun run dev      # dev server on http://localhost:3000
bun run lint     # ESLint check
```

> **Note**: the sandbox auto-starts `bun run dev`. In a fresh local clone you run it yourself.

## Color Palette

```
--as-dark:         #171717   /* dark text + dark buttons */
--as-dark-soft:    #1B1815
--as-charcoal:     #2B2823   /* Vision card + Contact info card */
--as-cream:        #E9E0D4
--as-beige:        #F2EEE8
--as-warm-gray:    #A9A29A
--as-body-gray:    #6E6862
--as-brown:        #8C705B   /* accent (Inspire, links, icons) */
--as-brown-deep:   #7A5C43
--as-divider:      #D8D2C8
```

## Typography

- Headlines: `var(--font-serif)` → Cormorant Garamond (300/400/500/600/700)
- Body: `var(--font-inter)` → Inter (300/400/500/600/700)
- Eyebrow labels: 10px, weight 700, letter-spacing 2.6px, uppercase

## Image Assets

All hero/project/team images are hotlinked from the in-house image-search CDN (`z-cdn.chatglm.cn/image-search-mcp/...`). Replace them with your own assets in `public/` and update the URLs in:
- `src/components/arch-studio/pages/HomePage.tsx`
- `src/components/arch-studio/types.ts` (PROJECTS array)
- `src/components/arch-studio/pages/ServicesPage.tsx` (SERVICES array)
- `src/components/arch-studio/pages/AboutPage.tsx` (TEAM + intro image)
- `src/components/arch-studio/pages/ContactPage.tsx` (map image)
- `src/app/page.tsx` (background + showreel backdrop)

## License

Source code is yours to use and modify. Image assets belong to their respective upstream sources (Unsplash, Houzz, etc.) — swap them before any commercial deployment.
