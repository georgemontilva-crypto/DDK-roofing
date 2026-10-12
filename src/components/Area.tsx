import { ADDRESS_1, ADDRESS_2, HOURS } from "../lib/data";
import { ClockIcon, PinIcon } from "./Icons";

const MAP = "https://www.google.com/maps?q=" + encodeURIComponent("1936 Bruce B Downs Blvd #330, Wesley Chapel, FL 33543") + "&output=embed";

export default function Area() {
  return (
    <section id="area" className="bg-white py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <h2 className="display text-[clamp(2.2rem,4.6vw,4rem)]">Based in Wesley Chapel. Working across Tampa.</h2>
          <p className="mt-6 max-w-[32rem] text-lg leading-relaxed text-steel">
            We serve homeowners and businesses in Tampa, Wesley Chapel and the surrounding communities. Not sure if
            you’re in our area? Give us a call.
          </p>
          <dl className="mt-10 space-y-6">
            <div className="flex gap-4">
              <dt className="mt-1 text-ddk"><PinIcon className="h-5 w-5" /><span className="sr-only">Address</span></dt>
              <dd className="text-lg leading-snug">{ADDRESS_1}<br />{ADDRESS_2}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="mt-1 text-ddk"><ClockIcon className="h-5 w-5" /><span className="sr-only">Office hours</span></dt>
              <dd className="text-lg leading-snug">{HOURS}</dd>
            </div>
          </dl>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=1936+Bruce+B+Downs+Blvd+%23330+Wesley+Chapel+FL+33543"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost-light mt-10"
          >
            Get directions
          </a>
        </div>
        <div className="overflow-hidden rounded-[28px] border border-ink/10 bg-sky lg:col-span-7">
          <iframe
            title="Map showing DDK Roofing office in Wesley Chapel, Florida"
            src={MAP}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[380px] w-full grayscale-[35%] lg:h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
