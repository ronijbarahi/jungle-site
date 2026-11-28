const hl = s => String(s).replace(/(\S+?)([.!?]*)$/, '<span class="hl">$1</span>$2');
const LOGO = '<svg viewBox="0 0 740.3 224.23" fill="currentColor" aria-hidden="true"><path class="d" d="M699.42,153.84c0-11.46,8.35-20.64,20.44-20.64s20.44,9.18,20.44,20.64-8.35,20.64-20.44,20.64S699.42,165.46,699.42,153.84Z"/><g><g><path d="M124.72,6.68v106.85q0,29.85-16.33,45.95t-47.07,16.05c-13.16,0-24.28-2.4-33.46-7.19q-13.77-7.12-20.67-20.3Q.27,134.95,0,117.29h35.5c.13,8.77,2.39,15.46,6.69,20.07,4.3,4.62,9.95,6.92,17.95,6.92s14.2-2.35,18.59-7.05c4.34-4.7,6.56-11.89,6.56-21.57V13.64L124.72,6.68Z"/><polygon points="124.72 6.68 124.72 44.21 85.29 51.17 35.45 59.95 35.45 22.46 85.29 13.64 124.72 6.68"/></g><path d="M214.33,134.08c-2.78,1.62-5.77,2.98-8.91,4.06-3.55,1.21-7.15,1.82-10.69,1.82-5.06,0-9.05-1.26-11.84-3.76-2.7-2.42-4.07-6.68-4.07-12.67V50.39l-39.42,1.85v78.41c0,15.19,4.04,26.58,12,33.88,7.89,7.23,18.3,10.9,30.93,10.9,6.78,0,13.22-1.03,19.12-3.06,4.33-1.49,8.64-3.64,12.88-6.42v7.1h39.42V50.39l-39.42,1.85V134.08Z"/><path d="M342.42,48.94c-6.79,0-13.36,1.08-19.52,3.19-4.58,1.57-9.11,3.79-13.54,6.63v-8.37l-39.42,1.85v120.81h39.42v-82.48c3.09-1.79,6.34-3.24,9.66-4.32,3.74-1.22,7.44-1.84,11-1.84,5.05,0,9.03,1.26,11.83,3.76,2.7,2.42,4.07,6.69,4.07,12.67v72.21h39.42v-79.33c0-15.17-3.99-26.56-11.85-33.87C365.68,52.62,355.23,48.94,342.42,48.94Z"/><path d="M499.71,151.71c-9.15-6.57-22.35-9.9-39.24-9.9q-2.41,0-6.68.13-3.91.13-7.81.47l5.42-5.3c14.68-.88,26.52-5.12,35.19-12.63,9.06-7.82,13.65-18.35,13.65-31.29,0-3.45-.54-6.81-1.6-10q-.71-2.12-1.69-4.06h15.13l.32-32.09-45.58,4.76c-6.25-1.9-13.09-2.86-20.33-2.86-10.73,0-20.22,1.82-28.2,5.39-8.11,3.64-14.45,8.82-18.86,15.39-4.43,6.59-6.68,14.49-6.68,23.47,0,10.5,3.33,19.73,9.9,27.42,5.56,6.51,13.11,11.11,22.5,13.72l-15.78,14.89v28.26l3.47-.81c5.08-1.19,11.33-2.05,18.55-2.57,7.29-.52,14.24-.78,20.64-.78,12.84,0,18.47,1.24,20.94,2.28,2.9,1.23,4.2,3.07,4.2,5.97,0,1.96-.55,3.56-1.7,4.89-1.16,1.36-3.48,2.51-6.71,3.32-3.64.9-9.17,1.36-16.47,1.36s-14.99-.65-22.61-1.93c-7.65-1.29-14.65-2.99-20.81-5.04-6.04-2.02-10.84-4.29-14.29-6.75l-4.01-2.86-3.25,35.7,1.53.91c6.74,4.01,15.68,7.23,26.57,9.57,10.81,2.32,22.59,3.49,35.03,3.49,21.84,0,38.01-4.07,48.06-12.09,10.25-8.18,15.44-18.64,15.44-31.1S509.16,158.48,499.71,151.71ZM429,93.19c0-4.7,1.49-8.44,4.56-11.43,3.08-3.01,7.31-4.48,12.93-4.48s9.58,1.47,12.67,4.48c3.06,2.99,4.55,6.73,4.55,11.43s-1.48,8.37-4.53,11.27c-3.08,2.94-7.23,4.37-12.69,4.37s-9.85-1.46-12.93-4.48C430.49,101.37,429,97.71,429,93.19Z"/><polygon points="523.48 173.05 562.9 173.05 562.9 0 523.48 1.85 523.48 173.05"/><path d="M687.89,121.36q.53-4.27.94-9.22c.26-3.27.4-6.15.4-8.54,0-11.19-2.4-20.95-7.12-29-4.73-8.08-11.42-14.35-19.89-18.64-8.37-4.22-17.99-6.36-28.58-6.36-11.53,0-22.07,2.65-31.34,7.88-9.29,5.24-16.66,12.61-21.91,21.91-5.23,9.28-7.88,20.35-7.88,32.92s2.84,24.08,8.43,33.62c5.64,9.6,14.13,17.13,25.24,22.36,12.78,6.02,27.16,8.27,41.2,8.08,6.75-.09,13.61-.63,20.29-1.61,3.56-.52,7.11-1.2,10.6-2.14,1.02-.27,10-2.6,9.96-3.54,0,0-1.52-34.47-1.52-34.47-12.52,4.7-25.68,6.98-39.1,6.54-9.95-.33-21.24-2.26-28.41-9.81-2.07-2.18-3.65-4.7-4.72-7.5h73.1L687.89,121.36ZM652.18,98.32v.61h-39.51c1.09-5.47,3.28-9.98,6.54-13.44,3.79-4.02,8.59-5.97,14.69-5.97,5.76,0,10.14,1.65,13.39,5.06C650.58,88.02,652.18,92.52,652.18,98.32Z"/></g></svg>';
// Nav logo: the supplied full wordmark (Jungle New System artwork), never redrawn.
const LOGO_NAV = LOGO;
// Shared chrome (nav, footer, transitions) + page renderers. Brand rules live in style.css.
// Real imagery comes from assets/work/<slug>/ via manifest.js (run scripts/build-images.py).
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = document.body.dataset.page;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (typeof IMAGES !== 'undefined') PROJECTS.forEach(p => { const m = IMAGES[p.slug]; if (m) { p.img = m.cover; p.gallery = m.gallery; } });

