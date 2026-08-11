/* Project catalog — only real captures; empty captures = no image UI */
window.PROJECTS = {
  immo: {
    title: 'Immo Dary — Real-Estate Marketplace',
    tag: 'Mobile · Full-Stack · Stage d’ingénieur @ PLM Ressources · ESPRIT ArcTIC',
    cover: './assets/projects/immo-40-home.jpg',
    summary:
      'Immo Dary is a production-oriented mobile marketplace for real-estate listings. During my engineering internship at PLM Ressources (June–August 2026), I designed and shipped the product end-to-end: mobile app, secured API, payments, AI assistant, localization, release APK and cloud deployment.',
    details: [
      'Built the mobile client with React Native + TypeScript: property listings, OpenStreetMap map, favorites, messaging and reservation flows.',
      'Implemented the backend with Node.js / Express and SQL Server: REST resources for users, listings, chats, bookings and media uploads.',
      'Secured the API with JWT auth, Google Sign-In, Helmet, CORS and rate limiting.',
      'Integrated Stripe for payments and Groq AI as an in-app assistant.',
      'Delivered full i18n in 5 languages and an Android release APK.',
      'Containerized and deployed with Docker on Microsoft Azure.',
      'Owned feature delivery from UX flows to cloud runtime in an agile internship context.'
    ],
    tech: ['React Native', 'TypeScript', 'Express', 'SQL Server', 'JWT', 'Google Sign-In', 'Stripe', 'Groq AI', 'Docker', 'Azure', 'i18n'],
    captures: [
      './assets/projects/immo-01-splash.jpg',
      './assets/projects/immo-02-boot.jpg',
      './assets/projects/immo-10-opened.jpg',
      './assets/projects/immo-40-home.jpg',
      './assets/projects/immo-home.jpg',
      './assets/projects/immo-nav-01.jpg',
      './assets/projects/immo-nav-03.jpg',
      './assets/projects/immo-nav-05.jpg',
      './assets/projects/immo-nav-07.jpg',
      './assets/projects/immo-nav-09.jpg',
      './assets/projects/immo-nav-11.jpg',
      './assets/projects/immo-real_01.jpg',
      './assets/projects/immo-real_02.jpg',
      './assets/projects/immo-real_03.jpg',
      './assets/projects/immo-real_04.jpg',
      './assets/projects/immo-real_05.jpg',
      './assets/projects/immo-real_06.jpg',
      './assets/projects/immo-real_07.jpg',
      './assets/projects/immo-real_08.jpg',
      './assets/projects/immo-real_09.jpg',
      './assets/projects/immo-real_10.jpg',
      './assets/projects/immo-real_11.jpg',
      './assets/projects/immo-real_12.jpg',
      './assets/projects/immo-real_13.jpg',
      './assets/projects/immo-real_14.jpg',
      './assets/projects/immo-real_15.jpg',
      './assets/projects/immo-real_16.jpg',
      './assets/projects/immo-real_17.jpg',
      './assets/projects/immo-real_18.jpg',
      './assets/projects/immo-real_19.jpg',
      './assets/projects/immo-real_20.jpg',
      './assets/projects/immo-real_21.jpg',
      './assets/projects/immo-real_22.jpg',
      './assets/projects/immo-real_23.jpg',
      './assets/projects/immo-real_24.jpg',
      './assets/projects/immo-real_25.jpg',
      './assets/projects/immo-real_26.jpg',
      './assets/projects/immo-real_27.jpg',
      './assets/projects/immo-real_28.jpg'
    ]
  },

  smarthire: {
    title: 'SmartHire — Cloud Recruitment & Assessment',
    tag: 'Cloud · DevOps · Microservices · ESPRIT 4th year',
    cover: null,
    summary:
      'SmartHire is a cloud-native recruitment platform. I contributed to both infrastructure and the Assessment product module: private cloud provisioning, automation, container orchestration and scoring microservices.',
    details: [
      'Deployed and configured an OpenStack private cloud stack (compute, network, storage) for the platform.',
      'Automated provisioning and configuration with Ansible playbooks for repeatable environments.',
      'Containerized services with Docker and orchestrated them with Kubernetes.',
      'Developed the Assessment module (skill evaluation / scoring) with Spring Boot APIs and an Angular frontend.',
      'Worked in a microservices architecture separating recruitment, assessment and infra concerns.',
      'Focus: cloud delivery culture — infra as code, service packaging and application features together.'
    ],
    tech: ['OpenStack', 'Ansible', 'Docker', 'Kubernetes', 'Spring Boot', 'Angular', 'Microservices'],
    captures: []
  },

  language: {
    title: 'Language Explorer — Pronunciation Assistant',
    tag: 'Web · AI features · Stage d’immersion @ Mobelite · ESPRIT',
    cover: null,
    summary:
      'Language Explorer helps users train pronunciation in the browser. Built during my immersion internship at Mobelite Tunisie (July–August 2025).',
    details: [
      'Developed a responsive React.js + Tailwind CSS interface for pronunciation exercises.',
      'Used the Web Speech API for real-time speech recognition and text-to-speech feedback.',
      'Implemented authentication and progress persistence with Firebase.',
      'Delivered a smooth learner journey: practice loops, audio feedback and session continuity.',
      'Collaborated in an agile product team during a short immersion internship.'
    ],
    tech: ['React.js', 'Tailwind CSS', 'Firebase', 'Web Speech API', 'JavaScript'],
    captures: []
  },

  digitaltwin: {
    title: 'Digital Twin — Composting Simulation (PFE)',
    tag: 'Game / Simulation · PFE · DigiArt Living Lab · ISET Kélibia',
    cover: null,
    summary:
      'Final-year PFE at DigiArt Living Lab / ISET Kélibia: a digital twin of a composting process inside an Unreal Engine experience, paired with a React supervision UI.',
    details: [
      'Modeled and simulated a composting process as a Digital Twin in Unreal Engine.',
      'Connected simulation indicators to business/supervision needs for monitoring.',
      'Built a companion React platform for dynamic supervision and UI control.',
      'Bridged 3D simulation and web dashboards for decision support.',
      'Delivered as a full PFE (Feb–Jun 2024) combining realtime visuals and product UI.'
    ],
    tech: ['Unreal Engine', 'Digital Twin', 'React', 'C++', '3D Simulation'],
    captures: []
  },

  mdintech: {
    title: 'MdinTech / Smart City — Urban Services Platform',
    tag: 'Full-Stack · Projet Intégré · JavaFX + Symfony',
    cover: null,
    summary:
      'Team integrated project (PI) for urban services and marketplace-style modules: parking, medical appointments, trips and payments, with a desktop JavaFX client and Symfony API.',
    details: [
      'Contributed to a multi-module Smart City / MdinTech platform for urban data and services.',
      'Developed / integrated JavaFX front-office screens for interactive modules.',
      'Worked with a secured Symfony REST/API backend and MySQL persistence.',
      'Covered domain flows such as parking, appointments (RDV), trips and payments.',
      'Collaborated in a multi-person team (PI) with shared repositories and module ownership.'
    ],
    tech: ['JavaFX', 'Java', 'Symfony', 'PHP', 'MySQL'],
    captures: []
  },

  nestjs: {
    title: 'E-Commerce API — NestJS (GDG ESPRIT)',
    tag: 'Backend · Workshop · GDG on Campus ESPRIT',
    cover: null,
    summary:
      'Hands-on NestJS workshop project: a modular e-commerce REST API with clean architecture (modules, providers, dependency injection).',
    details: [
      'Implemented NestJS modules for categories, products and orders.',
      'Used TypeScript with dependency injection and layered providers/services.',
      'Designed REST endpoints following NestJS module conventions.',
      'Persisted data with MongoDB in a document-oriented model.',
      'Validated understanding of NestJS architecture through a certified GDG workshop (Nov 2024).'
    ],
    tech: ['NestJS', 'TypeScript', 'MongoDB', 'REST', 'Node.js'],
    captures: []
  },

  charara: {
    title: 'Charara / Smart-Weld — Product Website',
    tag: 'Front-end · Product showcase',
    cover: null,
    summary:
      'Marketing / product website for Charara Smart-Weld Adapter: a responsive showcase presenting the welding tech solution.',
    details: [
      'Designed a clean responsive landing experience in HTML, CSS and JavaScript.',
      'Presented product value proposition and technical highlights for Smart-Weld.',
      'Focused on clarity, mobile layout and fast static delivery (no heavy framework).'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    captures: []
  },

  iot: {
    title: 'Environmental IoT Monitor — LoRaWAN',
    tag: 'IoT · Stage de perfectionnement @ Smart for Green · ISET Kélibia',
    cover: null,
    summary:
      'IoT monitoring solution built at Smart for Green: Arduino sensors over LoRaWAN for long-range environmental data with optimized power use.',
    details: [
      'Built sensor acquisition on Arduino for environmental monitoring.',
      'Used LoRaWAN for long-range transmission (around 2 km in the project context).',
      'Optimized power management and reported ~30% energy consumption reduction.',
      'Targeted remote field deployments where Wi-Fi is impractical.'
    ],
    tech: ['Arduino', 'LoRaWAN', 'C++', 'IoT Sensors'],
    captures: []
  },

  fire: {
    title: 'Arduino Forest Fire Detection',
    tag: 'IoT · Academic project',
    cover: null,
    summary:
      'Academic early-warning system for forest fire risk using Arduino with multi-sensor alerting logic.',
    details: [
      'Combined smoke, heat and flame sensors for early detection.',
      'Designed alerting logic suitable for remote high-risk zones.',
      'Focused on low-power embedded operation for field constraints.'
    ],
    tech: ['Arduino', 'C++', 'Flame Sensor', 'DHT Sensor', 'IoT'],
    captures: []
  },

  gamejam: {
    title: 'Global Game Jam 2024 — Prototype',
    tag: 'Game Dev · Team · 48-hour jam',
    cover: null,
    summary:
      'Participated in Global Game Jam 2024: a 48-hour worldwide game creation marathon shipping a playable prototype with a team.',
    details: [
      'Designed and implemented gameplay under extreme time pressure.',
      'Collaborated on scope control, iteration and prototype polish.',
      'Shipped a complete playable build within the jam window.'
    ],
    tech: ['Game Design', 'Team Collaboration', 'Rapid Prototyping'],
    captures: []
  },

  edu: {
    title: 'Educational Game Supervision Platform',
    tag: 'Web · Education · DeepFlow Club',
    cover: null,
    summary:
      'Web supervision platform for an educational game experience, developed in the DeepFlow AI Club context: dashboards, progress tracking and learning UX.',
    details: [
      'Designed UX/UI for supervisors and learners around an educational game.',
      'Implemented progress tracking and interactive learning dashboards.',
      'Used a React + Node.js stack for web supervision workflows.',
      'Built in a community/club setting (DeepFlow) emphasizing usable learning analytics.'
    ],
    tech: ['React.js', 'Node.js', 'JavaScript', 'Dashboard UI'],
    captures: []
  }
};
