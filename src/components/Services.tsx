import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES } from "../lib/data";

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-white py-24 lg:py-36">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 className="display text-[clamp(2.2rem,4.6vw,4rem)] lg:col-span-7">Everything your roof needs, from one crew.</h2>
          <p className="max-w-[30rem] text-lg leading-relaxed text-steel lg:col-span-4 lg:col-start-9 lg:self-end">
            High-quality, reliable roofing for homes and businesses. Pick a service to see what it covers.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12">
          <ul className="border-t border-ink/10 lg:col-span-7">
            {SERVICES.map((s, i) => {
              const open = active === i;
              return (
                <li key={s.title} className="border-b border-ink/10">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`svc-${i}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setActive(i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left lg:py-7"
                  >
                    <span className={`display text-[clamp(1.6rem,3.2vw,2.6rem)] transition-colors duration-300 ${open ? "text-ink" : "text-ink/35 group-hover:text-ink/70"}`}>
                      {s.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-300 ${open ? "rotate-45 border-hardhat bg-hardhat text-ink" : "border-ink/20 text-ink/50"}`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`svc-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.7, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7">
                          <p className="max-w-[34rem] text-lg leading-relaxed text-ink/75">{s.text}</p>
                          <img src={s.img} alt="" loading="lazy" className="mt-5 aspect-[16/9] w-full rounded-2xl object-cover lg:hidden" />
                          <a href="#estimate" className="mt-5 inline-block font-semibold text-ddk underline decoration-hardhat decoration-2 underline-offset-4 hover:text-ink">
                            Ask about {s.title.toLowerCase()}
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[28px] bg-sky">
              <AnimatePresence initial={false}>
                <motion.img
                  key={SERVICES[active].img}
                  src={SERVICES[active].img}
                  alt={SERVICES[active].title}
                  initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.15 }}
                  animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
