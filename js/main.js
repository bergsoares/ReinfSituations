/**
 * Main — Orquestrador da apresentação
 * Inicializa Reveal.js + todos os efeitos visuais
 */
import { createStarfield }      from './starfield.js';
import { createParticles }      from './particles.js';
import { createSectionCosmics } from './section-cosmos.js';

// Inicializar Reveal.js
Reveal.initialize({
  hash: true,
  history: true,
  transition: 'zoom',
  transitionSpeed: 'default',
  backgroundTransition: 'fade',
  autoAnimateDuration: 0.6,
  autoAnimateEasing: 'ease',
  center: true,
  controls: true,
  controlsTutorial: true,
  progress: true,
  navigationMode: 'linear',
  slideNumber: 'c/t',
  width: 1200,
  height: 760,
  minScale: 0.18,
  maxScale: 2.0,
});

// Após Reveal estar pronto, criar efeitos visuais
Reveal.on('ready', () => {
  createStarfield();
  createParticles();
  createSectionCosmics();

  // Inicializar ícones Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
