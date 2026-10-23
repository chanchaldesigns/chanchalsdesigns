import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisSmoothScroll({ smooth = true }) {
  useEffect(() => {
    if (!smooth) return;
    const lenis = new Lenis({
      smoothWheel: true,
      autoRaf: true,
      anchors: true,
      stopInertiaOnNavigate: true,
    });
    window.lenis = lenis;
    return () => {
      lenis.destroy();
    };
  }, [smooth]);

  return null;
}
