/* French overlay for the project catalog (modal content) */
window.PROJECTS_FR = {
  immo: {
    title: 'Immo Dary — Marketplace immobilière',
    tag: 'Mobile · Full-Stack · Stage d’ingénieur @ PLM Ressources Sarl · ESPRIT ArcTIC (15 juin 2026 – 15 août 2026)',
    summary:
      'Marketplace mobile pour acheter et louer un bien en Tunisie — réalisée pendant mon stage d’ingénieur chez PLM Ressources Sarl (ESPRIT ArcTIC). J’ai pris en charge le client React Native, l’API Express/SQL Server, l’authentification, les paiements Stripe, l’assistant IA Groq, OpenStreetMap, la messagerie, les réservations, l’i18n en cinq langues et le déploiement Docker/Azure avec une release APK Android.',
    details: [
      'Stage d’ingénieur (juin–août 2026) chez PLM Ressources — objectif : une marketplace livrable, pas un prototype de cours.',
      'Périmètre produit : annonces achat/location avec filtres, découverte cartographique, favoris, messagerie propriétaire et parcours de réservation.',
      'React Native + TypeScript : navigation par stack/onglets, UI annonces et carte, états de réservation, validation, release Android.',
      'Express + SQL Server : REST pour utilisateurs, annonces, médias, favoris, conversations et réservations.',
      'Auth & sécurité : JWT, Google Sign-In, Helmet, CORS et rate limiting sur les endpoints sensibles.',
      'Paiements Stripe, assistant Groq intégré, i18n 5 langues, Docker sur Azure, APK signé pour les tests terrain.',
      'Landing page publique et APK téléchargeable sur medrahim.github.io/immodary.'
    ],
    tech: ['React Native', 'TypeScript', 'Express', 'SQL Server', 'REST', 'JWT', 'Google Sign-In', 'Stripe', 'Groq AI', 'Docker', 'Azure', 'OpenStreetMap', 'i18n'],
    repo: 'https://github.com/MedRahim/GestionImmobiliere'
  },

  smarthire: {
    title: 'SmartHire — Plateforme cloud de recrutement et d’évaluation',
    tag: 'Cloud · DevOps · Microservices · Projet académique 4e année ESPRIT',
    summary:
      'Plateforme de recrutement cloud-native pour la filière ArcTIC Cloud & Infrastructure d’ESPRIT — cloud privé OpenStack, Ansible, Docker/Kubernetes et microservices, dont un module Assessment que j’ai développé en Spring Boot et Angular pour l’évaluation des compétences et la notation automatisée.',
    details: [
      'Projet de 4e année à ESPRIT reliant les labs d’infrastructure à un produit de recrutement multi-services.',
      'OpenStack + Ansible : provisionnement compute/réseau/stockage et bootstrap automatisé des VM.',
      'Docker/Kubernetes : microservices conteneurisés avec déploiements, scalabilité et mises à jour progressives.',
      'Module Assessment (mon focus) : API Spring Boot pour les tests et la notation ; UI Angular pour recruteurs et candidats.',
      'Démonstration des compétences ArcTIC, de l’IaaS à l’orchestration jusqu’aux fonctionnalités cloud visibles.'
    ],
    tech: ['OpenStack', 'Ansible', 'Docker', 'Kubernetes', 'Spring Boot', 'Angular', 'Microservices', 'CI/CD'],
    repo: 'https://github.com/MedRahim/Smart-Hire-Frontend'
  },

  cicd: {
    title: 'Pipeline CI/CD Jenkins — Spring Boot & Angular',
    tag: 'Cloud · DevOps · CI/CD · Module DevOps ESPRIT (2026)',
    summary:
      'Projet de synthèse du module DevOps d’ESPRIT : un pipeline Jenkins en huit étapes autour d’une application Spring Boot + Angular — builds Maven et npm, rapports JUnit, quality gate SonarQube, images Docker poussées sur Docker Hub et déploiement via Docker Compose.',
    details: [
      'Pipeline as code : un Jenkinsfile déclaratif versionné avec l’application, sans configuration manuelle dans l’UI.',
      'Étapes CI : checkout SCM, compilation Maven, tests unitaires avec rapports Surefire archivés, packaging backend, npm ci et build Angular de production.',
      'Qualité : analyse SonarQube suivie d’une quality gate bloquante (waitForQualityGate) avant toute publication d’artefact.',
      'Conteneurs : Dockerfiles multi-étapes — Maven/Temurin 17 puis JRE Alpine pour l’API, Node 24 puis Nginx Alpine pour le frontend.',
      'CD : images taguées avec le numéro de build, poussées sur Docker Hub via les credentials Jenkins, puis déployées avec docker compose.',
      'Stack d’exécution : API Spring Boot sur MySQL 8 avec un service base de données health-checké sur un réseau bridge dédié.'
    ],
    tech: ['Jenkins', 'SonarQube', 'Docker', 'Docker Hub', 'Docker Compose', 'Spring Boot', 'Angular', 'Maven', 'MySQL', 'Nginx'],
    repo: 'https://github.com/MedRahim/DevOps-AppGestionDesProjets'
  },

  tmdb: {
    title: 'Prédicteur de recettes TMDB — Service web de machine learning',
    tag: 'IA · Machine Learning · Data · Projet personnel (2025)',
    summary:
      'Random Forest entraîné sur le dataset TMDB 5000 pour prédire les recettes d’un film à partir du budget, de la popularité, de la durée, de la note et du nombre de votes — exposé via une API Flask et une interface Streamlit, le tout packagé avec Docker.',
    details: [
      'Modèle : Random Forest à 200 arbres atteignant R² = 0,6377 et RMSE ≈ 72 M$ sur le jeu de test — une baseline qui capte les principaux facteurs sans surestimer les résultats.',
      'Variables : budget, popularité, durée, note moyenne et nombre de votes, nettoyées et enrichies avec Pandas.',
      'Mise à disposition : API JSON Flask pour les prédictions programmatiques, plus une app Streamlit pour l’exploration interactive de scénarios.',
      'Reproductibilité : modèle et scaler persistés en .pkl, dépendances figées dans requirements.txt, Dockerfile pour le déploiement.',
      'Bout en bout : script de collecte, analyse en notebook, script d’entraînement, API et interface utilisateur.'
    ],
    tech: ['Python', 'scikit-learn', 'Pandas', 'Flask', 'Streamlit', 'Docker', 'Jupyter'],
    repo: 'https://github.com/MedRahim/tmdb_revenue_predictor'
  },

  devopslabs: {
    title: 'Série de labs DevOps — Git, Docker, Jenkins, Terraform & Ansible',
    tag: 'Cloud · DevOps · Labs pratiques (2026)',
    summary:
      'Labs DevOps pratiques : collaboration avec Git, une stack multi-conteneurs Docker Compose, un pipeline CI/CD Jenkins déclaratif, puis l’infrastructure as code avec Terraform et la configuration avec Ansible.',
    details: [
      'Semaine 2 — <a href="https://github.com/MedRahim/DevOps-Week-02" target="_blank" rel="noopener noreferrer">Git, GitHub &amp; collaboration</a> : branches de fonctionnalité, pull requests fusionnées et conflit de merge résolu sur une base Python partagée.',
      'Semaine 4 — <a href="https://github.com/MedRahim/DevOps-Week-04" target="_blank" rel="noopener noreferrer">Docker &amp; Docker Compose</a> : frontend Nginx, backend Node.js/Express et PostgreSQL 16, Dockerfiles personnalisés, réseau bridge dédié.',
      'Semaine 5 — <a href="https://github.com/MedRahim/DevOps-Week-05" target="_blank" rel="noopener noreferrer">CI/CD Jenkins</a> : pipeline déclaratif avec checkout, build, suite node:test et étape de validation personnalisée ; Jenkins lui-même lancé via Compose.',
      'Semaine 6 — <a href="https://github.com/MedRahim/DevOps-Week-06" target="_blank" rel="noopener noreferrer">Terraform &amp; Ansible</a> : Terraform provisionne l’infrastructure, Ansible configure le serveur et déploie l’application, avec une procédure de destruction documentée.',
      'Le fil rouge : chaque semaine ajoute une couche à la même chaîne de livraison — du contrôle de version à une infrastructure reproductible.'
    ],
    tech: ['Git', 'Docker', 'Docker Compose', 'Jenkins', 'Terraform', 'Ansible', 'PostgreSQL', 'Nginx'],
    repo: 'https://github.com/MedRahim/DevOps-Week-06'
  },

  language: {
    title: 'Language Explorer — Assistant de prononciation IA',
    tag: 'Web · Fonctions vocales IA · Stage d’immersion @ Mobelite Tunisie · ESPRIT (juil.–août 2025)',
    summary:
      'Application web de pratique de la prononciation avec reconnaissance et synthèse vocales du navigateur. Réalisée pendant mon stage d’immersion chez Mobelite Tunisie — UI React + Tailwind, authentification et persistance Firebase, Web Speech API pour des boucles parler–feedback en temps réel.',
    details: [
      'Deux mois d’immersion chez Mobelite — UX apprenant utilisable et fonctions vocales navigateur fiables.',
      'React + Tailwind : écrans d’exercices responsives avec retour succès/réessai clair sur desktop et mobile.',
      'Web Speech API pour la reconnaissance et la synthèse vocales ; Firebase Auth et Firestore pour les sessions et l’historique.',
      'Boucle de pratique : consigne → écoute → parole → reconnaissance → feedback — pensée pour de courtes sessions quotidiennes.',
      'Livraison en squad agile : compatibilité navigateurs, gestion de la précision et textes orientés apprenant.'
    ],
    tech: ['React.js', 'Tailwind CSS', 'Firebase Auth', 'Firestore', 'Web Speech API', 'JavaScript'],
    repo: null
  },

  digitaltwin: {
    title: 'Jumeau numérique — Simulation du compostage (PFE)',
    tag: 'Simulation · Jumeau numérique · Stage PFE @ DigiArt Living Lab · ISET Kélibia (févr.–juin 2024)',
    summary:
      'PFE au DigiArt Living Lab (ISET Kélibia) : jumeau numérique 3D d’un processus de compostage sous Unreal Engine, couplé à un tableau de bord de supervision React — visualisation immersive et suivi opérationnel d’un procédé environnemental.',
    details: [
      'Projet de fin d’études (févr.–juin 2024) — livrable incluant la simulation 3D et la supervision web.',
      'Jumeau Unreal Engine : étapes du compostage et dynamique du procédé pour la pédagogie et la démonstration.',
      'Tableau de bord React : indicateurs clés, vues de scénarios et sorties du jumeau pour les non-utilisateurs de 3D.',
      'Le jumeau comme couche immersive, React comme couche opérationnelle — un patron de jumeau numérique à l’échelle du labo.',
      'Validation de la manière dont le jumelage communique des procédés environnementaux à des publics mixtes.'
    ],
    tech: ['Unreal Engine', 'Jumeau numérique', 'React', 'C++', 'Simulation 3D', 'UI de supervision'],
    repo: null
  },

  mdintech: {
    title: 'MdinTech / Smart City — Plateforme de services urbains',
    tag: 'Full-Stack · Projet Intégré (PI) · client desktop JavaFX + API Symfony',
    summary:
      'Projet Intégré en équipe livrant les modules Smart City — parking, rendez-vous médicaux, trajets et paiements — via un client desktop JavaFX adossé à une API REST Symfony sécurisée et MySQL.',
    details: [
      'Plateforme Smart City multi-modules simulant des services urbains municipaux dans un même écosystème.',
      'Desktop JavaFX : formulaires, tableaux et navigation entre les modules de service.',
      'Backend REST Symfony avec validation et autorisation ; MySQL pour utilisateurs, réservations et paiements.',
      'Consommation sécurisée de l’API depuis JavaFX avec mapping DTO et livraison intégrée en équipe.'
    ],
    tech: ['JavaFX', 'Java', 'Symfony', 'PHP', 'MySQL', 'REST/API'],
    repo: 'https://github.com/MedRahim/pidev_Symfony'
  },

  nestjs: {
    title: 'API e-commerce — Atelier NestJS (GDG ESPRIT)',
    tag: 'Backend · Architecture NestJS · GDG on Campus ESPRIT (nov. 2024)',
    summary:
      'Atelier GDG ESPRIT (nov. 2024) : API REST e-commerce modulaire en NestJS — catégories, produits et commandes avec TypeScript, injection de dépendances, validation DTO et persistance MongoDB.',
    details: [
      'Session NestJS certifiée GDG axée sur les patrons d’architecture backend.',
      'Modules fonctionnels (catégories, produits, commandes) avec contrôleurs, services et DI.',
      'DTO typés avec validation ; modèles document MongoDB pour les produits et lignes de commande.',
      'Filtres d’exceptions, pipes et guards illustrant les idiomes NestJS pour des API maintenables.'
    ],
    tech: ['NestJS', 'TypeScript', 'Node.js', 'MongoDB', 'REST', 'Injection de dépendances'],
    repo: null
  },

  charara: {
    title: 'Charara / Smart-Weld — Site vitrine de soudage',
    tag: 'Front-end · Vitrine produit statique',
    summary:
      'Site marketing responsive pour l’adaptateur Smart-Weld de Charara — vitrine produit HTML/CSS/JavaScript avec sections hero, fonctionnalités et contact, sans framework SPA lourd.',
    details: [
      'Communication produit pour un public industriel/soudage — hero, fonctionnalités et spécifications.',
      'HTML5 sémantique, CSS3 flex/grid, JS vanilla pour la navigation mobile et le défilement fluide.',
      'Points de rupture responsives pour téléphones, tablettes et desktop — hébergement statique rapide.',
      'Complète les projets d’ingénierie par une narration produit tournée vers le client.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    repo: null
  },

  iot: {
    title: 'Moniteur IoT environnemental — LoRaWAN',
    tag: 'IoT · Embarqué · Stage de perfectionnement @ Smart for Green · ISET Kélibia (janv.–févr. 2023)',
    summary:
      'Stage de perfectionnement chez Smart for Green : surveillance environnementale avec des nœuds capteurs Arduino sur LoRaWAN (~2 km de portée), optimisés pour la basse consommation — environ 30 % d’énergie en moins par rapport à la base initiale.',
    details: [
      'Stage Smart for Green — des données terrain là où Wi-Fi et backhaul sont impraticables.',
      'Firmware Arduino lisant les capteurs environnementaux avec un échantillonnage réglé pour l’autonomie.',
      'Liaison longue portée LoRaWAN du nœud à la passerelle pour une surveillance extérieure dispersée.',
      'Modes veille et duty-cycling contribuant à ~30 % de consommation énergétique en moins.',
      'C++ embarqué, protocoles radio et contexte green-tech avant le travail cloud ultérieur.'
    ],
    tech: ['Arduino', 'LoRaWAN', 'C++', 'Capteurs IoT', 'Basse consommation'],
    repo: null
  },

  fire: {
    title: 'Détection de feux de forêt avec Arduino',
    tag: 'IoT · Système d’alerte précoce académique',
    summary:
      'Projet IoT embarqué académique : station Arduino multi-capteurs combinant flamme, fumée et température/humidité DHT, avec alerte locale pour des environnements isolés et sous contrainte énergétique.',
    details: [
      'Alerte précoce à faible coût pour les zones lisières où les caméras centralisées sont rares.',
      'Fusion de capteurs flamme, fumée et DHT pour réduire les faux positifs.',
      'Firmware : échantillonnage périodique, règles de seuil, anti-rebond et alertes buzzer/LED.',
      'Câblage, calibration et scénarios de démonstration documentés pour les périodes à haut risque.'
    ],
    tech: ['Arduino', 'C++', 'Capteur de flamme', 'Capteur DHT', 'IoT'],
    repo: null
  },

  gamejam: {
    title: 'Global Game Jam 2024 — Prototype de jeu',
    tag: 'Game development · Jam internationale de 48 h · Travail en équipe',
    summary:
      'Global Game Jam 2024 : collaboration sur un prototype jouable en 48 heures sous le thème annuel — cadrage rapide, répartition des rôles et build livrable à l’échéance.',
    details: [
      'Événement mondial de 48 h — thème au coup d’envoi, toutes les décisions compressées sur un week-end.',
      'Méthode : brainstorming → vertical slice → polish ; liste de coupes explicite quand le périmètre dépassait les heures.',
      'Implémentation du gameplay, intégration d’assets, tri des bugs et playtests entre les builds.',
      'Une boucle de jeu cohérente pour les jurés — validation de la créativité et de la vélocité sous pression.'
    ],
    tech: ['Game Design', 'Prototypage rapide', 'Travail en équipe'],
    repo: null
  },

  edu: {
    title: 'Plateforme de supervision de jeu éducatif',
    tag: 'Tableaux de bord web · UX d’apprentissage · DeepFlow AI Club',
    summary:
      'Projet du club DeepFlow AI : plateforme web de supervision d’un jeu éducatif — tableaux de bord mentor pour la progression des apprenants et la visibilité des sessions, frontend React avec backend Node.js.',
    details: [
      'Construction communautaire privilégiant des outils d’apprentissage utilisables plutôt que des démos de recherche.',
      'Écrans éducateur : vue de cohorte, activité individuelle et signaux d’intervention.',
      'Tableaux de bord React avec graphiques de progression et filtres ; REST Node.js agrégeant les événements de jeu.',
      'Schéma d’événements du client de jeu à l’API pour que chaque nouvelle fonctionnalité émette des signaux traçables.'
    ],
    tech: ['React.js', 'Node.js', 'JavaScript', 'UI de tableau de bord', 'UX pour l’apprentissage'],
    repo: null
  }
};
