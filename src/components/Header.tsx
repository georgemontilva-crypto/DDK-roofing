import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, PHONE_DISPLAY, PHONE_HREF } from "../lib/data";
import { PhoneIcon } from "./Icons";

export default function Header({ solidAlways = false }: { solidAlways?: boolean }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const light = (solid || solidAlways) && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        light ? "bg-paper/90 shadow-[0_1px_0_rgba(19,32,52,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <a href="/#top" aria-label="DDK Roofing, back to top" className="shrink-0">
          <img src={light ? "/images/logo.png" : "/images/logo-white.png"} alt="DDK Roofing LLC" width={157} height={40} className="h-9 w-auto sm:h-10" />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className={`text-[15px] font-medium transition-colors ${light ? "text-ink/75 hover:text-ink" : "text-white/80 hover:text-white"}`}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_HREF} className={`hidden items-center gap-2 text-[15px] font-semibold md:inline-flex ${light ? "text-ink" : "text-white"}`}>
            <PhoneIcon /> {PHONE_DISPLAY}
          </a>
          <a href="/#estimate" className="btn-primary hidden !py-2.5 sm:inline-flex">
            Free estimate
          </a>
          <button
            type="button"
            className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${light ? "text-ink" : "text-white"}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-6">
              <span className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.7, 0, 0.2, 1] }}
            className="fixed inset-0 top-0 -z-10 flex flex-col bg-ink px-6 pb-10 pt-28 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="display py-2 text-4xl text-white"
                >
                  {n.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <a href="/#estimate" onClick={() => setOpen(false)} className="btn-primary">Get a free estimate</a>
              <a href={PHONE_HREF} className="btn-ghost-dark"><PhoneIcon /> Call {PHONE_DISPLAY}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
