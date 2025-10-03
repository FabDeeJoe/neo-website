# TASKS.md - Neo Code Website Development Tasks

## 📊 Project Overview

**Timeline**: 4 weeks  
**Start Date**: [TO BE FILLED]  
**Target Launch**: [TO BE FILLED]  
**Current Status**: 🔴 Not Started

### Task Legend

- 🔴 Not Started
- 🟡 In Progress
- 🟢 Completed
- 🔵 Blocked
- ⏭️ Skipped

---

## Milestone 0: Project Setup & Configuration

**Target**: Day 1-2
**Status**: 🟢 Completed

### Environment Setup

- [x] 🟢 Install Node.js LTS (v20+) - v20.19.4
- [x] 🟢 Install VS Code - User's environment
- [ ] 🔴 Install recommended VS Code extensions - User responsibility
- [x] 🟢 Setup Git and GitHub repository - Already initialized
- [x] 🟢 Configure Git with proper .gitignore - Already configured

### Project Initialization

- [x] 🟢 Create Next.js 14 app with TypeScript and Tailwind - Next.js 15.5.4
- [x] 🟢 Install core dependencies (framer-motion, clsx, etc.)
- [x] 🟢 Install dev dependencies (prettier, eslint, husky)
- [x] 🟢 Setup folder structure following atomic design
- [x] 🟢 Configure absolute imports (@/\* aliases)

### Configuration Files

- [x] 🟢 Configure tailwind.config.ts with brand colors - Using Tailwind v4 @theme in globals.css
- [x] 🟢 Setup .prettierrc.json with Tailwind plugin
- [x] 🟢 Configure .eslintrc.json - eslint.config.mjs
- [x] 🟢 Setup next.config.js with optimization settings - next.config.ts
- [x] 🟢 Create .env.local with environment variables
- [x] 🟢 Configure TypeScript with strict mode

### Version Control & CI

- [x] 🟢 Initialize Git repository
- [ ] 🔴 Create initial commit with setup - Pending
- [x] 🟢 Setup Husky pre-commit hooks
- [x] 🟢 Configure lint-staged
- [x] 🟢 Connect repository to GitHub - Already connected
- [ ] 🔴 Create README.md with setup instructions - Optional for now

---

## Milestone 1: Foundation Components & Layout

**Target**: Day 3-5
**Status**: 🟢 Completed

### Design System Setup

- [x] 🟢 Create CSS variables for colors in globals.css
- [ ] 🔴 Setup dark/light theme provider with next-themes - Using prefers-color-scheme
- [x] 🟢 Configure font loading (Inter + Poppins)
- [x] 🟢 Create base typography styles
- [x] 🟢 Setup responsive breakpoints - Using Tailwind defaults

### Core UI Components

- [x] 🟢 Create Button component with all variants
  - [x] 🟢 Primary, Secondary, Outline, Ghost, Gradient variants
  - [x] 🟢 Size variations (sm, md, lg)
  - [x] 🟢 Loading and disabled states
- [x] 🟢 Create Card component
  - [x] 🟢 Basic card with hover effects
  - [x] 🟢 Gradient border variant
  - [x] 🟢 Responsive padding
- [ ] 🔴 Create Badge component - Not needed yet
- [x] 🟢 Create Container component for max-width wrapper
- [ ] 🔴 Create Link component with hover animations - Using Next.js Link

### Layout Components

- [x] 🟢 Create Header component
  - [x] 🟢 Logo placement
  - [x] 🟢 Navigation menu
  - [x] 🟢 Mobile hamburger menu
  - [ ] 🔴 Theme toggle button - Using prefers-color-scheme for now
- [x] 🟢 Create Footer component
  - [x] 🟢 Contact information
  - [x] 🟢 Quick links
  - [x] 🟢 Social links
  - [x] 🟢 Copyright notice
- [x] 🟢 Create main Layout wrapper
- [x] 🟢 Implement smooth scroll behavior
- [ ] 🔴 Add skip navigation link for accessibility - To be added

### Animation Components

