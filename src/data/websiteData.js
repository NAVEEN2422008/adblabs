export const COMPANY_INFO = {
  name: "ADB LABS",
  tagline: "Engineering Real-World Solutions",
  subTagline: "Portable power, off-grid systems, custom battery solutions and robotics R&D — from concept to real-world deployment.",
  aboutDescription: "A technology and R&D initiative focused on building practical solutions across robotics, engineering, clean-energy technology, embedded systems and product development.",
  phone: "8310704481",
  email: "mdzalnex1@gmail.com",
  location: "Chennai, India",
  copyright: "© 2026 ADB Labs. All rights reserved.",
  disclaimer: "Certain specifications, runtime calculations, and product availability reflect preliminary engineering targets currently undergoing bench and field validation."
};

export const VALUE_PILLARS = [
  {
    id: "power",
    title: "Power Solutions",
    desc: "Reliable & scalable energy",
    icon: "Zap"
  },
  {
    id: "robotics",
    title: "Robotics R&D",
    desc: "Intelligent robotic systems",
    icon: "Bot"
  },
  {
    id: "product",
    title: "Product Development",
    desc: "From concept to prototype",
    icon: "Layers"
  },
  {
    id: "internship",
    title: "Internship Program",
    desc: "Hands-on, project-based learning",
    icon: "GraduationCap"
  }
];

export const SOLUTIONS_LIST = [
  {
    id: "portable-power",
    title: "Portable Power Stations",
    desc: "All-in-one, portable and expandable power stations.",
    imageType: "ps1",
    tag: "Flagship Hardware",
    features: ["LiFePO4 Chemistry", "Expandable modular packs", "Integrated pure sine inverter"]
  },
  {
    id: "home-backup",
    title: "Home Backup Systems",
    desc: "Keep your home powered during outages.",
    imageType: "home",
    tag: "Residential",
    features: ["Sub-20ms seamless transfer", "Zero noise, zero fumes", "Long cycle life"]
  },
  {
    id: "off-grid",
    title: "Off-Grid Power Systems",
    desc: "Complete solar power systems for shops, remote and independent locations.",
    imageType: "solar",
    tag: "Commercial",
    features: ["Custom solar array sizing", "High-capacity storage", "Weather-resistant build"]
  },
  {
    id: "robotics-rd",
    title: "Robotics R&D",
    desc: "Research, simulation and prototyping in robotics, automation and AI.",
    imageType: "robotics",
    tag: "Autonomous Systems",
    features: ["ROS 2 simulation", "Edge computer vision", "Custom PCB firmware"]
  }
];

export const PS1_DETAILS = {
  name: "ADB Labs PS1 Power Station",
  tagline: "An integrated, portable power station for backup and off-grid use.",
  badge: "In Development",
  displayStats: {
    batteryPercentage: 82,
    solarInputWatts: 420,
    acOutputWatts: 310,
    nominalCapacity: "6.1 kWh"
  },
  keyHighlights: [
    { label: "Battery (Nominal)", value: "6.1 kWh", icon: "Battery" },
    { label: "Inverter (Target)", value: "3 kW", icon: "Zap" },
    { label: "Solar Charging", value: "Up to 420 W", icon: "Sun" },
    { label: "Battery", value: "Expandable", icon: "Layers" },
    { label: "Build", value: "Portable & Durable", icon: "Shield" }
  ],
  angles: [
    { id: "front", label: "Front View", desc: "Digital diagnostic LCD, USB-C fast charging, and status glow ring" },
    { id: "rear", label: "Rear View", desc: "Dual AC 230V 16A pure sine outlets, main circuit breaker, ground lug" },
    { id: "left", label: "Left Side", desc: "Forced-air active cooling intake with removable dust filtration mesh" },
    { id: "right", label: "Right Side", desc: "High-voltage solar MPPT input port and quick-connect expansion battery bus" },
    { id: "top", label: "Top View", desc: "Flush ergonomic heavy-duty aluminum transport handles and cable organizer" }
  ]
};

