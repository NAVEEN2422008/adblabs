# Project Roadmap - ADB Labs Website

## Milestone 1: Production Deployment & Domain Setup [Completed]
- [x] Clone repository & verify dependencies
- [x] Configure `netlify.toml` for Vite SPA deployment
- [x] Deploy project to Netlify (`adblabs-site.netlify.app`)
- [x] Generate digital assets (Code 128 Barcode & QR Code for `www.adblabs.in`)
- [x] Document Spaceship external DNS configuration

## Milestone 2: Team Portfolio System (`/about` and `/about/:employee_code`) [Current]
- [ ] **Phase 1: Architecture & Data Modeling**
  - Create `src/data/teamData.js` with all 17 team member records (`ADB-446-001` to `ADB-446-017`).
- [ ] **Phase 2: Routing Infrastructure**
  - Integrate URL routing with browser history support for `/about` and `/about/:employee_code` without breaking existing home page smooth-scroll anchors.
- [ ] **Phase 3: Team Directory & Portfolio UI Components**
  - Build `TeamDirectory.jsx` (`/about`) with grid view, department filters, and search.
  - Build `MemberPortfolio.jsx` (`/about/:employee_code`) with full-featured portfolio template.
- [ ] **Phase 4: Verification & Build Validation**
  - Verify routing with direct URL hits, deep links, 404 fallback for invalid codes, and `npm run build`.
