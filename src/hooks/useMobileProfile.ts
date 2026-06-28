import { useEffect, useState } from 'react';

const MOBILE_QUERY = '(max-width: 820px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export function useMobileProfile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(MOBILE_QUERY).matches;
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(REDUCED_MOTION_QUERY).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mobileMedia = window.matchMedia(MOBILE_QUERY);
    const motionMedia = window.matchMedia(REDUCED_MOTION_QUERY);

    const sync = () => {
      setIsMobile(mobileMedia.matches);
      setPrefersReducedMotion(motionMedia.matches);
    };

    sync();
    mobileMedia.addEventListener('change', sync);
    motionMedia.addEventListener('change', sync);

    return () => {
      mobileMedia.removeEventListener('change', sync);
      motionMedia.removeEventListener('change', sync);
    };
  }, []);

  return {
    isMobile,
    prefersReducedMotion,
    shouldReduceEffects: isMobile || prefersReducedMotion,
  };
}