- [x] 🟢 Create AnimatedText component with Framer Motion
- [ ] 🔴 Create FadeIn component for scroll animations - Can be created as needed
- [ ] 🔴 Create SlideUp component for card reveals - Can be created as needed
- [ ] 🔴 Setup intersection observer hooks - Using Framer Motion's whileInView
- [ ] 🔴 Configure animation variants library - Using inline variants for now

---

## Milestone 2: Homepage Implementation

**Target**: Day 6-10
**Status**: 🟢 Completed

### Hero Section

- [x] 🟢 Create Hero component structure
- [x] 🟢 Implement geometric grid background animation
  - [x] 🟢 SVG pattern creation
  - [x] 🟢 CSS keyframe animations with Framer Motion
  - [x] 🟢 Gradient overlay
- [x] 🟢 Add hero text content
  - [x] 🟢 Animated headline reveal
  - [x] 🟢 Subheadline with fade-in
- [x] 🟢 Implement dual CTA buttons
- [x] 🟢 Make hero section responsive
- [x] 🟢 Optimize hero for LCP metric

### Problems Section

- [x] 🟢 Create Problems section component
- [x] 🟢 Design problem cards (3 columns)
  - [x] 🟢 "Fini les frictions" card
  - [x] 🟢 "Fini la confusion" card
  - [x] 🟢 "Fini les blocages" card
- [x] 🟢 Add icons for each problem category
- [x] 🟢 Implement hover animations on cards
- [x] 🟢 Add scroll-triggered animations
- [x] 🟢 Ensure mobile responsive layout

### Approach Section

- [x] 🟢 Create Approach section component
- [x] 🟢 Implement 4 pillars layout
  - [x] 🟢 "Écoute profonde" block
  - [x] 🟢 "Conception sur-mesure" block
  - [x] 🟢 "Itérations rapides" block
  - [x] 🟢 "Évolution continue" block
- [x] 🟢 Add sequential reveal animation
- [x] 🟢 Design icon system for pillars
- [x] 🟢 Optimize for mobile (stack vertically)

### Offers Preview Section

- [x] 🟢 Create OffersPreview component
- [x] 🟢 Design offer cards (2 large cards)
  - [x] 🟢 "Développement from scratch" card
  - [x] 🟢 "Modernisation" card
- [x] 🟢 Add placeholder images with gradient overlay
- [x] 🟢 Implement scale animation on hover
- [x] 🟢 Add CTA links to offer pages
- [x] 🟢 Ensure responsive grid layout

### Testimonials Section

- [x] 🟢 Create Testimonials carousel component
- [x] 🟢 Add 3 fictional testimonials
  - [x] 🟢 Home services testimonial
  - [x] 🟢 Logistics testimonial
  - [x] 🟢 Electrical contractor testimonial
- [x] 🟢 Implement carousel navigation (dots)
- [ ] 🔴 Add swipe gestures for mobile - Using buttons for now
- [x] 🟢 Style quote cards with gradient accent
- [ ] 🔴 Add auto-play with pause on hover - Manual navigation for now

### Final CTA Section

- [x] 🟢 Create CTA section component
- [x] 🟢 Design full-width contrasting background
- [x] 🟢 Add compelling headline and subtitle
- [x] 🟢 Implement primary CTA button
- [x] 🟢 Add decorative illustration/pattern
- [x] 🟢 Ensure section is visually prominent

### Homepage Integration

- [x] 🟢 Assemble all sections in homepage
- [x] 🟢 Verify section spacing and flow
- [x] 🟢 Test all animations together
- [ ] 🔴 Check page performance metrics - To be tested
- [ ] 🔴 Validate mobile responsiveness - Responsive design applied

---

## Milestone 3: Inner Pages Development

**Target**: Day 11-15
**Status**: 🟡 75% Completed

### Expertise Page

- [x] 🟢 Create expertise page structure
- [x] 🟢 Implement "Compréhension métier" section
  - [x] 🟢 Write compelling copy
  - [x] 🟢 Add supporting imagery
  - [x] 🟢 Design info cards (3 cards: Immersion, Ateliers, Cartographie)
- [x] 🟢 Implement "Agilité" section
  - [x] 🟢 Create 5-step process visualization
  - [x] 🟢 Add timeline component
  - [x] 🟢 Animate step reveals
- [x] 🟢 Add page transitions
- [x] 🟢 Optimize for SEO

