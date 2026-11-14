/* Project catalog — no covers or captures for now */
window.PROJECTS = {
  immo: {
    title: 'Immo Dary — Real-Estate Marketplace',
    tag: 'Mobile · Full-Stack · Stage d’ingénieur @ PLM Ressources Sarl · ESPRIT ArcTIC (15 juin 2026 – 15 août 2026)',
    cover: null,
    summary:
      'Mobile marketplace for buying and renting property in Tunisia — built during my engineering internship at PLM Ressources Sarl (ESPRIT ArcTIC). I owned the React Native client, Express/SQL Server API, auth, Stripe payments, Groq AI assistant, OpenStreetMap, messaging, bookings, five-language i18n, and Docker/Azure deployment with an Android APK release.',
    details: [
      'Stage d’ingénieur (Jun–Aug 2026) at PLM Ressources — goal was a shippable marketplace, not a classroom prototype.',
      'Product scope: buy/rent listings with filters, map discovery, favorites, owner messaging, and reservation flows.',
      'React Native + TypeScript: stack/tab navigation, listing and map UI, booking states, validation, Android release.',
      'Express + SQL Server: REST for users, listings, media, favorites, conversations and reservations.',
      'Auth & security: JWT, Google Sign-In, Helmet, CORS and rate limiting on sensitive endpoints.',
      'Stripe payments, Groq in-app assistant, 5-language i18n, Docker on Azure, signed APK for field testing.',
      'Public landing page and downloadable release APK at medrahim.github.io/immodary.'
    ],
    tech: ['React Native', 'TypeScript', 'Express', 'SQL Server', 'REST', 'JWT', 'Google Sign-In', 'Stripe', 'Groq AI', 'Docker', 'Azure', 'OpenStreetMap', 'i18n'],
    repo: 'https://github.com/MedRahim/GestionImmobiliere',
    captures: []
  },

  smarthire: {
    title: 'SmartHire — Cloud Recruitment & Assessment Platform',
    tag: 'Cloud · DevOps · Microservices · ESPRIT 4th-year academic project',
    cover: null,
    summary:
      'Cloud-native recruitment platform for ESPRIT’s ArcTIC Cloud & Infrastructure track — OpenStack private cloud, Ansible, Docker/Kubernetes, and microservices including an Assessment module I built with Spring Boot and Angular for skill evaluation and automated scoring.',
    details: [
      'Fourth-year ESPRIT project linking infrastructure labs to a multi-service recruitment product.',
      'OpenStack + Ansible: provisioned compute/network/storage and automated VM bootstrap.',
      'Docker/Kubernetes: containerized microservices with deployments, scaling and rolling updates.',
      'Assessment module (my focus): Spring Boot APIs for tests and scoring; Angular UI for recruiters and candidates.',
      'Demonstrates ArcTIC skills from IaaS through orchestration to user-facing cloud features.'
    ],
    tech: ['OpenStack', 'Ansible', 'Docker', 'Kubernetes', 'Spring Boot', 'Angular', 'Microservices', 'CI/CD concepts'],
    repo: 'https://github.com/MedRahim/Smart-Hire-Frontend',
    captures: []
  },

  cicd: {
    title: 'Jenkins CI/CD Pipeline — Spring Boot & Angular',
    tag: 'Cloud · DevOps · CI/CD · ESPRIT DevOps module (2026)',
    cover: null,
    summary:
      'Capstone of ESPRIT’s DevOps module: an eight-stage Jenkins pipeline wrapped around a Spring Boot + Angular application — Maven and npm builds, JUnit reports, SonarQube quality gate, Docker images pushed to Docker Hub, and deployment through Docker Compose.',
    details: [
      'Pipeline as code: a declarative Jenkinsfile versioned with the application, not configured by hand in the UI.',
      'CI stages: SCM checkout, Maven compile, unit tests with archived Surefire reports, backend packaging, npm ci and Angular production build.',
      'Quality: SonarQube analysis followed by a blocking quality gate (waitForQualityGate) before any artefact is published.',
      'Containers: multi-stage Dockerfiles — Maven/Temurin 17 then JRE Alpine for the API, Node 24 then Nginx Alpine for the frontend.',
      'CD: images tagged with the build number, pushed to Docker Hub with Jenkins credentials, then deployed with docker compose.',
      'Runtime stack: Spring Boot API on MySQL 8 with a health-checked database service on a dedicated bridge network.'
    ],
    tech: ['Jenkins', 'SonarQube', 'Docker', 'Docker Hub', 'Docker Compose', 'Spring Boot', 'Angular', 'Maven', 'MySQL', 'Nginx'],
    repo: 'https://github.com/MedRahim/DevOps-AppGestionDesProjets',
    captures: []
  },

  tmdb: {
    title: 'TMDB Revenue Predictor — Machine Learning Web Service',
    tag: 'AI · Machine Learning · Data · Personal project (2025)',
    cover: null,
    summary:
      'Random Forest trained on the TMDB 5000 dataset to predict a film’s revenue from budget, popularity, runtime, rating and vote count — served through a Flask API and a Streamlit interface, packaged with Docker.',
    details: [
      'Model: Random Forest with 200 trees reaching R² = 0.6377 and RMSE ≈ $72M on the test set — a baseline that captures the main drivers without overclaiming.',
      'Features: budget, popularity, runtime, vote average and vote count, cleaned and engineered with Pandas.',
      'Serving: Flask JSON API for programmatic predictions, plus a Streamlit app for interactive what-if exploration.',
      'Reproducibility: model and scaler persisted as .pkl artefacts, dependencies pinned in requirements.txt, Dockerfile for deployment.',
      'End-to-end ownership: data collection script, notebook analysis, training script, API and user-facing interface.'
    ],
    tech: ['Python', 'scikit-learn', 'Pandas', 'Flask', 'Streamlit', 'Docker', 'Jupyter'],
    repo: 'https://github.com/MedRahim/tmdb_revenue_predictor',
    captures: []
  },

  devopslabs: {
    title: 'DevOps Lab Series — Git, Docker, Jenkins, Terraform & Ansible',
    tag: 'Cloud · DevOps · Hands-on labs (2026)',
    cover: null,
    summary:
      'Hands-on DevOps labs: collaboration with Git, a multi-container Docker Compose stack, a declarative Jenkins CI/CD pipeline, then infrastructure as code with Terraform and configuration with Ansible.',
    details: [
      'Week 2 — <a href="https://github.com/MedRahim/DevOps-Week-02" target="_blank" rel="noopener noreferrer">Git, GitHub &amp; collaboration</a>: feature branches, merged pull requests and a resolved merge conflict on a shared Python codebase.',
      'Week 4 — <a href="https://github.com/MedRahim/DevOps-Week-04" target="_blank" rel="noopener noreferrer">Docker &amp; Docker Compose</a>: Nginx frontend, Node.js/Express backend and PostgreSQL 16, custom Dockerfiles, dedicated bridge network.',
      'Week 5 — <a href="https://github.com/MedRahim/DevOps-Week-05" target="_blank" rel="noopener noreferrer">Jenkins CI/CD</a>: declarative pipeline with checkout, build, node:test suite and a custom validation stage; Jenkins itself run through Compose.',
      'Week 6 — <a href="https://github.com/MedRahim/DevOps-Week-06" target="_blank" rel="noopener noreferrer">Terraform &amp; Ansible</a>: Terraform provisions the infrastructure, Ansible configures the server and deploys the application, with a documented destroy path.',
      'The through-line: each week adds one layer to the same delivery chain — from version control to reproducible infrastructure.'
    ],
    tech: ['Git', 'Docker', 'Docker Compose', 'Jenkins', 'Terraform', 'Ansible', 'PostgreSQL', 'Nginx'],
    repo: 'https://github.com/MedRahim/DevOps-Week-06',
    captures: []
  },

  language: {
    title: 'Language Explorer — AI Pronunciation Assistant',
    tag: 'Web · Speech AI features · Stage d’immersion @ Mobelite Tunisie · ESPRIT (Jul–Aug 2025)',
    cover: null,
    summary:
      'Web app for pronunciation practice using browser speech recognition and synthesis. Built during my immersion internship at Mobelite Tunisie — React + Tailwind UI with Firebase auth/persistence and the Web Speech API for real-time speak-and-feedback loops.',
    details: [
      'Two-month immersion at Mobelite — usable learner UX and reliable browser speech features.',
      'React + Tailwind: responsive exercise screens with clear success/retry feedback on desktop and mobile.',
      'Web Speech API for STT/TTS; Firebase Auth and Firestore for sessions and practice history.',
      'Practice loop: prompt → listen → speak → recognize → feedback — designed for short daily sessions.',
      'Agile squad delivery: browser compatibility, accuracy handling and learner-focused copy.'
    ],
    tech: ['React.js', 'Tailwind CSS', 'Firebase Auth', 'Firestore', 'Web Speech API', 'JavaScript'],
    captures: []
  },

  digitaltwin: {
    title: 'Digital Twin — Composting Process Simulation (PFE)',
    tag: 'Simulation · Digital Twin · Stage PFE @ DigiArt Living Lab · ISET Kélibia (Feb–Jun 2024)',
    cover: null,
    summary:
      'PFE at DigiArt Living Lab (ISET Kélibia): 3D digital twin of a composting process in Unreal Engine, coupled with a React supervision dashboard — immersive visualization plus operational monitoring of an environmental process.',
    details: [
      'Final-year project (Feb–Jun 2024) — deliverable included both 3D simulation and web supervision.',
      'Unreal Engine twin: composting stages and process dynamics for education and demonstration.',
      'React dashboard: key indicators, scenario views and twin outputs for non-3D users.',
      'Twin as immersive layer, React as operational layer — lab-scale digital-twin pattern.',
      'Validated how twinning communicates environmental processes to mixed audiences.'
    ],
    tech: ['Unreal Engine', 'Digital Twin', 'React', 'C++', '3D Simulation', 'Supervision UI'],
    captures: []
  },

  mdintech: {
    title: 'MdinTech / Smart City — Urban Services Platform',
    tag: 'Full-Stack · Projet Intégré (PI) · JavaFX desktop + Symfony API',
    cover: null,
    summary:
      'Team Projet Intégré delivering Smart City modules — parking, medical appointments, trips and payments — via a JavaFX desktop client backed by a secured Symfony REST API and MySQL.',
    details: [
      'Multi-module Smart City platform simulating municipal urban services from one ecosystem.',
      'JavaFX desktop: forms, tables and navigation across service modules.',
      'Symfony REST backend with validation and authorization; MySQL for users, bookings and payments.',
      'Secured API consumption from JavaFX with DTO mapping and integrated squad delivery.'
    ],
    tech: ['JavaFX', 'Java', 'Symfony', 'PHP', 'MySQL', 'REST/API'],
    repo: 'https://github.com/MedRahim/pidev_Symfony',
    captures: []
  },

  nestjs: {
    title: 'E-Commerce API — NestJS Workshop (GDG ESPRIT)',
    tag: 'Backend · NestJS architecture · GDG on Campus ESPRIT (Nov 2024)',
    cover: null,
    summary:
      'GDG ESPRIT workshop (Nov 2024): modular e-commerce REST API in NestJS — categories, products and orders with TypeScript, dependency injection, DTO validation and MongoDB persistence.',
    details: [
      'Certified GDG NestJS session focused on backend architecture patterns.',
      'Feature modules (categories, products, orders) with controllers, services and DI.',
      'Typed DTOs with validation; MongoDB document models for products and order line items.',
      'Exception filters, pipes and guards demonstrating NestJS idioms for maintainable APIs.'
    ],
    tech: ['NestJS', 'TypeScript', 'Node.js', 'MongoDB', 'REST', 'Dependency Injection'],
    captures: []
  },

  charara: {
    title: 'Charara / Smart-Weld — Welding Tech Website',
    tag: 'Front-end · Static product showcase',
    cover: null,
    summary:
      'Responsive marketing site for Charara’s Smart-Weld Adapter — HTML/CSS/JavaScript product showcase with hero, features and contact sections, no heavy SPA framework.',
    details: [
      'Product communication for industrial/welding audiences — hero, features and specs.',
      'Semantic HTML5, CSS3 flex/grid, vanilla JS for mobile nav and smooth scrolling.',
      'Responsive breakpoints for phones, tablets and desktop — fast static hosting.',
      'Complements engineering projects with client-facing product storytelling.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    captures: []
  },

  iot: {
    title: 'Environmental IoT Monitor — LoRaWAN',
    tag: 'IoT · Embedded · Stage de perfectionnement @ Smart for Green · ISET Kélibia (Jan–Feb 2023)',
    cover: null,
    summary:
      'Perfectionnement internship at Smart for Green: environmental monitoring with Arduino sensor nodes over LoRaWAN (~2 km range), optimized for low power — roughly 30% energy reduction vs. initial baseline.',
    details: [
      'Smart for Green stage — field data where Wi-Fi/backhaul is impractical.',
      'Arduino firmware reading environmental sensors with sampling tuned for autonomy.',
      'LoRaWAN long-range link from node to gateway for dispersed outdoor monitoring.',
      'Sleep modes and duty-cycling contributing to ~30% lower energy use.',
      'Embedded C++, radio protocols and green-tech context before later cloud work.'
    ],
    tech: ['Arduino', 'LoRaWAN', 'C++', 'IoT Sensors', 'Low-power design'],
    captures: []
  },

  fire: {
    title: 'Arduino Forest Fire Detection System',
    tag: 'IoT · Academic early-warning system',
    cover: null,
    summary:
      'Academic embedded IoT project: multi-sensor Arduino station combining flame, smoke and DHT temperature/humidity readings with on-device alerting for remote, power-limited environments.',
    details: [
      'Low-cost early warning for forest-edge zones where centralized cameras are sparse.',
      'Sensor fusion across flame, smoke and DHT to reduce false positives.',
      'Firmware: periodic sampling, threshold rules, debouncing and buzzer/LED alerts.',
      'Documented wiring, calibration and demo scenarios for high-risk seasonal conditions.'
    ],
    tech: ['Arduino', 'C++', 'Flame Sensor', 'DHT Sensor', 'IoT'],
    captures: []
  },

  gamejam: {
    title: 'Global Game Jam 2024 — Game Prototype',
    tag: 'Game development · 48-hour international jam · Teamwork',
    cover: null,
    summary:
      'Global Game Jam 2024: collaborated on a playable prototype in 48 hours under the annual theme — rapid scoping, role split and a shippable build at deadline.',
    details: [
      '48-hour global event — theme at kickoff, all decisions compressed into one weekend.',
      'Workflow: brainstorm → vertical slice → polish; explicit cut list when scope exceeded hours.',
      'Gameplay implementation, asset integration, bug triage and playtesting between builds.',
      'One coherent core loop for judges — validates creativity and velocity under pressure.'
    ],
    tech: ['Game Design', 'Rapid Prototyping', 'Team Collaboration'],
    captures: []
  },

  edu: {
    title: 'Educational Game Supervision Platform',
    tag: 'Web dashboards · Learning UX · DeepFlow AI Club',
    cover: null,
    summary:
      'DeepFlow AI club project: web platform to supervise an educational game — mentor dashboards for learner progress and session visibility, React frontend with Node.js backend.',
    details: [
      'Community-driven build emphasizing usable learning tools over research demos.',
      'Educator screens: cohort overview, individual activity and intervention signals.',
      'React dashboards with progress charts and filters; Node.js REST aggregating game events.',
      'Event schema from game client to API so new features emit trackable signals.'
    ],
    tech: ['React.js', 'Node.js', 'JavaScript', 'Dashboard UI', 'UX for learning'],
    captures: []
  }
};
