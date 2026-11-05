# Feature Context: Team Member Portfolio System (/about and /about/:employee_code)

## User Requirements
1. **Team Directory on `/about`**:
   - Comprehensive directory showcasing all 17 ADB Labs team members.
   - Each card displays member details, avatar/badge, role, division, and unique Employee Code (`ADB-446-001` to `ADB-446-017`).
   - Direct click-through to individual portfolio pages.

2. **Individual Member Portfolio on `/about/:employee_code`**:
   - Route pattern: `/about/:employee_code` (e.g., `/about/ADB-446-001`).
   - Dynamic page title reflecting the member's name and designation.
   - Comprehensive, futuristic portfolio template matching ADB Labs' design language (dark mode, green/cyan accents, cyber-industrial engineering ethos).
   - Structured template sections:
     - Hero Header: Name, Employee Code badge, Department, Role, Location, Status.
     - Core Bio & Engineering Mission.
     - Technical Skill Matrix (Hardware, Embedded, Robotics, Power Systems, AI).
     - Key Lab Projects & Contributions (e.g., PS-1 Titan Architecture, Quadruped Kinematics, Besant Nagar Solar Grid).
     - Credentials, Education & Research Publications / Patents.
     - Digital ID Badge with generated QR Code and Barcode link.
     - Social & Contact links (Email, GitHub, LinkedIn).
     - Navigation controls: Previous Member, Next Member, Back to Team Directory.

3. **Data Architecture**:
   - 17 structured team member records configured in `src/data/teamData.js`.
   - Employee IDs sequence: `ADB-446-001` through `ADB-446-017`.
   - Rich mock data ready for real content replacement by the team.

4. **Routing & SEO**:
   - Supports both client-side navigation and direct URL access (deep linking).
   - Compatible with Netlify SPA redirect `/* -> /index.html`.
