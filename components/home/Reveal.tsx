"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll-reveal per the Visual Build Spec motion section: animates the
 * wrapper's DIRECT CHILDREN as a stagger (40ms interval, 12px rise, 420ms
 * cubic-bezier(.16,1,.3,1)) instead of fading the wrapper as a slab.
 *
 * Also fires [data-draw] progress lines and [data-cost] bars on entry
 * (bars honor an optional data-order for draw sequencing — 120ms apart).
 *
 * Content is fully visible without JS (children are only hidden after
 * hydration), and shown immediately under prefers-reduced-motion.
 */
export default function Reveal({
  id,
  className,
  style,
  children,
}: {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const kids = Array.from(el.children) as HTMLElement[];

    const fire = () => {
      el.querySelectorAll<HTMLElement>("[data-draw]").forEach((d) => {
        d.style.width = "100%";
      });
      el.querySelectorAll<HTMLElement>("[data-cost]").forEach((c, i) => {
        const order = c.dataset.order !== undefined ? +c.dataset.order : i;
        setTimeout(() => {
          c.style.width = (c.dataset.w || "50") + "%";
        }, 120 * order);
      });
    };
    const show = () => {
      kids.forEach((k) => {
        k.style.opacity = "1";
        k.style.transform = "none";
      });
      fire();
    };

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !("IntersectionObserver" in window)) {
      show();
      return;
    }

    kids.forEach((k, i) => {
      k.style.opacity = "0";
      k.style.transform = "translateY(12px)";
      k.style.transition = `opacity 420ms cubic-bezier(.16,1,.3,1) ${i * 40}ms, transform 420ms cubic-bezier(.16,1,.3,1) ${i * 40}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          show();
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    io.observe(el);
    const fallback = setTimeout(show, 2500);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={ref} id={id} className={className} style={style}>
      {children}
    </div>
  );
}
