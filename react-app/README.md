# Chanchal's Design Portfolio — Clean Vite + React 18 Project (`react-app/`)

A self-contained, deploy-ready **Vite + React 18** application built exclusively on standard open-source packages (`react`, `react-dom`, `react-router-dom`, `framer-motion`, and `lenis`) with **zero dependency on Framer's proprietary runtime**.

---

## Folder Structure

```text
react-app/
├── package.json                  # Standard npm dependencies (react, react-router-dom, framer-motion, lenis)
├── vite.config.js                # Vite configuration
├── vercel.json                   # SPA rewrite rule for Vercel deployment
├── index.html                    # Clean HTML entry (Google Fonts + local /favicon.svg)
├── ASSETS_MANIFEST.json          # Map of every local image path (/assets/...) & source URL
├── scripts/
│   └── download-assets.mjs       # One-command downloader for all portfolio images into public/assets/
├── public/
│   ├── favicon.svg               # Local SVG favicon
│   ├── _redirects                # SPA rewrite rule for Netlify / Cloudflare Pages
│   └── assets/
│       ├── logos/                # 5 brand logo SVGs (already bundled locally!)
│       ├── about/                # Drop portrait-1.png & portrait-2.jpeg here
│       ├── works/                # Drop gully-labs/, sleeplove/, shoreline-living/, gfgf/ images here
│       └── canvas/               # Drop the 9 InfiniteCanvas photo card images here
└── src/
    ├── main.jsx                  # React 18 root mount
    ├── App.jsx                   # React Router routes (/, /works, /works/:slug, /404)
    ├── data/
    │   ├── assets.js             # Local asset resolver + ALLOW_REMOTE_FALLBACK toggle
    │   └── portfolioData.js      # Complete portfolio data (Works, Deliverables, Experience, Canvas Cards)
    ├── styles/
    │   ├── tokens.css            # CSS custom properties (colors, fonts, borders)
    │   └── global.css            # Typography presets & responsive layout utilities
    ├── components/               # 16 modular React components
    │   ├── Layout.jsx
    │   ├── NameBanner.jsx
    │   ├── Navbar.jsx
    │   ├── NavItem.jsx
    │   ├── Footer.jsx
    │   ├── ButtonPrimary.jsx
    │   ├── ButtonSocial.jsx
    │   ├── CopyEmailButton.jsx
    │   ├── CTA.jsx
    │   ├── WorkCard.jsx
    │   ├── WorkCardTag.jsx
    │   ├── NextWorkCard.jsx
    │   ├── LogosTicker.jsx
    │   ├── NumbersCard.jsx
    │   ├── DeliverablesItem.jsx
    │   ├── InfoListItem.jsx
    │   ├── Tag.jsx
    │   ├── MagText.jsx
    │   ├── InfiniteCanvas.jsx
    │   ├── CanvasPhotoCard.jsx
    │   ├── LenisSmoothScroll.jsx
    │   ├── SmartImage.jsx
    │   └── Icons.jsx
    └── pages/
        ├── Home.jsx              # /
        ├── Works.jsx             # /works
        ├── WorkDetail.jsx        # /works/:slug
        └── NotFound.jsx          # /404
```

---

## Local Development & Deployment

### 1. Install & Run Locally
```bash
cd react-app
npm install
npm run dev
```

### 2. Download or Link Your Local Images
- The 5 brand logo SVGs are **already bundled locally** inside `public/assets/logos/logo-1.svg` through `logo-5.svg`.
- For the portfolio photographs and case-study images, you can either:
  - **Option A (Automatic)**: Run the included Node script on your machine to fetch all 25 images directly into `public/assets/`:
    ```bash
    npm run download-assets
    ```
  - **Option B (Manual)**: Place your downloaded images into the pre-created folders under `public/assets/` matching the `localPath` entries in `ASSETS_MANIFEST.json`.
- Once your images are in `public/assets/`, you can set `export const ALLOW_REMOTE_FALLBACK = false;` in `src/data/assets.js` so the app serves 100% of its media from your own host.

### 3. Build for Production Hosting
```bash
npm run build
```
This outputs a static production bundle in `dist/` ready to deploy to **Vercel** (`vercel.json` included), **Netlify** / **Cloudflare Pages** (`public/_redirects` included), **GitHub Pages**, **AWS S3 + CloudFront**, or **Firebase Hosting**.
