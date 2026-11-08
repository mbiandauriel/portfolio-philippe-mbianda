/* ==========================================================================
   Portfolio – Philippe MBIANDA  |  JavaScript vanilla
   1. CONFIG (contact + images)   2. PROJECTS (données)   3. Utilitaires
   4. Thème · 5. Navigation · 6. Projets · 7. Modale · 8. Lightbox
   9. Formulaire · 10. Divers (reveal, retour en haut, année)
   ========================================================================== */
(function () {
  'use strict';

  /* ======================================================================
     1. CONFIGURATION CENTRALE
     Modifier ici les coordonnées et les chemins des images principales.
     ====================================================================== */
  const CONFIG = {
    contact: {
      email: 'mbiandaphilippe@gmail.com',
      phone: '+1 873 682-6402',
      linkedin: 'https://www.linkedin.com/in/philippembianda'
    },
    images: {
      profile: 'assets/images/profile/philippe-mbianda.jpg'
    },
  };

  /* ======================================================================
     2. DONNÉES DES PROJETS
     Pour ajouter un projet : copier un objet ci-dessous et adapter les champs.
     - categories : « batiments », « structures » et/ou « vrd »
     - images : tableau { src, alt, caption, type }. type: 'plan' → affichage sans recadrage.
     - Un projet sans images affiche un visuel neutre (voir README).
     ====================================================================== */
  const P1 = 'assets/images/projects/leboudi/';
  const P2 = 'assets/images/projects/oktopus/';

  const PROJECTS = [
    {
      id: 'leboudi',
      title: 'Centre de formation des Pères jésuites – Leboudi',
      categories: ['batiments', 'vrd'],
      categoryLabels: ['Bâtiments', 'VRD'],
      period: 'Octobre 2024 – Octobre 2026',
      featured: true,
      summary: 'Complexe sur un site de 3 hectares : logements, bâtiment de formation, réfectoire, bâtiment technique et château d\'eau de 23 m³.',
      overview: 'Construction d\'un centre de formation sur un site de 3 hectares, comprenant quatre bâtiments R+2 de logements, un bâtiment R+1 de formation, un bâtiment R+1 avec réfectoire au rez-de-chaussée et salle polyvalente à l\'étage, un bâtiment technique (guérite, local groupe électrogène, local TGBT, local transformateur) et un château d\'eau de 23 m³ alimenté par forage, avec local de traitement.',
      specs: [
        ['Site', '3 hectares'],
        ['Logements', '4 bâtiments R+2'],
        ['Formation', '1 bâtiment R+1'],
        ['Réfectoire', 'R+1, salle polyvalente à l\'étage'],
        ['Technique', 'Guérite, groupe électrogène, TGBT, transformateur'],
        ['Eau', 'Château d\'eau de 23 m³, forage et local de traitement']
      ],
      contributions: [
        'Plans de plateforme et de terrassement',
        'Implantation de tous les bâtiments et des réseaux',
        'Plans de VRD : bordures types, parkings, caniveaux',
        'Plans d\'exécution de chaque bâtiment : maçonnerie, coffrage et détails d\'exécution'
      ],
      challenge: 'Les bâtiments ont une forme polygonale de plus de sept côtés. Leur charpente en bois repose sur des poutres de forte section, reliées entre elles par une couronne centrale, ce qui demandait une grande précision dans les plans de détail et dans l\'implantation.',
      tools: ['AutoCAD', 'Civil 3D'],
      note: 'La vue d\'ensemble est une visualisation du site. Les autres images sont des photographies de chantier.',
      images: [
        { src: P1 + 'vue-ensemble.jpg', alt: 'Vue aérienne de la visualisation du site : bâtiments aux toits en tuiles, voie d\'accès, terrains de sport et piscine', caption: 'Vue d\'ensemble du site (visualisation)' },
        { src: P1 + 'charpente-couronne-centrale.jpg', alt: 'Bâtiment polygonal en construction vu du dessus, avec la structure de la charpente autour d\'un anneau central', caption: 'Bâtiment polygonal en construction – structure autour de l\'anneau central' },
        { src: P1 + 'charpente-bois-en-cours.jpg', alt: 'Bâtiment polygonal en maçonnerie de blocs avec charpente en bois en cours de pose', caption: 'Charpente en bois en cours de pose' },
        { src: P1 + 'maconnerie-batiment-polygonal.jpg', alt: 'Bâtiment polygonal en blocs de béton avec ouvertures cintrées et anneau central au niveau supérieur', caption: 'Maçonnerie d\'un bâtiment polygonal' },
        { src: P1 + 'lanterneau-circulaire.jpg', alt: 'Vue vers le haut d\'une ouverture circulaire en maçonnerie avec échafaudages et garde-corps', caption: 'Ouverture circulaire centrale vue de l\'intérieur' },
        { src: P1 + 'batiment-toiture-bois.jpg', alt: 'Bâtiment polygonal avec toiture en tôle et échafaudages sur chantier', caption: 'Bâtiment polygonal – toiture posée, finitions en cours' },
        { src: P1 + 'chantier-batiment-polygonal.jpg', alt: 'Chantier d\'un bâtiment à toiture en tôle avec fouilles et coffrages au premier plan', caption: 'Vue de chantier – ouvrage en cours à proximité du bâtiment' },
        { src: P1 + 'toitures-batiments.jpg', alt: 'Toitures en tôle de plusieurs bâtiments du complexe vues depuis une toiture', caption: 'Toitures des bâtiments du complexe' },
        { src: P1 + 'batiment-facade.jpg', alt: 'Façade d\'un bâtiment R+2 à fenêtres cintrées, avec escalier d\'accès', caption: 'Façade d\'un bâtiment R+2' }
      ]
    },
    {
      id: 'oktopus',
      title: 'Immeuble de bureaux et de restauration OKTOPUS',
      categories: ['batiments', 'structures'],
      categoryLabels: ['Bâtiments', 'Structures'],
      period: 'Septembre 2022 – Octobre 2024',
      featured: false,
      summary: 'Immeuble en sous-sol + R+3 avec toiture-terrasse accessible, sur une emprise d\'environ 380 m². Plans de fondations, coffrage et maçonnerie.',
      overview: 'Construction d\'un immeuble à usage de bureaux et de restauration, sur une emprise moyenne d\'environ 380 m². Il comprend un sous-sol et un R+3, avec une cage d\'escalier et une cage d\'ascenseur. Sa toiture-terrasse accessible accueille un restaurant.',
      specs: [
        ['Usage', 'Bureaux et restauration'],
        ['Niveaux', 'Sous-sol + R+3'],
        ['Emprise', 'Environ 380 m²'],
        ['Toiture', 'Terrasse accessible (restaurant)'],
        ['Circulations', 'Cage d\'escalier et cage d\'ascenseur']
      ],
      contributions: [
        'Plan d\'implantation',
        'Plan de fondations, avec gros béton sous semelles',
        'Plans de coffrage de chaque niveau',
        'Plans de maçonnerie',
        'Détails d\'exécution en coffrage et en ferraillage',
        'Plans de la cage d\'escalier et de la cage d\'ascenseur'
      ],
      challenge: 'Fondations : semelles réalisées sur massif en gros béton. Soutènement : murs périphériques en voiles de béton armé, reliés par des poteaux sur semelles excentrées. Toiture-terrasse : conception d\'une terrasse accessible destinée à un restaurant.',
      tools: ['AutoCAD'],
      note: 'Les plans présentés sont des extraits de plans d\'exécution produits à la SGC. Les vues de chantier montrent des poteaux et coffrages en cours de réalisation.',
      images: [
        { src: P2 + 'plan-fondations.jpg', alt: 'Plan de fondations de l\'immeuble OKTOPUS avec semelles isolées et gros béton', caption: 'Plan de fondations – vue en plan', type: 'plan' },
        { src: P2 + 'coupes-semelle-c1-c2.jpg', alt: 'Coupes C1 et C2 d\'une semelle sur gros béton avec voile en béton armé', caption: 'Coupes C1 – C2 : semelle sur gros béton', type: 'plan' },
        { src: P2 + 'plan-maconnerie-sous-sol.jpg', alt: 'Plan de maçonnerie du sous-sol avec parkings, rampe et locaux techniques', caption: 'Plan de maçonnerie – sous-sol', type: 'plan' },
        { src: P2 + 'plan-maconnerie-rdc.jpg', alt: 'Plan de maçonnerie du rez-de-chaussée avec espaces ouverts, escaliers et locaux techniques', caption: 'Plan de maçonnerie – rez-de-chaussée', type: 'plan' },
        { src: P2 + 'coupe-aa-batiment.jpg', alt: 'Coupe AA de l\'immeuble montrant les niveaux, l\'escalier et la cage d\'ascenseur', caption: 'Coupe AA du bâtiment', type: 'plan' },
        { src: P2 + 'coupe-escalier.jpg', alt: 'Coupe d\'un escalier en béton armé entre le rez-de-chaussée et l\'étage 1', caption: 'Escalier – coupe AA', type: 'plan' },
        { src: P2 + 'coupe-rampe-acces.jpg', alt: 'Coupes de départ et d\'arrivée de la rampe d\'accès au sous-sol', caption: 'Rampe d\'accès – coupes de départ et d\'arrivée', type: 'plan' },
        { src: P2 + 'chantier-poteaux-coffrage.jpg', alt: 'Chantier avec équipes au travail, poteaux coffrés et façade du bâtiment en arrière-plan', caption: 'Vue de chantier – poteaux et coffrages' }
      ]
    },
    {
      id: 'residence-r1',
      title: 'Résidence de prestige R+1 – Yaoundé',
      categories: ['batiments', 'vrd'],
      categoryLabels: ['Bâtiments', 'VRD'],
      period: 'Octobre 2021 – Janvier 2024',
      featured: false,
      summary: 'Résidence de prestige à deux niveaux avec toiture-terrasse non accessible. Plans d\'exécution complets et plans de VRD.',
      overview: 'Construction d\'une résidence de prestige à deux niveaux (R+1) avec toiture-terrasse non accessible, à Yaoundé.',
      specs: [
        ['Type', 'Résidence de prestige'],
        ['Niveaux', 'R+1'],
        ['Toiture', 'Terrasse non accessible'],
        ['Lieu', 'Yaoundé']
      ],
      contributions: [
        'Plans d\'exécution complets du bâtiment',
        'Plans de VRD (voirie et réseaux divers)',
        'Participation aux phases 1 et 2 des travaux de VRD'
      ],
      challenge: '',
      tools: [],
      note: 'Photographies et plans de ce projet à venir.',
      images: []          // aucun visuel fourni : un visuel neutre est affiché
    }
  ];

  /* ======================================================================
     3. UTILITAIRES
     ====================================================================== */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const safeStore = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignoré */ } }
  };

  // Image de secours si un fichier est manquant (évite les images cassées)
  const FALLBACK_SVG = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100"><rect width="160" height="100" fill="#e3e9f4"/>' +
    '<path d="M50 70l22-28 16 18 10-12 22 22z" fill="#9db4dd"/><circle cx="58" cy="34" r="7" fill="#9db4dd"/></svg>');
  document.addEventListener('error', (e) => {
    const t = e.target;
    if (t && t.tagName === 'IMG' && !t.dataset.failed) { t.dataset.failed = '1'; t.src = FALLBACK_SVG; }
  }, true);

  // Applique les chemins centralisés (data-img="profile")
  $$('img[data-img]').forEach((img) => { const p = CONFIG.images[img.dataset.img]; if (p) img.src = p; });
  // Applique les coordonnées centralisées
  $$('[data-contact]').forEach((el) => {
    const k = el.dataset.contact;
    if (k === 'email') { el.href = 'mailto:' + CONFIG.contact.email; el.textContent = CONFIG.contact.email; }
    if (k === 'phone') { el.href = 'tel:' + CONFIG.contact.phone.replace(/[^+\d]/g, ''); el.textContent = CONFIG.contact.phone; }
    if (k === 'linkedin') { el.href = CONFIG.contact.linkedin; }
  });

  /* ======================================================================
     4. THÈME CLAIR / SOMBRE
     ====================================================================== */
  const root = document.documentElement;
  const themeBtn = $('#theme-toggle');
  function applyTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre');
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b1220' : '#0758d5');
    if (persist) safeStore.set('pm-theme', theme);
  }
  applyTheme(root.getAttribute('data-theme') || 'light', false);
  themeBtn.addEventListener('click', () => applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true));
  // Suit le système tant que l'utilisateur n'a rien choisi
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!safeStore.get('pm-theme')) applyTheme(e.matches ? 'dark' : 'light', false);
    });
  }

  /* ======================================================================
     5. NAVIGATION (menu mobile, ombre au scroll, lien actif)
     ====================================================================== */
  const header = $('.site-header');
  const navToggle = $('#nav-toggle');
  const navMenu = $('#nav-menu');
  const navLinks = $$('a', navMenu);

  function setMenu(open) {
    navMenu.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  }
  navToggle.addEventListener('click', () => setMenu(!navMenu.classList.contains('is-open')));
  navLinks.forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('is-open') && !e.target.closest('.site-header')) setMenu(false);
  });
  window.matchMedia('(min-width: 960px)').addEventListener('change', () => setMenu(false));

  // Section visible → lien actif
  const sections = navLinks.map((a) => $(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          navLinks.forEach((a) => {
            const on = a.getAttribute('href') === '#' + en.target.id;
            a.classList.toggle('is-active', on);
            if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => spy.observe(s));
  }

  /* ======================================================================
     6. GALERIE DE PROJETS + FILTRES
     ====================================================================== */
  const grid = $('#project-grid');
  const ICON_IMAGES = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="m21 16-5-5-8 8"/></svg>';
  const ICON_BLUEPRINT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6"/></svg>';

  function renderCards() {
    grid.innerHTML = PROJECTS.map((p) => {
      const cover = p.images[0];
      const media = cover
        ? `<img src="${esc(cover.src)}" alt="${esc(cover.alt)}" loading="lazy" width="1600" height="900">`
        : `<div class="ph-art" role="img" aria-label="Visuel à venir pour ce projet">${ICON_BLUEPRINT}<span>Visuels à venir</span></div>`;
      const count = p.images.length > 1 ? `<span class="pc-count">${ICON_IMAGES}${p.images.length} visuels</span>` : '';
      const tools = p.tools.length ? `<span class="pc-soft">Logiciels : <b>${esc(p.tools.join(', '))}</b></span>` : '<span class="pc-soft"></span>';
      return `
      <article class="project-card${p.featured ? ' is-featured' : ''} reveal" data-categories="${p.categories.join(' ')}">
        <button type="button" class="pc-media${cover && cover.type === 'plan' ? ' is-plan' : ''}" data-open="${p.id}" aria-label="Voir les détails du projet : ${esc(p.title)}">${media}${count}</button>
        <div class="pc-body">
          <ul class="pc-tags">${p.categoryLabels.map((c) => `<li class="tag">${esc(c)}</li>`).join('')}</ul>
          <h3>${esc(p.title)}</h3>
          <p class="pc-date">${esc(p.period)}</p>
          <p class="pc-desc">${esc(p.summary)}</p>
          <div class="pc-foot">
            ${tools}
            <button type="button" class="btn btn-ghost" data-open="${p.id}">Voir les détails
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
          </div>
        </div>
      </article>`;
    }).join('');
    observeReveal($$('.reveal', grid));
  }

  function setFilter(filter) {
    $$('.chip').forEach((c) => {
      const on = c.dataset.filter === filter;
      c.classList.toggle('is-active', on);
      c.setAttribute('aria-pressed', String(on));
    });
    $$('.project-card', grid).forEach((card) => {
      const show = filter === 'all' || card.dataset.categories.split(' ').includes(filter);
      card.classList.toggle('is-hidden', !show);
    });
    // La première carte visible devient la carte large
    const visible = $$('.project-card:not(.is-hidden)', grid);
    $$('.project-card', grid).forEach((c) => c.classList.remove('is-featured'));
    if (visible.length && (filter === 'all' || visible.length % 2 === 1)) visible[0].classList.add('is-featured');
  }
  $$('.chip').forEach((chip) => chip.addEventListener('click', () => setFilter(chip.dataset.filter)));

  /* ======================================================================
     7. MODALE DE DÉTAIL DU PROJET
     ====================================================================== */
  const modal = $('#project-modal');
  const modalBody = $('#modal-body');
  const modalPanel = $('.modal-panel', modal);
  let lastFocus = null;
  let current = null;       // projet ouvert
  let currentIndex = 0;     // image affichée

  function list(items) { return `<ul class="checklist single">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`; }

  function renderModal(p) {
    const hasImgs = p.images.length > 0;
    const gallery = hasImgs ? `
      <div class="m-gallery">
        <button type="button" class="m-main" id="m-main" aria-label="Agrandir l'image">
          <img id="m-main-img" src="" alt="">
          <span class="zoom"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/></svg>Agrandir</span>
        </button>
        <p class="m-caption" id="m-caption"></p>
        ${p.images.length > 1 ? `<div class="m-thumbs" role="group" aria-label="Choisir une image">${p.images.map((im, i) =>
          `<button type="button" class="m-thumb" data-thumb="${i}" aria-label="Image ${i + 1} : ${esc(im.caption)}"><img src="${esc(im.src)}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}
      </div>` : `
      <div class="m-gallery"><div class="m-main" style="cursor:default"><div class="ph-art" role="img" aria-label="Visuels à venir">${ICON_BLUEPRINT}<span>Photographies et plans à venir</span></div></div></div>`;

    modalBody.innerHTML = `
      <header class="m-head">
        <ul class="pc-tags">${p.categoryLabels.map((c) => `<li class="tag">${esc(c)}</li>`).join('')}</ul>
        <h3 id="modal-title">${esc(p.title)}</h3>
        <p class="m-meta">${esc(p.period)}</p>
      </header>
      ${gallery}
      <div class="m-grid">
        <section class="m-block wide"><h4>Présentation</h4><p>${esc(p.overview)}</p></section>
        <section class="m-block"><h4>Caractéristiques techniques</h4>
          <ul class="spec-list">${p.specs.map(([k, v]) => `<li><b>${esc(k)}</b><span>${esc(v)}</span></li>`).join('')}</ul></section>
        <section class="m-block"><h4>Mes contributions</h4>${list(p.contributions)}</section>
        ${p.challenge ? `<section class="m-block wide"><h4>Défi technique</h4><p>${esc(p.challenge)}</p></section>` : ''}
        ${p.tools.length ? `<section class="m-block wide"><h4>Logiciels utilisés</h4><ul class="tool-pills">${p.tools.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></section>` : ''}
      </div>
      ${p.note ? `<p class="m-note">${esc(p.note)}</p>` : ''}`;
    if (hasImgs) showImage(0);
  }

  function showImage(i) {
    currentIndex = i;
    const im = current.images[i];
    const main = $('#m-main');
    const img = $('#m-main-img');
    img.src = im.src; img.alt = im.alt;
    main.classList.toggle('is-plan', im.type === 'plan');
    $('#m-caption').textContent = im.caption;
    $$('.m-thumb', modalBody).forEach((t, k) => {
      t.classList.toggle('is-current', k === i);
      if (k === i) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current');
    });
  }

  function openModal(id, trigger) {
    current = PROJECTS.find((p) => p.id === id);
    if (!current) return;
    lastFocus = trigger || document.activeElement;
    renderModal(current);
    modal.hidden = false;
    document.body.classList.add('is-locked');
    modalPanel.scrollTop = 0;
    modalPanel.focus();
  }
  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('is-locked');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  grid.addEventListener('click', (e) => {
    const t = e.target.closest('[data-open]');
    if (t) openModal(t.dataset.open, t);
  });
  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) return closeModal();
    const th = e.target.closest('[data-thumb]');
    if (th) return showImage(Number(th.dataset.thumb));
    if (e.target.closest('#m-main') && current.images.length) openLightbox(currentIndex);
  });

  /* ======================================================================
     8. LIGHTBOX
     ====================================================================== */
  const lb = $('#lightbox');
  const lbImg = $('#lb-img');
  const lbCap = $('#lb-cap');
  let lbIndex = 0;

  function paintLightbox() {
    const im = current.images[lbIndex];
    lbImg.src = im.src; lbImg.alt = im.alt;
    lbCap.textContent = `${im.caption} (${lbIndex + 1}/${current.images.length})`;
    const multi = current.images.length > 1;
    $('.lb-prev', lb).hidden = !multi; $('.lb-next', lb).hidden = !multi;
  }
  function openLightbox(i) { lbIndex = i; paintLightbox(); lb.hidden = false; $('.lb-close', lb).focus(); }
  function closeLightbox() { lb.hidden = true; showImage(lbIndex); const m = $('#m-main'); if (m) m.focus(); }
  function stepLightbox(d) { lbIndex = (lbIndex + d + current.images.length) % current.images.length; paintLightbox(); }

  lb.addEventListener('click', (e) => {
    const b = e.target.closest('[data-lb]');
    if (b) { const a = b.dataset.lb; if (a === 'close') closeLightbox(); else stepLightbox(a === 'next' ? 1 : -1); return; }
    if (!e.target.closest('.lb-figure img')) closeLightbox();
  });
  // Balayage tactile
  let touchX = null;
  lb.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (touchX === null || current.images.length < 2) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) stepLightbox(dx < 0 ? 1 : -1);
    touchX = null;
  }, { passive: true });

  // Clavier : Échap, flèches, piège du focus
  document.addEventListener('keydown', (e) => {
    if (!lb.hidden) {
      if (e.key === 'Escape') return closeLightbox();
      if (e.key === 'ArrowRight') return stepLightbox(1);
      if (e.key === 'ArrowLeft') return stepLightbox(-1);
      if (e.key === 'Tab') { // focus limité aux boutons visibles
        const f = $$('button', lb).filter((b) => !b.hidden);
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      return;
    }
    if (!modal.hidden) {
      if (e.key === 'Escape') return closeModal();
      if (e.key === 'Tab') {
        const f = $$('button, a[href]', modalPanel).filter((x) => x.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === modalPanel)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
  });

  /* ======================================================================
     9. FORMULAIRE DE CONTACT (validation + mailto)
     Aucun serveur n'est utilisé : le message est préparé dans la messagerie
     de l'utilisateur, qui doit l'envoyer lui-même.
     ====================================================================== */
  const form = $('#contact-form');
  const status = $('#form-status');
  const rules = {
    nom: (v) => (v.trim().length < 2 ? 'Veuillez saisir votre nom complet.' : ''),
    email: (v) => (!v.trim() ? 'Veuillez saisir votre adresse e-mail.' : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? 'Cette adresse e-mail ne semble pas valide.' : ''),
    sujet: (v) => (v.trim().length < 3 ? 'Veuillez indiquer le sujet de votre message.' : ''),
    message: (v) => (v.trim().length < 10 ? 'Votre message doit contenir au moins 10 caractères.' : '')
  };
  function validateField(name) {
    const input = form.elements[name];
    const msg = rules[name](input.value);
    const wrap = input.closest('.field');
    wrap.classList.toggle('has-error', !!msg);
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    $('#e-' + name).textContent = msg;
    return !msg;
  }
  Object.keys(rules).forEach((n) => {
    form.elements[n].addEventListener('blur', () => validateField(n));
    form.elements[n].addEventListener('input', () => { if (form.elements[n].closest('.field').classList.contains('has-error')) validateField(n); });
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = '';
    const results = Object.keys(rules).map(validateField);
    if (results.includes(false)) {
      status.textContent = 'Veuillez corriger les champs signalés avant de continuer.';
      const bad = Object.keys(rules).find((n) => form.elements[n].closest('.field').classList.contains('has-error'));
      if (bad) form.elements[bad].focus();
      return;
    }
    const d = Object.fromEntries(new FormData(form).entries());
    const body = `${d.message.trim()}\n\n— ${d.nom.trim()}\n${d.email.trim()}`;
    const url = `mailto:${CONFIG.contact.email}?subject=${encodeURIComponent(d.sujet.trim())}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Votre messagerie va s\'ouvrir avec le message prérempli. Il ne sera envoyé qu\'une fois que vous aurez validé l\'envoi. Si rien ne s\'ouvre, écrivez directement à ' + CONFIG.contact.email + '.';
    window.location.href = url;
  });

  /* ======================================================================
     10. DIVERS : animations d'apparition, retour en haut, année
     ====================================================================== */
  let revealObs = null;
  function observeReveal(els) {
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('is-visible')); return; }
    if (!revealObs) {
      revealObs = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); revealObs.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    }
    els.forEach((el) => revealObs.observe(el));
  }

  const toTop = $('#to-top');
  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 8);
    toTop.hidden = false;
    toTop.classList.toggle('is-visible', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0 }));

  $('#year').textContent = new Date().getFullYear();

  // Initialisation
  renderCards();
  setFilter('all');
  observeReveal($$('.reveal'));
  onScroll();
})();
