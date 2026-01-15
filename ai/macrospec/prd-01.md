# Portfolio Website PRD

## Problem Statement

Replace $40/mo Webflow site with a performant, maintainable Next.js portfolio optimized for hiring conversions (full-time, fractional, contact).

## Key Constraints

- Solo developer using Claude Code + Codex + Cursor
- Content managed via MDX files in repo
- Vercel deployment
- No WCAG compliance requirements
- Figma mocks refined iteratively in codebase

## Success Criteria

- Primary CTA (Contact Me) visible on all pages
- Three conversion paths clearly differentiated (full-time / fractional / general contact)
- Event analytics tracking all user interactions
- SEO meta tags on all content pages
- System-preference dark/light mode with no flash

---

## Phase 1: Core Infrastructure

### 1.1 Project Setup

- [x] Initialize Next.js 15 + TypeScript + Tailwind v4
- [x] Configure MDX content pipeline with gray-matter
- [x] Set up path aliases (@/, @/content/\*)
- [x] Install project dependencies (`npm install`)
- [x] Analyze "src (original)" structure: identify reusable components, assets, and styles
- [x] Transform Figma Make components from "src (original)/app/components" to Next.js App Router structure:
  - Convert component imports/exports to match Next.js conventions
  - Update component paths and imports
  - Extract reusable UI components to `src/components/ui/` (shadcn components already present)
  - Move page-specific components to `src/components/sections/` or `src/components/layout/`
- [x] Migrate assets from "src (original)/assets" to `src/assets` or `public/` as appropriate
- [x] Review and merge styles from "src (original)/styles" into `src/app/globals.css` if needed
- [x] Remove unused "src (original)/imports" directory (Figma-generated imports)
- [x] Initialize shadcn/ui (`npx shadcn@latest init`) - verify existing components match shadcn structure
- [x] Verify base shadcn components are present: button, card, input, textarea, separator (from Figma output)
- [x] Delete "src (original)" directory after successful merge

### 1.2 Theme System

- [x] Implement next-themes provider in root layout
- [x] Configure system preference detection (no manual toggle)
- [x] Define CSS variables for dark/light in globals.css
- [x] Test no-flash hydration with `suppressHydrationWarning`

### 1.3 Analytics Foundation

- [x] Install Vercel Analytics (`@vercel/analytics`)
- [x] Install Vercel Speed Insights (`@vercel/speed-insights`)
- [x] Create analytics utility wrapper in `src/lib/analytics.ts`
- [x] Define event schema: `page_view`, `cta_click`, `form_submit`, `content_view`

---

## Phase 2: Layout & Navigation

### 2.1 Global Layout

- [x] Create `Header` component with nav links: Home, About, Blog, Contact
- [x] Create `Footer` component with social links + copyright
- [x] Implement sticky header with scroll-aware background blur
- [x] Add primary CTA button ("Contact Me") in header

### 2.2 Responsive Navigation

- [x] Desktop: horizontal nav with CTA button
- [x] Mobile: hamburger menu with slide-out drawer (shadcn sheet)
- [x] Active link state indicators

---

## Phase 3: Homepage

### 3.1 Hero Section

- [x] Headline + subheadline text content
- [x] Primary CTA button → Contact page
- [x] Secondary CTA → About page
- [x] Hero animation using Framer Motion (fade-up on load)

### 3.2 Projects Section

- [x] Grid layout for project cards (3-4 featured)
- [x] Project card component: image, title, tags, link
- [x] Pull data from `content/projects/*.mdx`
- [x] "View All Projects" link if >4 exist

### 3.3 Case Studies Section