const pic = (src, alt, eager) => `<img src="${src}" alt="${alt}" ${eager ? '' : 'loading="lazy" '}decoding="async">`;
const art = p => p.img ? `<div class="art">${pic(p.img, p.title)}</div>` : `<div class="art ${p.art}"><b>${p.word}</b></div>`;
const sector = p => `${CATS[p.cat]}${p.tag ? ` / ${p.tag}` : ''}`;
const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

const card = p => `<a class="card reveal" data-c="${p.cat}" href="project.html?p=${p.slug}">
  <div class="thumb">${art(p)}</div>
  <div class="meta"><div><h3 class="w">${p.title}</h3><p>${sector(p)}</p></div><span class="n">${p.year}</span></div></a>`;

// Services mega menu.
const IC = {
  ad: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>', social: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="16.8" cy="7.2" r=".6"/>',
  pres: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8"/>', ill: '<path d="M4 20l4-1L19 8l-3-3L5 16z"/><path d="M14 7l3 3"/>',
  book: '<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/>', print: '<path d="M7 9V4h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="7" y="14" width="10" height="6"/>',
  pack: '<path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/>', motion: '<circle cx="12" cy="12" r="8"/><path d="M10 9l5 3-5 3z"/>',
  video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/>', mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>', sys: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><circle cx="16.5" cy="16.5" r="3.5"/>',
  prod: '<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/>', copy: '<path d="M5 6h14M5 10h14M5 14h9M5 18h6"/>', imm: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',
  ai: '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/>', chat: '<path d="M5 5h14v10H9l-4 4z"/>', auto: '<path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5"/>',
  camp: '<path d="M4 10v4h3l7 4V6L7 10z"/><path d="M18 9a4 4 0 0 1 0 6"/>',
};
const MENU = [
  [['Design and communication', 'g', 'design'], [
    ['Marketing design', 'Posters, ads and promotional pieces', 'ad'], ['Packaging design', 'Packs, labels and merchandise people keep', 'pack'],
    ['Digital design', 'Websites, emails and screens that feel like you', 'web'], ['Creative assets', 'Templates and files your team can reuse', 'sys'],
    ['Visual communication', 'Illustration, decks and reports made clear', 'ill']]],
  [['Content and campaigns', 'i', 'content'], [
    ['Content planning', 'A calendar with a reason behind every post', 'copy'], ['Social media creative', 'Posts, stories and reels with personality', 'social'],
    ['Creative campaigns', 'One big idea, told across every channel', 'camp'], ['Content consulting', 'Straight advice on what to make and why', 'chat'],
    ['Art direction', 'A clear look and feel, from sketch to final file', 'pres']]],
  [['Creative experiences', 'm', 'creative'], [
    ['Event creative', 'Key art, screens and graphics for the big night', 'imm'], ['Brand activations', 'Moments that bring a brand to life in person', 'motion'],
    ['Environmental graphics', 'Signage, banners and branded spaces', 'print'], ['Creative production', 'Photo, video and motion, made properly', 'video'],
    ['Campaign execution', 'Every format and placement, delivered on time', 'auto']]],
];

