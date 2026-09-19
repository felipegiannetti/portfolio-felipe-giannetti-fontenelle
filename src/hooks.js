import { useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Returns [ref, inView]; flips to true once the element scrolls into view. */
export const useInView = ({ threshold = 0.08, rootMargin = '0px 0px -6% 0px' } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
};

/** Animates 0 -> target once `active` is true. */
export const useCountUp = (target, active, duration = 1400) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    if (prefersReducedMotion()) {
      setValue(target);
      return undefined;
    }
    let raf;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);

  return value;
};

/** Types and erases each word in turn. `words` must be a stable array. */
export const useRotatingText = (words, { typeMs = 70, eraseMs = 35, holdMs = 1600 } = {}) => {
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : '');

  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(words[0]);
      return undefined;
    }
    let index = 0;
    let length = 0;
    let erasing = false;
    let timer;

    const tick = () => {
      const word = words[index % words.length];
      if (!erasing) {
        length += 1;
        setText(word.slice(0, length));
        if (length === word.length) {
          erasing = true;
          timer = setTimeout(tick, holdMs);
          return;
        }
        timer = setTimeout(tick, typeMs);
      } else {
        length -= 1;
        setText(word.slice(0, length));
        if (length === 0) {
          erasing = false;
          index += 1;
        }
        timer = setTimeout(tick, eraseMs);
      }
    };

    setText('');
    tick();
    return () => clearTimeout(timer);
  }, [words, typeMs, eraseMs, holdMs]);

  return text;
};

/** Reads/writes a string value in localStorage without ever throwing. */
export const readStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const writeStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable — ignore */
  }
};
