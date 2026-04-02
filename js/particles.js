/**
 * Particles — Partículas flutuantes da capa
 * Bolinhas verdes que sobem do fundo e desaparecem no topo
 */
export function createParticles() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const container = document.getElementById('particles');
  if (!container) return;

  const fragment = document.createDocumentFragment();
  const count = 25;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'particle';

    const size = (2 + Math.random() * 4).toFixed(1);
    const dur  = (6 + Math.random() * 8).toFixed(2);
    const del  = (Math.random() * 12).toFixed(2);
    const dx   = (-60 + Math.random() * 120).toFixed(0);

    p.style.width  = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left   = `${(Math.random() * 100).toFixed(1)}%`;
    p.style.bottom = '0';
    p.style.setProperty('--dur', `${dur}s`);
    p.style.setProperty('--del', `${del}s`);
    p.style.setProperty('--dx',  `${dx}px`);

    fragment.appendChild(p);
  }

  container.appendChild(fragment);
}