// ── single service pages (service.html?s=<slug>)
const slugify = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const SVC = {
  'Marketing design': [['Posters, flyers and ads', 'Promotional pieces for print and screen', 'Layouts that keep your message clear', 'Files ready for every placement'], ''],
  'Packaging design': [['Packs, labels and boxes', 'Jerseys, tees and fan merchandise', 'Mockups before anything is printed', 'Print-ready files, checked'], 'sport'],
  'Digital design': [['Websites and landing pages', 'Email templates and newsletters', 'Screens and interfaces', 'Hand-off ready for developers'], 'digital'],
  'Creative assets': [['Reusable templates for your team', 'Social and print systems', 'Presentations, decks and reports', 'Files organised to last'], ''],
  'Visual communication': [['Illustration and icons', 'Ideas and data made easy to read', 'Decks, reports and guides', 'Styles that fit your brand'], ''],
  'Content planning': [['A content calendar built around your goals', 'Themes and formats that fit your audience', 'A posting rhythm your team can keep', 'Reviewed and adjusted as you grow'], ''],
  'Social media creative': [['Feed posts, stories, carousels and reels', 'Matchday, launch and event templates', 'Captions written to match', 'A steady, consistent rhythm'], 'sport'],
  'Creative campaigns': [['One idea carried across every channel', 'Key art and campaign systems', 'Ticketing, launch and countdown series', 'Results you can point to'], 'event'],
  'Content consulting': [['A fresh look at what you publish today', 'Clear priorities and next steps', 'Simple guidelines your team can follow', 'Honest feedback, kindly given'], ''],
  'Art direction': [['A look and feel for the whole project', 'Photography and video direction', 'References, mood and creative briefs', 'Quality checks from start to finish'], ''],
  'Event creative': [['Event key art and posters', 'Stage and LED screen visuals', 'Ticketing and countdown campaigns', 'Sponsor and partner graphics'], 'event'],
  'Brand activations': [['Ideas that bring your brand to life in person', 'Giveaways and fan moments', 'On-ground graphics and materials', 'Content to carry it online'], 'event'],
  'Environmental graphics': [['Signage and wayfinding', 'Banners, backdrops and displays', 'Branded spaces', 'Print-ready files, checked'], 'event'],
  'Creative production': [['Photo and video production', 'Motion graphics and editing', 'Cutdowns for every platform', 'Finishing with care'], 'event'],
  'Campaign execution': [['Every format and size you need', 'A calm, organised roll-out', 'One owner from brief to final file', 'Delivered on the date we agreed'], ''],
};
const svgI = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]}</svg>`;
const mItem = ([t, d, ic, isNew]) => `<li><a href="service.html?s=${slugify(t)}"><span><b>${t}${isNew ? ' <em>New</em>' : ''}</b><small>${d}</small></span>${svgI(ic)}</a></li>`;
const mHead = ([t, c, a]) => `<a class="mh mh-${c}" href="services.html#${a}">${t} <span aria-hidden="true">↗</span></a>`;
const MENU_GROUP = {};
// Services.
const DISCIPLINES = [
  ['Design and communication', 'Design that says it clearly.', ['Marketing design', 'Packaging design', 'Digital design', 'Creative assets', 'Visual communication'],
    'Marketing, packaging and digital design, made with care so your message lands the way you meant it.', ['janakpur-bolts', 'lumbini-all-stars']],
  ['Content and campaigns', 'Ideas that keep going.', ['Content planning', 'Social media creative', 'Creative campaigns', 'Content consulting', 'Art direction'],
    'Plans, posts and campaigns that give your brand something worth following, week after week.', ['nepathya-auckland', '1974-ad-tour']],
  ['Creative experiences', 'Ideas you can step into.', ['Event creative', 'Brand activations', 'Environmental graphics', 'Creative production', 'Campaign execution'],
    'Creative made for the moments people actually show up to: events, activations and spaces.', ['trn-fest', 'glory-tour']],
];
const SERVICE_COUNT = DISCIPLINES.reduce((n, d) => n + d[2].length, 0);
DISCIPLINES.forEach(([g, , list]) => list.forEach(n => MENU_GROUP[n] = g.split(' ')[0].toLowerCase()));
const MEGA = `<div class="mega" id="mega"><div class="mega-in">${MENU.map(col => { let h = ''; for (let i = 0; i < col.length; i += 2) h += mHead(col[i]) + `<ul>${col[i + 1].map(mItem).join('')}</ul>`; return `<div class="mcol">${h}</div>`; }).join('')}</div></div>`;


// ── chrome
document.body.insertAdjacentHTML('afterbegin', `
<a class="skip" href="#main">Skip to content</a>
<div id="curtain" aria-hidden="true">${LOGO.replace('<svg', '<svg class="jm"')}</div>
<nav><a class="logo" href="index.html" aria-label="Jungle, home">${LOGO_NAV}</a>
  <button class="menu" aria-expanded="false" aria-controls="nav-links">Menu</button>
  <div class="links" id="nav-links">
    <a href="work.html" data-p="work">Work</a><div class="has-mega"><button class="mega-btn" data-p="services" aria-expanded="false" aria-controls="mega">Services <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>${MEGA}</div><a href="why.html" data-p="why">Studio</a>
    <a href="contact.html" data-p="contact">Contact</a><a class="btn" href="contact.html">Start a project</a></div></nav>`);
document.body.insertAdjacentHTML('beforeend', `
<footer class="cta">${page === 'contact' || page === 'home' ? '' : `
  <p class="cta-line reveal">Where ideas grow<span class="dot">.</span></p>
  <div class="cta-row"><a class="btn" href="contact.html">Start a project <span aria-hidden="true">→</span></a>
  <a class="btn btn-2" href="mailto:ronij.jungle@gmail.com">ronij.jungle@gmail.com</a></div>`}
  <div class="foot">
    <div><img class="foot-logo" src="assets/logo-light.svg" alt="Jungle." width="740" height="224"><small>A design-led creative agency.<br>Where ideas grow.</small></div>
    <div><span class="label">Site</span><a href="work.html">Work</a><a href="services.html">Services</a><a href="contact.html">Contact</a></div>
    <div><span class="label">Follow</span><a href="https://instagram.com/jungledesigns">Instagram</a><a href="https://designbyjungle.com">designbyjungle.com</a></div>
    <div><span class="label">Say hello</span><a href="mailto:ronij.jungle@gmail.com">ronij.jungle@gmail.com</a><small>© 2026 Jungle.</small></div>
  </div></footer>`);
{ const m = $('main') || $('.ph'); if (m && !m.id) m.id = 'main'; }
$$(`nav [data-p="${page}"]`).forEach(a => { a.classList.add('cur'); a.setAttribute('aria-current', 'page'); });
const nav = $('nav'), menu = $('nav .menu');
menu.onclick = () => { const o = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', o); menu.textContent = o ? 'Close' : 'Menu'; };
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true }); onScroll();
{ // mega menus: hover on desktop, click/tap anywhere, Esc to close
  const fine = matchMedia('(hover: hover) and (min-width: 761px)');
  const all = $$('.has-mega');
  all.forEach(hm => { const mb = $('.mega-btn', hm); let t;
    const set = o => { clearTimeout(t); if (o) all.forEach(x => x !== hm && x.classList.remove('open')); hm.classList.toggle('open', o); nav.classList.toggle('mega-open', !!$('.has-mega.open') && fine.matches); mb.setAttribute('aria-expanded', o); };
    mb.onclick = () => set(!hm.classList.contains('open'));
    hm.onmouseenter = () => fine.matches && set(true);
    hm.onmouseleave = () => { if (fine.matches) t = setTimeout(() => set(false), 160); };
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && hm.classList.contains('open')) { set(false); mb.focus(); } });
    document.addEventListener('click', e => { if (!hm.contains(e.target)) set(false); });
  });
}

// Every headline ends with the full stop (Brand Book 03 / Graphic language).
$$('h1.x, h2.x, .next .x').forEach(h => {
  if (h.querySelector('.dot')) return;
  h.innerHTML = h.innerHTML.trim().replace(/[.!?]?$/, m => `<span class="dot">${m === '' || m === '.' ? '.' : m}</span>`);
});
// Type builds word by word (hero titles only: one authored moment per page).
$$('.words').forEach(h => {
  let i = 0;
  h.innerHTML = h.innerHTML.replace(/(<span class="dot">.*?<\/span>)|(<span class="hl">.*?<\/span>)|([^\s<]+)/g, (m, dot, hl, w) => dot ? dot : `<span class="wd" style="--i:${i++}">${hl || w}</span>`);
  h.classList.add('rise');
});

// ── transitions
setTimeout(() => document.body.classList.add('ready'), 60);
function go() { setTimeout(() => document.body.classList.add('go'), 60); }
let seen = false; try { seen = sessionStorage.getItem('jg-pre'); sessionStorage.setItem('jg-pre', 1); } catch (e) {}
if (!seen && !reduce) {
  // Preloader: the wordmark builds letter by letter, then the dot lands with one bounce.
  const pre = document.createElement('div'); pre.id = 'pre'; pre.setAttribute('aria-hidden', 'true'); pre.innerHTML = LOGO;
  $$('path', pre).forEach((p, i) => p.style.setProperty('--i', i));
  document.body.prepend(pre); document.body.classList.add('preloading');
  setTimeout(() => { pre.classList.add('done'); document.body.classList.remove('preloading'); go(); setTimeout(() => pre.remove(), 700); }, 1500);
} else go();
addEventListener('pageshow', e => e.persisted && document.body.classList.replace('leaving', 'ready'));
document.addEventListener('click', e => {
  const a = e.target.closest('a'); if (!a || reduce) return;
  const h = a.getAttribute('href');
  if (!h || h.startsWith('#') || /^(mailto|tel|https?):/.test(h) || a.target || e.metaKey || e.ctrlKey || e.shiftKey) return;
  e.preventDefault(); document.body.classList.replace('ready', 'leaving'); setTimeout(() => location.href = h, 420);
});

// ── page renderers

if (page === 'home') {
  // Clients: real logos, greyscale until hovered.
  const CLIENTS = [['janakpur-bolts', 'Janakpur Bolts'], ['husqvarna', 'Husqvarna'], ['lumbini-all-stars', 'Lumbini All Stars'], ['plo-lubricants', 'PLO Lubricants'], ['ptt', 'PTT'], ['sk-zic', 'SK enmove ZIC']];
  const logoRow = CLIENTS.map(([f, n]) => `<span class="clogo"><img src="assets/clients/${f}.png" alt="${n}" width="120" height="120" loading="lazy"></span>`).join('');
  $('#logos').innerHTML = logoRow.repeat(4);

  // Selected work: four real projects in an uneven grid.
  const pick = ['lumbini-all-stars', 'nepathya-auckland', 'trn-fest', '1974-ad-tour'].map(s => PROJECTS.find(p => p.slug === s)).filter(p => p && p.img);
  $('#zhw').innerHTML = pick.map((p, i) => `<a class="zh-item zi${i + 1} reveal" href="project.html?p=${p.slug}"><div class="zh-im">${pic(p.img, p.title)}</div>
    <h3>${p.title}</h3><p>${p.scope.slice(0, 3).join(', ')}</p>
    <div class="zh-tags"><span class="zh-tag"><i></i>${CATS[p.cat]}</span>${p.tag ? `<span class="zh-tag"><i></i>${p.tag}</span>` : ''}</div></a>`).join('');

  // Three service areas.
  $('#areas').innerHTML = DISCIPLINES.map(([t, v, list, para], i) => `<a class="area reveal" href="services.html#${t.split(' ')[0].toLowerCase()}"><span class="an">0${i + 1}</span><h3 class="w">${t}</h3><p class="av">${v}</p><p class="muted">${para}</p><ul>${list.map(x => `<li>${x}</li>`).join('')}</ul><span class="alink">Explore ${ARROW}</span></a>`).join('');
}

if (page === 'services') {
  const ex = { 'Creative Design': 'janakpur-bolts', 'Motion Design': 'nepathya-auckland', 'Digital Design': 'trn-fest', 'Content and Campaigns': '1974-ad-tour', 'AI Services': 'lumbini-all-stars' };
  $('#disciplines').innerHTML = DISCIPLINES.map(([t, v, list, para, seen], i) => { const key = t.split(' ')[0].toLowerCase();
    return `<section class="split rule reveal" id="${key}" style="padding-block:clamp(56px,7vw,112px);align-items:start">
      <div class="card"><div class="thumb"><div class="art"><img src="assets/stock/s-${key}.jpg" alt="" width="900" height="1125" loading="lazy"></div></div></div>
      <div><p class="label" style="color:var(--fg2)">0${i + 1}</p><h2 class="x" style="font-size:var(--t-head);margin-top:8px">${hl(t)}.</h2><p class="v" style="font-size:var(--t-voice);color:var(--fg2);margin-top:8px">${v}</p>
      <p class="lead" style="margin-top:20px">${para}</p>
      <div class="tags mt">${list.map(x => `<a href="service.html?s=${slugify(x)}">${x}</a>`).join('')}</div>
      <p class="label mt" style="color:var(--fg2)">Seen in</p><p>${seen.map(s => `<a href="project.html?p=${s}" style="text-decoration:underline;text-underline-offset:4px">${(PROJECTS.find(p => p.slug === s) || {}).title}</a>`).join(', ')}</p></div></section>`; }).join('');
  // headline dots for the injected h2s
  $$('#disciplines h2.x').forEach(h => h.innerHTML = h.innerHTML.replace(/\.$/, '<span class="dot">.</span>'));
}


if (page === 'service') {
  const ALL = MENU.flatMap(col => col.filter((_, i) => i % 2).flat());
  const q = new URLSearchParams(location.search).get('s');
  const it = ALL.find(([t]) => slugify(t) === q) || ALL[0];
  const [t, d, ic] = it, [gets, cat] = SVC[t] || [[], ''];
  const grp = DISCIPLINES.find(([, , l]) => l.includes(t)) || DISCIPLINES[0], gkey = grp[0].split(' ')[0].toLowerCase();
  document.title = `${t} | Jungle.`;
  const real = PROJECTS.filter(p => p.img), work = (cat ? real.filter(p => p.cat === cat) : []).concat(real).filter((p, i, a) => a.indexOf(p) === i).slice(0, 3);
  const others = grp[2].filter(x => x !== t);
  $('#svc').innerHTML = `
  <header class="ph sv-hero">
    <div><p class="sv-crumb"><a href="services.html">Services</a> / <a href="services.html#${gkey}">${grp[0]}</a></p>
      <h1 class="x words">${hl(t)}</h1><p class="lead" style="margin-top:20px">${d}. ${grp[1]}</p>
      <div class="hero-ctas" style="margin-top:32px"><a class="btn" href="contact.html">Start a project <span aria-hidden="true">→</span></a><a class="btn btn-2" href="#sv-work">See related work</a></div></div>
    <figure class="sv-img"><img src="assets/stock/s-${gkey}.jpg" alt="" width="900" height="1125"><span class="sv-ic">${svgI(ic)}</span></figure>
  </header>
  <section class="inv pad sec"><h2 class="x reveal" style="font-size:var(--t-head)">What you ${hl("get")}.</h2>
    <div class="sv-gets">${gets.map((g, i) => `<div class="reveal"><b class="n">${String(i + 1).padStart(2, '0')}</b><p>${g}</p></div>`).join('')}</div></section>
  <section class="inv pad sec" style="padding-top:0"><h2 class="x reveal" style="font-size:var(--t-head)">How it ${hl("works")}.</h2>
    <div class="steps s3 mt">${[['Seed', 'Tell us the idea, the question or the opportunity.'], ['Leaf', 'We explore, collaborate and design it into shape.'], ['Dot', 'The idea finds its final form, delivered as finished files.']].map(([a, b], i) => `<div class="step reveal"><b class="n">${i + 1}</b><div><h3 class="w">${a}</h3><p>${b}</p></div></div>`).join('')}</div></section>
  <section class="pad sec" id="sv-work"><h2 class="x reveal" style="font-size:var(--t-head)">Related ${hl("work")}.</h2>
    <div class="grid mt" style="padding:0">${work.map(card).join('')}</div></section>
  ${others.length ? `<section class="pad sec" style="padding-top:0"><h2 class="x reveal" style="font-size:var(--t-head)">More in ${hl(grp[0])}.</h2>
    <div class="tags mt">${others.map(x => `<a href="service.html?s=${slugify(x)}">${x}</a>`).join('')}</div></section>` : ''}`;
  $$('#svc h1.x, #svc h2.x').forEach(h => { if (!h.querySelector('.dot')) h.innerHTML = h.innerHTML.replace(/\.?$/, '<span class="dot">.</span>'); });
  $$('#svc .words').forEach(h => { let k = 0; h.innerHTML = h.innerHTML.replace(/(<span class="dot">.*?<\/span>)|(<span class="hl">.*?<\/span>)|([^\s<]+)/g, (m, dd, hl, w) => dd || `<span class="wd" style="--i:${k++}">${hl || w}</span>`); h.classList.add('rise'); });
}

if (page === 'why') {
  // Studio: one long page (Fiasco-style flow), all copy from the guide.
  document.title = 'Studio | Jungle.';
  const real = PROJECTS.filter(p => p.img);
  const strip = ['janakpur-bolts','nepathya-auckland','trn-fest'].map(sl => real.find(p => p.slug === sl)).filter(Boolean);
  const VAL = [['Curious','We ask the questions behind the brief, and look past the obvious answer.'],['Bold','We back good ideas with confidence, and make work people notice.'],['Playful','We enjoy what we do. It shows in the work, and in how we work with you.'],['Thoughtful','Every choice has a reason, from the first sketch to the final detail.']];
  const SS = [['assets/studio/photo.jpg', 17, ], ['assets/stock/s-motion.jpg', 15], ['assets/stock/h-relief.jpg', 19], ['assets/studio/g4.jpg', 11], ['assets/stock/s-creative.jpg', 13], ['assets/studio/g6.jpg', 12], ['assets/stock/s-content.jpg', 14]];
  $('#why').innerHTML = `
  <section class="ss" id="ss" aria-label="Studio"><div class="ss-stick">
    <div class="ss-tiles" aria-hidden="true">${SS.map(([f, w]) => `<div class="ss-i" style="--w:${w}vw"><img src="${f}" alt="" width="600" height="800"></div>`).join('')}</div>
    <div class="ss-b1"><p class="ss-tag">Studio</p><h1 class="ss-h">${'We’re curious thinkers, makers and storytellers who help ideas '.split(' ').filter(Boolean).map(w => `<span class="sw">${w}</span>`).join(' ')} <span class="sw"><span class="hl">grow</span>.</span></h1></div>
    <div class="ss-b2"><p class="ss-tag">How we work</p><p class="ss-p">From the first question to the final detail, we turn ideas into meaningful creative work. From Kathmandu, with clients near and far.</p></div>
  </div></section>
  <section class="inv pad sec st-sec" id="our-story"><div class="st-grid"><div><h2 class="st-h">Our <span class="hl">story</span></h2><figure class="st-fig st-fig-s reveal"><img src="assets/stock/s-creative.jpg" alt="Colour swatches and sketches on a designer’s desk" loading="lazy" data-par="0.08"></figure></div><div class="prose st-prose"><p>Every great thing starts somewhere. A thought. A question. A possibility.</p><p>But ideas need more than imagination. They need curiosity to explore, creativity to develop and the right people to bring them to life.</p><p>We are Jungle. A design-led creative agency that believes in the power of ideas and what they can become.</p><p>We think differently, create thoughtfully and collaborate closely to turn possibilities into meaningful creative work. From the first spark to the final detail, we create room for ideas to grow.</p></div></div></section>
  <section class="inv pad sec st-sec st-top" id="our-approach"><div class="st-grid"><h2 class="st-h">How we <span class="hl">work</span></h2><div><div class="steps s3"><div class="step reveal"><b class="n">1</b><div><h3 class="w">Seed</h3><p>The beginning. Every great project starts with a seed: an idea, a question or an opportunity waiting to grow.</p></div></div><div class="step reveal"><b class="n">2</b><div><h3 class="w">Leaf</h3><p>The growth. Ideas develop through exploration, collaboration, creative thinking and design.</p></div></div><div class="step reveal"><b class="n">3</b><div><h3 class="w">Dot</h3><p>The outcome. The idea finds its final form. A creative decision becomes something tangible and meaningful.</p></div></div></div><p class="st-note">Why we exist: to create an environment where ideas can grow into meaningful creative work that helps businesses move forward.</p></div></div></section>
  <div class="st-strip">${strip.map(p => `<a class="reveal" href="project.html?p=${p.slug}"><div class="zh-im">${pic(p.img, p.title)}</div><small>${p.title}</small></a>`).join('')}</div>
  <figure class="st-wide reveal"><img src="assets/stock/h-relief.jpg" alt="A team working together around a table" loading="lazy" data-par="0.12"><figcaption class="st-cap">Grow together.</figcaption></figure>
  <section class="inv pad sec st-sec" id="philosophy"><div class="st-grid"><h2 class="st-h">We’re <span class="hl">curious</span>, first</h2><div><div class="st-phil"><p><b>Explore with curiosity.</b> Question the obvious, look beyond the expected and discover new possibilities.</p><p><b>Create with intention.</b> Bring ideas to life through thoughtful design, creative direction and purposeful execution.</p><p><b>Grow together.</b> Collaborate with clients, share perspectives and build something better together.</p></div><div class="aud st-val">${VAL.map(([t, d]) => `<div class="reveal"><b class="w">${t}</b><p>${d}</p></div>`).join('')}</div></div></div></section>
  <section class="inv pad sec st-sec" id="who-we-work-with"><div class="st-grid"><div><h2 class="st-h">Who we <span class="hl">work</span> with</h2><figure class="st-fig st-fig-s reveal"><img src="assets/stock/s-motion.jpg" alt="A designer working at a laptop" loading="lazy" data-par="0.08"></figure></div><div class="aud st-aud"><div class="reveal"><b class="w">Ambitious founders</b><p>People looking to turn their vision into something recognisable.</p></div><div class="reveal"><b class="w">Growing businesses</b><p>Businesses looking for consistent, quality creative communication.</p></div><div class="reveal"><b class="w">Marketing teams</b><p>Teams seeking a dependable creative partner.</p></div><div class="reveal"><b class="w">Established businesses</b><p>Companies looking for fresh perspectives and stronger creative execution.</p></div><div class="reveal"><b class="w">International clients</b><p>Businesses looking for creative collaboration and thoughtful design solutions.</p></div></div></div></section>
  <section class="inv pad sec st-sec" id="faq"><div class="st-grid"><h2 class="st-h">Straight <span class="hl">answers</span></h2><div class="st-faq"><details><summary>Can you work with our in-house team or agency?</summary><p>Yes. We believe better ideas grow together, so we work alongside your team and share the thinking as we go.</p></details><details><summary>Where is the team based?</summary><p>In Kathmandu, working with clients in Nepal, Australia, New Zealand and beyond.</p></details><details><summary>How fast can you turn work around?</summary><p>Most social and campaign assets take a few working days. Tell us your date and we’ll tell you honestly what’s possible.</p></details><details><summary>How do we start?</summary><p>Send a brief through the contact page, or just tell us the idea. We reply within one working day.</p></details></div></div></section>
  <section class="on-green pad sec st-end"><h2 class="st-big">Got an idea that <span class="hl">needs</span> room?</h2><p><a class="btn" href="contact.html">Start a project <span aria-hidden="true">→</span></a></p></section>`;
  $$('#why h1.x').forEach(h => { h.innerHTML = h.innerHTML.replace(/\.$/, '<span class="dot">.</span>'); let n = 0; h.innerHTML = h.innerHTML.replace(/(<span class="dot">.*?<\/span>)|(<span class="hl">.*?<\/span>)|([^\s<]+)/g, (m, d, hh, w) => d || `<span class="wd" style="--i:${n++}">${hh || w}</span>`); h.classList.add('rise'); });
  // Pinned Studio scene: photos drift at the edges while the statement lights up word by word, then the second line arrives.
  (() => {
    const ss = $('#ss'); if (!ss) return;
    const tiles = $$('.ss-i', ss), words = $$('.sw', ss), b1 = $('.ss-b1', ss), b2 = $('.ss-b2', ss), wide = innerWidth > 820;
    // [x0,y0,x1,y1] top-left in vw / vh, start near the edges and drift
    const P = wide
      ? [[-3, 38, -7, 18, 1.1], [82, 14, 88, -6, 1.15], [75, 68, 80, 52, 1.2], [18, 8, 22, -20, 1.1], [86, 44, 94, 36, 1.12], [-2, 74, 4, 60, 1.1], [36, 84, 32, 66, 1.15]]
      : [[-8, 62, -10, 50, 1.1], [64, 4, 70, -6, 1.1], [58, 76, 62, 66, 1.12], [2, 4, 4, -8, 1.1], [70, 40, 80, 34, 1.1], [-4, 84, 0, 76, 1.1], [30, 88, 28, 78, 1.1]];
    const cl = (v, a, b) => Math.min(1, Math.max(0, (v - a) / (b - a))), ease = t => t * t * (3 - 2 * t);
    if (reduce) { ss.classList.add('static'); words.forEach(w => w.style.opacity = 1); return; }
    let tick = false;
    const run = () => { tick = false;
      const r = ss.getBoundingClientRect(), p = cl(-r.top, 0, r.height - innerHeight), vw = innerWidth / 100, vh = innerHeight / 100;
      tiles.forEach((t, i) => { const q = P[i], k = ease(p); t.style.transform = `translate(${(q[0] + (q[2] - q[0]) * k) * vw}px,${(q[1] + (q[3] - q[1]) * k) * vh}px) scale(${1 + (q[4] - 1) * k})`; });
      words.forEach((w, i) => { w.style.opacity = (.14 + .86 * cl(p, .04 + i / words.length * .3, .1 + i / words.length * .3 + .06)).toFixed(3); });
      const o1 = 1 - cl(p, .48, .56), o2 = cl(p, .58, .68) * (1 - cl(p, .94, 1));
      b1.style.opacity = o1; b1.style.transform = `translateY(${-cl(p, .48, .56) * 24}px)`; b1.style.pointerEvents = o1 < .1 ? 'none' : '';
      b2.style.opacity = o2; b2.style.transform = `translateY(${(1 - cl(p, .58, .68)) * 24}px)`; };
    addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(run); } }, { passive: true }); addEventListener('resize', run); run();
  })();
  // Motion: hero photo eases in as you scroll, images drift slightly (parallax).
  if (!reduce) {
    const ph = $('.st-photo img'), pars = $$('#why [data-par]'); let tick = false;
    const run = () => { tick = false; const vh = innerHeight;
      if (ph) { const y = Math.min(scrollY, vh); ph.style.transform = `scale(${1.12 - y / vh * 0.12}) translateY(${y * 0.06}px)`; }
      pars.forEach(im => { const r = im.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return; const k = (r.top + r.height / 2 - vh / 2) * parseFloat(im.dataset.par); im.style.transform = `translateY(${-k}px) scale(1.14)`; }); };
    addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(run); } }, { passive: true }); run();
  }
  if (location.hash) setTimeout(() => { const t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }, 300);
}

if (page === 'work') {
  // Work page: collage, statement, logos, full-bleed 2-up tiles.
  const real = PROJECTS.filter(p => p.img), list = real.concat(PROJECTS.filter(p => !p.img));
  const sr = $('#sr'), sb = $('#sr-btn');
  if (reduce) sr.removeAttribute('autoplay'), sr.pause();
  const sync = () => { const p = sr.paused; sb.setAttribute('aria-label', p ? 'Play showreel' : 'Pause showreel');
    sb.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${p ? 'M8 5l11 7-11 7z' : 'M7 5h4v14H7zM13 5h4v14h-4z'}"/></svg>`; };
  sb.onclick = () => (sr.paused ? sr.play() : sr.pause()); sr.onplay = sr.onpause = sync; sync();
  const CL = [['janakpur-bolts', 'Janakpur Bolts'], ['husqvarna', 'Husqvarna'], ['lumbini-all-stars', 'Lumbini All Stars'], ['plo-lubricants', 'PLO Lubricants'], ['ptt', 'PTT'], ['sk-zic', 'SK enmove ZIC']];
  $('#wlogos').innerHTML = CL.map(([f, n]) => `<span class="clogo"><img src="assets/clients/${f}.png" alt="${n}" width="120" height="120"></span>`).join('').repeat(4);
  $('#grid').innerHTML = list.map(p => `<a class="tile2" data-c="${p.cat}" href="project.html?p=${p.slug}">${art(p)}
    <div class="t2-cap"><h2 class="w">${p.title} <span aria-hidden="true">+</span></h2><p>${p.scope.slice(0, 3).join(', ')}</p></div></a>`).join('');
  const apply = f => {
    $$('[data-f]').forEach(x => { x.classList.toggle('on', x.dataset.f === f); x.setAttribute('aria-pressed', x.dataset.f === f); });
    $$('#grid .tile2').forEach(c => c.hidden = f !== 'all' && c.dataset.c !== f);
  };
  $$('[data-f]').forEach(b => b.onclick = () => { apply(b.dataset.f); history.replaceState(null, '', b.dataset.f === 'all' ? 'work.html' : `?f=${b.dataset.f}`); });
  const f0 = new URLSearchParams(location.search).get('f'); apply(f0 && CATS[f0] ? f0 : 'all');
}

