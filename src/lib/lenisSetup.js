import { initGsapLenis, getLenis, destroyGsapLenis } from '../utils/gsapLenisIntegration';

// Backwards-compatible wrappers around the unified GSAP+Lenis ticker.
export function createLenis() {
  return initGsapLenis();
}

export { getLenis };

export function destroyLenis() {
  destroyGsapLenis();
}