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
**Status**: 🔴 Not Started

### Design System Setup

- [ ] 🔴 Create CSS variables for colors in globals.css
- [ ] 🔴 Setup dark/light theme provider with next-themes
- [ ] 🔴 Configure font loading (Inter + Poppins)
- [ ] 🔴 Create base typography styles
- [ ] 🔴 Setup responsive breakpoints

### Core UI Components

- [ ] 🔴 Create Button component with all variants
  - [ ] Primary, Secondary, Outline, Ghost, Gradient variants
  - [ ] Size variations (sm, md, lg)
  - [ ] Loading and disabled states
- [ ] 🔴 Create Card component
  - [ ] Basic card with hover effects
  - [ ] Gradient border variant
  - [ ] Responsive padding
- [ ] 🔴 Create Badge component
- [ ] 🔴 Create Container component for max-width wrapper
- [ ] 🔴 Create Link component with hover animations

### Layout Components

- [ ] 🔴 Create Header component
  - [ ] Logo placement
  - [ ] Navigation menu
  - [ ] Mobile hamburger menu
  - [ ] Theme toggle button
- [ ] 🔴 Create Footer component
  - [ ] Contact information
  - [ ] Quick links
  - [ ] Social links
  - [ ] Copyright notice
- [ ] 🔴 Create main Layout wrapper
- [ ] 🔴 Implement smooth scroll behavior
- [ ] 🔴 Add skip navigation link for accessibility

### Animation Components

- [ ] 🔴 Create AnimatedText component with Framer Motion
- [ ] 🔴 Create FadeIn component for scroll animations
- [ ] 🔴 Create SlideUp component for card reveals
- [ ] 🔴 Setup intersection observer hooks
- [ ] 🔴 Configure animation variants library

---

## Milestone 2: Homepage Implementation

**Target**: Day 6-10  
**Status**: 🔴 Not Started

### Hero Section

- [ ] 🔴 Create Hero component structure
- [ ] 🔴 Implement geometric grid background animation
  - [ ] SVG pattern creation
  - [ ] CSS keyframe animations
  - [ ] Gradient overlay
- [ ] 🔴 Add hero text content
  - [ ] Animated headline reveal
  - [ ] Subheadline with fade-in
- [ ] 🔴 Implement dual CTA buttons
- [ ] 🔴 Make hero section responsive
- [ ] 🔴 Optimize hero for LCP metric

### Problems Section

- [ ] 🔴 Create Problems section component
- [ ] 🔴 Design problem cards (3 columns)
  - [ ] "Fini les frictions" card
  - [ ] "Fini la confusion" card
  - [ ] "Fini les blocages" card
- [ ] 🔴 Add icons for each problem category
- [ ] 🔴 Implement hover animations on cards
- [ ] 🔴 Add scroll-triggered animations
- [ ] 🔴 Ensure mobile responsive layout

### Approach Section

- [ ] 🔴 Create Approach section component
- [ ] 🔴 Implement 4 pillars layout
  - [ ] "Écoute profonde" block
  - [ ] "Conception sur-mesure" block
  - [ ] "Itérations rapides" block
  - [ ] "Évolution continue" block
- [ ] 🔴 Add sequential reveal animation
- [ ] 🔴 Design icon system for pillars
- [ ] 🔴 Optimize for mobile (stack vertically)

### Offers Preview Section

- [ ] 🔴 Create OffersPreview component
- [ ] 🔴 Design offer cards (2 large cards)
  - [ ] "Développement from scratch" card
  - [ ] "Modernisation" card
- [ ] 🔴 Add placeholder images with gradient overlay
- [ ] 🔴 Implement scale animation on hover
- [ ] 🔴 Add CTA links to offer pages
- [ ] 🔴 Ensure responsive grid layout

### Testimonials Section

- [ ] 🔴 Create Testimonials carousel component
- [ ] 🔴 Add 3 fictional testimonials
  - [ ] Home services testimonial
  - [ ] Logistics testimonial
  - [ ] Electrical contractor testimonial
- [ ] 🔴 Implement carousel navigation (dots)
- [ ] 🔴 Add swipe gestures for mobile
- [ ] 🔴 Style quote cards with gradient accent
- [ ] 🔴 Add auto-play with pause on hover

### Final CTA Section

- [ ] 🔴 Create CTA section component
- [ ] 🔴 Design full-width contrasting background
- [ ] 🔴 Add compelling headline and subtitle
- [ ] 🔴 Implement primary CTA button
- [ ] 🔴 Add decorative illustration/pattern
- [ ] 🔴 Ensure section is visually prominent

### Homepage Integration

- [ ] 🔴 Assemble all sections in homepage
- [ ] 🔴 Verify section spacing and flow
- [ ] 🔴 Test all animations together
- [ ] 🔴 Check page performance metrics
- [ ] 🔴 Validate mobile responsiveness