if (page === 'project') {
  const slug = new URLSearchParams(location.search).get('p');
  const i = Math.max(0, PROJECTS.findIndex(p => p.slug === slug));
  const p = PROJECTS[i], nx = PROJECTS[(i + 1) % PROJECTS.length];
  document.title = `${p.title} | Jungle.`;
  const alt = ['a1', 'a2', 'a3', 'a4', 'a5', 'a7', 'a8', 'a9'].filter(a => a !== p.art);
  const g = n => `<div class="g reveal">${p.gallery && p.gallery[n] ? `<div class="art">${pic(p.gallery[n], `${p.title}, image ${n + 1}`)}</div>` : art({ ...p, img: null, art: alt[(i + n) % alt.length] })}</div>`;
  const nG = p.gallery && p.gallery.length ? p.gallery.length : 5;
  $('#cs').innerHTML = `
  <header class="ph"><h1 class="x words">${hl(p.title)}</h1></header>
  <div class="cs-hero${p.img ? ' real' : ''}">${p.img ? `<div class="blur" style="background-image:url('${p.img}')"></div>${pic(p.img, p.title, true)}` : art(p)}</div>
  <div class="facts">
    <div><span>Client</span>${p.client}</div><div><span>Industry</span>${sector(p)}</div>
    <div><span>Year</span>${p.year}</div><div><span>What we made</span>${p.scope.join(', ')}</div></div>
  <div class="pad sec" style="padding-top:clamp(48px,6vw,96px)">
    <div class="split rule reveal"><span class="label">The brief</span><p class="quote">${p.brief}</p></div>
    <div class="split rule reveal"><span class="label">The idea</span><p class="idea">${p.idea}</p></div>
  </div>
  <div class="gallery${p.gallery && p.gallery.length ? ' real' : ''}">${[...Array(nG).keys()].map(g).join('')}</div>
  <div class="pad sec"><div class="split reveal"><span class="label">The result</span><p class="quote">${p.result}</p></div></div>
  <a class="next" href="project.html?p=${nx.slug}"><span class="label">Next project</span><span class="x">${nx.title}</span></a>`;
  $$('#cs h1.x, #cs .next .x').forEach(h => { h.innerHTML += '<span class="dot">.</span>'; });
  $$('#cs .words').forEach(h => { let k = 0; h.innerHTML = h.innerHTML.replace(/(<span class="dot">.*?<\/span>)|(<span class="hl">.*?<\/span>)|([^\s<]+)/g, (m, d, hl, w) => d || `<span class="wd" style="--i:${k++}">${hl || w}</span>`); h.classList.add('rise'); });
}

