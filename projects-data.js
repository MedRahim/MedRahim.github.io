/* Project catalog — no covers; Immo has 4 captures only */
window.PROJECTS = {
  immo: {
    title: 'Immo Dary — Real-Estate Marketplace',
    tag: 'Mobile · Full-Stack · Stage d’ingénieur @ PLM Ressources Sarl · ESPRIT ArcTIC (15 juin 2026 – 15 août 2026)',
    cover: null,
    summary:
      'Immo Dary is a complete mobile marketplace for buying, renting and exploring real-estate listings. I owned the product end-to-end during my engineering internship at PLM Ressources: mobile UX, backend API, security, payments, AI assistant, internationalization, Android release and cloud deployment.',
    details: [
      'Product scope: users can browse property listings, explore them on an OpenStreetMap map, save favorites, chat about listings, and manage reservations — a real marketplace flow, not a demo screen.',
      'Mobile app built with React Native and TypeScript: navigation, forms, listing cards, map interactions, messaging UI and booking states designed for Android release.',
      'Backend built with Node.js / Express and SQL Server: REST resources for authentication, users, listings, media uploads, conversations, favorites and reservations with structured data models.',
      'API security hardened for production habits: JWT sessions, Google Sign-In, Helmet headers, CORS policy and rate limiting to reduce abuse on public endpoints.',
      'Payments via Stripe and an in-app assistant powered by Groq AI to help users with listing/search questions inside the product.',
      'Internationalization shipped in 5 languages (i18n) so the same app works for multilingual users without forking the codebase.',
      'Delivery & DevOps: generated a release Android APK, containerized the stack with Docker, and deployed on Microsoft Azure so the internship ended with a runnable cloud-hosted system.',
      'Engineering posture: I treated it as a product internship — from feature design to secure API contracts to packaging and deployment — aligned with ArcTIC Cloud & Infrastructure training at ESPRIT.'
    ],
    tech: ['React Native', 'TypeScript', 'Express', 'SQL Server', 'REST', 'JWT', 'Google Sign-In', 'Stripe', 'Groq AI', 'Docker', 'Azure', 'OpenStreetMap', 'i18n'],
    captures: [
      './assets/projects/immo-01-splash.jpg',
      './assets/projects/immo-40-home.jpg',
      './assets/projects/immo-nav-01.jpg',
      './assets/projects/immo-nav-05.jpg'
    ]
  },

  smarthire: {
    title: 'SmartHire — Cloud Recruitment & Assessment Platform',
    tag: 'Cloud · DevOps · Microservices · ESPRIT 4th-year academic project',
    cover: null,
    summary:
      'SmartHire is a cloud-native recruitment platform combining private-cloud infrastructure with an Assessment product module. My work spans OpenStack operations, Ansible automation, Docker/Kubernetes orchestration and Spring Boot / Angular microservices for candidate scoring.',
    details: [
      'Infrastructure: set up and operated an OpenStack environment (compute, networking, storage) used as the cloud foundation of the platform.',
      'Automation: wrote / used Ansible to provision and configure services reproducibly instead of manual VM setup.',
      'Runtime: packaged services with Docker and orchestrated them with Kubernetes (scaling, service wiring, deployment lifestyle of microservices).',
      'Product module: developed the Assessment area — skill evaluation and automated scoring — with Spring Boot APIs and an Angular frontend.',
      'Architecture: contributed inside a microservices split (recruitment / assessment / infra concerns separated for independent evolution).',
      'Learning outcome: connects ArcTIC Cloud & Infrastructure skills (OpenStack, automation, containers) with real application features, not infra-only labs.'
    ],
    tech: ['OpenStack', 'Ansible', 'Docker', 'Kubernetes', 'Spring Boot', 'Angular', 'Microservices', 'CI/CD concepts'],
    captures: []
  },

  language: {
    title: 'Language Explorer — AI Pronunciation Assistant',
    tag: 'Web · Speech AI features · Stage d’immersion @ Mobelite Tunisie · ESPRIT (Jul–Aug 2025)',
    cover: null,
    summary:
      'Language Explorer is a web application that helps learners improve pronunciation through browser speech recognition and synthesis. Built during my immersion internship at Mobelite with a modern React stack and Firebase backend services.',
    details: [
      'Built the learner UI with React.js and Tailwind CSS: exercise screens, feedback states and responsive layout for desktop/mobile browsers.',
      'Integrated the Web Speech API for speech-to-text recognition and text-to-speech playback so users can practice and hear corrections in-session.',
      'Implemented Firebase authentication and persistence so progress / session data survives between visits.',
      'Focused on a clear practice loop: prompt → speak → recognize → feedback → retry, suitable for short immersion delivery.',
      'Worked in an agile team context at Mobelite, iterating on UX and reliability of browser speech features.'
    ],
    tech: ['React.js', 'Tailwind CSS', 'Firebase Auth', 'Firestore', 'Web Speech API', 'JavaScript'],
    captures: []
  },

  digitaltwin: {
    title: 'Digital Twin — Composting Process Simulation (PFE)',
    tag: 'Simulation · Digital Twin · Stage PFE @ DigiArt Living Lab · ISET Kélibia (Feb–Jun 2024)',
    cover: null,
    summary:
      'PFE project combining a 3D digital twin of a composting process in Unreal Engine with a React supervision interface — bridging immersive simulation and operational monitoring.',
    details: [
      'Designed a Digital Twin representation of a composting process inside Unreal Engine to visualize system behavior beyond static diagrams.',
      'Connected simulation concepts to measurable/supervisable indicators useful for understanding process states.',
      'Built a companion React web platform for supervision UI: monitoring views and interaction with the simulated process.',
      'Goal of the PFE: show how 3D twinning + web dashboards can support education/demonstration of environmental processes.',
      'Delivered as a full end-of-studies project at DigiArt Living Lab under ISET Kélibia academic framing.'
    ],
    tech: ['Unreal Engine', 'Digital Twin', 'React', 'C++', '3D Simulation', 'Supervision UI'],
    captures: []
  },

  mdintech: {
    title: 'MdinTech / Smart City — Urban Services Platform',
    tag: 'Full-Stack · Projet Intégré (PI) · JavaFX desktop + Symfony API',
    cover: null,
    summary:
      'Team integrated project delivering urban-service modules (parking, medical appointments, trips, payments) through a JavaFX client and a secured Symfony backend with MySQL.',
    details: [
      'Participated in a multi-module Smart City / MdinTech platform aimed at city-related services and marketplace-like flows.',
      'Worked on JavaFX front-office experiences: interactive desktop modules for operators/users of urban services.',
      'Integrated with a Symfony backend exposing secured APIs and business rules, persisted in MySQL.',
      'Domain coverage across the PI included parking management, medical RDV, trip-related features and payment-related flows.',
      'Team engineering: shared ownership, module boundaries and collaborative delivery typical of ESPRIT/ISET-style integrated projects.'
    ],
    tech: ['JavaFX', 'Java', 'Symfony', 'PHP', 'MySQL', 'REST/API'],
    captures: []
  },

  nestjs: {
    title: 'E-Commerce API — NestJS Workshop (GDG ESPRIT)',
    tag: 'Backend · NestJS architecture · GDG on Campus ESPRIT (Nov 2024)',
    cover: null,
    summary:
      'Workshop project implementing a modular e-commerce REST API with NestJS: categories, products and orders using TypeScript, dependency injection and MongoDB persistence.',
    details: [
      'Structured the API with NestJS modules/providers following dependency-injection best practices.',
      'Implemented domain endpoints for catalog categories, products and order handling.',
      'Used TypeScript end-to-end for typed DTOs/services and clearer maintainability.',
      'Persisted entities with MongoDB in a document model adapted to catalog/order data.',
      'Completed as part of a certified GDG ESPRIT NestJS workshop — focus on clean backend architecture rather than UI.'
    ],
    tech: ['NestJS', 'TypeScript', 'Node.js', 'MongoDB', 'REST', 'Dependency Injection'],
    captures: []
  },

  charara: {
    title: 'Charara / Smart-Weld — Welding Tech Website',
    tag: 'Front-end · Static product showcase',
    cover: null,
    summary:
      'Responsive product website presenting Charara’s Smart-Weld Adapter solution: clear value proposition, technical highlights and mobile-friendly layout in vanilla web technologies.',
    details: [
      'Designed and coded a lightweight marketing/product site with HTML, CSS and JavaScript.',
      'Presented the Smart-Weld Adapter concept with readable sections for features and technical positioning.',
      'Optimized for responsive browsing without a heavy SPA framework — fast to load and easy to host.',
      'Useful as a product-communication artifact alongside deeper engineering projects.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    captures: []
  },

  iot: {
    title: 'Environmental IoT Monitor — LoRaWAN',
    tag: 'IoT · Embedded · Stage de perfectionnement @ Smart for Green · ISET Kélibia (Jan–Feb 2023)',
    cover: null,
    summary:
      'IoT monitoring solution using Arduino sensors and LoRaWAN long-range links, built to collect environmental data remotely while reducing energy consumption.',
    details: [
      'Implemented sensor acquisition on Arduino for environmental monitoring use-cases.',
      'Used LoRaWAN to transmit data over long range (~2 km in the project context), suitable where Wi-Fi is unavailable.',
      'Worked on power-aware design; the project reported about 30% reduction in energy consumption.',
      'Oriented toward remote field deployment constraints: range, autonomy and simple embedded firmware.'
    ],
    tech: ['Arduino', 'LoRaWAN', 'C++', 'IoT Sensors', 'Low-power design'],
    captures: []
  },

  fire: {
    title: 'Arduino Forest Fire Detection System',
    tag: 'IoT · Academic early-warning system',
    cover: null,
    summary:
      'Academic embedded system detecting early signs of forest fire risk using multiple Arduino sensors and alerting logic for high-risk zones.',
    details: [
      'Combined flame, smoke and temperature/humidity (DHT) sensing for multi-signal detection.',
      'Designed alerting behavior adapted to remote forest contexts.',
      'Focused on low-power Arduino operation and practical sensor fusion for early warning.'
    ],
    tech: ['Arduino', 'C++', 'Flame Sensor', 'DHT Sensor', 'IoT'],
    captures: []
  },

  gamejam: {
    title: 'Global Game Jam 2024 — Game Prototype',
    tag: 'Game development · 48-hour international jam · Teamwork',
    cover: null,
    summary:
      'Participation in Global Game Jam 2024: designing and shipping a playable game prototype in 48 hours with a team under strict timeboxing.',
    details: [
      'Co-created gameplay, scope and prototype features within the jam theme constraints.',
      'Practiced rapid iteration: cut non-essentials, test quickly, ship a playable build.',
      'Strengthened collaboration skills under deadline pressure typical of jam environments.'
    ],
    tech: ['Game Design', 'Rapid Prototyping', 'Team Collaboration'],
    captures: []
  },

  edu: {
    title: 'Educational Game Supervision Platform',
    tag: 'Web dashboards · Learning UX · DeepFlow AI Club',
    cover: null,
    summary:
      'Web platform to supervise an educational game experience: learner progress, dashboards and interaction flows developed in the DeepFlow club context.',
    details: [
      'Designed supervision UX for educators/mentors following learner activity in an educational game.',
      'Implemented dashboard-oriented UI for progress tracking and learning visibility.',
      'Used React on the front and Node.js services to support supervision workflows.',
      'Built in a community/club setting (DeepFlow) emphasizing usable learning analytics over pure theory.'
    ],
    tech: ['React.js', 'Node.js', 'JavaScript', 'Dashboard UI', 'UX for learning'],
    captures: []
  }
};
