/* ============================================================
   FOTOS REALES DEL LOCAL (11-09-2026) — ya no queda stock
   ============================================================
   4 fotos bajadas de su propia ficha de Google Maps y revisadas una
   por una: pizza de mariscos, pizza con verduras, fetuccini en la
   terraza (con su mantel a cuadros rojo y el enrejado con flores) y
   un brownie servido en el interior de madera.
   Sin logo real: el negocio no tiene isotipo propio, va wordmark. */
const HERO_SRC = 'fotos/fetuccini-terraza.jpg';
const GAL_UNO_SRC = 'fotos/pizza-mariscos.jpg';
const GAL_DOS_SRC = 'fotos/brownie-interior.jpg';
const GAL_TRES_SRC = 'fotos/pizza-verduras.jpg';

document.getElementById('heroPhoto').src = HERO_SRC;
document.getElementById('galUno').src = GAL_UNO_SRC;
document.getElementById('galDos').src = GAL_DOS_SRC;
document.getElementById('galTres').src = GAL_TRES_SRC;

/* ============================================================
   CARTA CON PRECIOS REALES (02-10-2026), transcrita de su destacada
   «Menú» de Instagram (6 hojas publicadas entre el 11 y el 25-07-2026):
   Fondos, Pastas y ñoquis, Platos especiales, Té e infusiones, Cafés y
   Postres. Lo que no trae precio en esa carta sigue en "Consultar".
   ⚠️ Esa carta ya NO incluye pizzas (y su logo nuevo dice «Cocinería y
   café»): la pestaña Pizzas se deja al final, sin precio, hasta que
   confirmen si las siguen haciendo.
   ============================================================ */
