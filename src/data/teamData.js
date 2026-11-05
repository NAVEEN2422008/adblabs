// ADB Labs Team Directory & Portfolio Dataset
// Employee IDs: ADB-446-001 to ADB-446-017

export const TEAM_MEMBERS = [
  {
    id: 'ADB-446-001',
    name: 'Naveen K',
    role: 'Founder & Chief Hardware Architect',
    department: 'Hardware & Power',
    division: 'Systems Architecture',
    location: 'Chennai, India',
    status: 'Active / Lab Lead',
    bio: 'Pioneering modular portable energy storage and rugged field robotics at ADB Labs. Leading the development of the PS-1 Titan Power Station and coordinating cross-disciplinary hardware-software integration for off-grid industrial deployments.',
    quote: 'Democratizing reliable clean energy and autonomous hardware through first-principles engineering.',
    skills: [
      'System Architecture',
      'Power Electronics',
      'BMS Design',
      'High-Voltage Safety',
      'Industrial Prototyping',
      'Thermal Modeling'
    ],
    experience: '6+ Years',
    projectsCompleted: 18,
    patentsFiled: 2,
    education: 'B.E. in Electrical & Electronics Engineering, Anna University',
    featuredProjects: [
      {
        title: 'ADB Labs PS-1 Titan Power Station',
        desc: 'Architected the core 2048Wh LiFePO4 battery pack, modular DC bus distribution, and high-surge 2400W pure sine wave inverter subsystem.'
      },
      {
        title: 'Besant Nagar Off-Grid Fishery Cold-Chain',
        desc: 'Engineered the 5kW rooftop solar microgrid with hybrid energy buffer ensuring 24/7 uninterrupted ice slurry generation.'
      }
    ],
    socials: {
      email: 'naveen@adblabs.in',
      linkedin: 'https://linkedin.com/in/naveen-adblabs',
      github: 'https://github.com/NAVEEN2422008'
    },
    avatarGradient: 'from-emerald-500 to-green-700'
  },
  {
    id: 'ADB-446-002',
    name: 'Sanjay B',
    role: 'Co-Founder & Lead Systems Engineer',
    department: 'Robotics & Perception',
    division: 'Robotics R&D',
    location: 'Chennai, India',
    status: 'Active / Lab Lead',
    bio: 'Directing the applied robotics division at ADB Labs. Spearheading quadruped rough-terrain locomotion, ROS 2 middleware architecture, and edge perception pipelines for industrial inspection.',
    quote: 'Bringing adaptive, autonomous robotics out of simulation and into harsh real-world terrains.',
    skills: [
      'ROS 2 Humble',
      'C++ / Python',
      'Kinematics & Dynamics',
      'LiDAR SLAM',
      'Edge AI Perception',
      'Gazebo & Isaac Sim'
    ],
    experience: '5+ Years',
    projectsCompleted: 14,
    patentsFiled: 1,
    education: 'M.Tech in Mechatronics & Autonomous Systems',
    featuredProjects: [
      {
        title: 'ADB Quadruped Inspection Robot',
        desc: 'Implemented model predictive control (MPC) and whole-body controller for omnidirectional trotting across non-flat terrain.'
      },
      {
        title: '6-Axis Industrial Robotic Arm Pipeline',
        desc: 'Developed MoveIt 2 motion planning and precision trajectory tracking for pick-and-place automation in the ADB training lab.'
      }
    ],
    socials: {
      email: 'sanjay@adblabs.in',
      linkedin: 'https://linkedin.com/in/sanjay-adblabs',
      github: 'https://github.com/sanjayforgit-oss'
    },
    avatarGradient: 'from-cyan-500 to-blue-700'
  },
  {
    id: 'ADB-446-003',
    name: 'Karthik Raja',
    role: 'Lead Power Electronics Engineer',
    department: 'Hardware & Power',
    division: 'Power Systems',
    location: 'Chennai, India',
    status: 'Active / Research Staff',
    bio: 'Specialist in GaN-based bi-directional DC-DC converters, high-frequency magnetic design, and MPPT solar tracking algorithms for high-density power stations.',
    quote: 'Every milliwatt saved is thermal headroom gained for reliable field electronics.',
    skills: [
      'GaN / SiC Converters',
      'Altium Designer',
      'MPPT Tracking',
      'EMI / EMC Mitigation',
      'Thermal Simulation',
      'DSP Firmware'
    ],
    experience: '4+ Years',
    projectsCompleted: 11,
    patentsFiled: 1,
    education: 'B.Tech in Power Electronics, NIT Trichy',
    featuredProjects: [
      {
        title: 'Dual-Stage 1200W MPPT Solar Charger',
        desc: 'Designed a 98.4% peak efficiency multi-phase synchronous buck converter with sub-second maximum power point tracking.'
      },
      {
        title: 'Bi-Directional AC Inverter Module',
        desc: 'Engineered seamless grid-tied to off-grid UPS changeover in under 12 milliseconds for the PS-1 system.'
      }
    ],
    socials: {
      email: 'karthik.r@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-amber-500 to-orange-700'
  },
  {
    id: 'ADB-446-004',
    name: 'Ananya Sundaram',
    role: 'Embedded Firmware Architect',
    department: 'Embedded Firmware',
    division: 'Edge Computing',
    location: 'Chennai, India',
    status: 'Active / Research Staff',
    bio: 'Writing bare-metal and FreeRTOS firmware for safety-critical battery management controllers, CAN bus telemetry, and low-latency motor control drivers.',
    quote: 'Deterministic real-time systems form the unshakeable foundation of modern hardware.',
    skills: [
      'Embedded C / C++',
      'FreeRTOS',
      'STM32 & ESP32',
      'CAN Bus & UART Protocols',
      'Bare-metal Bootloaders',
      'Hardware Debugging'
    ],
    experience: '4+ Years',
    projectsCompleted: 12,
    patentsFiled: 0,
    education: 'B.E. in Electronics & Communication Engineering',
    featuredProjects: [
      {
        title: 'Fault-Tolerant CAN BMS Telemetry',
        desc: 'Built multi-node CAN communication protocol handling 16-cell LiFePO4 voltage and temperature monitoring at 50Hz.'
      },
      {
        title: 'Secure OTA Firmware Engine',
        desc: 'Designed dual-bank memory swapping and cryptographic rollback prevention for remote IoT power station updates.'
      }
    ],
    socials: {
      email: 'ananya.s@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-violet-500 to-purple-800'
  },
  {
    id: 'ADB-446-005',
    name: 'Vigneshwaran M',
    role: 'Lead Mechanical & Thermal Engineer',
    department: 'Hardware & Power',
    division: 'Mechanical Design',
    location: 'Chennai, India',
    status: 'Active / Research Staff',
    bio: 'Expert in finite element analysis (FEA), computational fluid dynamics (CFD) for enclosed battery packs, and ruggedized IP65 enclosure engineering.',
    quote: 'Form follows physics: rugged engineering built to survive tropical coastal heat and vibration.',
    skills: [
      'SolidWorks',
      'Ansys FEA & CFD',
      'Extruded Aluminum Enclosures',
      'Injection Molding Prep',
      'Shock & Vibration Testing',
      'DFM / DFA'
    ],
    experience: '5+ Years',
    projectsCompleted: 15,
    patentsFiled: 1,
    education: 'B.E. in Mechanical Engineering, PSG Tech',
    featuredProjects: [
      {
        title: 'PS-1 Unibody Magnesium Chassis',
        desc: 'Engineered high-rigidity lightweight frame with internal isolated ducting keeping battery cell deltas below 3°C.'
      },
      {
        title: 'Hermetic Seal Battery Enclosure',
        desc: 'Designed IP66-rated water-resistant battery housing with pressure relief membrane for coastal deployment.'
      }
    ],
    socials: {
      email: 'vignesh.m@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-rose-500 to-pink-700'
  },
  {
    id: 'ADB-446-006',
    name: 'Deepak Raghavan',
    role: 'Computer Vision & SLAM Specialist',
    department: 'Robotics & Perception',
    division: 'Robotics R&D',
    location: 'Chennai, India',
    status: 'Active / Research Staff',
    bio: 'Developing visual-inertial odometry, 3D LiDAR point cloud segmentation, and real-time obstacle avoidance algorithms on NVIDIA Jetson Orin modules.',
    quote: 'Enabling autonomous robots to make split-second spatial decisions in zero-visibility conditions.',
    skills: [
      'PyTorch / OpenCV',
      '3D Point Cloud Processing',
      'Visual Odometry',
      'TensorRT Optimization',
      'CUDA Programming',
      'Sensor Calibration'
    ],
    experience: '3+ Years',
    projectsCompleted: 9,
    patentsFiled: 0,
    education: 'M.S. in Computer Science (Robotics Track)',
    featuredProjects: [
      {
        title: 'Real-time Edge LiDAR Odometry',
        desc: 'Achieved sub-2cm drift localization using solid-state LiDAR fused with dual IMUs on the quadruped robot.'
      },
      {
        title: 'Obstacle Classification Model',
        desc: 'Deployed quantized YOLOv11 model running at 45 FPS on Jetson Orin Nano for human and hazard detection.'
      }
    ],
    socials: {
      email: 'deepak.r@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-blue-500 to-indigo-700'
  },
  {
    id: 'ADB-446-007',
    name: 'Pooja Krishnan',
    role: 'Battery Systems & Chemistry Specialist',
    department: 'Hardware & Power',
    division: 'Energy Storage',
    location: 'Chennai, India',
    status: 'Active / Research Staff',
    bio: 'Focusing on electrochemical impedance spectroscopy (EIS), thermal runaway prevention, and life-cycle characterization for prismatic LiFePO4 cells.',
    quote: 'Safe, sustainable energy storage begins with microscopic cell-level understanding.',
    skills: [
      'LiFePO4 Cell Characterization',
      'EIS Analysis',
      'Thermal Runaway Mitigation',
      'Battery Aging Models',
      'Cell Balancing Algorithms',
      'Laboratory Testing'
    ],
    experience: '4+ Years',
    projectsCompleted: 10,
    patentsFiled: 1,
    education: 'M.Tech in Electrochemical Systems & Energy Technology',
    featuredProjects: [
      {
        title: '3500-Cycle Durability Benchmarking',
        desc: 'Conducted accelerated temperature cycling establishing the 10-year service life model for the PS-1 power cells.'
      },
      {
        title: 'Active Cell Equalization System',
        desc: 'Implemented inductor-based bi-directional charge shuttle preserving cell capacity to within 0.5% variance.'
      }
    ],
    socials: {
      email: 'pooja.k@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-teal-500 to-emerald-800'
  },
  {
    id: 'ADB-446-008',
    name: 'Aditya Swaminathan',
    role: 'Edge AI & IoT Platform Engineer',
    department: 'Edge AI & Compute',
    division: 'Cloud & Telemetry',
    location: 'Chennai, India',
    status: 'Active / Core Developer',
    bio: 'Building end-to-end telemetry pipelines, MQTT edge gateways, and real-time power analytics dashboards connecting deployed field units to cloud monitoring.',
    quote: 'Bridging physical edge telemetry with actionable predictive analytics in real time.',
    skills: [
      'Go / Python / Node.js',
      'MQTT & WebSockets',
      'Time-series Databases',
      'Docker & Edge Containers',
      'REST & GraphQL APIs',
      'React & Tailwind CSS'
    ],
    experience: '3+ Years',
    projectsCompleted: 13,
    patentsFiled: 0,
    education: 'B.Tech in Information Technology',
    featuredProjects: [
      {
        title: 'ADB Cloud Fleet Telemetry',
        desc: 'Created sub-second IoT streaming platform monitoring state-of-charge, grid health, and solar irradiance across field units.'
      },
      {
        title: 'Edge Fault Prediction Engine',
        desc: 'Implemented lightweight anomaly detector running directly on gateway MCU to anticipate inverter overload conditions.'
      }
    ],
    socials: {
      email: 'aditya.s@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-sky-500 to-blue-800'
  },
  {
    id: 'ADB-446-009',
    name: 'Divya Ramesh',
    role: 'Industrial Design & Human Factors Lead',
    department: 'Hardware & Power',
    division: 'Product Experience',
    location: 'Chennai, India',
    status: 'Active / Design Lead',
    bio: 'Crafting ergonomic, utilitarian product form factors for industrial energy hardware, tactile control interfaces, and high-readability outdoor status displays.',
    quote: 'Industrial equipment should feel intuitive, commanding, and durable in the hands of field operators.',
    skills: [
      'Industrial Product Styling',
      'Ergonomics & Human Factors',
      'Rhino & Blender Rendering',
      'CMF Engineering',
      'Rapid 3D Prototyping',
      'UI/UX Display Layouts'
    ],
    experience: '4+ Years',
    projectsCompleted: 16,
    patentsFiled: 1,
    education: 'Master of Design (M.Des) in Industrial Design',
    featuredProjects: [
      {
        title: 'PS-1 Dual Ergonomic Carry Grip',
        desc: 'Engineered balanced center-of-mass handle geometry enabling effortless two-person or single-operator transport.'
      },
      {
        title: 'High-Contrast OLED Status Console',
        desc: 'Designed sunlight-readable outdoor interface showing instantaneous watt-hour inflow and outflow metrics.'
      }
    ],
    socials: {
      email: 'divya.r@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-fuchsia-500 to-purple-700'
  },
  {
    id: 'ADB-446-010',
    name: 'Manoj Kumar',
    role: 'Robotics Control & Actuation Engineer',
    department: 'Robotics & Perception',
    division: 'Robotics R&D',
    location: 'Chennai, India',
    status: 'Active / Research Staff',
    bio: 'Developing high-torque planetary gear actuators, field-oriented control (FOC) motor drivers, and impedance control algorithms for the quadruped robot limbs.',
    quote: 'Precise torque control is the magic that gives machines grace and agility.',
    skills: [
      'Field-Oriented Control (FOC)',
      'BLDC Motor Tuning',
      'Planetary Actuator Design',
      'MATLAB & Simulink',
      'CANopen Protocol',
      'Torque Sensing'
    ],
    experience: '3+ Years',
    projectsCompleted: 8,
    patentsFiled: 0,
    education: 'B.E. in Mechatronics Engineering',
    featuredProjects: [
      {
        title: 'Quasi-Direct Drive Actuator Module',
        desc: 'Designed custom 12:1 reduction planetary joint delivering 35Nm peak torque with high back-drivability.'
      },
      {
        title: 'Compliance Control for Quadruped Leg',
        desc: 'Implemented impedance controller absorbing ground contact shocks during rapid downhill traversal.'
      }
    ],
    socials: {
      email: 'manoj.k@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-amber-600 to-red-700'
  },
  {
    id: 'ADB-446-011',
    name: 'Sneha Balaji',
    role: 'Quality Assurance & Regulatory Compliance Lead',
    department: 'Operations & Systems',
    division: 'Compliance & Safety',
    location: 'Chennai, India',
    status: 'Active / Systems Staff',
    bio: 'Ensuring all ADB Labs products achieve BIS, IEC, CE, and UN 38.3 transport safety compliance. Directing destructive drop testing, thermal stress testing, and EMI audits.',
    quote: 'Safety and compliance are never afterthoughts; they are built into the initial schematic.',
    skills: [
      'IEC 62619 & UN 38.3 Testing',
      'BIS Certification Standards',
      'Environmental Stress Screening',
      'Quality Management Systems',
      'Root-Cause Failure Analysis',
      'Test Fixture Automation'
    ],
    experience: '5+ Years',
    projectsCompleted: 20,
    patentsFiled: 0,
    education: 'B.Tech in Electrical Engineering & Quality Systems',
    featuredProjects: [
      {
        title: 'UN 38.3 Lithium Transport Safety Dossier',
        desc: 'Formulated test protocols and completed certified altitude simulation, thermal shock, and vibration qualification.'
      },
      {
        title: 'Automated Factory End-of-Line Tester',
        desc: 'Programmed Python-automated test rig running 40 electrical safety checks on assembled units in 3 minutes.'
      }
    ],
    socials: {
      email: 'sneha.b@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-emerald-600 to-teal-800'
  },
  {
    id: 'ADB-446-012',
    name: 'Pranav Venkat',
    role: 'PCB Layout & High-Speed Hardware Engineer',
    department: 'Hardware & Power',
    division: 'Hardware Engineering',
    location: 'Chennai, India',
    status: 'Active / Research Staff',
    bio: 'Designing dense multi-layer printed circuit boards, controlled impedance routing for differential lines, and high-current copper busbars up to 100A.',
    quote: 'Flawless signal integrity and clean power planes turn complex schematics into bulletproof boards.',
    skills: [
      'KiCad & Altium Designer',
      'High-Current PCB Layout',
      'Signal & Power Integrity',
      'Heavy Copper Traces (4oz+)',
      'SMD Hand Assembly & Rework',
      'DFM Rules'
    ],
    experience: '3+ Years',
    projectsCompleted: 14,
    patentsFiled: 0,
    education: 'B.E. in Electronics & Communication',
    featuredProjects: [
      {
        title: '6-Layer Mainboard for PS-1 Controller',
        desc: 'Routed dense hybrid analog-digital board isolating high-current inverter switching noise from precision ADC measurement lines.'
      },
      {
        title: 'Rigid-Flex Sensor Interconnects',
        desc: 'Engineered reliable dynamic flex circuits routed through rotating joints in the 6-axis robotic arm.'
      }
    ],
    socials: {
      email: 'pranav.v@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-cyan-600 to-indigo-800'
  },
  {
    id: 'ADB-446-013',
    name: 'Harini Natarajan',
    role: 'Robotics Perception & AI Training Lead',
    department: 'Robotics & Perception',
    division: 'AI Research',
    location: 'Chennai, India',
    status: 'Active / Research Staff',
    bio: 'Training reinforcement learning policies in simulation for legged gait generation and deploying self-supervised vision models for real-time terrain classification.',
    quote: 'Reinforcement learning bridges the gap between mechanical potential and natural biological agility.',
    skills: [
      'Reinforcement Learning (PPO)',
      'Isaac Gym / MuJoCo',
      'Deep Learning / PyTorch',
      'Synthetic Data Generation',
      'Python / C++',
      'Model Quantization'
    ],
    experience: '3+ Years',
    projectsCompleted: 7,
    patentsFiled: 0,
    education: 'M.S. in Artificial Intelligence & Robotics',
    featuredProjects: [
      {
        title: 'Terrain-Adaptive Locomotion Policy',
        desc: 'Trained a single neural policy in Isaac Gym navigating sand, gravel, stairs, and slippery wet grass without manual gait switching.'
      },
      {
        title: 'Visual Footstep Planner',
        desc: 'Engineered real-time elevation mapping module selecting footholds over rocky terrain at 30Hz.'
      }
    ],
    socials: {
      email: 'harini.n@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-pink-600 to-rose-800'
  },
  {
    id: 'ADB-446-014',
    name: 'Rohan Chandran',
    role: 'Solar Microgrid & Field Operations Engineer',
    department: 'Operations & Systems',
    division: 'Field Deployment',
    location: 'Chennai, India',
    status: 'Active / Field Operations',
    bio: 'Leading field site surveys, rooftop solar structural mounting, marine-environment corrosion protection, and customer installation operations across Tamil Nadu.',
    quote: 'Lab innovations only count when they perform flawlessly in the salt spray and heat of the field.',
    skills: [
      'Solar PV Array Sizing',
      'Structural Mount Engineering',
      'Coastal Corrosion Protection',
      'Earthing & Lightning Arrestors',
      'Field Grid Interconnection',
      'Safety Audits'
    ],
    experience: '4+ Years',
    projectsCompleted: 22,
    patentsFiled: 0,
    education: 'B.Tech in Renewable Energy Systems',
    featuredProjects: [
      {
        title: 'Besant Nagar Fish Stall Grid Deployment',
        desc: 'Oversaw physical structure installation, salt-fog resistant cabling, and dual-inverter synchronization in under 48 hours.'
      },
      {
        title: 'Agricultural Pumping Pilot (Kanchipuram)',
        desc: 'Installed standalone 7.5HP solar VFD water pumping system operating reliably off-grid with zero diesel dependency.'
      }
    ],
    socials: {
      email: 'rohan.c@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-yellow-500 to-amber-700'
  },
  {
    id: 'ADB-446-015',
    name: 'Meera Jayaraman',
    role: 'Software Frontend & Interface Engineer',
    department: 'Edge AI & Compute',
    division: 'Digital Experience',
    location: 'Chennai, India',
    status: 'Active / Core Developer',
    bio: 'Designing responsive web dashboards, real-time telemetry visualizations, and mobile companion interfaces for monitoring ADB Labs hardware fleets.',
    quote: 'Complex real-time engineering data deserves clear, human-centered visual representations.',
    skills: [
      'React / Vite / Next.js',
      'Tailwind CSS',
      'Data Visualization (D3 / Recharts)',
      'Web Bluetooth / WebUSB',
      'Progressive Web Apps',
      'TypeScript'
    ],
    experience: '3+ Years',
    projectsCompleted: 11,
    patentsFiled: 0,
    education: 'B.E. in Computer Science & Engineering',
    featuredProjects: [
      {
        title: 'ADB Labs Interactive Fleet Portal',
        desc: 'Built the responsive telemetry web application featuring live state-of-charge gauges, load charts, and remote power cutoff toggle.'
      },
      {
        title: 'Industrial Runtime Simulator',
        desc: 'Developed client-side interactive battery runtime calculator computing appliance autonomy across 20+ equipment profiles.'
      }
    ],
    socials: {
      email: 'meera.j@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-violet-600 to-indigo-800'
  },
  {
    id: 'ADB-446-016',
    name: 'Gautam Siddharth',
    role: 'Embedded Robotics Firmware Engineer',
    department: 'Embedded Firmware',
    division: 'Robotics R&D',
    location: 'Chennai, India',
    status: 'Active / Research Staff',
    bio: 'Writing micro-ROS node firmware on Cortex-M7 microcontrollers, synchronizing multi-axis brushless motors via EtherCAT/CAN-FD, and tuning IMU Kalman filters.',
    quote: 'Sub-millisecond latency is the pulse of coordinated robotic movement.',
    skills: [
      'micro-ROS & FreeRTOS',
      'CAN-FD & EtherCAT',
      'STM32H7 / Teensy 4.1',
      'Sensor Fusion (EKF)',
      'Low-Level Motor Timing',
      'C & Rust Embedded'
    ],
    experience: '2+ Years',
    projectsCompleted: 7,
    patentsFiled: 0,
    education: 'B.E. in Electrical & Electronics Engineering',
    featuredProjects: [
      {
        title: '12-Joint Motor Synchronizer',
        desc: 'Implemented synchronous CAN-FD communications broadcasting joint position commands to 12 actuators at 1000Hz.'
      },
      {
        title: 'Rugged IMU Orientation Filter',
        desc: 'Tuned 9-axis extended Kalman filter eliminating drift from mechanical shock during quadruped jumps.'
      }
    ],
    socials: {
      email: 'gautam.s@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-emerald-500 to-cyan-700'
  },
  {
    id: 'ADB-446-017',
    name: 'Tarun Prasanna',
    role: 'Industrial Training & Labs Coordinator',
    department: 'Operations & Systems',
    division: 'Industrial Internship Program',
    location: 'Chennai, India',
    status: 'Active / Program Lead',
    bio: 'Orchestrating ADB Labs hands-on engineering internship cohorts, curriculum development for 6-axis arm automation, ROS 2 bootcamps, and student hardware labs.',
    quote: 'Empowering the next generation of hardware engineers through real industry tooling and dirty-hands building.',
    skills: [
      'Curriculum Architecture',
      'Robotics Lab Instruction',
      'Hardware Prototyping Mentorship',
      'ROS 2 Lab Courseware',
      'Industry-Academia Partnerships',
      'Student Capstone Supervision'
    ],
    experience: '4+ Years',
    projectsCompleted: 15,
    patentsFiled: 0,
    education: 'B.Tech in Mechatronics & Technical Education',
    featuredProjects: [
      {
        title: 'ADB 6-Week Industrial Internship Curriculum',
        desc: 'Designed hands-on syllabus mentoring 80+ engineering students on industrial ROS 2, PCB layout, and motor drive commissioning.'
      },
      {
        title: 'Rapid Hardware Hackathon Program',
        desc: 'Facilitated intensive 48-hour hardware prototyping sprints producing functional off-grid and agricultural prototypes.'
      }
    ],
    socials: {
      email: 'tarun.p@adblabs.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    avatarGradient: 'from-amber-500 to-rose-700'
  }
];

export const DEPARTMENTS = [
  'All Departments',
  'Hardware & Power',
  'Robotics & Perception',
  'Embedded Firmware',
  'Edge AI & Compute',
  'Operations & Systems'
];
