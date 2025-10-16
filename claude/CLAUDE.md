# CLAUDE.md - Neo Code Website Development Guide

## Project Overview

You are developing the Neo Code website, a modern Next.js application for an artisan software development company specializing in custom business applications for SMEs in France.

**Key Identity**: "Artisan du logiciel sur-mesure" - Craftsman of custom software
**Target**: Small and medium businesses (TPE/PME) in Dordogne, Gironde, and Paris
**Core Value Proposition**: Eliminating daily frictions (complex Excel files, paper processes, unreadable schedules) through custom, fluid, and sensible software solutions

## Session Guidelines

- Always read PLANNING.md at the start of every new conversation
- Check TASKS.md before starting your work
- Mark completed tasks immediately within TASKS.md
- Add newly discovered tasks to TASKS.md

## Technical Stack

```
Framework: Next.js 14+ (App Router)
Deployment: Vercel
Styling: Tailwind CSS + CSS Modules for custom animations
Animations: Framer Motion
Theme: Automatic dark/light based on system preferences
Images: Placeholder images using https://placehold.co/
Typography: Inter (body) + Poppins (headings) via next/font
```

## project practises

Always read PLANNING.md at the start of every new conversation, check TASKS.md before starting your work, mark completed tasks to TASKS.md immediately, and add newly discovered tasks to TASKS.md when found.

## Project Structure

```
app/
├── layout.tsx          # Root layout with theme provider
├── page.tsx           # Homepage with hero animation
├── expertise/
│   └── page.tsx       # Business understanding + agility
├── offres/
│   ├── page.tsx       # Offers hub page
│   ├── developpement-sur-mesure/
│   │   └── page.tsx   # From scratch development
│   └── modernisation/
│       └── page.tsx   # Application modernization
└── contact/
    └── page.tsx       # Contact with calendar + email

components/
├── layout/
│   ├── Header.tsx     # Main navigation
│   ├── Footer.tsx     # Footer with links
│   └── ThemeToggle.tsx # Dark/light theme switch
├── sections/
│   ├── Hero.tsx       # Homepage hero with geometric animation
│   ├── Problems.tsx   # Pain points section
│   ├── Approach.tsx   # Artisan approach section
│   ├── OffersPreview.tsx # Offers preview cards
│   ├── Testimonials.tsx  # Customer testimonials carousel
│   └── CTASection.tsx    # Generic CTA section
└── ui/
    ├── Button.tsx     # Button with gradient variant
    ├── Card.tsx       # Card with hover effects
    └── AnimatedText.tsx # Animated text reveals
```

## Design System

### Color Palette (CSS Variables)

The brand uses a vibrant cyan to magenta gradient inspired by the Neo Code logo.

```css
/* Light Mode */
--primary: #00d9ff (cyan) --secondary: #ff00ff (magenta) --accent-blue: #4d7fff
  --accent-purple: #9d4dff
  --gradient-primary: linear-gradient(
    135deg,
    #00d9ff 0%,
    #4d7fff 25%,
    #9d4dff 50%,
    #ff00ff 100%
  )
  /* Dark Mode */ /* Same vibrant colors with adjusted backgrounds */
  --background: #0f172a --surface: #1e293b;
```

### Typography

- Headings: Poppins (400, 600, 700)
- Body: Inter
- Warm, approachable tone
- Generous spacing

### Visual Style

- **Rounded corners**: 16-24px border radius for warmth
- **Gradient accents**: Cyan-magenta gradient on key elements
- **Generous whitespace**: Breathing room between sections
- **Subtle animations**: Fade-in on scroll, hover elevations

## Key Pages Implementation

### 1. Homepage (/)

**Hero Section**:

- Animated geometric grid background (CSS/SVG animation)
- Headline: "Artisan du logiciel sur-mesure"
- Subheadline about ending daily frictions
- Two CTAs: "Discutons de votre projet" + "Découvrir notre approche"

**Problems Section**:

- 3 cards: "Fini les frictions", "Fini la confusion", "Fini les blocages"
- Icons + bullet points of specific pain points
- Hover effects with border color change

**Approach Section**:

- 4 pillars with sequential reveal animation
- Deep listening → Custom design → Fast iterations → Continuous evolution

**Offers Preview**:

- 2 large cards side by side
- "From scratch development" + "Modernization"
- Image placeholders with scale on hover

**Testimonials**:

- Carousel with 3 fictional but realistic testimonials
- Industries: Home services, logistics, electrical contractors
- Detailed quotes with attribution

**Final CTA**:

- Full-width section with contrasting background
- "Un projet d'outil métier sur-mesure ?"

### 2. Expertise (/expertise)

Two main sections:

1. **Business Understanding**: Immersion approach, workshops, process mapping
2. **Agility**: 5-step methodology with visual timeline

### 3. Offers (/offres/\*)

**Hub Page**: Two large descriptive cards
**From Scratch**: Starting at €5,000 HT
**Modernization**: Starting at €2,000 HT

Each sub-page follows: Problem → Solution → Deliverables → Examples → Pricing

### 4. Contact (/contact)

Two columns:

- Left: Welcome text, contact details, service area
- Right: 3 action buttons
  - Book a 30-min slot (Google Calendar)
  - Send email (mailto)
  - LinkedIn profile

Contact info:

