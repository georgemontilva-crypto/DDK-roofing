import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { PROJECTS } from "../lib/data";

function Card({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const wide = i % 3 === 0;
  return (
    <figure className={`group relative shrink-0 snap-start overflow-hidden rounded-[24px] bg-night ${wide ? "w-[86vw] sm:w-[620px]" : "w-[72vw] sm:w-[420px]"} h-[60svh] max-h-[560px] min-h-[340px]`}>
      <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-6 pt-20 text-white">
        <span className="text-sm text-hardhat">{p.tag}</span>
        <p className="wide mt-1 text-xl font-bold leading-tight">{p.title}</p>
      </figcaption>
    </figure>
  );
}

export default function Projects() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [pinned, setPinned] = useState(false);
  const reduce = useReducedMotion();

  useLayoutEffect(() => {
    const measure = () => {
      const lg = window.matchMedia("(min-width: 1024px)").matches;
      setPinned(lg && !reduce);
      if (track.current) setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [reduce, pinned]);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  const heading = (
    <div className="container-x flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <h2 className="display text-[clamp(2.2rem,4.6vw,4rem)] text-white">Recent work.</h2>
      <p className="max-w-[26rem] text-white/65">A look at installations, repairs and structural work from our crews.</p>
    </div>
  );

  return (
    <section
      id="projects"
      ref={section}
      className={`relative bg-ink ${pinned ? "" : "py-24"}`}
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      {pinned ? (
        <div className="sticky top-0 flex h-screen flex-col justify-center gap-10 overflow-hidden">
          {heading}
          <motion.div ref={track} style={{ x }} className="flex w-max gap-5 pl-10 pr-10 xl:pl-[max(2.5rem,calc((100vw-1240px)/2+2.5rem))]">
            {PROJECTS.map((p, i) => <Card key={p.title} p={p} i={i} />)}
          </motion.div>
        </div>
      ) : (
        <>
          {heading}
          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 sm:scroll-px-6 sm:px-6 [scrollbar-width:none]">
            {PROJECTS.map((p, i) => <Card key={p.title} p={p} i={i} />)}
          </div>
        </>
      )}
    </section>
  );
}
