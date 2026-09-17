/* Shared content for FR/EN language switch and GRC/PMO/Chef de Projet profile switch. */

const SITE_UI = {
  fr: {
    nav: { home: 'Accueil', expertise: 'Expertise', contact: 'Contact' },
    profileNames: { grc: 'GRC', pmo: 'PMO', chef: 'Chef de Projet' },
    index: {
      heroLabel: 'Disponible pour de nouvelles opportunités',
      ctaContact: 'Me contacter',
      ctaExpertise: 'Voir mon expertise',
      statExpNumber: 'Junior',
      statExpLabel: "Années d'expérience",
      statStageNumber: '1.5 AN',
      statStageLabel: 'Expérience professionnelle (stage)',
      statPassionLabel: 'Passion et sérieux',
      aboutTitlePre: 'À propos de ', aboutTitleEm: 'moi',
      detailLocation: 'Localisation', locationValue: 'France, PACA',
      detailAvailability: 'Disponibilité', availabilityValue: 'Ouvert aux opportunités',
      detailLangs: 'Langues', langsValue: 'Français, Anglais',
      detailCV: 'CV', cvLinkText: 'Télécharger →',
      detailEmail: 'Email',
      skillsTitlePre: 'Compétences ', skillsTitleEm: 'clés',
      ctaBandPre: 'Travaillons', ctaBandEm: 'ensemble .',
      ctaBandBtn: 'Contactez moi',
      footerCopy: '© 2026 Steve Clément. Tous droits réservés.'
    },
    expertise: {
      pageHeroLabel: 'Mon savoir-faire',
      pageTitlePre: 'Mon', pageTitleEm: 'Expertise',
      s1TitlePre: 'Compétences ', s1TitleMid: 'techniques', s1TitlePost: ' / Soft ', s1TitleEm: 'Skills',
      catLangages: 'Langages de programmation',
      catOutils: 'Outils et Réseaux',
      catTechnologies: 'Technologies',
      catAutres: 'Autres',
      catSoft: 'Soft Skills',
      levels: { debutant: 'Débutant', intermediaire: 'Intermédiaire', avance: 'Avancé', notion: 'Notion' },
      s2TitleEm: 'Expérience', s2TitlePost: ' professionnelle',
      timeline: [
        {
          date: 'FÉVRIER 2025 - AOÛT 2025<br>(6 MOIS)',
          role: 'STAGE FIN D’ÉTUDE GOUVERNANCE DE LA DONNÉE',
          company: 'CIRCET FRANCE - SOLLIÈS-PONT',
          desc: 'Élaboration de fiche réflexe, mise en place de dashboards PowerBI, élaboration de politique de cyber sécurité via Netskope. J\'ai dû prendre connaissance du workflow existant et rassembler les données nécessaires afin d\'établir des visuels pour faire la connexion entre les équipes technique et commerciales.'
        },
        {
          date: 'MARS 2023 - FÉVRIER 2024<br>(1 AN)',
          role: 'STAGIAIRE DÉVELOPPEMENT GED',
          company: 'SETEC INTERNATIONAL - VITROLLES',
          desc: 'Conception et développement d\'une solution GED avec coffre-fort sécurisé et processus de contrôle automatisé.<br>Collaboration avec les équipes techniques et utilisateurs pour assurer une conformité aux normes de sécurité et aux attentes clients. Établir un workflow pour les documents clients et hiérarchiser la vue selon les différents corps de métier.'
        }
      ],
      s3TitleEm: 'Formation',
      formation: [
        { year: '2020 - 2025', title: 'INGÉNIEUR EN INFORMATIQUE', school: 'EPITA - PARIS' },
        { year: '2018 - 2020', title: 'CPGE TSI', school: 'LYCÉE ROUVIÈRE, TOULON' },
        { year: 'Score 875', title: 'TOEIC', school: '875/990' },
        { year: '2016', title: 'Un an aux USA', school: 'Vécu et étudié près de San Diego dans une famille d\'accueil' }
      ],
      s4TitlePre: 'Outils & ', s4TitleEm: 'Technologies',
      cvCtaPre: 'Envie d\'en savoir plus ?', cvCtaEm: 'Téléchargez mon CV.',
      cvCtaBtn: 'Télécharger mon CV'
    },
    contact: {
      label: 'Discutons ensemble',
      titlePre: 'Prêt à<br>collaborer ', titleEm: '?',
      intro: 'Que ce soit pour une opportunité professionnelle ou simplement pour échanger. Je suis toujours ouvert à une bonne conversation.',
      email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', cv: 'CV', cvValue: 'Télécharger mon CV',
      footerCopy: '© 2026 Steve Clément. Tous droits réservés.'
    }
  },

  en: {
    nav: { home: 'Home', expertise: 'Expertise', contact: 'Contact' },
    profileNames: { grc: 'GRC', pmo: 'PMO', chef: 'Project Manager' },
    index: {
      heroLabel: 'Available for new opportunities',
      ctaContact: 'Contact me',
      ctaExpertise: 'See my expertise',
      statExpNumber: 'Junior',
      statExpLabel: 'Years of experience',
      statStageNumber: '1.5 YR',
      statStageLabel: 'Professional experience (internships)',
      statPassionLabel: 'Passion and diligence',
      aboutTitlePre: 'About ', aboutTitleEm: 'me',
      detailLocation: 'Location', locationValue: 'France, PACA',
      detailAvailability: 'Availability', availabilityValue: 'Open to opportunities',
      detailLangs: 'Languages', langsValue: 'French, English',
      detailCV: 'CV', cvLinkText: 'Download →',
      detailEmail: 'Email',
      skillsTitlePre: 'Key ', skillsTitleEm: 'skills',
      ctaBandPre: "Let's work", ctaBandEm: 'together .',
      ctaBandBtn: 'Contact me',
      footerCopy: '© 2026 Steve Clément. All rights reserved.'
    },
    expertise: {
      pageHeroLabel: 'My know-how',
      pageTitlePre: 'My', pageTitleEm: 'Expertise',
      s1TitlePre: 'Technical ', s1TitleMid: 'Skills', s1TitlePost: ' / Soft ', s1TitleEm: 'Skills',
      catLangages: 'Programming Languages',
      catOutils: 'Tools & Networks',
      catTechnologies: 'Technologies',
      catAutres: 'Other',
      catSoft: 'Soft Skills',
      levels: { debutant: 'Beginner', intermediaire: 'Intermediate', avance: 'Advanced', notion: 'Basic knowledge' },
      s2TitleEm: 'Professional', s2TitlePost: ' experience',
      timeline: [
        {
          date: 'FEBRUARY 2025 - AUGUST 2025<br>(6 MONTHS)',
          role: 'END-OF-STUDIES INTERNSHIP, DATA GOVERNANCE',
          company: 'CIRCET FRANCE - SOLLIÈS-PONT',
          desc: 'Built reflex/procedure sheets, set up Power BI dashboards, drafted a cybersecurity policy via Netskope. I had to learn the existing workflow and gather the necessary data to build visuals connecting technical and business teams.'
        },
        {
          date: 'MARCH 2023 - FEBRUARY 2024<br>(1 YEAR)',
          role: 'DOCUMENT MANAGEMENT (GED) DEVELOPER INTERN',
          company: 'SETEC INTERNATIONAL - VITROLLES',
          desc: 'Designed and developed a document management solution with a secure vault and automated control process.<br>Collaborated with technical teams and end users to ensure compliance with security standards and client expectations. Built a workflow for client documents and prioritized views by business area.'
        }
      ],
      s3TitleEm: 'Education',
      formation: [
        { year: '2020 - 2025', title: 'COMPUTER SCIENCE ENGINEER', school: 'EPITA - PARIS' },
        { year: '2018 - 2020', title: 'CPGE TSI (prep school)', school: 'LYCÉE ROUVIÈRE, TOULON' },
        { year: 'Score 875', title: 'TOEIC', school: '875/990' },
        { year: '2016', title: 'One year in the USA', school: 'Lived and studied near San Diego with a host family' }
      ],
      s4TitlePre: 'Tools & ', s4TitleEm: 'Technologies',
      cvCtaPre: 'Want to know more?', cvCtaEm: 'Download my CV.',
      cvCtaBtn: 'Download my CV'
    },
    contact: {
      label: "Let's talk",
      titlePre: 'Ready to<br>collaborate ', titleEm: '?',
      intro: "Whether it's for a professional opportunity or just to chat, I'm always open to a good conversation.",
      email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', cv: 'CV', cvValue: 'Download my CV',
      footerCopy: '© 2026 Steve Clément. All rights reserved.'
    }
  }
};

