import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/data";
import { PhoneIcon } from "./Icons";

const EASE = [0.7, 0, 0.2, 1] as const;
const LINES = ["Roofs built", "for Florida", "weather."];

// Gable (house) silhouette, echoing the outline house in the DDK logo
const GABLE_CLOSED = "polygon(50% 100%, 100% 100%, 100% 100%, 0% 100%, 0% 100%)";
const GABLE_OPEN = "polygon(50% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 30%)";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.22]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-ink text-white">
      <div className="container-x relative grid min-h-[100svh] grid-cols-1 items-end gap-10 pb-14 pt-28 lg:grid-cols-12 lg:items-center lg:pb-20 lg:pt-24">
        <motion.div style={{ y: textY }} className="relative z-10 lg:col-span-7 lg:-mr-24">
          <h1 className="display text-[clamp(2.9rem,7vw,6.6rem)]">
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.55 + i * 0.09 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
          >
            <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-white/75">
              DDK Roofing LLC installs, repairs and replaces roofs across Tampa and Wesley Chapel, with more than 20 years
              on the job. Licensed, insured, and quick to respond when a storm hits.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#estimate" className="btn-primary">Get a free estimate</a>
              <a href={PHONE_HREF} className="btn-ghost-dark"><PhoneIcon /> {PHONE_DISPLAY}</a>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative order-first h-[44svh] min-h-[280px] lg:order-none lg:col-span-5 lg:col-start-8 lg:h-[76svh]">
          {/* Roof line drawn above the photo, like the logo's outline house */}
          <svg className="pointer-events-none absolute -inset-x-3 -top-5 z-10 h-[calc(30%+20px)] w-[calc(100%+24px)] overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
            <motion.path
              d="M0 30 L50 0 L100 30"
              fill="none"
              stroke="#F5B82E"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
              strokeLinejoin="miter"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 1.0 }}
            />
          </svg>
          <motion.div
            className="absolute inset-0 overflow-hidden bg-night"
            initial={{ clipPath: GABLE_CLOSED }}
            animate={{ clipPath: GABLE_OPEN }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
          >
            <motion.img
              src="/images/hero.webp"
              alt="DDK Roofing crew installing a new roof on a two-story home"
              style={{ scale: imgScale, y: imgY }}
              className="h-full w-full object-cover object-[60%_center]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
