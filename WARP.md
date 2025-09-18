# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Sector Z, an atmospheric game development studio. The site is built with:
- **Framework**: Next.js 15 (App Router) with React 19
- **Styling**: Tailwind CSS 4 with custom design system
- **Language**: TypeScript with strict mode
- **Architecture**: Component-based with clean separation of concerns

The project follows a cinematic, minimal design inspired by Remedy Games, featuring atmospheric horror game content with a black/white base palette and cyan accent color (#79FFE1).

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Working with specific features
- Development server runs on http://localhost:3000
- Hot reload is enabled for all file changes
- TypeScript checking happens in real-time

### GSAP Animations
- GSAP and ScrollTrigger are installed for cinematic scroll animations
- All animations respect `prefers-reduced-motion` settings
- ScrollTrigger instances are properly cleaned up on component unmount

## Architecture Overview

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # Individual page routes
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── page.tsx           # Homepage implementation
├── components/
│   ├── layout/           # Header and Footer components
│   └── ui/               # Reusable UI components
└── lib/
    ├── utils.ts          # Utility functions (clsx + twMerge)
    └── accessibility.ts  # Accessibility helpers
```

### Key Architectural Decisions

**Cinematic Scroll Story**: The homepage features a full-screen scroll-driven narrative:
- `ScrollStory` - Main orchestrator component with GSAP ScrollTrigger integration
- Five story beats: Hero (pinned video), Crafting Worlds (parallax), Sharp Systems (card assembly), Devlog Reel (horizontal scroll), Final CTA (logo effects)
- Progress bar tracks scroll position across the entire experience
- Accessibility-first with reduced motion support and keyboard focus preservation

**Component System**: Built around reusable UI components with consistent design patterns:
- `Button` - Three variants (solid, ghost, link) with multiple sizes
- `CardGrid` - Responsive grid system (1-4 columns)
- `Card` components - Modular card system with Image, Content, Header
- `SectionHeader` - Consistent section styling with eyebrow/title/description

**Design System**: Centralized in `globals.css` with CSS custom properties:
- Color system: Black/white base with cyan accent
- Typography: Inter font with cinematic text styles
- Custom utilities: film grain overlay, hover lift effects, fade-in animations

**Layout Architecture**: 
- Sticky header with scroll-based transparency
- Fixed navigation with responsive mobile menu
- Semantic HTML with accessibility features (skip links, focus management)

**Performance Optimizations**:
- Next.js Image optimization with WebP/AVIF formats
- Turbopack for faster builds
- Custom font loading with display:swap
- Security headers and caching strategies

### State Management
- React hooks for local component state (Header scroll state, mobile menu)
- No global state management needed for current scope
- Client-side interactions handled with 'use client' directive where needed

### Styling Approach
- Tailwind CSS utility classes for rapid development
- CSS custom properties for consistent theming
- Component-scoped styling with className props
- Responsive design with mobile-first approach

## Content Management

The site is designed for a game studio with these content types:
- **Games**: Individual game pages with media galleries
- **Devlog**: Blog-style posts (markdown-ready architecture)
- **Careers**: Job listings with filtering capabilities  
- **Community**: User-generated content and social features

Based on the specification document (`docs/sector-z.md`), the site supports:
- Dynamic routing for games and blog posts
- Lightbox functionality for media
- Newsletter subscription forms
- Filterable job listings

### Media Assets for Scroll Story
The `public/media/scroll/` directory contains optimized assets for the cinematic scroll experience:
- **Videos**: Hero background (WebM + MP4, ≤1080p, 10-15s loops) with poster images
- **Images**: Parallax layers, feature cards, devlog thumbnails, and CTA backgrounds
- **Performance**: All assets optimized for web delivery with progressive loading

## Key Features to Understand

### Accessibility Implementation
- Skip links for keyboard navigation
- Focus-visible styles with accent color
- Semantic HTML structure with proper landmarks
- ARIA labels for interactive elements

### Performance Features
- Image optimization with Next.js Image component
- Font optimization with next/font
- Compression and caching headers
- Lighthouse score targets: ≥90 across all categories

### Design System Usage
- Consistent spacing with Tailwind utilities
- Film grain overlay for atmospheric effect
- Hover animations with lift effects
- Cinematic typography with tight letter spacing

## Development Guidelines

### Adding New Components
- Place in appropriate `components/` subdirectory
- Use TypeScript interfaces for props
- Include className prop for styling flexibility
- Follow existing naming conventions

### Styling Patterns
- Use `cn()` utility for conditional classes (from `lib/utils.ts`)
- Prefer component composition over complex conditionals
- Maintain responsive design patterns
- Use CSS custom properties for theme consistency

### GSAP and Scroll Animations
- Always register plugins in client components: `gsap.registerPlugin(ScrollTrigger)`
- Use `gsap.context()` for proper cleanup and scoping
- Implement `prefersReducedMotion` checks to disable animations when needed
- Clean up ScrollTrigger instances on component unmount
- Use `will-change: transform` only on elements being animated
- Set `once: true` for entrance animations to improve performance

### Route Structure
- App Router with nested layouts
- Dynamic routes for content pages (`[slug]` pattern)
- Metadata optimization for each route
- Server/Client component split as needed

## Testing and Quality

No testing framework is currently configured. When adding tests, consider:
- Jest or Vitest for unit testing
- Playwright for e2e testing  
- React Testing Library for component tests

The ESLint configuration uses Next.js recommended rules with TypeScript support.