import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register once. Safe to import multiple times.
if (!gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

// Avoid mobile resize thrash on pinned/scrubbed sections.
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger };
export default gsap;