- [ ] Port existing case studies from `ai/macrospec/original-context/themitch home 27ec21834a1d80e28562c15745e1d9c4.html` into `content/case-studies/*.mdx` with matching titles, descriptions, and cover images
- [ ] Case studies to include: Leading an Integration B2B2C Strategy; Overhauling the Dexible Order Form; Spearheading Hedge Fund Sales; Developing a Year Long Product Roadmap
- [ ] Define case study frontmatter schema: title, description, date, coverImage, tags, readTime (optional), featured (boolean)
- [ ] Create `getFeaturedCaseStudies()` helper that returns max 3 items sorted by date desc
- [ ] Featured case study cards (3 max) in a responsive grid (1/2/3 columns) aligned to new landing page styles
- [ ] Card component: cover image, title, description, read time, tags
- [ ] Fallback read time calculation if `readTime` missing (e.g., 200 wpm)
- [ ] "View All Case Studies" link when total > 3
- [ ] Empty state handling if no case studies exist (hide section)
- [ ] Pull data from `content/case-studies/*.mdx`

### 3.4 Blog Preview Section

- [x] Latest 3 blog posts
- [x] Post card: title, date, description, tags
- [x] Pull data from `content/blogs/**/*.mdx`
- [x] "View All Posts" link

### 3.5 Testimonials Section

- [x] Testimonial card component: quote, name, role, company, avatar
- [x] Store testimonials in `src/data/testimonials.ts`
- [x] Carousel or grid layout (finalize from Figma)

### 3.6 Homepage CTA Banner

- [ ] Full-width banner above footer
- [ ] Three conversion paths displayed:
  - Full-time opportunities
  - Fractional CPO/CTO work
  - General inquiries
- [ ] Each path links to Contact with pre-selected intent

---

## Phase 4: Content Pages

### 4.1 Blog Infrastructure

- [x] Create `/blog` listing page with all posts
- [x] Create `/blog/[...slug]` dynamic route for nested paths (2024/post-name)
- [x] MDX renderer component with typography styles
- [x] Blog post layout: title, date, tags, reading time, content, author bio

### 4.2 Case Studies Infrastructure

- [ ] Create `/case-studies` listing page
- [ ] Create `/case-studies/[slug]` dynamic route
- [ ] Case study layout: hero image, problem/solution/results sections, content

### 4.3 Projects Infrastructure

- [ ] Create `/projects` listing page
- [ ] Create `/projects/[slug]` dynamic route
- [ ] Project layout: hero, tech stack, role, links (live/github), content

### 4.4 MDX Components

- [ ] Custom heading components with anchor links
- [ ] Code block with syntax highlighting (shiki or rehype-pretty-code)
- [ ] Image component with Next.js Image optimization
- [ ] Callout/alert component for emphasis blocks

---

## Phase 5: Static Pages

### 5.1 About Page

- [ ] Create `/about` route
- [ ] Bio section with photo
- [ ] Skills/tech stack visualization
- [ ] Timeline or career history (optional based on Figma)
- [ ] CTA to Contact page

### 5.2 Contact Page

- [ ] Create `/contact` route
- [ ] Contact form fields: name, email, intent (dropdown), message
- [ ] Intent options: "Full-time role", "Fractional/Contract", "General inquiry"
- [ ] Form validation with react-hook-form + zod
- [ ] Form submission via Vercel serverless function or Formspree
- [ ] Success/error states with toast notifications (sonner)

---

## Phase 6: SEO & Performance

### 6.1 Metadata

- [ ] Configure root metadata in layout.tsx (title template, description, OG image)
- [ ] Generate dynamic metadata for all content pages
- [ ] Create `opengraph-image.tsx` for dynamic OG images (optional)
- [ ] Add `robots.txt` and `sitemap.xml` generation

### 6.2 Performance

- [ ] Implement Next.js Image for all images
- [ ] Add loading skeletons for dynamic content
- [ ] Configure static generation for all content pages
- [ ] Verify Core Web Vitals in Vercel dashboard post-deploy

---

## Phase 7: Analytics Events

### 7.1 Event Implementation

- [ ] Track `page_view` on route change
- [ ] Track `cta_click` with label (header, hero, banner, etc.)
- [ ] Track `form_submit` with intent type
- [ ] Track `content_view` with content type and slug
- [ ] Track `external_link_click` for outbound links

### 7.2 Conversion Funnel

- [ ] Define funnel: Landing → Content View → Contact Page → Form Submit
- [ ] Ensure all funnel steps emit trackable events

---

## Phase 8: Polish & Animation

### 8.1 Page Transitions

