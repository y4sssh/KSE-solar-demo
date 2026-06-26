import { createElement, useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '../utils/cn';

export interface ScrollRevealHeadingSegment {
  text: string;
  accent?: boolean;
  className?: string;
}

type HeadingTag = 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface ScrollRevealHeadingProps {
  as?: HeadingTag;
  segments: Array<ScrollRevealHeadingSegment | string>;
  className?: string;
  ariaLabel?: string;
  staggerMs?: number;
  threshold?: number;
  rootMargin?: string;
}

interface NormalizedWord {
  text: string;
  accent: boolean;
  className?: string;
}

export default function ScrollRevealHeading({
  as = 'h2',
  segments,
  className,
  ariaLabel,
  staggerMs = 110,
  threshold = 0.35,
  rootMargin = '0px 0px -8% 0px',
}: ScrollRevealHeadingProps) {
  const headingRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const words = useMemo<NormalizedWord[]>(
    () =>
      segments.flatMap((segment) => {
        const normalized = typeof segment === 'string' ? { text: segment, accent: false } : segment;

        return normalized.text.split(' ').filter(Boolean).map((word) => ({
          text: word,
          accent: Boolean(normalized.accent),
          className: normalized.className,
        }));
      }),
    [segments]
  );

  const label = useMemo(
    () => ariaLabel ?? words.map((word) => word.text).join(' '),
    [ariaLabel, words]
  );

  useEffect(() => {
    const headingNode = headingRef.current;

    if (!headingNode) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(headingNode);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return createElement(
    as,
    {
      ref: headingRef,
      'aria-label': label,
      className: cn('flex flex-wrap items-end gap-x-[0.22em] gap-y-[0.16em]', className),
    },
    words.map((word, index) => (
      <span key={`${word.text}-${index}`} className="scroll-reveal-word-shell">
        <span
          className={cn(
            'scroll-reveal-word',
            word.accent && 'gradient-text scroll-reveal-accent',
            isVisible && 'scroll-reveal-word-visible',
            word.className
          )}
          style={{ transitionDelay: `${index * staggerMs}ms` }}
        >
          {word.text}
        </span>
      </span>
    ))
  );
}