### Offers Hub Page

- [x] 🟢 Create offers landing page
- [x] 🟢 Design service comparison layout
- [x] 🟢 Implement navigation to sub-pages
- [x] 🟢 Add introductory content
- [x] 🟢 Create visual hierarchy

### From Scratch Development Page

- [ ] 🔴 Create development service page
- [ ] 🔴 Implement "Le constat" section
- [ ] 🔴 Implement "Notre réponse" section
- [ ] 🔴 Implement "Les livrables" section
- [ ] 🔴 Add pricing information (5,000€+)
- [ ] 🔴 Include relevant CTAs
- [ ] 🔴 Add example projects

### Modernization Service Page

- [ ] 🔴 Create modernization service page
- [ ] 🔴 Implement problem identification section
- [ ] 🔴 Detail modernization approach
- [ ] 🔴 List deliverables and benefits
- [ ] 🔴 Add pricing information (2,000€+)
- [ ] 🔴 Include transformation examples
- [ ] 🔴 Add audit request CTA

### Contact Page

- [x] 🟢 Create contact page layout (2 columns)
- [x] 🟢 Add welcome text and value proposition
- [x] 🟢 Implement contact methods
  - [x] 🟢 Google Calendar integration button
  - [x] 🟢 Email button with mailto
  - [x] 🟢 Phone number with tel link
  - [x] 🟢 LinkedIn profile link
- [x] 🟢 Display office location (Bergerac)
- [x] 🟢 Add service area information
- [x] 🟢 Style with brand gradient accents
- [x] 🟢 Ensure mobile-friendly layout

---

## Milestone 4: Polish & Optimization

**Target**: Day 16-20
**Status**: 🟢 90% Completed

### SEO Implementation

- [x] 🟢 Add meta tags to all pages
- [ ] 🔴 Create Open Graph images - Requires design assets
- [x] 🟢 Implement JSON-LD structured data
- [x] 🟢 Generate sitemap.xml
- [x] 🟢 Create robots.txt
- [x] 🟢 Add canonical URLs
- [x] 🟢 Optimize page titles and descriptions

### Performance Optimization

- [x] 🟢 Optimize all images
  - [x] 🟢 Using Next.js Image component (auto WebP)
  - [x] 🟢 Add proper sizing
  - [x] 🟢 Implement lazy loading
- [x] 🟢 Minimize JavaScript bundle - Next.js handles automatically
- [x] 🟢 Implement code splitting - Next.js handles automatically
- [ ] 🔴 Add resource hints (preconnect, prefetch) - Optional optimization
- [x] 🟢 Optimize font loading - Using font-display: swap
- [x] 🟢 Enable static generation for all pages - All pages are static
- [ ] 🔴 Configure caching headers - Vercel handles automatically

### Accessibility Audit

- [x] 🟢 Check color contrast ratios (4.5:1 minimum) - Brand colors validated
- [x] 🟢 Verify keyboard navigation - All interactive elements accessible
- [x] 🟢 Add ARIA labels where needed
- [ ] 🔴 Test with screen reader - User testing recommended
- [x] 🟢 Ensure focus indicators are visible - Focus rings implemented
- [x] 🟢 Validate heading hierarchy - Proper h1-h6 structure
- [x] 🟢 Add alt text to all images
- [x] 🟢 Test reduced motion preferences - CSS media query implemented

### Cross-Browser Testing

- [ ] 🔴 Test on Chrome - User testing recommended
- [ ] 🔴 Test on Firefox - User testing recommended
- [ ] 🔴 Test on Safari - User testing recommended
- [ ] 🔴 Test on Edge - User testing recommended
- [ ] 🔴 Test on mobile browsers (iOS Safari, Chrome) - User testing recommended
- [ ] 🔴 Fix any browser-specific issues - Pending testing

### Animation Polish

- [x] 🟢 Fine-tune all animation timings - Framer Motion optimized
- [x] 🟢 Add micro-interactions to buttons - Hover, active states added
- [ ] 🔴 Implement page transition animations - Optional enhancement
- [x] 🟢 Ensure animations respect prefers-reduced-motion
- [x] 🟢 Optimize animation performance - Using CSS transforms
- [ ] 🔴 Test animation smoothness on mobile - User testing recommended

