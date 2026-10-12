import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { initSmoothScroll, scrollToHash } from "./lib/scroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Facts from "./components/Facts";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import MissionVision from "./components/MissionVision";
import Area from "./components/Area";
import Estimate from "./components/Estimate";
import Footer from "./components/Footer";
import CallBar from "./components/CallBar";

export default function App() {
  useEffect(() => initSmoothScroll(), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const hash = a.getAttribute("href")!;
      if (hash.length < 2) return;
      e.preventDefault();
      scrollToHash(hash);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-hardhat focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Facts />
        <About />
        <Services />
        <Process />
        <Projects />
        <MissionVision />
        <Area />
        <Estimate />
      </main>
      <Footer />
      <CallBar />
    </MotionConfig>
  );
}
