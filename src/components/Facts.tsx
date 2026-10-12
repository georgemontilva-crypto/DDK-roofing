const FACTS = [
  { k: "20+ years", v: "Roofing homes in the Tampa Bay area" },
  { k: "Licensed & insured", v: "Covered on every job we take" },
  { k: "Free estimates", v: "Written, itemized, no pressure" },
  { k: "Emergency service", v: "Fast response for storm damage and leaks" },
];

export default function Facts() {
  return (
    <section aria-label="Why DDK Roofing" className="border-b border-ink/10 bg-paper">
      <ul className="container-x grid grid-cols-2 lg:grid-cols-4">
        {FACTS.map((f, i) => (
          <li
            key={f.k}
            className={`py-7 pr-4 lg:py-9 ${i % 2 === 1 ? "pl-4 sm:pl-6" : ""} ${i > 0 ? "lg:border-l lg:border-ink/10 lg:pl-8" : ""} ${i % 2 === 1 ? "border-l border-ink/10" : ""} ${i > 1 ? "border-t border-ink/10 lg:border-t-0" : ""}`}
          >
            <p className="wide text-lg font-bold leading-tight sm:text-xl">{f.k}</p>
            <p className="mt-1.5 text-[15px] leading-snug text-steel">{f.v}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