// ── The Clearing (notes from the studio)
const fmtDate = d => new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(d));
const noteCard = (n, big) => `<a class="note${big ? ' big' : ''} reveal" href="clearing.html?a=${n.slug}"><div class="nm"><img src="${n.img}" alt="" loading="lazy"><span class="ntag">${n.tag}</span></div>
  <div class="nb"><p class="nmeta">${fmtDate(n.date)} · ${n.mins} min read</p><h3 class="w">${n.title}</h3><p class="muted">${n.dek}</p><span class="nread">Read ${ARROW.replace('<svg', '<svg width="16" height="16"')}</span></div></a>`;
if (typeof NOTES !== 'undefined' && $('#notes')) $('#notes').innerHTML = noteCard(NOTES[0], true) + NOTES.slice(1, 3).map(n => noteCard(n)).join('');
if (page === 'clearing') {
  const a = new URLSearchParams(location.search).get('a'), n = NOTES.find(x => x.slug === a);
  if (n) {
    document.title = `${n.title} | The Clearing | Jungle.`;
    $('#clr').innerHTML = `<article class="art-page"><header class="ph" style="max-width:900px"><p class="sv-crumb"> / ${n.tag}</p><h1 class="x words">${n.title}.</h1><p class="lead">${n.dek}</p><p class="nmeta" style="margin-top:12px">${fmtDate(n.date)} · ${n.mins} min read</p></header>
      <figure class="art-hero"><img src="${n.img}" alt=""></figure>
      <div class="inv pad sec"><div class="prose">${n.body.map(p => `<p>${p}</p>`).join('')}<p><a class="btn" href="contact.html">Start a project <span aria-hidden="true">→</span></a></p></div></div>
      <section class="pad sec"><h2 class="x" style="font-size:var(--t-head)">Keep reading.</h2><div class="notes-grid mt">${NOTES.filter(x => x !== n).slice(0, 3).map(x => noteCard(x)).join('')}</div></section></article>`;
  } else {
    $('#clr').innerHTML = `<header class="ph"><h1 class="x words">The Clearing.</h1><p class="lead">Notes, process and ideas from the studio. Where we step back from the work and say what we learned.</p></header>
      <section class="pad" style="padding-bottom:clamp(88px,10vw,160px)"><div class="notes-grid">${NOTES.map((x, i) => noteCard(x, i === 0)).join('')}</div></section>`;
  }
  $$('#clr h1.x').forEach(h => { if (!h.querySelector('.dot')) h.innerHTML = h.innerHTML.replace(/\.$/, '<span class="dot">.</span>'); let k = 0; h.innerHTML = h.innerHTML.replace(/(<span class="dot">.*?<\/span>)|(<span class="hl">.*?<\/span>)|([^\s<]+)/g, (m, d, hl, w) => d || `<span class="wd" style="--i:${k++}">${hl || w}</span>`); h.classList.add('rise'); });
}

