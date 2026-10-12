import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MissionVision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section aria-labelledby="mv-title" className="bg-paper py-24 lg:py-36">
      <div className="container-x">
        <div ref={ref} className="relative h-[46svh] min-h-[300px] overflow-hidden rounded-[28px] lg:h-[70svh]">
          <motion.img
            src="/images/crew-sunset.webp"
            alt="DDK Roofing crew working on a new roof structure at sunset"
            style={{ y, scale: 1.25 }}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <h2 id="mv-title" className="display absolute bottom-6 left-6 right-6 max-w-[14ch] text-[clamp(2rem,5vw,4.4rem)] text-white sm:bottom-10 sm:left-10">
            Excellence, innovation and trust.
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="wide text-2xl font-bold">Our mission</h3>
            <p className="mt-4 max-w-[36rem] text-lg leading-relaxed text-ink/80">
              To lead the roofing industry by delivering exceptional roofing solutions that combine quality, innovation
              and commitment. We work to exceed our clients’ expectations with reliable, long-lasting, personalized
              service that protects their investment and gives them peace of mind.
            </p>
          </div>
          <div>
            <h3 className="wide text-2xl font-bold">Our vision</h3>
            <p className="mt-4 max-w-[36rem] text-lg leading-relaxed text-ink/80">
              To be the benchmark for roofing in our region, inspiring confidence in every project we take on. We bring
              together technology, experience and attention to detail, and we keep growing by building strong
              relationships with the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
