import { POSTS } from "../lib/posts";

export default function Blog() {
  return (
    <section id="blog" className="bg-paper py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="display text-[clamp(2.2rem,4.6vw,4rem)]">From the blog.</h2>
          <p className="max-w-[26rem] text-lg text-steel">Practical advice for keeping a Florida roof in good shape.</p>
        </div>
        <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <a href={`/blog/${p.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-[24px] bg-sky">
                  <img
                    src={p.cover}
                    alt={p.coverAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-sm text-steel">{p.readMinutes} min read</p>
                <h3 className="wide mt-1.5 text-xl font-bold leading-snug group-hover:text-ddk">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{p.excerpt}</p>
                <span className="mt-4 inline-block font-semibold text-ddk underline decoration-hardhat decoration-2 underline-offset-4">
                  Read article
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
