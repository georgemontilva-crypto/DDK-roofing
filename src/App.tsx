import { useEffect, useLayoutEffect, useRef } from "react";
import { MotionConfig } from "framer-motion";
import { initSmoothScroll, scrollToHash, scrollToTop } from "./lib/scroll";
import { navigate, usePath } from "./lib/router";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Facts from "./components/Facts";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import MissionVision from "./components/MissionVision";
import Area from "./components/Area";
import Blog from "./components/Blog";
import Estimate from "./components/Estimate";
import Footer from "./components/Footer";
import CallBar from "./components/CallBar";
import PostPage from "./components/PostPage";

function Home() {
  return (
    <>
      <Hero />
      <Facts />
      <About />
      <Services />
      <Process />
      <Projects />
      <MissionVision />
      <Blog />
      <Area />
      <Estimate />
    </>
  );
}

export default function App() {
  const path = usePath();
  const pendingHash = useRef<string | null>(location.hash || null);
  const isHome = path === "/" || path === "";
  const postSlug = path.match(/^\/blog\/([^/]+)\/?$/)?.[1];

  useEffect(() => initSmoothScroll(), []);

  // Internal link handling: "/#section" scrolls on home, otherwise routes home first
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest("a") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank") return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("#") && href.length > 1 && href !== "#main") {
        e.preventDefault();
        scrollToHash(href);
        return;
      }
      if (!href.startsWith("/") || href.startsWith("//") || href.startsWith("/api")) return;
      e.preventDefault();
      const [p, h] = href.split("#");
      const target = p || "/";
      if (target === location.pathname) {
        if (h) scrollToHash("#" + h);
        else scrollToTop();
        return;
      }
      pendingHash.current = h ? "#" + h : null;
      navigate(href);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // After a route change: jump to top, or to the requested section
  useLayoutEffect(() => {
    const h = pendingHash.current;
    pendingHash.current = null;
    if (h) {
      requestAnimationFrame(() => setTimeout(() => scrollToHash(h, true), 120));
    } else {
      scrollToTop();
    }
  }, [path]);

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-hardhat focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Header solidAlways={!isHome} />
      <main id="main">
        {isHome ? <Home /> : postSlug ? <PostPage key={postSlug} slug={postSlug} /> : <PostPage slug="" />}
      </main>
      <Footer />
      <CallBar />
    </MotionConfig>
  );
}
