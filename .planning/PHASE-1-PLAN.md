# Phase Plan: Team Member Portfolio System

## Preconditions & Dependencies
- Vite + React 19 + Tailwind CSS + Framer Motion + Lucide React.
- Netlify SPA redirect `/* -> /index.html` configured in `netlify.toml`.

## Atomic Tasks

### Task 1: Create Centralized Team Data Store (`src/data/teamData.js`)
- Define comprehensive profiles for all 17 team members:
  - `ADB-446-001` to `ADB-446-017`
  - Fields per member:
    - `id` (e.g. `ADB-446-001`)
    - `slug` (URL-safe string fallback)
    - `name` (e.g., "Naveen K", "Sanjay B", "Karthik R", etc.)
    - `role` (e.g., "Founder & Hardware Architect", "Lead Robotics Engineer", "Power Electronics Lead", "Firmware Engineer", "AI/ML Perception Specialist", etc.)
    - `department` (e.g., "Hardware & Power", "Robotics & Perception", "Embedded Firmware", "Edge AI & Compute", "Operations & Systems")
    - `bio` (Detailed professional bio tailored to ADB Labs' mission)
    - `skills` (Array of technical competencies)
    - `projects` (Array of project contributions with titles and descriptions)
    - `stats` (Years of exp, projects shipped, patent/paper count)
    - `education` (University / Degree)
    - `socials` (GitHub, LinkedIn, Email)
    - `avatarColor` / Accent styling

### Task 2: URL Routing Setup
- Wire routing in `App.jsx` (or using `react-router-dom` / custom window location sync) to handle:
  - `/` -> Home landing page
  - `/about` or `/about/` -> Team Directory & Facility Overview
  - `/about/:employeeCode` (e.g. `/about/ADB-446-001`) -> Dedicated Portfolio Page for that employee
  - Fallback / 404 for unknown codes (redirect or "Employee Not Found" card with search)
  - Ensure document title updates: `document.title = "${member.name} (${member.id}) | ADB Labs"`

### Task 3: Build Portfolio UI Components
1. **`src/components/TeamDirectory.jsx`** (Rendered in `/about`):
   - Grid of all 17 team members with ADB Cyberpunk aesthetic.
   - Quick search by name/skills and filter by Department.
   - Employee ID badge on each card (`ADB-446-001`).
   - "View Portfolio →" button linking to `/about/:employeeCode`.
2. **`src/components/MemberPortfolio.jsx`** (Rendered in `/about/:employeeCode`):
   - Breadcrumb: `Home > About > Team > [Employee Code]`
   - Top ID Card Badge (Photo/Avatar, Name, Employee Code, Division, Status indicator).
   - Core Bio & Engineering Statement.
   - Skills Radar / Badge Grid.
   - Featured Projects & Hardware/Software Contributions at ADB Labs.
   - Previous / Next Teammate quick-switcher buttons.
   - Share / Copy Portfolio Link button.

### Task 4: Navbar & Navigation Integration
- Update [Navbar.jsx](file:///e:/adblabs_website/src/components/Navbar.jsx) and [Footer.jsx](file:///e:/adblabs_website/src/components/Footer.jsx) "About" links to point to `/about`.
- Ensure clean transitions back to Home or between sections without page reload flickers.

### Task 5: Verification & Production Build
- Run `npm run build` to verify zero compile or bundle errors.
- Test client-side URL transitions (`/about`, `/about/ADB-446-001`, `/about/ADB-446-015`, `/about/ADB-446-017`).
- Test browser refresh on sub-routes.