export const BESANT_NAGAR_PROJECT = {
  title: "Besant Nagar Off-Grid System",
  tagline: "A real-world off-grid solar power installation for a commercial setup in Besant Nagar, Chennai.",
  badge: "FEATURED PROJECT",
  overview: [
    { label: "Application", value: "Food / Fish Stall (Commercial)" },
    { label: "Power System", value: "ADB Labs PS1" },
    { label: "Battery Capacity", value: "12.288 kWh (6.144 kWh + 6.144 kWh)" },
    { label: "Solar Capacity", value: "2.88 kWp (4 x 720 W)" },
    { label: "Key Loads", value: "Lights, Signboards and Shop Equipment" }
  ],
  description: "Designed to eliminate toxic daily diesel generator noise, fuel transport hazards, and exhaust emissions on the Chennai beachfront promenade. Delivers continuous night-time power for deep freezers, prep lighting, and digital weighing scales with daytime solar recharge.",
  status: "Active Field Validation & Telemetry Tracking"
};

export const PROCESS_STEPS = [
  { step: "01", name: "Research", desc: "Explore & evaluate", icon: "Search" },
  { step: "02", name: "Design", desc: "Architect solutions", icon: "Compass" },
  { step: "03", name: "Prototype", desc: "Build & iterate", icon: "Cpu" },
  { step: "04", name: "Test", desc: "Validate & optimize", icon: "CheckCircle" },
  { step: "05", name: "Deploy", desc: "Real-world use", icon: "Send" }
];

export const ROBOTICS_CAPABILITIES = [
  {
    title: "Robotics Systems",
    desc: "Robot design, control and simulation",
    icon: "Bot",
    stack: ["ROS 2 Humble", "Gazebo Physics", "URDF Kinematics"]
  },
  {
    title: "AI Integration",
    desc: "Perception, vision and decision-making",
    icon: "Eye",
    stack: ["YOLOv8 Edge", "OpenCV", "TensorRT on Jetson"]
  },
  {
    title: "Embedded Systems",
    desc: "Firmware and hardware integration",
    icon: "Cpu",
    stack: ["STM32 (C/C++)", "FreeRTOS", "CAN 2.0B / UART"]
  },
  {
    title: "Prototyping",
    desc: "Rapid development and validation",
    icon: "Layers",
    stack: ["3D Additive Print", "CNC Precision", "Thermal Bench"]
  }
];

export const INTERNSHIP_DETAILS = {
  title: "Robotics & AI Industrial Internship",
  subtitle: "Build, simulate, test and demonstrate robotic systems with live mentorship.",
  badge: "6-WEEK PROJECT-BASED PROGRAM",
  cta: "Apply (Opening Soon)",
  stats: [
    { label: "Duration", value: "6 Weeks" },
    { label: "Live Sessions", value: "18" },
    { label: "Learning", value: "Project-Based" },
    { label: "Target", value: "CSE, AI/ML, Robotics, ECE, EEE & Mechanical" }
  ],
  journey: [
    { week: "Week 1", title: "Robotics Foundations", desc: "Linux environment, ROS 2 architecture, Nodes, Topics & Services" },
    { week: "Week 2", title: "Programming + ROS 2", desc: "Python/C++ node development, TF2 transforms, custom messages" },
    { week: "Week 3", title: "Kinematics + Control", desc: "Differential drive kinematics, odometry calculations, PID controllers" },
    { week: "Week 4", title: "Computer Vision + AI", desc: "Camera pipelines, OpenCV image processing, YOLO target recognition" },
    { week: "Week 6", title: "Capstone Development", desc: "End-to-end autonomous mobile robot navigation with Nav2 & obstacle avoidance" }
  ]
};

export const ABOUT_FOCUS_AREAS = [
  "Robotics",
  "AI",
  "Engineering",
  "Embedded Systems",
  "Hardware Development",
  "Clean-Energy Technology",
  "Product Development",
  "R&D"
];

export const FOOTER_SITEMAP = {
  solutions: [
    { name: "Portable Power Stations", id: "ps1" },
    { name: "Home Backup Systems", id: "solutions" },
    { name: "Off-Grid Systems", id: "solutions" },
    { name: "Custom Battery Solutions", id: "solutions" }
  ],
  rnd: [
    { name: "Robotics R&D", id: "robotics" },
    { name: "Product Development", id: "process" }
  ],
  programs: [
    { name: "Internship Program", id: "internship" },
    { name: "Workshops", id: "internship" }
  ],
  company: [
    { name: "About Us", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Careers", id: "about" },
    { name: "Contact", id: "contact" }
  ]
};
