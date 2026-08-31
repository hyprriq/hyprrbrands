"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper, ported from the approved baseline's [data-reveal]
 * behavior: fade/slide in on intersection, then fire any [data-draw] progress
 * lines and staggered [data-cost] bars inside. Content is visible without JS
 * and shown immediately under prefers-reduced-motion.
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

    const fire = () => {
      el.querySelectorAll<HTMLElement>("[data-draw]").forEach((d) => {
        d.style.width = "100%";
      });
      el.querySelectorAll<HTMLElement>("[data-cost]").forEach((c, i) => {
        setTimeout(() => {
          c.style.width = (c.dataset.w || "50") + "%";
        }, 90 * i);
      });
    };
    const show = () => {
      el.style.opacity = "1";
      el.style.transform = "none";
      fire();
    };

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !("IntersectionObserver" in window)) {
      show();
      return;
    }

    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition =
      "opacity .7s ease, transform .7s cubic-bezier(.4,0,.2,1)";

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