const SITE_PROFILES = {
  grc: {
    cvFile: 'CV_Steve_Clement_GRC.pdf',
    fr: {
      roleLabel: 'Ingénieur GRC / Cyber Sécurité',
      heroSubtitle: 'Recherche un poste d’ingénieur en cyber sécurité orienté en GRC',
      heroDesc: 'Jeune diplômé spécialisé en Informatique, j\'ai un fort attrait pour la gestion des risques et conformité réglementaire. Véhiculé et disponible immédiatement.',
      aboutP1: 'Passionné par la gouvernance de la donnée et la conformité, j\'ai eu une première expérience positive dans le domaine avec de bons retours sur mes dashboards. J\'aime le travail qu\'il soit en équipe ou bien seul et suis très rigoureux.',
      aboutP2: 'Mon approche allie rigueur technique et une vision globale des besoins — chaque intervention et avis doit servir l\'expérience des autres et est un moyen d\'apprendre.',
      skillCards: [
        { name: 'Data Governance', desc: 'DICT/DICP (Disponibilité, Intégrité, Confidentialité, Traçabilité ou Preuve), gestion des référentiels, modèles de gouvernance, lifecycle management.' },
        { name: 'Gestion des Risques / Conformité & Normes', desc: 'Cartographie des risques, analyse d’impact, analyse de criticité.<br>RGPD, ISO 27001, contrôles internes, DORA.' },
        { name: 'Contrôle & Reporting', desc: 'KPI, tableaux de bord, simulation d’audit et situation de crise, utilisation de la suite Adobe et PowerBI.' }
      ],
      cvLabel: 'Télécharger mon CV (GRC)'
    },
    en: {
      roleLabel: 'GRC / Cybersecurity Engineer',
      heroSubtitle: 'Seeking a Cybersecurity Engineer role focused on GRC',
      heroDesc: 'Recent Computer Science graduate with a strong interest in risk management and regulatory compliance. Own vehicle, available immediately.',
      aboutP1: 'Passionate about data governance and compliance, I had a first positive experience in the field with strong feedback on my dashboards. I enjoy working both in a team and independently, and I’m very rigorous.',
      aboutP2: 'My approach combines technical rigor with a broad view of business needs — every contribution and piece of feedback serves the experience of others and is a way to keep learning.',
      skillCards: [
        { name: 'Data Governance', desc: 'CIAT (Confidentiality, Integrity, Availability, Traceability), reference data management, governance models, lifecycle management.' },
        { name: 'Risk Management / Compliance & Standards', desc: 'Risk mapping, impact analysis, criticality assessment.<br>GDPR, ISO 27001, internal controls, DORA.' },
        { name: 'Control & Reporting', desc: 'KPIs, dashboards, audit and crisis simulations, use of the Adobe suite and Power BI.' }
      ],
      cvLabel: 'Download my CV (GRC)'
    }
  },

  pmo: {
    cvFile: 'CV_Steve_Clement_PMO.pdf',
    fr: {
      roleLabel: 'PMO',
      heroSubtitle: 'Recherche un poste de PMO',
      heroDesc: 'Ingénieur EPITA spécialisé en gouvernance des systèmes d’information, avec une expérience dans le suivi d’indicateurs de performance et la création de tableaux de bord. Disponible immédiatement.',
      aboutP1: 'Habitué à travailler avec des équipes pluridisciplinaires et à structurer l’information, je souhaite contribuer au pilotage, au reporting et à la maîtrise des projets industriels et informatiques.',
      aboutP2: 'Mon expérience en suivi de KPI et en création de dashboards Power BI me permet d’apporter une vision claire et fiable de l’avancement des projets aux équipes comme aux décideurs.',
      skillCards: [
        { name: 'Pilotage & Reporting', desc: 'Suivi d’indicateurs de performance (KPI), tableaux de bord PowerBI, reporting d’activité et aide à la décision.' },
        { name: 'Gestion de Projet', desc: 'Diagramme de Gantt, priorisation des tâches, gestion de crise, coordination multi-équipes.' },
        { name: 'Gouvernance & Sécurité', desc: 'Évaluation des risques, ISO 27001, réglementation DORA, analyse SWOT.' }
      ],
      cvLabel: 'Télécharger mon CV (PMO)'
    },
    en: {
      roleLabel: 'PMO',
      heroSubtitle: 'Seeking a PMO role',
      heroDesc: 'EPITA engineer specialized in information systems governance, with experience tracking performance indicators and building dashboards. Available immediately.',
      aboutP1: 'Used to working with cross-functional teams and structuring information, I want to contribute to project steering, reporting, and control of industrial and IT projects.',
      aboutP2: 'My experience tracking KPIs and building Power BI dashboards lets me give teams and decision-makers a clear, reliable view of project progress.',
      skillCards: [
        { name: 'Steering & Reporting', desc: 'KPI tracking, Power BI dashboards, activity reporting and decision support.' },
        { name: 'Project Management', desc: 'Gantt charts, task prioritization, crisis management, cross-team coordination.' },
        { name: 'Governance & Security', desc: 'Risk assessment, ISO 27001, DORA regulation, SWOT analysis.' }
      ],
      cvLabel: 'Download my CV (PMO)'
    }
  },

  chef: {
    cvFile: 'CV_Steve_Clement_ChefDeProjet.pdf',
    fr: {
      roleLabel: 'Chef de Projet',
      heroSubtitle: 'Recherche un poste de Chef de Projet',
      heroDesc: 'Ingénieur informatique spécialisé dans la gestion de projet, alliant compétences techniques et vision stratégique. Disponible immédiatement.',
      aboutP1: 'Fort d’une expérience de près de 2 ans dans la création de solutions innovantes en cybersécurité et GED, je maîtrise l’évaluation des risques et les standards ISO 27001.',
      aboutP2: 'Habitué à travailler avec différents outils et publics, je souhaite évoluer vers un poste de chef de projet où je pourrai piloter des projets de bout en bout.',
      skillCards: [
        { name: 'Gestion de Projet', desc: 'Diagramme de Gantt, priorisation des tâches, gestion de crise, coordination d’équipes pluridisciplinaires.' },
        { name: 'Risques & Conformité', desc: 'Évaluation des risques, ISO 27001, réglementation DORA, analyse SWOT.' },
        { name: 'Pilotage & Reporting', desc: 'Tableaux de bord PowerBI, suivi d’indicateurs, communication multi-publics.' }
      ],
      cvLabel: 'Télécharger mon CV (Chef de Projet)'
    },
    en: {
      roleLabel: 'Project Manager',
      heroSubtitle: 'Seeking a Project Manager role',
      heroDesc: 'IT engineer specialized in project management, combining technical skills with strategic vision. Available immediately.',
      aboutP1: 'With almost 2 years of experience building innovative cybersecurity and document-management solutions, I’m skilled in risk assessment and ISO 27001 standards.',
      aboutP2: 'Used to working with different tools and audiences, I want to move into a project manager role where I can steer projects end-to-end.',
      skillCards: [
        { name: 'Project Management', desc: 'Gantt charts, task prioritization, crisis management, cross-functional team coordination.' },
        { name: 'Risk & Compliance', desc: 'Risk assessment, ISO 27001, DORA regulation, SWOT analysis.' },
        { name: 'Steering & Reporting', desc: 'Power BI dashboards, indicator tracking, multi-audience communication.' }
      ],
      cvLabel: 'Download my CV (Project Manager)'
    }
  }
};

const PROFILE_ORDER = ['grc', 'pmo', 'chef'];
