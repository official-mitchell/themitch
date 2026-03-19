# The Mitch Portfolio

A high-performance, conversion-focused portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**. Replaces a $40/month Webflow site with a maintainable, analytically-driven alternative optimized for hiring conversions.

## 🎯 Key Features

### Three Conversion Paths
- **Full-time opportunities** – Dedicated contact flow for permanent roles
- **Fractional CPO/CTO work** – Contract and advisory opportunities
- **General inquiries** – Standard contact pathway

### Smart Analytics
- Event tracking for all user interactions (`page_view`, `cta_click`, `form_submit`, `content_view`)
- Conversion funnel monitoring (Landing → Content View → Contact → Form Submit)
- Vercel Analytics & Speed Insights for performance monitoring

### Content-First Architecture
- **MDX-based content** – Blog posts, case studies, and projects stored as version-controlled markdown files
- **Dynamic rendering** – Server-side content parsing with gray-matter
- **SEO optimization** – Meta tags, OG images, and sitemap generation

### Dark/Light Mode
- System preference detection with no manual toggle
- CSS variable theming for seamless transitions
- No flash on page load with `suppressHydrationWarning`

---

## 📋 Preview

### Overview
![Portfolio Overview](public/images/README%20preview%20images/preview%20overview.png)

### Case Studies Showcase
![Case Studies Preview](public/images/README%20preview%20images/preview%20case%20studies.png)

### Featured Highlights
![Featured Highlights](public/images/README%20preview%20images/preview%20highlights.png)

---

## 🛠 Tech Stack

### Core Framework
- **Next.js 15** – React framework with App Router for modern routing
- **TypeScript** – Type-safe development with full IDE support
- **React 19** – Latest React capabilities for UI components

### Styling & UI
- **Tailwind CSS v4** – Utility-first CSS framework
- **shadcn/ui** – High-quality, copy-paste component library
  - Components: Button, Card, Input, Textarea, Sheet, Select, Separator, Toast
- **CSS Variables** – Theme system for dark/light mode support

### Content & Rendering
- **MDX (next-mdx-remote)** – Write content in Markdown with embedded React components
- **gray-matter** – YAML frontmatter parsing for content metadata
- **Next.js Image Optimization** – Automatic image optimization and lazy loading

### Forms & Validation
- **react-hook-form** – Lightweight form state management
- **zod** – TypeScript-first schema validation

### Animations & Interactions
- **Framer Motion** – Declarative animation library
  - Page transitions, scroll animations, micro-interactions
  - Staggered card animations and parallax effects

### Analytics & Monitoring
- **@vercel/analytics** – Web analytics and user interaction tracking
- **@vercel/speed-insights** – Core Web Vitals monitoring
- Custom analytics wrapper (`src/lib/analytics.ts`) for event schema management

### Notifications
- **sonner** – Toast notification library with customizable styling

### Deployment
- **Vercel** – Optimized hosting with automatic builds and preview deployments

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout with theme provider
│   ├── page.tsx                   # Homepage with hero and sections
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [...slug]/page.tsx    # Dynamic blog post routes
│   ├── case-studies/
│   │   ├── page.tsx              # Case studies listing
│   │   └── [slug]/page.tsx       # Individual case study pages
│   ├── projects/
│   │   ├── page.tsx              # Projects listing
│   │   └── [slug]/page.tsx       # Individual project pages
│   ├── about/page.tsx            # About page
│   └── contact/page.tsx          # Contact form page
│
├── components/
│   ├── ui/                        # shadcn/ui base components
│   ├── layout/
│   │   ├── header.tsx            # Sticky navigation with CTA
│   │   └── footer.tsx            # Social links and copyright
│   ├── sections/
│   │   ├── hero.tsx              # Homepage hero with Framer Motion
│   │   ├── blog-preview.tsx      # Latest 3 blog posts
│   │   ├── case-studies-preview.tsx  # Featured case studies
│   │   ├── blog-preview.tsx      # Blog grid section
│   │   └── testimonials.tsx      # Client testimonials carousel
│   └── content/
│       ├── mdx-renderer.tsx      # Custom MDX component rendering
│       ├── blog-card.tsx         # Blog post card component
│       ├── case-study-card.tsx   # Case study card component
│       └── project-card.tsx      # Project card component
│
├── lib/
│   ├── utils.ts                  # Utility functions (cn, etc.)
│   ├── analytics.ts              # Event tracking wrapper
│   └── content.ts                # Content fetching and parsing
│
├── data/
│   └── testimonials.ts           # Testimonial data structure
│
└── styles/
    └── globals.css               # Global styles, theme variables

