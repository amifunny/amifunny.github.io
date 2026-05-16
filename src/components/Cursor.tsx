import { useEffect, useRef, useState } from 'react';

// A brutalist custom cursor: a solid black circle that grows when it hovers
// over interactive elements. Falls back gracefully on touch/coarse pointers.
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (coarse) {
      setSupported(false);
      return;
    }

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const handleMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, [data-cursor="grow"]');
      setHovering(Boolean(interactive));
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
    };
  }, []);

  if (!supported) return null;

  return (
    <div
      ref={dot}
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference transition-[width,height,background] duration-200 ease-out`}
      style={{
        width: hovering ? 64 : 18,
        height: hovering ? 64 : 18,
        background: hovering ? '#FCEE0A' : '#ffffff',
        borderRadius: '999px',
      }}
    />
  );
}
