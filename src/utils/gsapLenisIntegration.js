import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

let lenisInstance = null;
let tickerFn = null;

export function initGsapLenis(options = {}) {
  if (lenisInstance) return lenisInstance;

  if (!gsap.core.globals().ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  const lenis = new Lenis({
    autoRaf: false,
    duration: options.duration ?? 1.15,
    easing: options.easing ?? ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
    smoothWheel: options.smoothWheel ?? true,
    smoothTouch: options.smoothTouch ?? false,
  });

  // Proxy scroll events into ScrollTrigger so pinned/scrubbed sections stay in sync.
  lenis.on('scroll', ScrollTrigger.update);

  tickerFn = (time) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(tickerFn);
  gsap.ticker.lagSmoothing(0);

  lenisInstance = lenis;
  return lenis;
}

export function getLenis() {
  return lenisInstance;
}

export function destroyGsapLenis() {
  if (tickerFn) {
    try { gsap.ticker.remove(tickerFn); } catch {}
    tickerFn = null;
  }
  if (lenisInstance) {
    try { lenisInstance.destroy(); } catch {}
    lenisInstance = null;
  }
}

export { gsap, ScrollTrigger };
export default { initGsapLenis, getLenis, destroyGsapLenis };