content/
├── blogs/
│   ├── chaos-to-clarity.mdx
│   ├── scrum-to-pmp.mdx
│   └── 11-essential-domains.mdx
├── case-studies/
│   ├── developing-year-long-product-roadmap.mdx
│   ├── leading-integration-b2b2c-strategy.mdx
│   ├── overhauling-dexible-order-form.mdx
│   └── spearheading-hedge-fund-sales.mdx
└── projects/
    ├── buildhub.mdx
    ├── coinscore.mdx
    ├── cryptopets.mdx
    └── dexible.mdx

public/
├── images/
│   ├── blogs/              # Blog post cover images
│   └── README preview images/  # Marketing preview screenshots
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (compatible with Next.js 15)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd themitch
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## 📝 Content Management

### Adding Blog Posts

Create a new file in `content/blogs/YYYY/post-name.mdx`:

```yaml
---
title: "Post Title"
description: "Brief description"
date: "2024-12-15"
tags: ["tag1", "tag2"]
image: "/images/blogs/post-image.jpg"
---

# Post content here

Your markdown content...
```

### Adding Case Studies

Create a new file in `content/case-studies/case-study-name.mdx`:

```yaml
---
title: "Case Study Title"
description: "What this case study covers"
date: "2024-12-15"
client: "Client Name"
role: "Your Role"
duration: "3 months"
tags: ["tag1", "tag2"]
image: "/images/case-studies/cover.jpg"
results: ["Result 1", "Result 2", "Result 3"]
---

# Case Study content...
```

### Adding Projects

Create a new file in `content/projects/project-name.mdx`:

```yaml
---
title: "Project Title"
description: "Project description"
date: "2024-12-15"
tags: ["React", "Next.js", "TypeScript"]
image: "/images/projects/cover.jpg"
liveUrl: "https://example.com"
repoUrl: "https://github.com/user/repo"
featured: true
---

# Project content...
```

---

## 📊 Analytics Events

All user interactions are tracked with the following event schema:

- **`page_view`** – User navigates to a new page
- **`cta_click`** – User clicks a call-to-action button (location: header, hero, banner, etc.)
- **`form_submit`** – User submits contact form (includes intent type)
- **`content_view`** – User views blog/case study/project content
- **`external_link_click`** – User clicks external links

View analytics in the [Vercel Dashboard](https://vercel.com).

---

## 🎨 Theme System

The portfolio automatically adapts to system color preference (light/dark mode). Theme colors are defined as CSS variables in `src/styles/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --primary: #0066ff;
  --border: #e5e7eb;
  /* ... more variables */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #000000;
    --foreground: #ffffff;
    /* ... inverted colors */
  }
}
```

No manual toggle—theme switches based on operating system settings.

---

## 🔍 SEO Optimization

- **Meta tags** on all pages with dynamic title templates
- **Open Graph images** for social sharing
- **Sitemap generation** (`sitemap.xml`)
- **Robots configuration** (`robots.txt`)
- **Structured data** ready for schema markup

---

## ⚡ Performance

- **Static Generation** for all content pages
- **Incremental Static Regeneration (ISR)** for frequently updated content
- **Image Optimization** with Next.js Image component
- **Core Web Vitals** monitoring via Vercel Speed Insights
- **Code splitting** and lazy loading for route-based bundles

---

## 🚢 Deployment

Deployed on **Vercel** with:
- Automatic builds on every push to main
- Preview deployments for pull requests
- Environment variable support (`.env.local`)
- Serverless function support for form submissions

### Deploy Your Own

1. Push to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Vercel auto-detects Next.js and configures settings
4. Deploys on every git push

---

## 📦 Dependencies

See `package.json` for complete list. Key packages:

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "framer-motion": "^11.0.0",
    "next-mdx-remote": "^6.0.0",
    "gray-matter": "^4.0.0",
    "react-hook-form": "^7.0.0",
    "zod": "^3.0.0",
    "sonner": "^1.0.0",
    "@vercel/analytics": "^1.0.0",
    "@vercel/speed-insights": "^1.0.0"
  }
}
```

---

## 📄 License

MIT License – feel free to use this as a template for your own portfolio.

---

## 🤝 Contributing

This is a personal portfolio project. Issues and suggestions are welcome!

---

**Built with ❤️ using Claude Code**
