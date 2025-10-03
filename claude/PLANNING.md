# PLANNING.md - Neo Code Website Strategic Planning

## 🎯 Vision & Mission

### Company Vision

**Neo Code** positions itself as the **artisan of custom software** - a craftsman approach to digital solutions for SMEs who are drowning in Excel files, paper processes, and generic software that doesn't fit their unique needs.

### Website Mission

Create a **high-converting, performance-optimized website** that:

- Communicates the end of daily business frictions
- Establishes trust through transparent pricing and local presence
- Generates qualified leads through multiple low-friction contact methods
- Showcases the artisan approach to custom software development

### Success Metrics

- **Conversion Rate**: 5%+ visitor-to-contact rate
- **Performance**: 95+ Lighthouse score
- **Load Time**: < 1.5s FCP on 4G
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: First page for "logiciel sur mesure Dordogne/Gironde"

## 🏗️ Architecture Overview

### Application Type

**Static Site Generation (SSG)** with Next.js

- No backend required (cost-efficient)
- No database (simplified maintenance)
- API-ready for future Notion integration
- Edge-optimized via Vercel's CDN

### Architecture Diagram

```
┌─────────────────────────────────────────┐
│           Vercel Edge Network           │
├─────────────────────────────────────────┤
│          Next.js Application            │
├──────────────┬──────────────────────────┤
│   App Router │     Static Assets        │
├──────────────┼──────────────────────────┤
│    Pages     │   Images (WebP/AVIF)     │
│  - Home      │   Fonts (WOFF2)          │
│  - Expertise │   CSS (Tailwind)         │
│  - Offers    │   JS Bundles (Optimized) │
│  - Contact   │                          │
└──────────────┴──────────────────────────┘
        │                    │
        ▼                    ▼
┌──────────────┐    ┌──────────────┐
│ Google       │    │   Future     │
│ Calendar API │    │  Notion API  │
└──────────────┘    └──────────────┘
```

### Routing Structure

```
/ (homepage)
├── /expertise
├── /offres
│   ├── /developpement-sur-mesure
│   └── /modernisation
├── /contact
├── /realisations (future)
└── /blog (future)
```

### Component Architecture

```
Atomic Design Pattern:
├── Atoms (ui/)
│   ├── Button
│   ├── Badge
│   └── Link
├── Molecules (components/)
│   ├── Card
│   ├── AnimatedText
│   └── GradientBorder
├── Organisms (sections/)
│   ├── Hero
│   ├── Testimonials
│   ├── ProcessSteps
│   └── CTASection
├── Templates (layouts/)
│   ├── PageLayout
│   └── SectionLayout
└── Pages (app/)
```

## 💻 Technology Stack

### Core Framework

| Technology     | Version | Purpose         | Justification                                          |
| -------------- | ------- | --------------- | ------------------------------------------------------ |
| **Next.js**    | 14.2+   | React Framework | App Router, SSG, Image optimization, Font optimization |
| **React**      | 18.3+   | UI Library      | Component-based architecture, Hooks, Server Components |
| **TypeScript** | 5.5+    | Type Safety     | Better DX, fewer runtime errors, self-documenting code |

### Styling & Animation

| Technology                   | Version | Purpose            | Justification                                                  |
| ---------------------------- | ------- | ------------------ | -------------------------------------------------------------- |
| **Tailwind CSS**             | 3.4+    | Utility CSS        | Rapid development, consistent design system, small bundle      |
| **CSS Modules**              | Native  | Scoped styles      | For complex animations not suitable for Tailwind               |
| **Framer Motion**            | 11.0+   | Animations         | Declarative animations, gesture support, optimized performance |
| **class-variance-authority** | 0.7+    | Component variants | Type-safe component styling variants                           |

### Development Tools

