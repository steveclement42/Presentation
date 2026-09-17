/* Handles the FR/EN language switch and GRC/PMO/Chef de Projet profile switch across pages. */
(function () {
  const LANG_KEY = 'sc_lang';
  const PROFILE_KEY = 'sc_profile';

  function getLang() {
    const l = localStorage.getItem(LANG_KEY);
    return (l === 'en') ? 'en' : 'fr';
  }
  function getProfile() {
    const p = localStorage.getItem(PROFILE_KEY);
    return PROFILE_ORDER.includes(p) ? p : 'grc';
  }
  function setLang(l) { localStorage.setItem(LANG_KEY, l); }
  function setProfile(p) { localStorage.setItem(PROFILE_KEY, p); }

  function setText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }
  function setHTML(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }

  function buildControls() {
    const profileSelect = document.getElementById('profileSelect');
    const langToggle = document.getElementById('langToggle');
    if (!profileSelect || !langToggle) return;

    const lang = getLang();
    const ui = SITE_UI[lang];

    profileSelect.innerHTML = '';
    PROFILE_ORDER.forEach(key => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = ui.profileNames[key];
      profileSelect.appendChild(opt);
    });
    profileSelect.value = getProfile();

    langToggle.textContent = lang === 'fr' ? 'EN' : 'FR';
    langToggle.title = lang === 'fr' ? 'Switch to English' : 'Passer en français';

    profileSelect.onchange = () => { setProfile(profileSelect.value); render(); };
    langToggle.onclick = () => {
      setLang(lang === 'fr' ? 'en' : 'fr');
      buildControls();
      render();
    };
  }

  function render() {
    const lang = getLang();
    const profileKey = getProfile();
    const ui = SITE_UI[lang];
    const profile = SITE_PROFILES[profileKey][lang];

    document.documentElement.lang = lang;

    setText('nav-home', ui.nav.home);
    setText('nav-expertise', ui.nav.expertise);
    setText('nav-contact', ui.nav.contact);

    const page = document.body.dataset.page;
    if (page === 'index') renderIndex(ui, profile, profileKey);
    else if (page === 'expertise') renderExpertise(ui, profile, profileKey);
    else if (page === 'contact') renderContact(ui, profile, profileKey);
  }

  function renderIndex(ui, profile, profileKey) {
    const t = ui.index;
    setText('heroLabel', t.heroLabel);
    setText('heroSubtitle', profile.heroSubtitle);
    setText('heroDesc', profile.heroDesc);
    setText('ctaContact', t.ctaContact);
    setText('ctaExpertise', t.ctaExpertise);

    setText('statExpNumber', t.statExpNumber);
    setText('statExpLabel', t.statExpLabel);
    setText('statStageNumber', t.statStageNumber);
    setText('statStageLabel', t.statStageLabel);
    setText('statPassionLabel', t.statPassionLabel);

    setHTML('aboutTitle', `${t.aboutTitlePre}<em>${t.aboutTitleEm}</em>`);
    setText('aboutP1', profile.aboutP1);
    setText('aboutP2', profile.aboutP2);

    setText('detailLocation', t.detailLocation);
    setText('locationValue', t.locationValue);
    setText('detailAvailability', t.detailAvailability);
    setText('availabilityValue', t.availabilityValue);
    setText('detailLangs', t.detailLangs);
    setText('langsValue', t.langsValue);
    setText('detailCV', t.detailCV);
    const cvLink = document.getElementById('cvLink');
    if (cvLink) { cvLink.textContent = t.cvLinkText; cvLink.href = SITE_PROFILES[profileKey].cvFile; }
    setText('detailEmail', t.detailEmail);

    setHTML('skillsTitle', `${t.skillsTitlePre}<em>${t.skillsTitleEm}</em>`);
    const cards = document.querySelectorAll('.skills-grid .skill-card');
    profile.skillCards.forEach((c, i) => {
      if (!cards[i]) return;
      const nameEl = cards[i].querySelector('.skill-name');
      const descEl = cards[i].querySelector('.skill-desc');
      if (nameEl) nameEl.textContent = c.name;
      if (descEl) descEl.innerHTML = c.desc;
    });

    setHTML('ctaBandText', `${t.ctaBandPre}<br><em>${t.ctaBandEm}</em>`);
    setText('ctaBandBtn', t.ctaBandBtn);
    setText('footerCopy', t.footerCopy);
  }

  function renderExpertise(ui, profile, profileKey) {
    const t = ui.expertise;
    setText('pageHeroLabel', t.pageHeroLabel);
    setHTML('pageHeroTitle', `${t.pageTitlePre}<br><em>${t.pageTitleEm}</em>`);

    setHTML('s1Title', `${t.s1TitlePre}<em>${t.s1TitleMid}</em>${t.s1TitlePost}<em>${t.s1TitleEm}</em>`);
    setText('catLangages', t.catLangages);
    setText('catOutils', t.catOutils);
    setText('catTechnologies', t.catTechnologies);
    setText('catAutres', t.catAutres);
    setText('catSoft', t.catSoft);

    const levelClassMap = { 'lvl-debutant': t.levels.debutant, 'lvl-inter': t.levels.intermediaire, 'lvl-avance': t.levels.avance, 'lvl-notion': t.levels.notion };
    Object.keys(levelClassMap).forEach(cls => {
      document.querySelectorAll('.skill-level.' + cls).forEach(el => { el.textContent = levelClassMap[cls]; });
    });

    setHTML('s2Title', `<em>${t.s2TitleEm}</em>${t.s2TitlePost}`);
    t.timeline.forEach((item, i) => {
      setHTML(`tl${i}-date`, item.date);
      setText(`tl${i}-role`, item.role);
      setText(`tl${i}-company`, item.company);
      setHTML(`tl${i}-desc`, item.desc);
    });

    setHTML('s3Title', `<em>${t.s3TitleEm}</em>`);
    t.formation.forEach((f, i) => {
      setText(`f${i}-year`, f.year);
      setText(`f${i}-title`, f.title);
      setText(`f${i}-school`, f.school);
    });

    setHTML('s4Title', `${t.s4TitlePre}<em>${t.s4TitleEm}</em>`);
    setText('toolCve', t.toolCve);

    setHTML('cvCtaText', `${t.cvCtaPre}<br><em>${t.cvCtaEm}</em>`);
    setText('cvCtaBtn', t.cvCtaBtn);
    const cvCtaLink = document.getElementById('cvCtaLink');
    if (cvCtaLink) cvCtaLink.href = SITE_PROFILES[profileKey].cvFile;

    setText('footerCopy', t.footerCopy);
  }

  function renderContact(ui, profile, profileKey) {
    const t = ui.contact;
    setText('contactLabel', t.label);
    setHTML('contactTitle', `${t.titlePre}<em>${t.titleEm}</em>`);
    setText('contactIntro', t.intro);
    setText('methodEmail', t.email);
    setText('methodLinkedin', t.linkedin);
    setText('methodGithub', t.github);
    setText('methodCv', t.cv);
    setText('methodCvValue', t.cvValue);
    const cvLink = document.getElementById('methodCvLink');
    if (cvLink) cvLink.href = SITE_PROFILES[profileKey].cvFile;
    setText('footerCopy', t.footerCopy);
  }

  document.addEventListener('DOMContentLoaded', () => {
    buildControls();
    render();
  });
})();
