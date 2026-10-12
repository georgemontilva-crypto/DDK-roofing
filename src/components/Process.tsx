import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { STEPS } from "../lib/data";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section aria-labelledby="process-title" className="bg-night py-24 text-white lg:py-32">
      <div className="container-x">
        <h2 id="process-title" className="display max-w-[22ch] text-[clamp(2.2rem,4.6vw,4rem)]">How a job goes with us.</h2>
        <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-white/70">
          No surprises. You see what we see, you get it in writing, and the work is guaranteed.
        </p>

        <div ref={ref} className="relative mt-16">
          {/* progress rail */}
          <div className="absolute left-[19px] top-0 h-full w-0.5 bg-white/10 lg:left-0 lg:top-[19px] lg:h-0.5 lg:w-full" aria-hidden="true">
            <motion.div style={{ scaleY: progress }} className="h-full w-full origin-top bg-hardhat lg:hidden" />
            <motion.div style={{ scaleX: progress }} className="hidden h-full w-full origin-left bg-hardhat lg:block" />
          </div>
          <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative pl-16 lg:pl-0 lg:pt-16">
                <span className="wide absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-hardhat text-[15px] font-bold text-ink">
                  {i + 1}
                </span>
                <h3 className="wide text-xl font-bold">{s.title}</h3>
                <p className="mt-2 max-w-[26rem] leading-relaxed text-white/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
