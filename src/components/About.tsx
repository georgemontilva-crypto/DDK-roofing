import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "../lib/data";
import { MailIcon, PhoneIcon } from "./Icons";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="bg-paper py-24 lg:py-36">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div ref={ref} className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-sky">
            <motion.img
              src="/images/about.webp"
              alt="Roofer fastening the wood frame of a roof"
              style={{ y, scale: 1.18 }}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-2xl bg-ink px-6 py-5 text-white shadow-xl sm:-right-6">
            <p className="display text-5xl text-hardhat">20+</p>
            <p className="mt-1 text-sm text-white/70">years in roofing</p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h2 className="display text-[clamp(2.2rem,4.6vw,4rem)]">Two decades of roofs done right.</h2>
          <p className="mt-7 max-w-[36rem] text-lg leading-relaxed text-ink/80">
            With more than 20 years of proven work in quality roofing, DDK Roofing LLC brings the best workmanship in
            Tampa to every home we cover. Our team is dedicated to doing the job properly the first time, with honest
            estimates and clear communication from inspection to cleanup.
          </p>
          <p className="mt-5 max-w-[36rem] text-lg leading-relaxed text-ink/80">
            We’re not just building roofs. We’re protecting the homes people have worked hard for.
          </p>

          <dl className="mt-10 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-2">
            <div>
              <dt className="flex items-center gap-2 text-sm text-steel"><PhoneIcon /> Questions and estimates</dt>
              <dd className="mt-1.5"><a href={PHONE_HREF} className="wide text-xl font-bold hover:text-ddk">{PHONE_DISPLAY}</a></dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm text-steel"><MailIcon /> Write to us</dt>
              <dd className="mt-1.5"><a href={`mailto:${EMAIL}`} className="wide text-xl font-bold hover:text-ddk">{EMAIL}</a></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