- [ ] Implement Framer Motion page transitions (fade or slide)
- [ ] Add exit animations for route changes

### 8.2 Micro-interactions

- [ ] Button hover/tap states
- [ ] Card hover elevations
- [ ] Link underline animations
- [ ] Form field focus states

### 8.3 Scroll Animations

- [ ] Fade-in-up for sections on scroll (Framer Motion `whileInView`)
- [ ] Staggered animations for card grids
- [ ] Parallax effects (if aligned with Figma)

### 8.4 Dynamic Elements

- [ ] Animated gradient backgrounds (CSS or canvas)
- [ ] Interactive charts for case study metrics (recharts, add when needed)
- [ ] Custom cursor effects (optional, low priority)

---

## Data Structures

### Content Frontmatter Schema

**Blog Post:**

```yaml
title: string
description: string
date: YYYY-MM-DD
tags: string[]
image?: string
readingTime?: string (auto-calculated)
```

**Case Study:**

```yaml
title: string
description: string
date: YYYY-MM-DD
client: string
role: string
duration: string
tags: string[]
image: string
results?: string[]
```

**Project:**

```yaml
title: string
description: string
date: YYYY-MM-DD
tags: string[]
image?: string
liveUrl?: string
repoUrl?: string
featured: boolean
```

### Testimonial Schema

```typescript
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}
```

### Analytics Event Schema

```typescript
type AnalyticsEvent =
  | { name: "page_view"; path: string }
  | { name: "cta_click"; label: string; location: string }
  | { name: "form_submit"; intent: string }
  | { name: "content_view"; type: ContentType; slug: string }
  | { name: "external_link_click"; url: string };
```

---

## File Structure Reference

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (homepage)
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── blog/
│   │   ├── page.tsx (listing)
│   │   └── [...slug]/page.tsx
│   ├── case-studies/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── projects/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/
│   ├── ui/ (shadcn)
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── projects-grid.tsx
│   │   ├── case-studies-preview.tsx
│   │   ├── blog-preview.tsx
│   │   ├── testimonials.tsx
│   │   └── cta-banner.tsx
│   └── content/
│       ├── mdx-components.tsx
│       ├── post-card.tsx
│       ├── project-card.tsx
│       └── case-study-card.tsx
├── lib/
│   ├── utils.ts
│   ├── content.ts
│   └── analytics.ts
└── data/
    └── testimonials.ts

content/
├── blogs/
│   └── 2024/
├── case-studies/
└── projects/
```

---

## Content File Mapping

This section maps source content files to their corresponding PRD build sections.

### Original Context Files (`ai/macrospec/original-context/`)

**Home Page Reference:**

- `themitch home 27ec21834a1d80e28562c15745e1d9c4.html` → **Phase 3: Homepage**
  - Hero section content and structure (3.1)
  - Projects section layout (3.2)
  - Case studies section layout (3.3)
  - Blog preview section layout (3.4)
  - Testimonials section layout (3.5)
  - CTA banner structure (3.6)

**About Page Reference:**

- `themitch about me 27ec21834a1d800491b4e2f392fef892.html` → **Phase 5.1: About Page**
  - Bio content and structure
  - Skills/tech stack information
  - Timeline/career history content

**Projects Page Reference:**

- `themitch projects 27ec21834a1d80679ac6c8cbdaa16a04.html` → **Phase 3.2: Projects Section** & **Phase 4.3: Projects Infrastructure**
  - Project listing layout
  - Project card structure
  - Individual project page layout

### Content Directory Files (`content/`)

**Blog Posts (`content/blogs/`):**

- `blogs/chaos to clarity/Chaos to Clarity A Founder's Guide to Project Management.html` → **Phase 3.4: Blog Preview Section** & **Phase 4.1: Blog Infrastructure**
- `blogs/scrum to pmp/Scrum to PMP A Founder's Guide to Project Manageme 11bc21834a1d80d28105e949e853ae01.html` → **Phase 3.4: Blog Preview Section** & **Phase 4.1: Blog Infrastructure**
- `blogs/The 11 Essential Domains for Product Management in/The 11 Essential Domains for Product Management in 122c21834a1d80abbe37f1834909f765.html` → **Phase 3.4: Blog Preview Section** & **Phase 4.1: Blog Infrastructure**

