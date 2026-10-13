import Lenis from "lenis";

let lenis: Lenis | null = null;

export function initSmoothScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  let id = 0;
  const raf = (t: number) => {
    lenis?.raf(t);
    id = requestAnimationFrame(raf);
  };
  id = requestAnimationFrame(raf);
  return () => {
    cancelAnimationFrame(id);
    lenis?.destroy();
    lenis = null;
  };
}

export function scrollToHash(hash: string, immediate = false) {
  const el = document.querySelector(hash);
  if (!el) return;
  if (lenis) {
    lenis.resize(); // page height may have changed after a route change
    lenis.scrollTo(el as HTMLElement, { offset: -72, immediate });
  }
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", "/" + hash);
}

export function scrollToTop() {
  if (lenis) {
    lenis.resize();
    lenis.scrollTo(0, { immediate: true });
  }
  else window.scrollTo(0, 0);
}
