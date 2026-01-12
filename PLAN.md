# CircleKit - Implementation Plan

## App Name
CircleKit

## One-Line Description
The group support session platform for peer specialists, coaches, and facilitators to run structured, evidence-based support groups.

## Core Value Proposition
Launch your group support practice in days, not months - we provide templates, tech, and payments, you provide empathy.

## Target User
- Peer support specialists
- Life coaches
- Grief counselors
- Recovery group leaders
- Facilitators without clinical licenses who want to help people

## SEO Keywords
1. "group support session software"
2. "peer support group platform"
3. "how to run a support group"
4. "grief support group software"
5. "online support group platform"
6. "facilitator tools for support groups"
7. "CBT group therapy templates"
8. "peer specialist software"
9. "group coaching platform"
10. "support group management"

## FAQ Questions (for AEO/AISO)
1. "What is CircleKit?" - CircleKit is a free platform for peer specialists, coaches, and facilitators to run structured group support sessions with professional templates, scheduling, and payment processing.
2. "How do I start a support group with CircleKit?" - Sign up as a facilitator, choose from our CBT-based templates (grief, divorce, anxiety, etc.), customize your group details, set your pricing, and invite participants.
3. "Is CircleKit for licensed therapists only?" - No, CircleKit is designed for peer support specialists, coaches, and non-licensed facilitators. Licensed therapists can use it too.
4. "How much does CircleKit cost?" - CircleKit is free to start. We take a small platform fee from participant payments, so you only pay when you earn.
5. "Is CircleKit HIPAA compliant?" - CircleKit is designed for peer support, not medical treatment. We use secure, encrypted infrastructure, but facilitators are responsible for their own compliance needs.

## MVP Features (Phase 1)

### 1. Landing Page (Public)
- Hero section explaining value proposition
- Feature highlights (templates, scheduling, payments)
- FAQ section (server-rendered for SEO)
- CTA to sign up as facilitator or find a group

### 2. Authentication
- Clerk authentication (email + Google OAuth)
- Two roles: FACILITATOR, PARTICIPANT

### 3. Facilitator Dashboard
- Overview: upcoming sessions, active groups, participant count
- Quick actions: Create Group, View Templates
- Simple revenue metrics

### 4. Template Library
- 3 starter templates for MVP:
  - Grief and Loss Support (8 weeks)
  - Life Transitions (6 weeks)
  - Building Self-Esteem (6 weeks)
- Each template shows: title, description, duration, framework
- "Use Template" button to create a group

### 5. Group Creation
- Select template
- Set group name, description
- Choose format: Online, In-Person, Hybrid
- Set max participants (default: 10)
- Set price (full program pricing for MVP)
- Set schedule (day, time, timezone, start date)
- Generate shareable registration link

### 6. Participant Portal
- View enrolled groups
- See next session date/time
- View program progress (Week X of Y)

## Database Models

```prisma
model User {
  id        String   @id @default(cuid())
  clerkId   String   @unique
  email     String   @unique
  name      String
  role      Role     @default(PARTICIPANT)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  facilitatorProfile FacilitatorProfile?
  enrollments        Enrollment[]
  groupsCreated      Group[]
}

enum Role {
  FACILITATOR
  PARTICIPANT
  ADMIN
}

model FacilitatorProfile {
  id              String   @id @default(cuid())
  userId          String   @unique
  user            User     @relation(fields: [userId], references: [id])
  bio             String?
  credentials     String?
  specializations String[]
  username        String   @unique
}

model Template {
  id              String   @id @default(cuid())
  name            String
  description     String
  category        String
  programLength   Int      // weeks
  sessionDuration Int      // minutes
  framework       String   // CBT, DBT, etc.
  sessions        Json     // Array of session outlines
  isPublic        Boolean  @default(true)
  groups          Group[]
}

model Group {
  id              String      @id @default(cuid())
  name            String
  description     String
  facilitatorId   String
  facilitator     User        @relation(fields: [facilitatorId], references: [id])
  templateId      String
  template        Template    @relation(fields: [templateId], references: [id])
  format          Format
  maxParticipants Int         @default(10)
  price           Float
  status          GroupStatus @default(DRAFT)
  startDate       DateTime
  dayOfWeek       Int
  timeOfDay       String
  timezone        String
  createdAt       DateTime    @default(now())
  enrollments     Enrollment[]
}

enum Format {
  ONLINE
  IN_PERSON
  HYBRID
}

enum GroupStatus {
  DRAFT
  OPEN
  FULL
  IN_PROGRESS
  COMPLETED
}

model Enrollment {
  id         String           @id @default(cuid())
  userId     String
  user       User             @relation(fields: [userId], references: [id])
  groupId    String
  group      Group            @relation(fields: [groupId], references: [id])
  status     EnrollmentStatus @default(REGISTERED)
  enrolledAt DateTime         @default(now())
}

enum EnrollmentStatus {
  REGISTERED
  ACTIVE
  DROPPED_OUT
  COMPLETED
}
```

## API Routes

- `POST /api/groups` - Create a new group
- `GET /api/groups` - List facilitator's groups
- `GET /api/groups/[id]` - Get group details
- `PATCH /api/groups/[id]` - Update group
- `GET /api/templates` - List all templates
- `GET /api/templates/[id]` - Get template details
- `POST /api/enrollments` - Enroll in a group
- `GET /api/enrollments` - Get user's enrollments
- `GET /api/profile` - Get current user profile
- `PATCH /api/profile` - Update profile

## Pages

### Public Pages (Server Rendered)
- `/` - Landing page with FAQ
- `/templates` - Browse available templates
- `/find-group` - Search for open groups (future)

### Auth Pages
- `/sign-in` - Clerk sign in
- `/sign-up` - Clerk sign up

### Facilitator Pages
- `/dashboard` - Facilitator dashboard
- `/dashboard/groups` - Manage groups
- `/dashboard/groups/new` - Create new group
- `/dashboard/groups/[id]` - Group details
- `/dashboard/templates` - Browse templates

### Participant Pages
- `/my-groups` - View enrolled groups
- `/my-groups/[id]` - Group participation view

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Prisma 6 + Neon PostgreSQL
- Clerk (Authentication)
- Vercel (Hosting)

## SEO Requirements (CRITICAL)
- All page.tsx files are Server Components (no 'use client' at top)
- sitemap.ts with all public pages
- robots.ts blocking /_next/data/
- JSON-LD for SoftwareApplication + FAQPage
- Complete metadata on every page
- FAQ section on homepage visible in HTML
- H1 tags match page purpose
