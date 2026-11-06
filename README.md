# Siranjeevi & Roshna — Wedding e-Invite

```
index.html              page structure + share-preview (Open Graph) tags
assets/css/style.css    all styling
assets/js/data.js       ✏️ EDIT HERE: events, dates, venues, WhatsApp text
assets/js/app.js        animations, countdown, sound, interactions
assets/img/             hero / story photos (.webp), venue scenes (.svg), og-card.jpg, favicon
```

## Go live (≈2 minutes, free)
1. Open `index.html`, find `https://YOUR-SITE-URL/` (2 places, in the `og:` tags) — you'll fill this after step 2.
2. Drag the whole folder onto https://app.netlify.com/drop (or use GitHub Pages / Cloudflare Pages). You get `https://something.netlify.app`.
3. Put that address in place of `YOUR-SITE-URL`, re-upload. WhatsApp will now show the preview card (photo + title).

## Personalised links
`https://your-site/#Anand_Uncle`  or  `https://your-site/?to=Anand_Uncle` → the invite opens with "Dear Anand Uncle,".

## Venue photos (Scene 3)
Save one photo per venue in `assets/img/` with exactly these names — they are picked up automatically:
- `venue-ceremony.webp` — Kandakottam Temple (gopuram / entrance, ideally golden hour)
- `venue-chennai.webp` — Mother Marriage Mahal (facade or hall, evening)
- `venue-cuddalore.webp` — Sri Manipillai Marriage Hall (facade or hall)

Specs: landscape 3:2, about 1200×800 px, under 150 KB (convert at squoosh.app, WebP quality ~80), subject centred. A missing photo falls back to the illustration, so you can add them one at a time. Use photos you own or are licensed to use (venue website, your photographer).
