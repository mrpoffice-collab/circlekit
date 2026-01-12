# CircleKit - Project Instructions

## Overview
CircleKit is a group support session platform for peer specialists, coaches, and facilitators to run structured, evidence-based support groups.

## Production URL
https://circlekit.vercel.app

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Neon PostgreSQL (via Vercel integration)
- **ORM**: Prisma 6
- **Auth**: Clerk (to be configured)
- **Hosting**: Vercel

## SEO Configuration (VERIFIED)
This app follows all SEO best practices:

- **Server-Side Rendering**: All page.tsx files are Server Components (no 'use client')
- **Complete Metadata**: Title, description, keywords, canonical, robots, OG tags
- **sitemap.xml**: Auto-generated at /sitemap.xml
- **robots.txt**: Auto-generated with /_next/data/ blocked
- **JSON-LD**: SoftwareApplication and FAQPage structured data
- **FAQ Section**: Server-rendered FAQ content for AEO/AISO

## Database Models
- User (with Clerk integration)
- FacilitatorProfile
- Template
- Group
- Enrollment

## Key Features (MVP)
1. Landing page with FAQ (SEO-optimized)
2. Template library (3 starter templates)
3. Group creation and management
4. Facilitator dashboard
5. Participant portal

## Environment Variables
```
DATABASE_URL=           # Neon PostgreSQL
DATABASE_URL_UNPOOLED=  # Neon direct connection
NEXT_PUBLIC_APP_URL=    # https://circlekit.vercel.app
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=  # Clerk auth
CLERK_SECRET_KEY=       # Clerk auth
```

## Development
```bash
npm run dev     # Local development
npm run build   # Production build
npx prisma studio  # Database UI
```

## Deployment
Deployed via Vercel with auto-deploy on push to master branch.
Database: Connect Neon via Vercel Dashboard → Storage → Create Database

## Design Rules
Follow .claude/CLAUDE.md design rules:
- No purple colors
- No grey text (use text-gray-900 for body, text-gray-700 minimum for secondary)
- Teal as primary accent color
- WCAG compliant contrast ratios
