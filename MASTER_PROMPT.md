# ADB LABS TITAN SERIES — MASTER REBUILD PROMPT

> **Target Reference**: [EcoFlow Titan Series Landing Page](https://www.ecoflow.com/us/ecoflow-titan-series)  
> **Source Material**: `infomation/` (Commercial Energy Architecture, Besant Nagar Field Trials, Robotics & AI Pillars, 12 Engineering Dossiers)  
> **Tech Stack**: React 19, Tailwind CSS v4, Framer Motion, Lucide Icons, Vite  

---

## 1. MANDATE & DESIGN PHILOSOPHY
Execute a complete, clean-slate 1:1 visual and functional recreation of the official **EcoFlow Titan Series** hardware landing page for **ADB Labs**. 

### Critical Design Standards:
- **True Optical Pitch Black (`#000000` / `#03060b`)**: Eliminate muddy dark grays. Contrast comes from layered translucent glass surfaces (`rgba(255, 255, 255, 0.03)` to `0.06`).
- **Directional Glass Borders**: Every card must feature subtle directional lighting (`border: 1px solid rgba(255, 255, 255, 0.08)`) with a top rim highlight (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12)`).
- **Monumental Metallic Stat Typography**: Large statistics must use bold clamp sizing (`clamp(36px, 5vw, 64px)`), heavy weight (800), tight tracking (`-0.04em`), and metallic vertical gradient clipping (`linear-gradient(180deg, #ffffff 40%, #94a3b8 100%)` or cyan `linear-gradient(180deg, #e0f2fe 30%, #38bdf8 100%)`).
- **Zero Viewport Overflow**: All sections must be contained within `max-w-6xl mx-auto px-6 lg:px-8` with `overflow-x: hidden`. No text or cards may be clipped or pushed off-screen.
- **Micro-Interactions**: Smooth cubic-bezier transitions (`0.16, 1, 0.3, 1`), pulsing hotspot beacons on hardware, and interactive load calculation.

---

## 2. STRUCTURAL SECTIONS TO REPLICATE

1. **Global Sticky Header & Sub-Nav Bar**:
   - Primary navbar with ADB Labs branding, navigation anchors, and "Get a Quote" pill button.
   - Secondary sticky anchor bar (`top-0`, `backdrop-blur-2xl`) with active section spy indicator pill and "Enquire Now".

2. **Cinematic Hero Hardware Stage**:
   - Atmospheric radial ambient backdrop halo (`rgba(56, 189, 248, 0.12)`).
   - "Commercial Energy · Robotics · Real-World R&D" eyebrow badge.
   - Headline: "ADB Labs PS1 Series".
   - Subtitle: "Whole-Stall Power & Commercial Energy Storage, Now Within Reach."
   - Dual CTAs: "Get Expert Help" (white pill) + "Get the Highlights" (glass pill) + "Watch Field Pilot".
   - Central hardware studio render with soft shadow drop.

3. **Signature Bento Highlights Grid (Titan-C4 Replica)**:
   - Card 1 (Span 2): "Whole-Stall Power for Everyday Living" with 4 stat columns (3.0 kW Output, 6.1 ~ 12.3 kWh Capacity, ₹14,000/mo Savings, 2.88 kWp Day Solar Array).
   - Card 2: "Spend ₹0 on Fuel From Day One" with 100% fuel elimination and 3,500+ lifecycle prismatic cells.
   - Card 3: "Field Robotics & ROS 2 Intelligence" showcasing LiDAR SLAM, depth camera perception, and quadruped locomotion.

4. **Traditional Diesel vs. ADB Labs PS1 (Titan-C3 Comparison)**:
   - Card 1: 5kVA Commercial Diesel Generator (₹12k-15k/mo fuel sinking cost, 92 dB roar, toxic soot on food, salt air corrosion).
   - Card 2: ADB Labs PS1 Solar Solution (₹0 fuel, <30 dB silent, 0g CO₂ emissions, ~14 month payback).

5. **Essential Commercial Appliances Energy Flow (Titan-C6 Replica)**:
   - Visual connected load equation: Deep Chiller (280W) + Night Sign (150W) + Stall LEDs (80W) + Commercial Blender (600W) + Waffle Iron (1,000W) + POS Billing (40W) = 2,150W running simultaneously within 3,000W continuous pure sine headroom.

6. **Modular Hardware Subsystem Architecture & Interactive Hotspots**:
   - Multi-angle selector (Front, Rear, Side, Top).
   - Pulsing radar beacons (1: Pure Sine Inverter, 2: Automotive LiFePO₄ Core, 3: Dual MPPT Solar Controllers, 4: Quick-Connect Expansion Bus).

7. **Interactive Autonomy Runtime Calculator**:
   - Sizing presets (Fish Stall, Coffee Kiosk, Mobile Food Van).
   - Interactive appliance toggles + Solar generation buffer toggle (+1,440W / +2,880W).
   - Live dual-output comparison: Single PS1 Module (6.144 kWh) vs. Dual-Stacked Module (12.288 kWh).

8. **Commercial Packages & Pricing Matrix**:
   - Package 1: PS1 Core Commercial Station (₹1,85,000)
   - Package 2: Shop 1 Solar Bundle — 6.144 kWh + 1.44 kWp Bifacial Solar (₹2,65,000)
   - Package 3: Shop 2 Expanded Heavy-Duty — 12.288 kWh Dual Stack + 2.88 kWp Solar (₹4,45,000) — *Featured Most Popular*
   - Package 4: Custom Commercial & Robotics Microgrid (Contact Us)

9. **Besant Nagar Field Pilot Deep-Dive**:
   - High-contrast photographic case study with real operational quotes and telemetry metrics.

10. **Robotics & AI Innovation Division**:
    - 4 Core Pillars: Autonomous Mobile Robots, 6-DoF Robotic Arms, Stereo Depth AI Perception, Quadruped Locomotion.

11. **6-Week Industrial Robotics & Embedded AI Internship**:
    - Complete curriculum breakdown, hardware kit details, capstone project, and application modal.

12. **Leadership & Engineering Team (12 Dossiers)**:
    - Interactive dossier cards routing to individual member views (`/about/:code`).

13. **Technical Specification Matrix & FAQ Accordion**:
    - Expandable single-active accordion for buttery smooth interaction.

14. **Global Footer**:
    - Multi-column directory, newsletter subscription, and copyright attribution.
