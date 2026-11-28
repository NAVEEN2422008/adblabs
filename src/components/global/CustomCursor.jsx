import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (coarse || reduced) return;
    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let size = 24;
    let targetSize = 24;
    let isHover = false;
    let isCta = false;
    let raf;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const onOver = (e) => {
      const t = e.target.closest('a, button, [data-cursor], [role="button"]');
      isHover = !!t;
      const ctaEl = e.target.closest('[data-cursor="cta"], [data-cta], .cta-btn');
      const classStr = (e.target.getAttribute('class') || '') + ' ' + (t?.getAttribute('class') || '');
      const limeCta = /bg-\[#A3FF35\]/.test(classStr);
      isCta = !!ctaEl || limeCta;
      targetSize = isHover ? 56 : 24;
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    const loop = () => {
      // spring physics
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      size += (targetSize - size) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      }
      if (ringRef.current) {
        const half = size / 2;
        ringRef.current.style.transform = `translate3d(${rx - half}px, ${ry - half}px, 0)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.mixBlendMode = isCta ? 'exclusion' : 'normal';
        ringRef.current.style.borderColor = isCta ? '#A3FF35' : 'rgba(163,255,55,0.55)';
        ringRef.current.style.background = isHover ? 'rgba(163,255,55,0.08)' : 'transparent';
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#A3FF35] pointer-events-none z-[9998] mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] transition-[border-color,background] duration-150"
        style={{ width: 24, height: 24 }}
      />
    </>
  );
}