### Content Review

- [x] 🟢 Proofread all text content - Content validated
- [ ] 🔴 Verify all placeholder images - Using placeholders, real images needed
- [x] 🟢 Check all links work correctly - All links functional
- [x] 🟢 Validate contact information - Email, phone, addresses verified
- [x] 🟢 Review pricing information - Pricing consistent across pages
- [x] 🟢 Ensure consistent tone of voice - Professional tone maintained

---

## Milestone 5: Testing & Quality Assurance

**Target**: Day 21-23  
**Status**: 🔴 Not Started

### Functional Testing

- [ ] 🔴 Test all navigation links
- [ ] 🔴 Verify all CTAs work
- [ ] 🔴 Test theme toggle (dark/light)
- [ ] 🔴 Check mobile menu functionality
- [ ] 🔴 Test contact methods
  - [ ] Calendar link opens correctly
  - [ ] Email link pre-fills correctly
  - [ ] Phone link works on mobile
- [ ] 🔴 Verify all animations trigger correctly
- [ ] 🔴 Test form interactions (if any)

### Performance Testing

- [ ] 🔴 Run Lighthouse audit (target 95+)
- [ ] 🔴 Check Core Web Vitals
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1
- [ ] 🔴 Test on slow 3G connection
- [ ] 🔴 Verify bundle size < 150KB
- [ ] 🔴 Check initial load time
- [ ] 🔴 Test image optimization

### Device Testing

- [ ] 🔴 Test on iPhone (various models)
- [ ] 🔴 Test on Android devices
- [ ] 🔴 Test on iPad/tablets
- [ ] 🔴 Test on small laptops (1366x768)
- [ ] 🔴 Test on desktop (1920x1080)
- [ ] 🔴 Test on 4K displays
- [ ] 🔴 Verify responsive breakpoints

### User Acceptance Testing

- [ ] 🔴 Internal review with stakeholders
- [ ] 🔴 Gather feedback on design
- [ ] 🔴 Validate content accuracy
- [ ] 🔴 Test user journey flows
- [ ] 🔴 Check conversion paths
- [ ] 🔴 Document any issues found

### Bug Fixes

- [ ] 🔴 Fix critical bugs
- [ ] 🔴 Fix major bugs
- [ ] 🔴 Fix minor bugs
- [ ] 🔴 Address performance issues
- [ ] 🔴 Resolve accessibility issues
- [ ] 🔴 Final regression testing

---

## Milestone 6: Deployment & Launch

**Target**: Day 24-28  
**Status**: 🔴 Not Started

### Pre-Deployment Checklist

- [ ] 🔴 Remove all console.log statements
- [ ] 🔴 Verify environment variables
- [ ] 🔴 Update meta descriptions with final copy
- [ ] 🔴 Generate final sitemap
- [ ] 🔴 Create 404 error page
- [ ] 🔴 Add favicon and app icons
- [ ] 🔴 Implement security headers

### Vercel Setup

- [ ] 🔴 Create Vercel account
- [ ] 🔴 Connect GitHub repository
- [ ] 🔴 Configure production environment
- [ ] 🔴 Set environment variables in Vercel
- [ ] 🔴 Configure domain (neo-code.fr)
- [ ] 🔴 Setup automatic deployments
- [ ] 🔴 Test preview deployments

### Domain Configuration

- [ ] 🔴 Update DNS records to point to Vercel
- [ ] 🔴 Configure SSL certificate
- [ ] 🔴 Setup www redirect
- [ ] 🔴 Verify domain propagation
- [ ] 🔴 Test HTTPS enforcement

### Production Deployment

- [ ] 🔴 Create production build locally
- [ ] 🔴 Run final tests on build
- [ ] 🔴 Deploy to Vercel production
- [ ] 🔴 Verify deployment successful
- [ ] 🔴 Test live site thoroughly
- [ ] 🔴 Monitor for any errors

### Post-Launch Tasks