const MENU = {
  'Fondos': [
    { n: 'Almuerzo del día', d: 'Cambia cada día; lo publican en su Instagram.' },
    { n: 'Carne a la olla', d: 'Con agregado', p: 6800 },
    { n: 'Carne mongoliana', d: 'Con agregado', p: 6500 },
    { n: 'Lomo vetado', d: 'Con agregado', p: 9900 },
    { n: 'Lomo saltado', p: 13900 },
    { n: 'Lomo a lo pobre', p: 13900 },
    { n: 'Chuleta vetada', d: 'Con agregado', p: 5800 },
    { n: 'Prietas (2 unidades)', d: 'Con agregado', p: 6500 },
    { n: 'Hipocalórico', d: 'Pechuga y ensalada surtida', p: 6000 },
    { n: 'Pollo mongoliano', d: 'Con agregado', p: 6500 },
    { n: 'Pechuga a la plancha', d: 'Con agregado', p: 6500 },
    { n: 'Merluza frita o a la plancha', d: 'Con agregado', p: 6000 },
    { n: 'Reineta a la plancha', d: 'Con agregado', p: 8000 },
    { n: 'Pastel de jaiba', p: 9900 },
    { n: 'Paila marina', p: 8000 },
  ],
  'Pastas y ñoquis': [
    { n: 'Fetuccini Alfredo', d: 'Todas nuestras pastas son caseras.', p: 6990 },
    { n: 'Fetuccini carbonara', d: '"Exquisita", según una reseña de Google.', p: 6990 },
    { n: 'Fetuccini bolognesa', p: 6990 },
    { n: 'Fetuccini al pesto y camarones', p: 6990 },
    { n: 'Fetuccini al pesto y pollo', p: 6990 },
    { n: 'Fetuccini con lomo saltado', p: 9990 },
    { n: 'Ñoquis al ajillo y camarones', p: 8500 },
    { n: 'Ñoquis bolognesa', p: 8500 },
    { n: 'Ñoquis Alfredo', p: 8500 },
    { n: 'Ñoquis pesto camarón', p: 8500 },
    { n: 'Ñoquis pollo pesto', p: 8500 },
    { n: 'Ñoquis carbonara', p: 8500 },
    { n: 'Ñoquis lomo saltado', p: 11990 },
    { n: 'Ñoquis 4 quesos', p: 8990 },
  ],
  'Especiales y niños': [
    { n: 'Chapsui de verduras', d: 'Vegano y vegetariano, con agregado', p: 6000 },
    { n: 'Falafel', d: 'Con ensalada chilena y papas not mayo', p: 8500 },
    { n: 'Filete de pechuga apanada', d: 'Para los más pequeños, con agregado', p: 6500 },
    { n: 'Huevos fritos', d: 'Para los más pequeños, con papas fritas o arroz', p: 5900 },
  ],
  'Cafés': [
    { n: 'Espresso', p: 2000 },
    { n: 'Espresso doble', p: 3000 },
    { n: 'Espresso cortado', p: 2500 },
    { n: 'Americano', p: 2500 },
    { n: 'Latte', p: 2500 },
    { n: 'Capuccino', p: 2500 },
    { n: 'Capuccino vainilla', p: 2500 },
    { n: 'Mokaccino', p: 2500 },
    { n: 'Capuccino sin lactosa', p: 2900 },
    { n: 'Capuccino vegano', p: 3500 },
    { n: 'Chocolate caliente con marshmallow', p: 3000 },
    { n: 'Affogato', d: 'Helado de vainilla, espresso y crema', p: 3500 },
    { n: 'Affogato Nutella', d: 'Helado de vainilla, espresso, Nutella y crema', p: 4500 },
    { n: 'Café helado vainilla', p: 4200 },
    { n: 'Café helado chocolate', p: 4200 },
    { n: 'Jugos naturales', d: '"Muy ricos", según una reseña de Google.' },
  ],
  'Té e infusiones': [
    { n: 'Ceylán', p: 2200 },
    { n: 'Té verde', p: 2300 },
    { n: 'Alice', d: 'Ceylán, naranja, caléndula, bergamota y aciano', p: 2500 },
    { n: 'British', d: 'Ceylán y bergamota', p: 2200 },
    { n: 'Chai masala', d: 'Ceylán, canela, jengibre, cardamomo, anís estrella, pimienta, nuez moscada, naranja y caléndula', p: 2500 },
    { n: 'Cowboy', d: 'Té blanco, limón de Pica, jengibre y albahaca', p: 2500 },
    { n: 'Dreams', d: 'Infusión de pasiflora, lavanda, melisa y romero', p: 2500 },
    { n: 'Edward', d: 'Infusión de menta, albahaca, rosas, jazmín, anís, cardamomo y aceite de limón', p: 2500 },
    { n: 'Hibisco', p: 2500 },
    { n: 'Manzanilla', p: 2300 },
    { n: 'Menta', p: 2300 },
  ],
  'Postres': [
    { n: 'Brownie', p: 2500 },
    { n: 'Brownie con helado', p: 4700 },
    { n: 'Galletón chips de chocolate', p: 600 },
    { n: 'Pie de limón', p: 3500 },
    { n: 'Torta caluga frambuesa', p: 3700 },
    { n: 'Torta caluga maracuyá', p: 3700 },
    { n: 'Torta caluga brownie frambuesa', p: 3900 },
    { n: 'Torta de mía chocolatosa', p: 3900 },
    { n: 'Küchen de nuez', p: 3500 },
    { n: 'Küchen de manzana', p: 3500 },
    { n: 'Torta Amor', p: 3700 },
    { n: 'Muffin red velvet', d: 'Relleno de crema de limón', p: 2500 },
    { n: 'Muffin triple chocolate', d: 'Relleno de chocolate', p: 2500 },
    { n: 'Muffin chip de chocolate', p: 1800 },
    { n: 'Tortas a pedido', d: 'Repostería casera, por encargo.' },
  ],
  'Pizzas': [
    { n: 'Pizza napolitana', d: 'Masa crujiente, producto fresco — lo más elogiado en las reseñas.' },
    { n: 'Pizzas dulces', d: 'Ej. Nutella con almendras — real, destacada en su Instagram.' },
    { n: 'Pizzas armadas', d: 'Arma tu pizza a tu gusto.' },
  ],
};
const money = n => '$' + n.toLocaleString('es-CL');

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
      <span class="menu-item-price">${item.p ? money(item.p) : 'Consultar'}</span>
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