- Email: fabien@neo-code.fr
- Phone: 05 64 34 03 04
- Location: Bergerac, Dordogne
- Service area: Dordogne, Gironde, Paris

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://neo-code.fr
NEXT_PUBLIC_CONTACT_EMAIL=fabien@neo-code.fr
NEXT_PUBLIC_CONTACT_PHONE=0564340304
NEXT_PUBLIC_CALENDAR_LINK=https://calendar.app.google/cSdBEeedonw1CRKd8
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/108969312
```

## Key Components to Build

### 1. Button Component

```typescript
// Variants: primary, secondary, outline, ghost, gradient
// The gradient variant uses the brand cyan-magenta gradient
// Rounded corners (lg: rounded-2xl)
```

### 2. Card Component

```typescript
// Generous padding and rounded-2xl corners
// Optional gradient border variant
// Hover: elevation + slight translate-y
```

### 3. Hero Animation

```typescript
// Geometric grid pattern in background
// Subtle rotation and scale pulse
// Uses CSS @keyframes for performance
// Respects prefers-reduced-motion
```

### 4. AnimatedText

```typescript
// Framer Motion word-by-word reveal
// Stagger children by 0.1s
// Fade + slide-up animation
```

## Performance Requirements

- No backend or database (100% static)
- Core Web Vitals targets:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- Bundle size < 150KB gzipped
- All images lazy loaded except hero
- WebP format for all images

## Accessibility Checklist

- [ ] Color contrast ratios (4.5:1 minimum)
- [ ] Keyboard navigation for all interactive elements
- [ ] Skip links implementation
- [ ] Semantic HTML structure (proper heading hierarchy)
- [ ] Alt text for all images
- [ ] Focus visible indicators
- [ ] Respect prefers-reduced-motion
- [ ] ARIA labels where needed

## Animation Guidelines

- Hero geometric grid: Continuous subtle animation
- Scroll animations: IntersectionObserver triggered
- Hover states: 200-300ms transitions
- Page transitions: 500ms fade
- Sequential reveals: 200ms stagger delay
- Always respect `prefers-reduced-motion`

## Content Guidelines

### Tone of Voice

- Warm and approachable, not corporate
- Use "nous" and "vous" (formal but friendly)
- Focus on pain points and solutions
- Concrete examples over abstract concepts

### Key Messaging

- "Fini les..." (End of...) for pain points
- Emphasis on craftsmanship and customization
- Clear pricing: From €2,000 (modernization) / €5,000 (from scratch)
- Response within 24h on weekdays

### Placeholder Images

All images use placehold.co with brand colors:

```
Hero: https://placehold.co/1200x800/00D9FF/FF00FF/webp?text=Neo+Code
Cards: https://placehold.co/600x400/[color]/ffffff/webp?text=[Text]
```

## SEO Requirements

- Meta tags for each page with localized descriptions
- Structured data (JSON-LD) with LocalBusiness schema
- Sitemap.xml in public folder
- Robots.txt allowing all crawlers
- Open Graph images for social sharing

## Development Workflow

1. **Branch Strategy**: main → production on neo-code.fr
2. **Commit Convention**: feat/fix/style/refactor/docs prefix
3. **Testing Checklist**:
   - Desktop + mobile responsive
   - Dark + light theme
   - Accessibility (axe DevTools)
   - Performance (Lighthouse)
   - No console errors

## Priority Order for Development

### Week 1-2: Foundation + Homepage

1. Project setup with Next.js, Tailwind, Framer Motion
2. Theme system (dark/light)
3. Base components (Button, Card)
4. Header/Footer
5. Homepage with all sections
6. Hero animation

### Week 3: Inner Pages

1. Expertise page
2. Offers hub + sub-pages
3. Contact page

### Week 4: Polish + Deploy

1. Scroll animations
2. SEO optimization
3. Performance testing
4. Accessibility audit
5. Vercel deployment

## Common Pitfalls to Avoid

- Don't use localStorage/sessionStorage (not supported in artifacts)
- Don't over-animate (performance + accessibility)
- Don't forget mobile-first responsive design
- Don't use absolute imports without configuring tsconfig
- Don't forget to add loading states for dynamic content
- Don't use heavy libraries - keep bundle small

## Testing Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint check
npm run type-check   # TypeScript validation
npx lighthouse https://localhost:3000  # Performance audit
```

## Questions to Ask When Stuck

1. Is this component following the artisan/warm design principle?
2. Does this respect the cyan-magenta brand gradient?
3. Is the animation subtle enough for professional use?
4. Will this work without JavaScript (progressive enhancement)?
5. Is the text readable in both dark and light modes?
6. Does this add real value or is it just decoration?

## Final Checklist Before Deploy

- [ ] All placeholder images using placehold.co
- [ ] Environment variables configured
- [ ] No console.log statements
- [ ] All links working (especially contact links)
- [ ] Meta tags and SEO configured
- [ ] Lighthouse score > 90 on all metrics
- [ ] Tested on real mobile devices
- [ ] Dark/light theme working smoothly
- [ ] Contact methods verified (email, phone, calendar)
- [ ] Pricing clearly visible (€2,000 / €5,000)

---

**Remember**: This is an artisan's website. Every detail matters. The code should be as crafted and thoughtful as the message it conveys. Keep it warm, professional, and human-centered.
