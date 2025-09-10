# Sector Z Website Specification

Inspired by: [Remedy Games](https://www.remedygames.com/)

---

## 1. Global
- **Framework**: Next.js 14 (App Router) + React + Tailwind CSS
- **Design Language**: Clean, cinematic, minimal with bold typography
- **Color Palette**: Black/White base + single accent (e.g., cyan `#79FFE1` or red `#FF4D4D`)
- **Typography**:
  - Headlines: Grotesk (Inter/Satoshi/GT America style)
  - Body: Inter, 16–18px, 1.6–1.8 line-height
- **Imagery**: Cinematic wide crops, film grain overlay, subtle parallax
- **Motion**: 200–300ms easing, hover lift, scroll fades
- **Accessibility**: WCAG 2.2 AA, skip links, visible focus, alt text

---

## 2. Navigation
- **Header (sticky)**:  
  - Links: Home · Games · Studio · Devlog · Careers · Community · Contact
  - Transparent → solid background on scroll
- **Footer**: Newsletter signup · Socials · Legal/Privacy · Press kit

---

## 3. Home Page
1. **Hero Section**
   - Fullscreen background (image/video) with subtle grain overlay
   - Mission tagline: *“We craft atmospheric worlds and sharp, character-driven games. Step inside.”*
   - CTAs: `Explore Reverie of Fear` (primary), `Read the Devlog` (secondary)

2. **Spotlight Game**
   - Large artwork + title
   - Blurb + CTAs: `Watch Trailer`, `Read Devlog`

3. **Devlog Rail**
   - 3 recent posts in card layout
   - Each card: image, tag, date, headline

4. **Studio Slice**
   - Short intro paragraph + “Our Studio” link

5. **Careers Callout**
   - Highlight 1–3 featured roles
   - CTA: `View All Roles`

6. **Community / Newsletter**
   - Signup form with inline validation
   - CTA to fan hub/Discord

---

## 4. Inner Pages

### Games
- **Index**: Grid of game cards (image-first, responsive)
- **Detail Page**:
  - Hero banner
  - Feature bullets
  - Media gallery (lightbox enabled)
  - Related devlogs

### Studio
- Mission, values, tech stack
- Team photo strip
- Press kit link

### Devlog
- Markdown-powered posts (Contentlayer or CMS)
- Filters: Tags (Project, Art, Engineering, Community)
- Search + pagination
- Author bylines

### Careers
- Job list cards: title, team, location, CTA
- Filters: team/location
- “Life at Sector Z” photo gallery

### Community
- Fan art + spotlight gallery
- Submission CTA
- Social embeds
- Monthly “Feature of the Month”

---

## 5. Components
- **Header/Nav**: sticky, responsive
- **Card Grid**: responsive 3/2/1 layout, hover lift
- **SectionHeader**: reusable with eyebrow + title + description
- **Buttons**: solid (accent) + ghost (outlined)
- **Lightbox**: keyboard and swipe navigation
- **NewsletterForm**: inline validation, success message
- **JobList**: filterable, card-based
- **Footer**: 3-column layout with dark background

---

## 6. Performance
- Images: `next/image`, AVIF/WebP, blur placeholders
- Fonts: `next/font` or self-hosted
- Metadata: per-route SEO, JSON-LD for Articles and Organization
- Lighthouse goals: ≥90 across Performance, SEO, Best Practices, Accessibility

---

## 7. Task List (for Augment Code)
1. Initialize Next.js 14 project with Tailwind + ESLint/Prettier
2. Implement sticky header with transparent → solid scroll behavior
3. Build Home sections (Hero, Spotlight Game, Devlog Rail, Studio Slice, Careers, Community)
4. Create Games index + detail pages
5. Create Studio page
6. Implement Devlog system with markdown + filters
7. Build Careers page with filterable roles
8. Create Community page with gallery + spotlight
9. Develop reusable components (Card, Button, SectionHeader, Lightbox, NewsletterForm, JobList)
10. Add accessibility features (skip link, focus rings, semantic landmarks)
11. Optimize images, fonts, metadata, and sitemap/robots.txt
12. Run Lighthouse audits and fix until ≥90 score

---
