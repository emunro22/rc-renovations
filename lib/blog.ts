export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string; // ISO date
  category: string;
  relatedService?: string; // service slug
  body: string[]; // paragraphs; a leading "## " marks a sub-heading
};

export const blogPosts: BlogPost[] = [
  {
    slug: "herringbone-flooring-glasgow-renovation-trend",
    title: "Herringbone Flooring: Why It's Glasgow's Favourite Renovation Trend Right Now",
    metaTitle: "Herringbone Flooring Glasgow | Fitting Guide & Cost Factors | RC Renovations",
    metaDescription:
      "Why herringbone LVT and parquet flooring is one of the most requested upgrades we fit in Glasgow and Lanarkshire homes — what it costs to get right and where it works best.",
    excerpt:
      "It's the single upgrade that changes a hallway from 'fine' to 'wow' — here's why herringbone keeps topping our job sheet.",
    date: "2026-06-02",
    category: "Flooring",
    relatedService: "doors-and-flooring",
    body: [
      "Walk into more new-build hallways and open-plan kitchens across Glasgow and Lanarkshire this year and there's a good chance the floor is laid in a herringbone pattern. It's become one of our most requested jobs — and once you've fitted a few, it's easy to see why customers love it.",
      "## What herringbone actually is",
      "Herringbone is a laying pattern, not a material — individual planks are cut and set at 90-degree angles to each other, building a continuous zig-zag rather than the straight runs you get with standard plank flooring. We fit it most often in luxury vinyl tile (LVT), which is fully waterproof and ideal for hallways, kitchens and bathrooms, but it works equally well in engineered hardwood and parquet for living rooms and bedrooms.",
      "## Why it's worth the extra labour",
      "Herringbone takes longer to lay than a straight-plank floor — every board is mitred and dry-fitted before it's glued or clicked down, and the pattern has to stay square to the walls from the first row. That extra time is exactly what gives the finish its impact: it draws the eye down the length of a hallway, makes small rooms feel more considered, and hides subfloor imperfections better than long straight runs.",
      "## Where it works best",
      "Entrance hallways and open-plan kitchen-diners are the two spaces we fit it in most, simply because they're the rooms guests see first. It also pairs very well with underfloor heating and works in period tenement flats and modern new-builds alike — we've fitted light grey LVT herringbone in a Victorian hallway and dark walnut parquet in a new-build open-plan kitchen within the same fortnight.",
      "## What it costs to get right",
      "Because of the extra cutting and fitting time, herringbone typically costs more per square metre to install than straight-laid flooring of the same material. The bigger cost driver is subfloor preparation — an uneven or bouncy subfloor will show through a herringbone pattern more than a straight one, so we always assess and, where needed, level the subfloor before laying starts. We'll walk you through this at the free survey so there are no surprises in the quote.",
      "If you're weighing up flooring options for a hallway, kitchen or full-house refit, see our full breakdown on the Internal Doors & Flooring service page, or get in touch for a free survey and fixed quote.",
    ],
  },
  {
    slug: "composite-decking-vs-timber-glasgow-garden",
    title: "Composite Decking vs Timber: Which Is Right for Your Glasgow Garden?",
    metaTitle: "Composite vs Timber Decking Glasgow | RC Renovations",
    metaDescription:
      "Composite or timber decking for a Scottish garden? We compare maintenance, lifespan and cost so you can choose the right decking for your Glasgow or Lanarkshire home.",
    excerpt:
      "West of Scotland weather is hard on decking. Here's how composite and timber actually compare once the rain sets in.",
    date: "2026-05-14",
    category: "Decking & Gardens",
    relatedService: "garden-rooms-and-decking",
    body: [
      "Decking is one of the highest-impact garden upgrades we build — it extends the usable footprint of a house and, done properly, turns a scrappy back garden into an outdoor room. The question we get asked at almost every survey is the same: composite or timber?",
      "## Timber decking",
      "Treated softwood timber is the cheaper option up front and can be re-stained or painted to change the look over time, which some customers like. The trade-off is maintenance: in the west of Scotland's wet climate, timber decking needs re-treating every year or two to stop it greying, splitting or going slippery with algae. Skip that maintenance and a timber deck's lifespan drops fast.",
      "## Composite decking",
      "Composite boards — a mix of recycled wood fibre and plastic — cost more per square metre but need next to no maintenance: no staining, no sanding, and far better resistance to rot, splintering and algae growth. For a deck that gets constant Scottish rain and doesn't get treated every spring, composite usually works out better value over a 10-15 year span, not just at installation.",
      "## What we build",
      "Every deck we build starts with a properly engineered sub-frame on concrete or screw-pile foundations — not just boards screwed to whatever's underneath. That's true whether you choose composite or timber; it's the foundation, not the board material, that stops a deck sagging or moving after a couple of Scottish winters.",
      "## Our honest recommendation",
      "For a deck attached to the house that gets daily use — outside bi-fold doors, for example — we usually steer customers toward composite, because the low maintenance suits how the space actually gets used. For a smaller, more occasional garden feature, timber can still make sense. We'll give you a straight answer for your specific garden at the free survey, not just upsell the pricier option.",
      "See more on our Garden Rooms & Decking service page, or get in touch for a free quote.",
    ],
  },
  {
    slug: "signs-your-loft-is-ready-for-conversion",
    title: "5 Signs Your Loft Is Ready for Conversion",
    metaTitle: "Is My Loft Suitable for Conversion? | Glasgow & Lanarkshire | RC Renovations",
    metaDescription:
      "Wondering if your Glasgow or Lanarkshire loft can be converted into a bedroom or office? Here are the five things we check on every free loft survey.",
    excerpt:
      "Not every loft is a straightforward conversion. These are the five things we check first — before you spend a penny on drawings.",
    date: "2026-04-21",
    category: "Loft Conversions",
    relatedService: "loft-conversions",
    body: [
      "A loft conversion is consistently one of the best-value ways to add a bedroom to a Glasgow or Lanarkshire home — but not every attic is a straightforward job. Here's what we actually check on a free loft survey, before anyone talks about drawings or building warrants.",
      "## 1. Head height at the ridge",
      "This is the single biggest factor. We're looking for at least 2.2m from the top of the ceiling joists to the underside of the ridge board. Below that, building regulations get difficult to meet without raising the roof, which turns a straightforward conversion into a much bigger (and pricier) structural project.",
      "## 2. Roof structure",
      "Older 'cut roof' construction — built from individual rafters — generally converts more easily than modern truss roofs, which are built from prefabricated triangulated trusses designed to be load-bearing as a network. Truss roofs can still be converted, but need additional structural steel or timber work to compensate for what gets cut away, which affects both cost and timescale.",
      "## 3. Stair access",
      "Building regulations require a compliant staircase to any new habitable room, with adequate head height throughout its run. We check whether there's a practical location for a new staircase without eating too far into rooms below — this is often the detail that determines the final layout more than the loft space itself.",
      "## 4. Existing services and structure",
      "Water tanks, boiler flues and structural chimney breasts in the loft all affect layout and cost. None of these rule out a conversion, but they need planning for upfront rather than discovering mid-build.",
      "## 5. What you actually want the space for",
      "A guest bedroom, a home office and a bedroom with en-suite all have different requirements for insulation, electrics, plumbing and natural light. Knowing the end use before the survey means we can give you a quote that matches what you'll actually get, not a generic estimate.",
      "If your loft ticks most of these boxes, get in touch for a free survey — we'll give you an honest answer on whether conversion makes sense for your property, and a fixed written quote if it does.",
    ],
  },
  {
    slug: "how-to-budget-for-a-renovation-in-glasgow",
    title: "How to Budget for a Home Renovation in Glasgow (Without Nasty Surprises)",
    metaTitle: "How to Budget for a Renovation | Glasgow & Lanarkshire | RC Renovations",
    metaDescription:
      "Practical advice on budgeting for a kitchen, bathroom or full home renovation in Glasgow and Lanarkshire — what drives cost, and how to avoid mid-job surprises.",
    excerpt:
      "The renovations that go smoothly are almost always the ones that were budgeted properly before a single wall came down.",
    date: "2026-03-09",
    category: "Renovation Advice",
    relatedService: "full-home-renovations",
    body: [
      "After years of renovating homes across Glasgow and Lanarkshire, we can usually predict which jobs will run smoothly from the budgeting conversation alone — not the trades, not the materials. Here's how we'd suggest approaching it.",
      "## Get a fixed written quote — and understand what it covers",
      "A verbal ballpark isn't a budget. Ask for a written quote that itemises what's included (strip-out, materials, trades, disposal, decoration) and what isn't, so you can compare quotes properly and know exactly what you're committing to before work starts.",
      "## Build in a contingency, especially for older properties",
      "Tenement flats and older stone-built homes in Glasgow and Lanarkshire can hide surprises behind walls and under floors — old wiring, damp, or structural quirks that only show up once a wall is opened up. We'll flag likely risk areas at survey stage, but a sensible contingency (we'd suggest 10% for most jobs, more for period properties with structural changes) keeps a genuine surprise from derailing the whole project.",
      "## Sequence the spend, not just the total",
      "On a full renovation, structural and first-fix work (plumbing, electrics, plastering) has to happen before kitchens, flooring and decoration — which means cash tends to go out faster at the start of a job than the end. Ask your contractor for a payment schedule tied to project stages, not just a lump total, so you can plan cash flow realistically.",
      "## Don't cut the budget in the wrong place",
      "It's tempting to save money on things that are easy to compare, like tiles or worktops, and assume trades and preparation are all equal. In our experience the opposite tends to be true — proper waterproofing behind a bathroom wall, correct subfloor preparation before flooring, and structural work done to warrant standard are the things that are expensive to fix later if corners are cut early.",
      "## Ask what happens if something unexpected comes up",
      "A trustworthy contractor will stop, show you what they've found, and agree a price in writing before proceeding — not add it to the bill after the fact. Ask this question before you sign anything; the answer tells you a lot about how the rest of the job will go.",
      "Whatever you're planning — a single room or a whole-house refurbishment — we're happy to talk through realistic numbers at a free, no-obligation survey.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