---

## Milestone 3: Inner Pages Development

**Target**: Day 11-15  
**Status**: 🔴 Not Started

### Expertise Page

- [ ] 🔴 Create expertise page structure
- [ ] 🔴 Implement "Compréhension métier" section
  - [ ] Write compelling copy
  - [ ] Add supporting imagery
  - [ ] Design info cards
- [ ] 🔴 Implement "Agilité" section
  - [ ] Create 5-step process visualization
  - [ ] Add timeline component
  - [ ] Animate step reveals
- [ ] 🔴 Add page transitions
- [ ] 🔴 Optimize for SEO

### Offers Hub Page

- [ ] 🔴 Create offers landing page
- [ ] 🔴 Design service comparison layout
- [ ] 🔴 Implement navigation to sub-pages
- [ ] 🔴 Add introductory content
- [ ] 🔴 Create visual hierarchy

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

- [ ] 🔴 Create contact page layout (2 columns)
- [ ] 🔴 Add welcome text and value proposition
- [ ] 🔴 Implement contact methods
  - [ ] Google Calendar integration button
  - [ ] Email button with mailto
  - [ ] Phone number with tel link
  - [ ] LinkedIn profile link
- [ ] 🔴 Display office location (Bergerac)
- [ ] 🔴 Add service area information
- [ ] 🔴 Style with brand gradient accents
- [ ] 🔴 Ensure mobile-friendly layout

---

## Milestone 4: Polish & Optimization

**Target**: Day 16-20  
**Status**: 🔴 Not Started

### SEO Implementation

- [ ] 🔴 Add meta tags to all pages
- [ ] 🔴 Create Open Graph images
- [ ] 🔴 Implement JSON-LD structured data
- [ ] 🔴 Generate sitemap.xml
- [ ] 🔴 Create robots.txt
- [ ] 🔴 Add canonical URLs
- [ ] 🔴 Optimize page titles and descriptions

### Performance Optimization

- [ ] 🔴 Optimize all images
  - [ ] Convert to WebP format
  - [ ] Add proper sizing
  - [ ] Implement lazy loading
- [ ] 🔴 Minimize JavaScript bundle
- [ ] 🔴 Implement code splitting
- [ ] 🔴 Add resource hints (preconnect, prefetch)
- [ ] 🔴 Optimize font loading
- [ ] 🔴 Enable static generation for all pages
- [ ] 🔴 Configure caching headers

### Accessibility Audit

- [ ] 🔴 Check color contrast ratios (4.5:1 minimum)
- [ ] 🔴 Verify keyboard navigation
- [ ] 🔴 Add ARIA labels where needed
- [ ] 🔴 Test with screen reader
- [ ] 🔴 Ensure focus indicators are visible
- [ ] 🔴 Validate heading hierarchy
- [ ] 🔴 Add alt text to all images
- [ ] 🔴 Test reduced motion preferences

### Cross-Browser Testing

- [ ] 🔴 Test on Chrome
- [ ] 🔴 Test on Firefox
- [ ] 🔴 Test on Safari
- [ ] 🔴 Test on Edge
- [ ] 🔴 Test on mobile browsers (iOS Safari, Chrome)
- [ ] 🔴 Fix any browser-specific issues

### Animation Polish

- [ ] 🔴 Fine-tune all animation timings
- [ ] 🔴 Add micro-interactions to buttons
- [ ] 🔴 Implement page transition animations
- [ ] 🔴 Ensure animations respect prefers-reduced-motion
- [ ] 🔴 Optimize animation performance
- [ ] 🔴 Test animation smoothness on mobile

### Content Review

- [ ] 🔴 Proofread all text content
- [ ] 🔴 Verify all placeholder images
- [ ] 🔴 Check all links work correctly
- [ ] 🔴 Validate contact information
- [ ] 🔴 Review pricing information
- [ ] 🔴 Ensure consistent tone of voice

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
Completed: 18
In Progress: 0
Completion: 7%
```

### Milestone Status

- Milestone 0: 🟢 90% (18/20 tasks) - 2 optional tasks remaining
- Milestone 1: 🔴 0% (0/25 tasks)
- Milestone 2: 🔴 0% (0/45 tasks)
- Milestone 3: 🔴 0% (0/38 tasks)
- Milestone 4: 🔴 0% (0/40 tasks)
- Milestone 5: 🔴 0% (0/35 tasks)
- Milestone 6: 🔴 0% (0/35 tasks)
- Milestone 7: 🔴 0% (0/20 tasks)

### Time Tracking

- Estimated Total: 160 hours (4 weeks × 40 hours)
- Actual Spent: 1 hour
- Remaining: 159 hours

---

**Last Updated**: October 3, 2024
**Next Review**: Start Milestone 1
**Sprint**: Foundation Setup Complete
