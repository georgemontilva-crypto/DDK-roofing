import { useEffect } from "react";
import { motion } from "framer-motion";
import { findPost, POSTS, type Block } from "../lib/posts";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/data";
import { PhoneIcon } from "./Icons";

const DEFAULT_TITLE = document.title;

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "p":
      return <p key={i} className="mt-6 text-[1.125rem] leading-[1.75] text-ink/85">{b.text}</p>;
    case "h2":
      return <h2 key={i} className="wide mt-14 text-2xl font-bold leading-tight sm:text-[1.75rem]">{b.text}</h2>;
    case "ul":
      return (
        <ul key={i} className="mt-6 space-y-3">
          {b.items.map((it) => (
            <li key={it} className="relative pl-7 text-[1.125rem] leading-[1.65] text-ink/85">
              <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-2 w-2 rounded-full bg-hardhat" />
              {it}
            </li>
          ))}
        </ul>
      );
    case "img":
      return (
        <figure key={i} className="my-12">
          <img src={b.src} alt={b.alt} loading="lazy" className="aspect-[16/10] w-full rounded-[20px] object-cover" />
          {b.caption && <figcaption className="mt-3 text-[15px] text-steel">{b.caption}</figcaption>}
        </figure>
      );
  }
}

export default function PostPage({ slug }: { slug: string }) {
  const post = findPost(slug);

  useEffect(() => {
    document.title = post ? `${post.title} | DDK Roofing` : "Article not found | DDK Roofing";
    const meta = document.querySelector('meta[name="description"]');
    const prev = meta?.getAttribute("content");
    if (post && meta) meta.setAttribute("content", post.excerpt);
    return () => {
      document.title = DEFAULT_TITLE;
      if (meta && prev) meta.setAttribute("content", prev);
    };
  }, [post]);

  if (!post) {
    return (
      <section className="container-x min-h-[70vh] pb-24 pt-40">
        <h1 className="display text-5xl">This article doesn’t exist.</h1>
        <p className="mt-6 text-lg text-steel">It may have moved. You can find all our articles on the home page.</p>
        <a href="/#blog" className="btn-primary mt-10">See all articles</a>
      </section>
    );
  }

  const others = POSTS.filter((p) => p.slug !== post.slug);

  return (
    <article className="bg-paper pb-24 pt-32 lg:pt-40">
      <div className="mx-auto w-full max-w-[760px] px-4 sm:px-6">
        <a href="/#blog" className="inline-flex items-center gap-2 text-[15px] font-medium text-steel hover:text-ink">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          All articles
        </a>
        <p className="mt-8 text-sm text-steel">{post.readMinutes} min read</p>
        <h1 className="display mt-3 text-[clamp(2.2rem,6vw,3.8rem)]">{post.title}</h1>
        <p className="mt-6 text-xl leading-relaxed text-steel">{post.excerpt}</p>
      </div>

      <div className="mx-auto mt-12 w-full max-w-[1000px] px-4 sm:px-6">
        <div className="aspect-[16/9] overflow-hidden rounded-[28px] bg-sky">
          <motion.img
            src={post.cover}
            alt={post.coverAlt}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto mt-6 w-full max-w-[760px] px-4 sm:px-6">
        {post.body.map(renderBlock)}

        <aside className="mt-16 rounded-[28px] bg-ink p-8 text-white sm:p-10">
          <p className="display text-3xl sm:text-4xl">Want an expert look at your roof?</p>
          <p className="mt-4 text-lg text-white/70">We’ll inspect it and give you a written, itemized estimate. Free.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/#estimate" className="btn-primary">Get a free estimate</a>
            <a href={PHONE_HREF} className="btn-ghost-dark"><PhoneIcon /> {PHONE_DISPLAY}</a>
          </div>
        </aside>
      </div>

      <div className="container-x mt-24">
        <h2 className="display text-3xl sm:text-4xl">Keep reading.</h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-2">
          {others.map((p) => (
            <li key={p.slug}>
              <a href={`/blog/${p.slug}`} className="group grid grid-cols-[120px_1fr] items-center gap-5 sm:grid-cols-[180px_1fr]">
                <div className="aspect-square overflow-hidden rounded-2xl bg-sky">
                  <img src={p.cover} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div>
                  <p className="text-sm text-steel">{p.readMinutes} min read</p>
                  <p className="wide mt-1 text-lg font-bold leading-snug group-hover:text-ddk">{p.title}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
