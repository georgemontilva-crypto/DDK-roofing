import { PHONE_HREF } from "../lib/data";
import { PhoneIcon } from "./Icons";

// Sticky actions for phones, where most roofing calls come from
export default function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-ink/95 p-3 backdrop-blur-md sm:hidden">
      <a href={PHONE_HREF} className="btn-ghost-dark !py-3"><PhoneIcon /> Call now</a>
      <a href="#estimate" className="btn-primary !py-3">Free estimate</a>
    </div>
  );
}
