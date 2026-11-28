import { gsap } from '../lib/gsapSetup';
import Splitting from 'splitting';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function split(target) {
  try {
    return Splitting({ target, by: 'chars' });
  } catch {
    return [];
  }
}

export function splitTextReveal(target, preset = 'fadeUp', options = {}) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return () => {};

  const splits = split(el);
  const chars = el.querySelectorAll('.char');
  if (!chars.length) return () => {};

  const stagger = options.stagger ?? 0.03;
  const duration = options.duration ?? 0.8;
  const delay = options.delay ?? 0;

  let ctx;
  let scrambleTimer = null;

  if (preset === 'fadeUp') {
    gsap.set(chars, { yPercent: 110, opacity: 0 });
    ctx = gsap.to(chars, {
      yPercent: 0,
      opacity: 1,
      duration,
      stagger,
      delay,
      ease: options.ease ?? 'power3.out',
    });
  } else if (preset === 'clip') {
    gsap.set(chars, { clipPath: 'inset(100% 0% 0% 0%)', opacity: 1 });
    ctx = gsap.to(chars, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration,
      stagger,
      delay,
      ease: options.ease ?? 'power4.out',
    });
  } else if (preset === 'scramble') {
    const originals = Array.from(chars).map((c) => c.textContent);
    chars.forEach((c) => { c.textContent = randomChar(); });
    gsap.set(chars, { opacity: 1 });
    const total = chars.length;
    const step = Math.max(1, Math.floor(duration * 60 / total));
    let frame = 0;
    scrambleTimer = setInterval(() => {
      frame++;
      chars.forEach((c, i) => {
        const resolveAt = (i + 1) * step;
        if (frame >= resolveAt) {
          c.textContent = originals[i];
        } else {
          c.textContent = randomChar();
        }
      });
      if (frame >= total * step) {
        clearInterval(scrambleTimer);
        scrambleTimer = null;
      }
    }, 1000 / 60);
    ctx = null;
  }

  return () => {
    if (ctx) ctx.kill?.();
    if (scrambleTimer) clearInterval(scrambleTimer);
    try { gsap.set(chars, { clearProps: 'all' }); } catch {}
  };
}

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export const presets = ['fadeUp', 'clip', 'scramble'];
export default splitTextReveal;