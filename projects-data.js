/* Project catalog — no covers; Immo has 3 app captures only */
window.PROJECTS = {
  immo: {
    title: 'Immo Dary — Real-Estate Marketplace',
    tag: 'Mobile · Full-Stack · Stage d’ingénieur @ PLM Ressources Sarl · ESPRIT ArcTIC (15 juin 2026 – 15 août 2026)',
    cover: null,
    summary:
      'Immo Dary is a production-oriented mobile marketplace for buying, renting and exploring real-estate listings in Tunisia. During my engineering internship at PLM Ressources Sarl (ESPRIT ArcTIC, Cloud & Infrastructure track), I owned the product end-to-end: React Native mobile UX, Express REST API on SQL Server, authentication and API hardening, Stripe payments, a Groq-powered in-app assistant, OpenStreetMap discovery, favorites and messaging, booking/reservation flows, five-language i18n, Docker packaging, Azure deployment and an Android APK release.',
    details: [
      'Internship context: two-month stage d’ingénieur (≈15 June–15 August 2026) at PLM Ressources Sarl under ESPRIT ArcTIC training — goal was a shippable marketplace, not a classroom prototype.',
      'Product scope: full buy/rent marketplace — browse listings with filters, view rich property detail screens, explore geolocated offers on an interactive OpenStreetMap map, save favorites, message owners/agents about listings, and create or manage reservations/bookings.',
      'Mobile client (React Native + TypeScript): typed components, stack/tab navigation, listing cards and search filters, map markers and region handling, conversation threads, booking state UI, form validation and error states tuned for Android release.',
      'Backend (Node.js + Express + SQL Server): REST resources for users, listings, media uploads, favorites, conversations/messages and reservations; relational schema and migrations aligned with marketplace entities (properties, agents, booking slots).',
      'Authentication & identity: email/password flows plus Google Sign-In on mobile; JWT-based session tokens issued by the API and validated on protected routes.',
      'API security posture: Helmet for HTTP headers, explicit CORS policy, rate limiting on sensitive/public endpoints, input validation and consistent error responses — habits aimed at a publicly reachable API.',
      'Payments: Stripe integration for in-app payment flows tied to marketplace transactions (reservation deposits, service fees or listing-related charges depending on business rules).',
      'AI assistant: Groq API–powered conversational helper embedded in the app to answer listing/search questions, guide users through filters and reduce friction in discovery.',
      'Internationalization: i18n across five languages from a single codebase — copy, labels and locale-aware formatting without maintaining separate app builds.',
      'DevOps & delivery: Dockerized backend (and supporting services where applicable), deployment on Microsoft Azure, environment-based configuration, and generation of a signed release Android APK for field testing.',
      'Engineering ownership: from API contract design and mobile–backend integration to security review, payment wiring and cloud handoff — treated as a product internship with PLM Ressources, not isolated feature tickets.',
      'ArcTIC alignment: combines full-stack delivery with Cloud & Infrastructure practices (containers, cloud hosting, secure public endpoints) expected in ESPRIT’s fourth-year engineering path.'
    ],
    tech: ['React Native', 'TypeScript', 'Express', 'SQL Server', 'REST', 'JWT', 'Google Sign-In', 'Stripe', 'Groq AI', 'Docker', 'Azure', 'OpenStreetMap', 'i18n'],
    captures: [
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
      'SmartHire is a cloud-native recruitment platform built as an ESPRIT fourth-year project in the ArcTIC Cloud & Infrastructure track. It pairs private-cloud foundations (OpenStack, Ansible, Docker/Kubernetes) with application microservices — including an Assessment module I developed with Spring Boot and Angular for skill evaluation and automated candidate scoring.',
    details: [
      'Academic framing: fourth-year ESPRIT cloud project connecting infrastructure labs with a real multi-service recruitment product (hiring workflows + technical assessment).',
      'OpenStack foundation: provisioned and operated compute, networking and storage on a private OpenStack cloud used as the runtime environment for platform services.',
      'Ansible automation: playbooks to bootstrap VMs, install dependencies and configure services reproducibly — reducing manual drift between team environments.',
      'Container runtime: services packaged as Docker images, deployed and wired on Kubernetes (deployments, services, scaling and rolling update patterns for microservices).',
      'Assessment module (my focus): Spring Boot REST APIs for tests, question banks and scoring logic; Angular frontend for recruiters/candidates to run evaluations and read results.',
      'Microservices split: recruitment, assessment and supporting infra concerns separated so teams can evolve APIs and UIs independently without a monolithic deploy.',
      'Operational mindset: monitoring deployment health, service discovery between pods, and treating the Assessment module as a consumer of shared platform services (auth, gateway patterns where applicable).',
      'Outcome: demonstrates ArcTIC skills end-to-end — from IaaS (OpenStack) through automation and orchestration to user-facing cloud application features.'
    ],
    tech: ['OpenStack', 'Ansible', 'Docker', 'Kubernetes', 'Spring Boot', 'Angular', 'Microservices', 'CI/CD concepts'],
    captures: []
  },

  language: {
    title: 'Language Explorer — AI Pronunciation Assistant',
    tag: 'Web · Speech AI features · Stage d’immersion @ Mobelite Tunisie · ESPRIT (Jul–Aug 2025)',
    cover: null,
    summary:
      'Language Explorer is a web application that helps learners practice pronunciation using browser speech recognition and synthesis. Built during my two-month immersion internship at Mobelite Tunisie (July–August 2025), it combines a React + Tailwind learner UI with Firebase authentication and persistence and the Web Speech API for real-time speak-and-feedback loops.',
    details: [
      'Internship context: immersion stage at Mobelite Tunisie — short delivery window, emphasis on usable learner UX and reliable browser speech features.',
      'Frontend: React.js with Tailwind CSS — responsive exercise screens, visual feedback states (success, retry, in-progress) and layouts that work on desktop and mobile browsers.',
      'Speech stack: Web Speech API for speech-to-text capture and text-to-speech playback so learners hear prompts, speak answers and receive immediate recognition feedback.',
      'Firebase backend: Authentication for user sessions and Firestore (or Firebase persistence layer) so practice history and profile data survive between visits.',
      'Practice loop UX: prompt → listen → speak → recognize → score/feedback → retry — designed for short daily sessions rather than heavy LMS complexity.',
      'Team delivery: worked in an agile squad at Mobelite, iterating on pronunciation accuracy handling, browser compatibility edge cases and copy clarity for learners.',
      'Engineering takeaway: integrating “AI-adjacent” browser APIs (speech) with a modern React stack and cloud auth — typical of product work at a mobile/web agency.'
    ],
    tech: ['React.js', 'Tailwind CSS', 'Firebase Auth', 'Firestore', 'Web Speech API', 'JavaScript'],
    captures: []
  },

  digitaltwin: {
    title: 'Digital Twin — Composting Process Simulation (PFE)',
    tag: 'Simulation · Digital Twin · Stage PFE @ DigiArt Living Lab · ISET Kélibia (Feb–Jun 2024)',
    cover: null,
    summary:
      'End-of-studies (PFE) project at DigiArt Living Lab (ISET Kélibia, Licence Mention Excellente): a 3D digital twin of a composting process built in Unreal Engine, coupled with a React supervision dashboard for monitoring simulated states — bridging immersive visualization and operational understanding of an environmental process.',
    details: [
      'PFE context: final-year project (February–June 2024) at DigiArt Living Lab under ISET Kélibia academic supervision — deliverable included both simulation and web supervision.',
      'Unreal Engine twin: modeled composting stages, assets and process dynamics in 3D so operators/students can observe system behavior beyond static diagrams or slides.',
      'Simulation intent: linked visual states to process variables (temperature, phase progression, throughput indicators) to support education and demonstration of composting mechanics.',
      'React supervision UI: web dashboard for monitoring key indicators, triggering or viewing simulation scenarios and presenting twin outputs to non-3D users.',
      'Integration concept: twin as the immersive layer, React as the operational layer — a pattern common in industry digital-twin deployments at lab scale.',
      'Technical mix: Unreal (C++/Blueprints) for real-time 3D, React for accessible supervision — requiring clear data contracts between simulation and web views.',
      'Outcome: validated how digital twinning can communicate environmental processes to stakeholders who need both spatial intuition and numeric supervision.'
    ],
    tech: ['Unreal Engine', 'Digital Twin', 'React', 'C++', '3D Simulation', 'Supervision UI'],
    captures: []
  },

  mdintech: {
    title: 'MdinTech / Smart City — Urban Services Platform',
    tag: 'Full-Stack · Projet Intégré (PI) · JavaFX desktop + Symfony API',
    cover: null,
    summary:
      'Team integrated project (Projet Intégré) delivering MdinTech / Smart City urban-service modules — parking, medical appointments (RDV), trips and payments — through a JavaFX desktop client backed by a secured Symfony REST API and MySQL persistence.',
    details: [
      'PI scope: multi-module Smart City platform simulating how a municipality or operator would offer several urban services from one ecosystem.',
      'JavaFX desktop client: rich desktop UI for operators and end-users — forms, tables, navigation between service modules with JavaFX controls and event handling.',
      'Symfony backend: PHP Symfony application exposing REST endpoints, domain services, validation and authorization middleware for business rules.',
      'MySQL persistence: relational schema for users, bookings, parking sessions, medical RDV slots, trip records and payment-related entities with migrations/seeding as needed.',
      'Domain modules: parking management (availability, sessions), medical appointment scheduling, trip-related features and payment flows integrated across modules.',
      'Security & integration: secured API consumption from JavaFX (tokens or session mechanisms), DTO mapping and error handling between desktop client and server.',
      'Team engineering: shared module boundaries, code reviews and integrated delivery typical of ESPRIT/ISET Projet Intégré — full-stack ownership within a squad.'
    ],
    tech: ['JavaFX', 'Java', 'Symfony', 'PHP', 'MySQL', 'REST/API'],
    captures: []
  },

  nestjs: {
    title: 'E-Commerce API — NestJS Workshop (GDG ESPRIT)',
    tag: 'Backend · NestJS architecture · GDG on Campus ESPRIT (Nov 2024)',
    cover: null,
    summary:
      'Workshop project delivered during GDG on Campus ESPRIT (November 2024): a modular e-commerce REST API in NestJS covering catalog categories, products and orders — TypeScript end-to-end, dependency injection, DTO validation and MongoDB persistence.',
    details: [
      'Workshop context: certified GDG ESPRIT NestJS session — focus on backend architecture patterns rather than a full storefront UI.',
      'Modular NestJS structure: feature modules (categories, products, orders) with controllers, services and providers wired through Nest dependency injection.',
      'Domain endpoints: CRUD and query operations for catalog taxonomy, product inventory fields and order lifecycle (create, list, status updates as scoped in the workshop).',
      'TypeScript & DTOs: typed request/response objects, class-validator/class-transformer style validation and consistent API contracts.',
      'MongoDB persistence: document models suited to flexible product attributes and embedded order line items — repositories or Mongoose schemas per aggregate.',
      'Cross-cutting concerns: exception filters, pipes and guards demonstrating NestJS idioms for maintainable APIs.',
      'Takeaway: production-style Nest layout applicable to larger microservice or monolith backends in Node/TypeScript ecosystems.'
    ],
    tech: ['NestJS', 'TypeScript', 'Node.js', 'MongoDB', 'REST', 'Dependency Injection'],
    captures: []
  },

  charara: {
    title: 'Charara / Smart-Weld — Welding Tech Website',
    tag: 'Front-end · Static product showcase',
    cover: null,
    summary:
      'Responsive marketing website for Charara’s Smart-Weld Adapter solution — a lightweight HTML/CSS/JavaScript product showcase presenting value proposition, technical highlights and contact-oriented sections without a heavy SPA framework.',
    details: [
      'Product communication goal: explain the Smart-Weld Adapter concept to industrial/welding audiences with clear hero, features and specification sections.',
      'Stack: semantic HTML5 structure, CSS3 layout (flex/grid), vanilla JavaScript for interactions such as mobile navigation toggles or smooth scrolling.',
      'Responsive design: breakpoints and fluid typography so the site reads well on phones, tablets and desktop — important for field sales and trade-show sharing.',
      'Performance: static assets, no build toolchain required — fast initial load and simple hosting on any static server or CDN.',
      'Visual hierarchy: emphasis on technical credibility (materials, compatibility, use cases) while keeping navigation shallow for quick scanning.',
      'Role in portfolio: complements deep engineering projects with client-facing product storytelling and front-end fundamentals.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    captures: []
  },

  iot: {
    title: 'Environmental IoT Monitor — LoRaWAN',
    tag: 'IoT · Embedded · Stage de perfectionnement @ Smart for Green · ISET Kélibia (Jan–Feb 2023)',
    cover: null,
    summary:
      'Perfectionnement internship at Smart for Green (January–February 2023, ISET Kélibia): environmental monitoring with Arduino sensor nodes transmitting over LoRaWAN (~2 km range), optimized for low power and remote field deployment — project reported roughly 30% energy consumption reduction versus an initial baseline design.',
    details: [
      'Internship context: short Smart for Green stage focused on sustainable IoT — acquiring field data where Wi-Fi/backhaul is impractical.',
      'Sensor layer: Arduino firmware reading environmental sensors (temperature, humidity and related probes per deployment config) with debouncing and sampling intervals tuned for autonomy.',
      'LoRaWAN link: long-range, low-bandwidth radio (~2 km in project conditions) from node to gateway — suited to dispersed outdoor monitoring.',
      'Power optimization: sleep modes, duty-cycling transmissions and hardware/software tweaks contributing to ~30% lower energy use (as documented on project/CV materials).',
      'Data path: payload encoding on device, gateway reception and downstream handling for supervision or logging (platform specifics per lab setup).',
      'Deployment constraints: weather exposure, battery life targets and minimal maintenance — design choices reflected in firmware structure and antenna placement guidance.',
      'Skills bridge: embedded C++, radio protocols and green-tech context before later cloud/full-stack work at ESPRIT.'
    ],
    tech: ['Arduino', 'LoRaWAN', 'C++', 'IoT Sensors', 'Low-power design'],
    captures: []
  },

  fire: {
    title: 'Arduino Forest Fire Detection System',
    tag: 'IoT · Academic early-warning system',
    cover: null,
    summary:
      'Academic embedded IoT project: multi-sensor Arduino station for early forest fire risk detection combining flame, smoke and DHT temperature/humidity readings with on-device alerting logic suited to remote, power-limited environments.',
    details: [
      'Problem framing: provide low-cost early warning in forest-edge or rural zones where centralized cameras are sparse.',
      'Sensor fusion: flame sensor, smoke detection module and DHT temperature/humidity to cross-check signals and reduce false positives from single-sensor spikes.',
      'Arduino firmware: periodic sampling, threshold and combination rules, debouncing and alert states (buzzer/LED/serial logging depending on prototype wiring).',
      'Power awareness: loop timing and sensor activation patterns aimed at battery or solar-assisted field nodes.',
      'Alerting behavior: escalate when multiple indicators agree; hold/recover states to avoid alarm fatigue from transient heat or dust.',
      'Academic deliverable: documented wiring, calibration notes and demo scenarios for high-risk seasonal conditions.',
      'Foundation for later IoT work: same embedded mindset applied later in LoRaWAN environmental monitoring at Smart for Green.'
    ],
    tech: ['Arduino', 'C++', 'Flame Sensor', 'DHT Sensor', 'IoT'],
    captures: []
  },

  gamejam: {
    title: 'Global Game Jam 2024 — Game Prototype',
    tag: 'Game development · 48-hour international jam · Teamwork',
    cover: null,
    summary:
      'Participant in Global Game Jam 2024: collaborated on a playable game prototype delivered in 48 hours under the annual international theme — rapid scoping, division of roles (design, code, art/audio as available) and a shippable build at deadline.',
    details: [
      'Jam format: 48-hour global event — theme revealed at kickoff; all design and implementation decisions compressed into one weekend.',
      'Team workflow: brainstorm → paper prototype → vertical slice → polish pass; explicit cut list when scope exceeded available hours.',
      'Role contribution: gameplay implementation, integration of assets, bug triage and playtesting loops between builds.',
      'Engine/tooling: used jam-appropriate stack (per team choice — typically Unity/Godot or web canvas) prioritizing familiarity over perfection.',
      'Playability goal: one coherent core loop demonstrable to jammers and judges — menus, win/lose or progression hook, minimal tutorialization.',
      'Soft skills: communication under sleep-deprived deadlines, resolving disagreements on scope, presenting the prototype in the closing session.',
      'Contrast with product projects: validates creativity and velocity — complementary to longer internships like Immo Dary or Mobelite.'
    ],
    tech: ['Game Design', 'Rapid Prototyping', 'Team Collaboration'],
    captures: []
  },

  edu: {
    title: 'Educational Game Supervision Platform',
    tag: 'Web dashboards · Learning UX · DeepFlow AI Club',
    cover: null,
    summary:
      'Web platform developed in the DeepFlow AI club context to supervise an educational game: mentor/educator dashboards for learner progress, session visibility and interaction flows — React frontend with Node.js backend services supporting supervision workflows rather than only in-game telemetry.',
    details: [
      'Club context: DeepFlow AI — community-driven build emphasizing usable learning tools over pure research demos.',
      'Supervision UX: screens for educators/mentors to follow cohorts, drill into individual learner activity and identify who needs intervention.',
      'Dashboards: progress charts, completion states, recent actions and filters by group/session — information density tuned for quick scanning.',
      'React frontend: componentized views, routing between overview and detail pages, responsive layout for laptop-first mentor use.',
      'Node.js backend: REST (or similar) endpoints aggregating game events, user profiles and progress metrics stored for historical views.',
      'Game linkage: defined event schema from the educational game client to the supervision API so new game features can emit trackable signals.',
      'Product angle: treats learning analytics as a first-class UX problem — visibility and actionability for humans supervising play-based learning.'
    ],
    tech: ['React.js', 'Node.js', 'JavaScript', 'Dashboard UI', 'UX for learning'],
    captures: []
  }
};
