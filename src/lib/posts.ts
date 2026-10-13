export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "img"; src: string; alt: string; caption?: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  readMinutes: number;
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "finding-the-perfect-roof-in-tampa",
    title: "A guide to finding the perfect roof in Tampa",
    excerpt:
      "Shingle, tile or metal? How Tampa’s heat, humidity and storm season should shape the roof you choose for your home.",
    cover: "/images/gable.webp",
    coverAlt: "Standing seam metal roof over a wood-clad gable",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "A roof in Tampa works harder than a roof almost anywhere else in the country. It bakes under strong sun most of the year, sits in constant humidity, takes heavy afternoon downpours all summer, and has to be ready for tropical storms from June through November. The right roof for your home is the one that handles all of that and still fits your budget and the look of your house.",
      },
      {
        type: "p",
        text: "Here’s how we walk homeowners through the decision.",
      },
      { type: "h2", text: "Start with what your house can carry" },
      {
        type: "p",
        text: "Before talking about colors or styles, look at the structure. Concrete and clay tile are much heavier than shingles or metal. Many homes built for tile can take tile again, but switching a shingle home to tile usually means an engineer has to confirm the framing can handle the extra weight. A proper inspection tells you which options are realistic before you fall in love with one.",
      },
      { type: "h2", text: "The three roofs you’ll see most in Tampa" },
      {
        type: "p",
        text: "Architectural asphalt shingles are the most common choice. They’re the most affordable to install, come in a wide range of colors, and today’s high-wind rated shingles hold up well when they’re installed with the right nailing pattern and sealed starter strips. In Florida heat, plan on a shorter life than the number printed on the package, which is why attic ventilation matters so much with shingles.",
      },
      {
        type: "img",
        src: "/images/shingle.webp",
        alt: "Roofer laying shingles on a sloped roof",
        caption: "Shingle roofs are the most common choice in the Tampa Bay area.",
      },
      {
        type: "p",
        text: "Concrete and clay tile is the classic Florida look. Tile lasts for decades, doesn’t mind the sun, and gives a home a lot of curb appeal. The trade-offs are weight, a higher upfront cost, and the underlayment: the tiles themselves can outlive the waterproof layer beneath them, so that layer is what you really need to maintain.",
      },
      {
        type: "p",
        text: "Standing seam metal costs more up front but can last much longer than shingles, reflects a lot of heat, and sheds rain fast. Concealed fasteners and continuous panels give the wind very little to grab. For homeowners planning to stay in their house for a long time, metal is often the best value over the life of the roof.",
      },
      { type: "h2", text: "What to ask before you sign anything" },
      {
        type: "ul",
        items: [
          "Is the contractor licensed and insured in Florida, and will they pull the permit?",
          "What wind rating does the system carry, and what underlayment comes with it?",
          "Is the estimate itemized, including tear-off, decking repairs, flashing and cleanup?",
          "What does the warranty cover, both from the manufacturer and on the workmanship?",
          "How will they protect your landscaping, driveway and pool during the job?",
        ],
      },
      { type: "h2", text: "Think about insurance, too" },
      {
        type: "p",
        text: "In Florida, the age and type of your roof can affect what you pay for homeowners insurance, and some carriers won’t renew a policy on an older roof. A new roof installed to current code, plus a wind mitigation inspection, may help with your premium. Talk to your insurance agent before you choose, so the roof you pick also works for your policy.",
      },
      { type: "h2", text: "The short version" },
      {
        type: "p",
        text: "If budget is the main concern, a quality high-wind shingle system installed correctly is a solid choice. If you want the traditional Florida look and your home can carry it, tile is hard to beat. If you plan to stay for decades and want the lowest maintenance, look closely at metal. Whatever you’re leaning toward, start with an inspection so the decision is based on your actual roof, not a guess.",
      },
    ],
  },
  {
    slug: "navigating-the-elements-with-confidence",
    title: "Navigating the elements with confidence",
    excerpt:
      "Sun, rain, humidity and hurricane season: what each one does to your roof, and a simple plan to stay ahead of them all year.",
    cover: "/images/metal-roof.webp",
    coverAlt: "Roofer inspecting a metal roof under a cloudy sky",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "Every roof wears out eventually. In Tampa, the weather decides how fast. The good news is that most of the damage we see on service calls starts small and gives warning signs long before it turns into a ceiling stain. Knowing what each part of our climate does to a roof makes it much easier to stay ahead of it.",
      },
      { type: "h2", text: "Sun and heat" },
      {
        type: "p",
        text: "Strong UV and long stretches of heat dry out shingles, crack sealants and break down the rubber boots around plumbing vents. A poorly ventilated attic makes this worse by cooking the roof from below. Look for granules collecting in your gutters, shingles that curl at the edges, and cracked boots around pipes.",
      },
      { type: "h2", text: "Rain and humidity" },
      {
        type: "p",
        text: "Summer storms dump a lot of water in a short time. Clogged gutters send that water back under the roof edge, and worn flashing around chimneys, walls and skylights lets it in. Constant humidity also feeds algae, the dark streaks you see on many Florida roofs. Algae is mostly cosmetic, but it holds moisture against the surface and should be cleaned the right way, never with a pressure washer.",
      },
      {
        type: "img",
        src: "/images/inspection.webp",
        alt: "Two roofers checking panels on a roof",
        caption: "A professional inspection finds small problems before the rain does.",
      },
      { type: "h2", text: "Wind and hurricane season" },
      {
        type: "p",
        text: "Atlantic hurricane season runs from June 1 to November 30. Wind damage usually starts at the edges and corners of a roof, where uplift is strongest, and at anything that was already loose. A shingle that lifts once is far more likely to tear off in the next storm. That’s why the best time to check your roof is before the season starts, not after the first storm.",
      },
      { type: "h2", text: "A simple plan for the year" },
      {
        type: "ul",
        items: [
          "Spring: schedule a professional inspection and fix anything loose before June.",
          "Early summer: clean gutters and downspouts, and trim branches that hang over the roof.",
          "During storm season: after any strong storm, check your yard for shingles, tiles or metal pieces, and look at ceilings for new stains.",
          "Fall: clean gutters again once the season winds down and note anything that changed.",
          "Every year: keep photos of your roof and your inspection notes. They help a lot if you ever need to file an insurance claim.",
        ],
      },
      { type: "h2", text: "After a storm" },
      {
        type: "p",
        text: "Stay off the roof. Walk around the house, take photos of anything you see from the ground, and look inside for water stains or damp insulation in the attic. If water is coming in, the priority is stopping it: a professional emergency tarp protects your home while you sort out the repair and any insurance claim. Call your insurer early and keep every receipt.",
      },
      {
        type: "p",
        text: "Our weather isn’t going to change, but a roof that’s inspected, maintained and repaired on time can handle it. If you’re not sure how your roof is doing, an inspection is the easiest place to start.",
      },
    ],
  },
  {
    slug: "roofing-solutions-for-tampa-homes",
    title: "Roofing solutions for Tampa homes",
    excerpt:
      "Repair or replace? How to read the signs your roof is giving you, and which solution makes sense at each stage of its life.",
    cover: "/images/drill-wide.webp",
    coverAlt: "Roofer with a drill working on a tile roof",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "Not every roof problem needs a new roof, and not every repair is worth doing. The right solution depends on how old the roof is, how widespread the damage is, and how long you plan to stay in the home. Here’s how to think about each option.",
      },
      { type: "h2", text: "When a repair is the right call" },
      {
        type: "p",
        text: "If your roof is in good overall shape and the problem is limited to one area, a repair is usually the smart move. Common examples are a few shingles lost in a storm, a cracked tile, a leaking pipe boot, or worn flashing around a chimney or wall. Fixed early, these are quick jobs. Left alone, a small leak can rot the decking and reach insulation and drywall.",
      },
      { type: "h2", text: "Signs it’s time to replace" },
      {
        type: "ul",
        items: [
          "Leaks keep showing up in different spots, even after repairs.",
          "Shingles are curling, cracking or losing granules across the whole roof.",
          "The deck feels soft or spongy when walked on, or there are visible dips.",
          "The roof is near the end of its expected life for its material.",
          "Your insurance carrier is asking for an inspection or a replacement.",
        ],
      },
      {
        type: "img",
        src: "/images/tile-closeup.webp",
        alt: "Hands fitting new roof tiles onto wooden battens",
        caption: "A full replacement includes everything under the surface, not just what you see.",
      },
      { type: "h2", text: "What a full replacement includes" },
      {
        type: "p",
        text: "A replacement is more than new shingles or tiles. A complete job removes the old roof down to the deck, replaces any damaged wood, installs new underlayment, drip edge and flashing, and finishes with the new roofing material and proper ventilation. The permit and final inspection make sure it all meets the Florida Building Code. When you compare estimates, check that each of those items is listed, because that’s usually where the difference in price comes from.",
      },
      { type: "h2", text: "Inspections and maintenance" },
      {
        type: "p",
        text: "For roofs that are still healthy, a regular inspection is the cheapest roofing solution there is. It catches lifted shingles, cracked tiles and failing seals while they’re still small repairs, and it gives you a clear record of your roof’s condition for insurance or for selling your home.",
      },
      { type: "h2", text: "When it can’t wait" },
      {
        type: "p",
        text: "Storm damage and active leaks don’t keep business hours. An emergency response focuses on protecting the house first, with tarping or temporary repairs, and then on planning the permanent fix once the weather clears.",
      },
      {
        type: "p",
        text: "Whatever stage your roof is in, the first step is the same: an honest look at its condition. From there, you can make the choice that fits your home and your budget, with a written, itemized estimate in hand.",
      },
    ],
  },
];

export const findPost = (slug: string) => POSTS.find((p) => p.slug === slug);
