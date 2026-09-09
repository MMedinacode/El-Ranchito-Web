/* ============================================================
   FOTOS Y LOGO — PENDIENTES (placeholder temporal)
   ============================================================
   El usuario aún no ha dejado fotos reales en fotos/. Mientras tanto
   se usan fotos de stock de Unsplash con temática pizzería/cocina de
   barrio (nunca fotos reales de otra cafetería del portafolio).
   Reemplazar por las reales apenas lleguen. */
const LOGO_SRC = 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=200&h=200&fit=crop&q=80';
const HERO_SRC = 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1600&q=80';
const GAL_UNO_SRC = 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800&q=80';
const GAL_DOS_SRC = 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80';
const GAL_TRES_SRC = 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80';

document.getElementById('logoNav').src = LOGO_SRC;
document.getElementById('logoFooter').src = LOGO_SRC;
document.getElementById('heroPhoto').src = HERO_SRC;
document.getElementById('galUno').src = GAL_UNO_SRC;
document.getElementById('galDos').src = GAL_DOS_SRC;
document.getElementById('galTres').src = GAL_TRES_SRC;

/* ============================================================
   CARTA — productos reales (mencionados en reseñas de Google y en
   las propias redes sociales de El Ranchito). Su menú digital (fu.do)
   ya no existe y no hay una lista de precios vigente publicada en
   ningún canal — todo "Consultar", nunca inventado.
   ============================================================ */
const MENU = {
  'Pizzas': [
    { n: 'Pizza napolitana', d: 'Masa crujiente, producto fresco — lo más elogiado en las reseñas reales.' },
    { n: 'Pizzas dulces', d: 'Ej. Nutella con almendras — real, destacada en su Instagram.' },
    { n: 'Pizzas armadas', d: 'Arma tu pizza a tu gusto.' },
  ],
  'Pastas y almuerzos': [
    { n: 'Fetuccini a la carbonara', d: '"Exquisita", según una reseña real de Google.' },
    { n: 'Ñoquis artesanales', d: '' },
    { n: 'Menú de almuerzo del día', d: 'Almuerzo casero todos los días, distinto de la carta de pizzas.' },
  ],
  'Café y repostería': [
    { n: 'Café en grano', d: '' },
    { n: 'Té e infusiones', d: 'Su propio "salón de té".' },
    { n: 'Tortas a pedido', d: 'Repostería casera, real de su Instagram.' },
  ],
  'Bebidas': [
    { n: 'Jugos naturales', d: '"Muy ricos", según una reseña real de Google.' },
  ],
};

const menuTabsEl = document.getElementById('menuTabs');
const menuPanelsEl = document.getElementById('menuPanels');
const categorias = Object.keys(MENU);

categorias.forEach((cat, i) => {
  const tabBtn = document.createElement('button');
  tabBtn.className = 'menu-tab-btn' + (i === 0 ? ' active' : '');
  tabBtn.textContent = cat;
  tabBtn.addEventListener('click', () => {
    document.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
    tabBtn.classList.add('active');
    document.getElementById('panel-' + i).classList.add('active');
  });
  menuTabsEl.appendChild(tabBtn);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
  panel.id = 'panel-' + i;
  const grid = document.createElement('div');
  grid.className = 'menu-grid';
  MENU[cat].forEach(item => {
    const row = document.createElement('div');
    row.className = 'menu-item';
    row.innerHTML = `
      <div class="menu-item-text">
        <p class="menu-item-name">${item.n}</p>
        ${item.d ? `<p class="menu-item-desc">${item.d}</p>` : ''}
      </div>
      <span class="menu-item-price">Consultar</span>
    `;
    grid.appendChild(row);
  });
  panel.appendChild(grid);
  menuPanelsEl.appendChild(panel);
});

/* ============================================================
   HORARIO EN VIVO — real, confirmado por Facebook e Instagram
   (coinciden entre sí). Martes a sábado 11:15-19:00 (cocina cierra
   18:45). Cerrado domingo y lunes.
   ============================================================ */
(function () {
  const now = new Date();
  const day = now.getDay(); // 0 = domingo, 1 = lunes, 2 = martes...6 = sábado
  const minutes = now.getHours() * 60 + now.getMinutes();
  const openMin = 11 * 60 + 15;
  const closeMin = 19 * 60;
  const isOpenDay = day >= 2 && day <= 6;
  const isOpen = isOpenDay && minutes >= openMin && minutes < closeMin;

  const statusDot = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');
  const visitStatus = document.getElementById('visit-status');

  if (isOpen) {
    statusDot.classList.remove('closed');
    statusText.textContent = 'Abierto ahora · cierra 19:00';
    visitStatus.textContent = 'Abierto ahora — cierra a las 19:00';
  } else {
    statusDot.classList.add('closed');
    const msg = isOpenDay && minutes < openMin ? 'Cerrado ahora · abre 11:15' : 'Cerrado ahora · abre martes 11:15';
    statusText.textContent = msg;
    visitStatus.textContent = msg.replace('Cerrado ahora · ', 'Cerrado ahora — ');
  }
})();

/* ============================================================
   NAVEGACIÓN SPA POR PESTAÑAS
   ============================================================ */
function goToTab(tabName) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  const panel = document.querySelector(`[data-tab-panel="${tabName}"]`);
  const link = document.querySelector(`.nav-link[data-tab="${tabName}"]`);
  if (panel) panel.classList.add('active');
  if (link) link.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  runReveal();
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    goToTab(el.getAttribute('data-tab'));
    navLinks.classList.remove('open');
  });
});

/* ---------- Menú hamburguesa ---------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ---------- Scroll reveal (con red de seguridad por si IntersectionObserver no dispara) ---------- */
function runReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('in');
    });
  }, 1200);
}
runReveal();

/* ---------- Loader breve ---------- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 350);
});
