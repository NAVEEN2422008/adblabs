import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsapSetup';
import Splitting from 'splitting';

export default function KineticHeadline({ text, className = '', as: Tag = 'h1' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    try { Splitting({ target: el, by: 'chars' }); } catch {}
    const chars = el.querySelectorAll('.char');
    if (!chars.length) return;
    gsap.set(chars, { y: 60, rotation: 8, opacity: 0 });
    const tween = gsap.to(chars, {
      y: 0,
      rotation: 0,
      opacity: 1,
      duration: 1.1,
      stagger: 0.03,
      ease: 'power4.out',
    });
    return () => tween.kill();
  }, [text]);

  return (
    <Tag ref={ref} className={className} data-split>
      {text}
    </Tag>
  );
}