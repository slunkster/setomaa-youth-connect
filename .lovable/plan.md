## Setomaa Noorsootöö Keskus — veebileht

Four-page Estonian website for the local youth centre. Visual direction: bright and youthful, but clean and modern — vivid accent colours, generous whitespace, rounded cards, friendly sans-serif typography, lots of imagery placeholders.

### Site structure

- `/` — Avaleht (Landing)
- `/keskused` — Keskused (4 locations)
- `/sotsiaalmeedia` — Sotsiaalmeedia (4 Facebook embeds)
- `/kontakt` — Kontakt (5 youth workers)

Shared top navigation (logo + 4 links, mobile hamburger) and shared footer (short blurb, quick links, social icons, copyright) on every page.

### 1. Avaleht (Landing)

- Hero: large heading "Setomaa Noorsootöö Keskus", short tagline, primary CTA "Tule külla" → /keskused, secondary "Võta ühendust" → /kontakt. Bright gradient/illustration background.
- "Mis me oleme" intro section — 2–3 sentences about the youth centre.
- Highlights row: 3–4 feature cards with icons (Tegevused, Üritused, Kogukond, Loovus).
- Locations teaser: 4 small cards previewing each centre, with a "Vaata kõiki keskusi" link.
- Social teaser strip: "Jälgi meid Facebookis" linking to /sotsiaalmeedia.
- Final CTA banner: "Liitu meiega!" with contact link.

### 2. Keskused (Centres)

- Page header with short intro.
- 4 large cards (responsive grid, 2×2 desktop, stacked mobile). Each card: photo placeholder, centre name, address, opening hours, phone/email, optional map link. Placeholders used until you share real details.

### 3. Sotsiaalmeedia

- Page header explaining where to follow us.
- 4 Facebook page embeds (Page Plugin iframes) — main combined page + 3 location pages. Responsive grid (2×2 desktop, stacked mobile), lazy-loaded.
- Each embed has a fallback "Ava Facebookis" link if it fails to load.
- Placeholder URLs in the meantime; you provide the 4 real FB page URLs later.

### 4. Kontakt

- General contact block: email, phone, postal address.
- "Meie noorsootöötajad" section — 5 worker cards in a responsive grid (3 + 2 on desktop, stacked on mobile). Each card: round photo placeholder, name, role/centre, email, phone.
- Simple contact form (Nimi, E-post, Sõnum, Saada). Validated with zod (trim, required, length limits, valid email). Front-end only with success toast; no backend wiring this pass.
- Small "Leia meid" section linking to /keskused.

### Design system

- Palette: white background, deep navy text, one bright primary (cheerful blue or coral), one secondary accent (sunny yellow or mint). HSL tokens in `index.css`, mapped in `tailwind.config.ts`.
- Rounded-2xl cards, soft shadows, hover lift, smooth transitions.
- Bold large headings, comfortable body line-height.
- Mobile-first, fully responsive.

### Technical notes

- Routes added in `src/App.tsx`: `/keskused`, `/sotsiaalmeedia`, `/kontakt`.
- New files: `src/components/Layout.tsx`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/pages/Centres.tsx`, `src/pages/Social.tsx`, `src/pages/Contact.tsx`. Replace `src/pages/Index.tsx` placeholder with the real landing page.
- Update tokens in `src/index.css` and `tailwind.config.ts`.
- Facebook embeds via `facebook.com/plugins/page.php` iframes, `loading="lazy"`.
- Contact form validation with zod; success via existing toast.
- All copy in Estonian. Real centre data, worker info, photos, and FB URLs filled in after you share them.

### Out of scope (can be added later)

- CMS / editable content
- Real form delivery (email/DB)
- Event calendar, gallery, blog
- Multilingual switcher