| Technology      | Version | Purpose              | Justification             |
| --------------- | ------- | -------------------- | ------------------------- |
| **ESLint**      | 8.57+   | Linting              | Code quality, consistency |
| **Prettier**    | 3.3+    | Formatting           | Consistent code style     |
| **Husky**       | 9.0+    | Git hooks            | Pre-commit validation     |
| **lint-staged** | 15.2+   | Staged files linting | Faster commit hooks       |

### Optimization & Performance

| Technology                | Version  | Purpose            | Justification                       |
| ------------------------- | -------- | ------------------ | ----------------------------------- |
| **next/image**            | Built-in | Image optimization | WebP/AVIF, lazy loading, responsive |
| **next/font**             | Built-in | Font optimization  | FOUL prevention, variable fonts     |
| **@next/bundle-analyzer** | 14.2+    | Bundle analysis    | Identify optimization opportunities |

### Future Integrations (Phase 2)

| Technology           | Version | Purpose        | Justification                |
| -------------------- | ------- | -------------- | ---------------------------- |
| **@notionhq/client** | 2.2+    | Notion API     | Blog & portfolio content     |
| **MDX**              | 3.0+    | Content format | Rich content with components |
| **Zod**              | 3.23+   | Validation     | API response validation      |

## 🛠️ Required Tools & Setup

### Development Environment

#### Required Software

```bash
# Node.js (LTS version)
node --version  # Should be >= 20.0.0

# Package Manager (choose one)
npm --version   # >= 10.0.0
pnpm --version  # >= 8.0.0 (recommended for speed)
yarn --version  # >= 1.22.0

# Git
git --version   # >= 2.40.0

# Code Editor
# VS Code (recommended) or similar
```

#### VS Code Extensions (Recommended)

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "csstools.postcss",
    "dsznajder.es7-react-js-snippets",
    "christian-kohler.path-intellisense",
    "formulahendry.auto-rename-tag",
    "yoavbls.pretty-ts-errors",
    "unifiedjs.vscode-mdx"
  ]
}
```

### Project Dependencies

#### Initial Setup Commands

```bash
# Create Next.js project
npx create-next-app@latest neo-code-website \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-eslint

# Navigate to project
cd neo-code-website

# Install core dependencies
npm install \
  framer-motion \
  class-variance-authority \
  clsx \
  tailwind-merge \
  @radix-ui/react-slot

# Install dev dependencies
npm install -D \
  @types/node \
  @types/react \
  @types/react-dom \
  eslint \
  eslint-config-next \
  prettier \
  prettier-plugin-tailwindcss \
  @next/bundle-analyzer \
  husky \
  lint-staged

# Initialize Husky
npx husky init

# Setup lint-staged
npm pkg set scripts.prepare="husky install"
```

#### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "analyze": "ANALYZE=true next build",
    "test:lighthouse": "npx lighthouse http://localhost:3000 --view",
    "clean": "rm -rf .next out node_modules",
    "prepare": "husky install"
  }
}
```

### Configuration Files

#### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

#### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00D9FF',
          dark: '#00B8E6',
          light: '#4DE8FF',
        },
        secondary: {
          DEFAULT: '#FF00FF',
          dark: '#E600E6',
          light: '#FF66FF',
        },
        accent: {
          blue: '#4D7FFF',
          purple: '#9D4DFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

#### .prettierrc.json

```json
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindConfig": "./tailwind.config.ts"
}
```

#### .eslintrc.json

```json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "prefer-const": "error",
    "react/no-unescaped-entities": "off"
  }
}
```

### External Services & Accounts

#### Required Accounts

| Service                   | Purpose               | Setup Required                            |
| ------------------------- | --------------------- | ----------------------------------------- |
| **Vercel**                | Hosting & Deployment  | Free tier sufficient, connect GitHub repo |
| **Google Calendar**       | Appointment booking   | Already configured (link in env)          |
| **LinkedIn**              | Professional presence | Company page already created              |
| **GitHub**                | Version control       | Repository for code                       |
| **Google Search Console** | SEO monitoring        | Verify domain ownership                   |
| **Google Analytics**      | Traffic analytics     | GA4 property (optional)                   |

#### Domain & DNS

```
Domain: neo-code.fr
DNS: Configure A/CNAME records to Vercel
SSL: Automatic via Vercel
```

#### Environment Variables

```bash
# Production (.env.production)
NEXT_PUBLIC_SITE_URL=https://neo-code.fr
NEXT_PUBLIC_CONTACT_EMAIL=fabien@neo-code.fr
NEXT_PUBLIC_CONTACT_PHONE=0564340304
NEXT_PUBLIC_CALENDAR_LINK=https://calendar.app.google/cSdBEeedonw1CRKd8
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/108969312

# Development (.env.local)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# ... same as production for other vars

# Future (Phase 2)
NOTION_API_KEY=secret_xxx
NOTION_DATABASE_REALISATIONS=xxx
NOTION_DATABASE_BLOG=xxx
```

## 📋 Development Checklist

### Pre-Development

- [ ] Node.js LTS installed
- [ ] Git repository created
- [ ] VS Code + extensions installed
- [ ] Vercel account created
- [ ] Domain DNS configured
- [ ] Environment variables documented

### Development Phase

- [ ] Project initialized with Next.js
- [ ] Dependencies installed
- [ ] Tailwind configured with brand colors
- [ ] Git hooks setup (Husky + lint-staged)
- [ ] Component structure created
- [ ] Pages implemented
- [ ] Animations added
- [ ] Dark/light theme working
- [ ] Mobile responsive
- [ ] SEO meta tags added

### Pre-Deployment

- [ ] Bundle size analyzed (< 150KB JS)
- [ ] Lighthouse audit (> 90 all metrics)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Contact methods verified
- [ ] Environment variables in Vercel

### Post-Deployment

- [ ] Domain pointing to Vercel
- [ ] SSL certificate active
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Analytics configured (optional)
- [ ] Performance monitoring active
- [ ] First backup created

## 🚀 Deployment Strategy

### Environments

1. **Development**: Local development on `localhost:3000`
2. **Preview**: Automatic Vercel preview deployments for PRs
3. **Production**: Main branch auto-deploys to `neo-code.fr`

### Deployment Flow

```
feature/* branch → PR → Preview Deploy → Review → Merge to main → Production
```

### Rollback Strategy

- Vercel instant rollback to previous deployment
- Git revert for code rollback
- Always tag releases: `v1.0.0`, `v1.1.0`, etc.

## 📈 Success Criteria

### Launch (Week 4)

- ✅ Site live on neo-code.fr
- ✅ All pages accessible
- ✅ Contact methods working
- ✅ Mobile responsive
- ✅ Performance > 90 Lighthouse

### Month 1

- 📊 100+ unique visitors
- 📧 5+ qualified leads
- 🔍 Indexed by Google
- 🎯 Zero critical bugs
- ⚡ Consistent < 2s load time

### Month 3

- 📈 500+ monthly visitors
- 💼 2+ clients acquired
- ✍️ Blog section active (Phase 2)
- 🏆 Portfolio with 3+ projects
- 🎯 Top 3 local SEO rankings

## 🔄 Future Iterations

### Phase 2 (Month 2-3)

- Notion integration for blog
- Portfolio/case studies section
- Newsletter signup
- Contact form with backend
- Advanced animations

### Phase 3 (Month 4-6)

- Multi-language support (EN)
- Client portal concept
- Testimonials video
- Advanced SEO optimization
- A/B testing implementation

## 📚 Resources & Documentation

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Deployment](https://vercel.com/docs)

### Design Resources

- [Brand Colors](Logo gradient: #00D9FF → #FF00FF)
- [Placeholder Images](https://placehold.co/)
- [Icons](Lucide React or Heroicons)
- [Fonts](Google Fonts: Inter + Poppins)

### Performance Tools

- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [WebPageTest](https://www.webpagetest.org/)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

---

**Last Updated**: October 2024
**Document Version**: 1.0.0
**Project Lead**: Fabien @ Neo Code
**Target Launch**: 4 weeks from project start
