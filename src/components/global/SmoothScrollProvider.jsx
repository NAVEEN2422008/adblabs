import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { createLenis, destroyLenis } from '../../lib/lenisSetup';
import { initSplitting } from '../../lib/splittingSetup';

const LenisContext = createContext(null);

export function useLenisCtx() {
  return useContext(LenisContext);
}

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const instance = createLenis();
    lenisRef.current = instance;
    setLenis(instance);

    // Init Splitting after first paint
    const t = setTimeout(() => initSplitting(), 120);

    return () => {
      clearTimeout(t);
      destroyLenis();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  const value = useMemo(() => ({ lenis }), [lenis]);
  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
