import { HOURS } from "../lib/data";
import { ClockIcon } from "./Icons";

export default function Area() {
  return (
    <section id="area" className="bg-white py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <h2 className="display text-[clamp(2.2rem,4vw,3.4rem)]">Serving Tampa and Wesley Chapel.</h2>
          <p className="mt-6 max-w-[32rem] text-lg leading-relaxed text-steel">
            We serve homeowners and businesses in Tampa, Wesley Chapel and the surrounding communities. Not sure if
            you’re in our area? Give us a call.
          </p>
          <dl className="mt-10">
            <div className="flex gap-4">
              <dt className="mt-1 text-ddk"><ClockIcon className="h-5 w-5" /><span className="sr-only">Office hours</span></dt>
              <dd className="text-lg leading-snug">{HOURS}</dd>
            </div>
          </dl>
          <a href="#estimate" className="btn-ghost-light mt-10">Check if we cover your area</a>
        </div>
        <div className="overflow-hidden rounded-[28px] bg-sky lg:col-span-7">
          <img
            src="/images/metal-roof.webp"
            alt="Roofer working on a standing seam metal roof"
            loading="lazy"
            className="h-[380px] w-full object-cover lg:h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
