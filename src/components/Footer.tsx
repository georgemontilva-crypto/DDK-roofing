import { EMAIL, NAV, PHONE_DISPLAY, PHONE_HREF } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-28 pt-16 text-white/70 lg:pb-12">
      <div className="container-x grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/images/logo-white.png" alt="DDK Roofing LLC" width={157} height={40} className="h-10 w-auto" loading="lazy" />
          <p className="mt-5 max-w-[18rem]">We’re not just building roofs; we build dreams.</p>
        </div>
        <nav aria-label="Footer">
          <p className="wide font-bold text-white">Explore</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>)}
            <li><a href="#estimate" className="hover:text-white">Free estimate</a></li>
          </ul>
        </nav>
        <div>
          <p className="wide font-bold text-white">Contact</p>
          <ul className="mt-4 space-y-2">
            <li><a href={PHONE_HREF} className="hover:text-white">{PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a></li>
          </ul>
        </div>
        <div>
          <p className="wide font-bold text-white">Office hours</p>
          <ul className="mt-4 space-y-2">
            <li>Monday to Friday</li>
            <li>9:00 AM – 5:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-14 border-t border-white/10 pt-6 text-sm text-white/50">
        © {new Date().getFullYear()} DDK Roofing LLC. All rights reserved.
      </div>
    </footer>
  );
}
