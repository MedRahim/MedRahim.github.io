/* Project catalog for modal details + galleries */
window.PROJECTS = {
  immo: {
    title: 'Immo Dary — Real-Estate Marketplace',
    tag: 'Mobile · Full-Stack · Internship @ PLM · ESPRIT',
    cover: './assets/projects/immo.svg',
    summary:
      'End-to-end mobile marketplace for real estate: listings, OpenStreetMap, messaging, favorites and bookings. React Native / TypeScript, Express + SQL Server, JWT security, Stripe, Groq AI, 5-language i18n, Android APK, Docker on Azure.',
    tech: ['React Native', 'Express', 'SQL Server', 'JWT', 'Stripe', 'Groq', 'Docker', 'Azure'],
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
      './assets/projects/immo-mock-login.jpg',
      './assets/projects/immo-mock-detail.jpg',
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
      './assets/projects/immo-real_28.jpg',
      './assets/projects/immo-landing-1.jpg',
      './assets/projects/immo-landing-3.jpg',
      './assets/projects/immo-landing-5.jpg',
      './assets/projects/immo-map.jpg',
      './assets/projects/immo-splash.jpg'
    ]
  },
  smarthire: {
    title: 'SmartHire — Recruitment & Assessment Platform',
    tag: 'Cloud · Full-Stack · 4th Year · ESPRIT',
    cover: './assets/projects/smarthire.svg',
    summary:
      'Cloud-native recruitment platform on OpenStack with Ansible automation, Docker/Kubernetes orchestration, and Assessment module in Spring Boot / Angular.',
    tech: ['OpenStack', 'Ansible', 'Docker', 'Kubernetes', 'Spring Boot', 'Angular'],
    captures: ['./assets/projects/smarthire.svg'],
    note: 'No app screenshots found on disk yet — SVG cover only. Add captures in assets/projects/ to expand the gallery.'
  },
  language: {
    title: 'Language Explorer — AI Pronunciation Assistant',
    tag: 'AI · Web · Internship @ Mobelite · ESPRIT',
    cover: './assets/projects/language.svg',
    summary:
      'Web assistant for pronunciation practice using Web Speech API, React.js + Tailwind, and Firebase auth/progress.',
    tech: ['React.js', 'Tailwind CSS', 'Firebase', 'Web Speech API'],
    captures: ['./assets/projects/language.svg'],
    note: 'No Mobelite screenshots found locally — SVG cover only for now.'
  },
  digitaltwin: {
    title: 'Digital Twin — Composting Simulation',
    tag: 'Game Dev · Digital Twin · PFE · ISET Kélibia',
    cover: './assets/projects/digitaltwin.svg',
    summary:
      'Unreal Engine digital twin of a composting process with a React supervision platform for monitoring.',
    tech: ['Unreal Engine', 'Digital Twin', 'React', 'C++'],
    captures: ['./assets/projects/digitaltwin.svg'],
    note: 'No DigiArt gameplay screenshots found locally — SVG cover only for now.'
  },
  mdintech: {
    title: 'MdinTech / Smart City — Urban Platform',
    tag: 'Full-Stack · PI · JavaFX / Symfony',
    cover: './assets/projects/mdintech.svg',
    summary:
      'Integrated urban marketplace & services (parking, appointments, trips, payments) with JavaFX front-office and Symfony API.',
    tech: ['JavaFX', 'Symfony', 'PHP', 'MySQL', 'Java'],
    captures: [
      './assets/projects/mdin-background.jpg',
      './assets/projects/mdin-backg.jpg',
      './assets/projects/mdin-backgg.jpg',
      './assets/projects/mdin-promo2.jpg',
      './assets/projects/mdin-logo.jpg',
      './assets/projects/mdin-reservation.jpg',
      './assets/projects/mdin-stats.jpg',
      './assets/projects/mdintech.svg'
    ]
  },
  nestjs: {
    title: 'E-Commerce API — NestJS Workshop',
    tag: 'Backend · GDG ESPRIT',
    cover: './assets/projects/nestjs.svg',
    summary:
      'Modular NestJS / TypeScript e-commerce API: categories, products, orders, DI and clean module architecture.',
    tech: ['NestJS', 'TypeScript', 'MongoDB', 'REST'],
    captures: ['./assets/projects/nestjs.svg'],
    note: 'Workshop project — no UI screenshots (API-focused).'
  },
  charara: {
    title: 'Charara / Smart-Weld — Welding Tech Website',
    tag: 'Web · Product Site',
    cover: './assets/projects/charara.svg',
    summary:
      'Responsive showcase site for a welding / Smart-Weld Adapter product in HTML, CSS and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    captures: ['./assets/projects/charara.svg'],
    note: 'No Charara screenshots found in the project folder — SVG cover only for now.'
  },
  iot: {
    title: 'Environmental IoT Monitor — LoRaWAN',
    tag: 'IoT · Internship @ Smart for Green · ISET',
    cover: './assets/projects/iot.svg',
    summary:
      'Long-range Arduino / LoRaWAN environmental monitoring (~2 km) with ~30% energy reduction.',
    tech: ['Arduino', 'LoRaWAN', 'C++', 'IoT Sensors'],
    captures: ['./assets/projects/iot.svg'],
    note: 'No IoT field photos found locally — SVG cover only for now.'
  },
  fire: {
    title: 'Arduino Forest Fire Detection System',
    tag: 'IoT · Academic',
    cover: './assets/projects/fire.svg',
    summary:
      'Early-warning Arduino system with smoke, heat and flame sensors for high-risk forest zones.',
    tech: ['Arduino', 'C++', 'Flame Sensor', 'DHT Sensor', 'IoT'],
    captures: ['./assets/projects/fire.svg'],
    note: 'No hardware photos found locally — SVG cover only for now.'
  },
  gamejam: {
    title: 'Global Game Jam 2024 — Game Prototype',
    tag: 'Game Dev · Team · 48h',
    cover: './assets/projects/gamejam.svg',
    summary:
      '48-hour worldwide game jam: team design and shipping of a full game prototype under time pressure.',
    tech: ['Game Design', 'Team Collaboration', 'Rapid Prototyping'],
    captures: ['./assets/projects/gamejam.svg'],
    note: 'No Game Jam screenshots found locally — SVG cover only for now.'
  },
  edu: {
    title: 'Educational Game Supervision Platform',
    tag: 'Web · Education · DeepFlow',
    cover: './assets/projects/edu.svg',
    summary:
      'Web platform for supervising an educational game: UX/UI, progress tracking and learning dashboards (DeepFlow Club).',
    tech: ['React.js', 'Node.js', 'JavaScript', 'Dashboard UI'],
    captures: ['./assets/projects/edu.svg'],
    note: 'No dashboard screenshots found locally — SVG cover only for now.'
  }
};
