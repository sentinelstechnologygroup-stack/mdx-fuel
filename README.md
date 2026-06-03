# MDX Fuel Services

## Sentinel Technology Group / SDL Project README

### Project Information

**Company:** MDX Fuel Services  
**Domain:** MDXFuel.com  
**Project Type:** Public marketing website  
**Deployment Type:** Static website  
**Hosting Target:** InMotion Hosting / cPanel  
**Project Status:** Production deployment candidate  

---

## Overview

This repository contains the public-facing MDX Fuel Services website.

The site is prepared for static hosting and can be deployed by uploading the production build output to the hosting account's public web directory.

---

## Stack

- React
- Vite
- Tailwind CSS
- JavaScript / JSX
- Static production build

---

## Local Setup

```bash
npm install
npm run dev
```

---

## Production Build

```bash
npm run build
```

The production-ready files are generated in:

```text
dist/
```

---

## cPanel / InMotion Deployment

Upload the **contents** of the `dist` folder into:

```text
public_html/
```

Do not upload the `dist` folder itself unless the hosting account is specifically configured to serve from that directory.

---

## Apache Routing

If the site uses client-side routing, add this `.htaccess` file to `public_html`:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## SDL SIS Setup

SDL SIS files are included for static-site indexing, crawl readiness, and launch verification.

Included files:

```text
public/robots.txt
public/sitemap.xml
public/.htaccess
docs/SDL-SIS-SETUP.md
```

Before launch, verify that:

- `https://mdxfuel.com/robots.txt` loads
- `https://mdxfuel.com/sitemap.xml` loads
- All sitemap URLs return valid pages
- Deep links such as `/services` and `/request-quote` load directly in the browser
- Search engines are allowed to index the public site

---

## Required Pre-Deployment Checks

- [ ] Production build completes successfully
- [ ] Static files are generated in `dist`
- [ ] Home page loads correctly
- [ ] All primary navigation links work
- [ ] Mobile menu works
- [ ] Footer links work
- [ ] Images load from local project assets
- [ ] No broken page routes
- [ ] No fake phone numbers or placeholder contact details remain
- [ ] Contact forms are either connected or clearly non-submitting
- [ ] Legal/policy pages are reviewed before public launch
- [ ] Site is tested after upload on the live domain

---

## Deployment Workflow

Recommended workflow:

```text
Local development
→ Build
→ QA review
→ Commit to GitHub
→ Upload static build to cPanel
→ Live domain verification
```

---

## Ownership

Prepared for MDX Fuel Services by Sentinel Technology Group / SDL.

All production updates should be reviewed, tested, and source-controlled before deployment.