// ── reveal on scroll + counters
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; e.target.classList.add('in');
  const n = e.target.querySelector('[data-n]');
  if (n && !reduce) { const to = +n.dataset.n; let k = 0; const t = setInterval(() => { n.textContent = Math.round(to * (++k / 30)) + (k >= 30 ? (n.dataset.s || '') : ''); if (k >= 30) clearInterval(t); }, 20); }
  else if (n) n.textContent = n.dataset.n + (n.dataset.s || '');
  io.unobserve(e.target);
}), { threshold: .15 });
$$('.reveal').forEach(el => io.observe(el));

// ── contact: validate, then open the visitor's mail app with the brief (no backend)
const form = $('#brief');
if (form) form.onsubmit = e => {
  e.preventDefault(); const d = new FormData(form), err = $('#f-err');
  const ok = (d.get('Name') || '').trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.get('Email') || '');
  err.hidden = !!ok; if (!ok) { (d.get('Name') || '').trim() ? $('#f-mail').focus() : $('#f-name').focus(); return; }
  const body = [...d].map(([k, v]) => `${k}: ${v}`).join('\n');
  location.href = `mailto:ronij.jungle@gmail.com?subject=${encodeURIComponent('New brief: ' + (d.get('Company') || d.get('Name')))}&body=${encodeURIComponent(body)}`;
};