**Case Studies (`content/case-studies/`):**

- `case-studies/Developing a Year Long Product Roadmap 115c21834a1d80e4bc4ef6a20588713f.html` → **Phase 3.3: Case Studies Section** & **Phase 4.2: Case Studies Infrastructure**
- `case-studies/Leading an Integration B2B2C Strategy 115c21834a1d80969d51e7f7b0ceb0df.html` → **Phase 3.3: Case Studies Section** & **Phase 4.2: Case Studies Infrastructure**
- `case-studies/Overhauling the Dexible Order Form 74d7a2a695c640efa430bc848ea26e8d.html` → **Phase 3.3: Case Studies Section** & **Phase 4.2: Case Studies Infrastructure**
- `case-studies/Spearheading Hedge Fund Sales 21fb70db88fa410493100dd37d420241.html` → **Phase 3.3: Case Studies Section** & **Phase 4.2: Case Studies Infrastructure**

**Projects (`content/projects/`):**

- `projects/themitch projects BUIDLhub 27ec21834a1d803389b6c0c5000a094c.html` → **Phase 3.2: Projects Section** & **Phase 4.3: Projects Infrastructure**
- `projects/themitch projects CoinScore 27ec21834a1d8044a3c2e30bbfbd3978.html` → **Phase 3.2: Projects Section** & **Phase 4.3: Projects Infrastructure**
- `projects/themitch projects Cryptopets 27ec21834a1d8094a3e9c42f75ab16da.html` → **Phase 3.2: Projects Section** & **Phase 4.3: Projects Infrastructure**
- `projects/themitch projects dexible 27ec21834a1d80889be6e6bdbca8eaee.html` → **Phase 3.2: Projects Section** & **Phase 4.3: Projects Infrastructure**

**Note:** All HTML files in `content/` need to be converted to MDX format with proper frontmatter according to the schemas defined in the Data Structures section.

---

## Dependencies Reference

- **UI**: shadcn/ui components (button, card, input, textarea, sheet, select, separator, toast)
- **Forms**: react-hook-form, zod
- **Animation**: framer-motion
- **Analytics**: @vercel/analytics, @vercel/speed-insights
- **MDX**: next-mdx-remote, gray-matter
- **Syntax Highlighting**: rehype-pretty-code or shiki (add in Phase 4)
- **Notifications**: sonner

---

## Out of Scope (Future)

- Newsletter subscription
- Blog comments
- RSS feed
- i18n
- CMS integration (staying with MDX in repo)
- Manual dark/light toggle (system preference only)

---

## Changelog

### 2024-12-XX

- **Content File Mapping**: Added new section mapping content files to PRD build sections:
  - Added mapping for original context files (`ai/macrospec/original-context/`) to homepage, about page, and projects page sections
  - Added mapping for all content directory files (`content/blogs/`, `content/case-studies/`, `content/projects/`) to their corresponding Phase 3 and Phase 4 sections
  - Documented that HTML files need conversion to MDX format with proper frontmatter

### 2024-12-XX

- **Phase 1.1**: Completed transformation of Figma Make output:

  - Installed all project dependencies
  - Transformed and migrated all components from "src (original)" to Next.js App Router structure
  - Created Header and Footer layout components with Next.js Link navigation
  - Migrated section components (Hero, About, Projects, Testimonials, FAQ, Contact, FeaturedCaseStudies)
  - Copied all shadcn/ui components to `src/components/ui/`
  - Migrated assets to `public/` directory
  - Merged theme styles from Figma output into `globals.css`
  - Removed unused imports directory
  - Initialized shadcn/ui and verified all base components
  - Deleted "src (original)" directory

- **Phase 1.1**: Added steps for handling Figma Make output from "src (original)" directory:
  - Added dependency installation step
  - Added analysis and transformation steps for Figma-generated components
  - Added asset migration steps
  - Added cleanup steps for unused imports and final directory removal
  - Updated shadcn/ui initialization to account for existing components from Figma output