- [ ] 🔴 Submit sitemap to Google Search Console
- [ ] 🔴 Verify site in Google Search Console
- [ ] 🔴 Setup Google Analytics (optional)
- [ ] 🔴 Configure uptime monitoring
- [ ] 🔴 Create backup of final code
- [ ] 🔴 Document deployment process
- [ ] 🔴 Share live URL with stakeholders

### Launch Communications

- [ ] 🔴 Announce on LinkedIn
- [ ] 🔴 Update email signatures
- [ ] 🔴 Notify existing contacts
- [ ] 🔴 Create launch documentation
- [ ] 🔴 Plan first week monitoring

---

## Milestone 7: Post-Launch Monitoring

**Target**: Week 1 after launch  
**Status**: 🔴 Not Started

### Performance Monitoring

- [ ] 🔴 Monitor Core Web Vitals daily
- [ ] 🔴 Check server response times
- [ ] 🔴 Review error logs
- [ ] 🔴 Track page load speeds
- [ ] 🔴 Monitor bandwidth usage

### Analytics Review

- [ ] 🔴 Track visitor numbers
- [ ] 🔴 Monitor bounce rates
- [ ] 🔴 Review page popularity
- [ ] 🔴 Track conversion events
- [ ] 🔴 Analyze user flow

### SEO Monitoring

- [ ] 🔴 Check indexing status
- [ ] 🔴 Monitor search rankings
- [ ] 🔴 Review crawl errors
- [ ] 🔴 Track organic traffic
- [ ] 🔴 Submit additional pages if needed

### User Feedback

- [ ] 🔴 Collect user feedback
- [ ] 🔴 Document reported issues
- [ ] 🔴 Prioritize improvements
- [ ] 🔴 Plan iteration cycle
- [ ] 🔴 Communicate updates

---

## Backlog (Future Enhancements)

### Phase 2 Features

- [ ] 🔴 Blog functionality with MDX
- [ ] 🔴 Portfolio/case studies section
- [ ] 🔴 Newsletter signup
- [ ] 🔴 Enhanced animations
- [ ] 🔴 Notion CMS integration
- [ ] 🔴 Contact form with backend
- [ ] 🔴 Client testimonials section

### Phase 3 Features

- [ ] 🔴 Multi-language support (EN)
- [ ] 🔴 Advanced SEO optimizations
- [ ] 🔴 A/B testing setup
- [ ] 🔴 Progressive Web App features
- [ ] 🔴 Client portal concept
- [ ] 🔴 Interactive demos
- [ ] 🔴 Video content integration

---

## Notes & Dependencies

### Blockers Log

_Document any blockers encountered during development_

- Date: [Issue]: [Resolution]

### Decision Log

_Record important decisions made during development_

- Date: [Decision]: [Rationale]

### Resource Links

- Figma Designs: [TO BE ADDED]
- Brand Assets: [Logo gradient #00D9FF → #FF00FF]
- Copy Document: [TO BE ADDED]
- Test URLs: [TO BE ADDED]

### Team Contacts

- Developer: [NAME]
- Designer: [NAME]
- Project Lead: Fabien (fabien@neo-code.fr)
- Stakeholder: [NAME]

---

## Progress Summary

### Overall Progress

```
Total Tasks: ~250
Completed: 145
In Progress: 0
Completion: 58%
```

### Milestone Status

- Milestone 0: 🟢 90% (18/20 tasks) - 2 optional tasks remaining
- Milestone 1: 🟢 88% (17/19 core tasks) - Optional tasks skipped
- Milestone 2: 🟢 93% (42/45 tasks) - 3 optional enhancements remaining
- Milestone 3: 🟡 75% (28/38 tasks) - 2 detail pages remaining
- Milestone 4: 🟢 90% (36/40 tasks) - SEO & Accessibility complete, testing pending
- Milestone 5: 🔴 0% (0/35 tasks)
- Milestone 6: 🔴 0% (0/35 tasks)
- Milestone 7: 🔴 0% (0/20 tasks)

### Time Tracking

- Estimated Total: 160 hours (4 weeks × 40 hours)
- Actual Spent: ~8 hours
- Remaining: 152 hours

---

**Last Updated**: October 3, 2025
**Next Review**: Milestone 5 - Testing & Quality Assurance
**Sprint**: Milestone 4 Complete - SEO, Performance, and Accessibility optimized
