export type BlogTestimonial = {
  /** Verbatim Google review text, trimmed only where Google truncates it. */
  quote: string;
  name: string;
  /** Short editorial line placing the review in the context of the article. */
  context: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string; // ISO date
  category: string;
  relatedService?: string; // service slug
  /** Extra internal links surfaced in the sidebar of the post. */
  relatedLinks?: { label: string; href: string }[];
  /** A real Google review pulled through as a pull-quote inside the article. */
  testimonial?: BlogTestimonial;
  /**
   * Paragraphs. A leading "## " marks a sub-heading. Body text supports inline
   * markdown-style internal links: [anchor text](/services/kitchen-renovations).
   */
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "herringbone-flooring-glasgow-renovation-trend",
    title: "Herringbone Flooring: Why It's Glasgow's Favourite Renovation Trend Right Now",
    metaTitle: "Herringbone Flooring Glasgow | Fitting Guide & Cost Factors | RC Renovations",
    metaDescription:
      "Why herringbone LVT and parquet flooring is one of the most requested upgrades we fit in Glasgow and Lanarkshire homes: what it costs to get right and where it works best.",
    excerpt:
      "It's the single upgrade that changes a hallway from 'fine' to 'wow': here's why herringbone keeps topping our job sheet.",
    date: "2026-06-02",
    category: "Flooring",
    relatedService: "doors-and-flooring",
    relatedLinks: [
      { label: "Internal Doors & Flooring", href: "/services/doors-and-flooring" },
      { label: "Full Home Renovations", href: "/services/full-home-renovations" },
      { label: "Joiners in Glasgow", href: "/areas/glasgow" },
      { label: "Recent work gallery", href: "/gallery" },
    ],
    testimonial: {
      quote:
        "Ryan recently did my flooring and skirting boards. Arrived on time, very friendly and left no mess. Great service and would highly recommend",
      name: "Ross Radford",
      context: "Flooring and skirting fit, reviewed on Google",
    },
    body: [
      "Walk into a new-build hallway or an open-plan kitchen-diner anywhere between the West End and Wishaw this year and there is a fair chance the floor runs in a herringbone pattern. It has quietly become one of the most requested jobs on our sheet, and after fitting a good number of them across [Glasgow](/areas/glasgow) and [Lanarkshire](/areas/lanarkshire), it is not hard to understand the appeal.",
      "## Herringbone is a pattern, not a material",
      "This trips a lot of people up when they start pricing it. Herringbone describes how the planks are set, not what they are made from: each board is cut and laid at ninety degrees to its neighbour so the floor builds into a continuous zig-zag rather than the long parallel runs of a standard plank floor.",
      "Most of the herringbone we fit is luxury vinyl tile. LVT is fully waterproof, warm underfoot and forgiving in the rooms that take the most punishment, which is why it dominates hallways, kitchens and [bathroom refits](/services/bathroom-renovations). Engineered hardwood and traditional parquet do the same job with more depth of grain, and we tend to steer customers that way for living rooms and principal bedrooms where the floor never sees a wet boot.",
      "## Why the extra labour is worth paying for",
      "A herringbone floor takes noticeably longer to lay than a straight-plank equivalent. Every board is mitred and dry-fitted before anything is glued or clicked down, the first row has to be set dead square to the room, and any drift in that opening run multiplies all the way down the floor. There is no way to rush it and nowhere to hide a mistake halfway along.",
      "That labour is precisely what you are buying. The pattern pulls the eye down a hallway rather than across it, gives smaller rooms a sense of deliberate design, and disguises minor subfloor imperfections far better than long straight boards ever will. It is the difference between a floor you walk over and a floor people comment on.",
      "## The rooms where it earns its keep",
      "Entrance hallways and open-plan kitchen-diners are where we fit it most often, for the obvious reason that these are the spaces visitors see first. It sits happily over underfloor heating, and it suits period and modern properties equally: we have laid pale grey LVT herringbone in a Victorian tenement hall in the Southside and dark walnut parquet in a new-build kitchen in [East Kilbride](/areas/east-kilbride) inside the same fortnight.",
      "It also works hard as part of a wider scheme. If you are already committing to a [full home renovation](/services/full-home-renovations) or a [new kitchen](/services/kitchen-renovations), running one herringbone floor through the ground level ties the rooms together in a way that changing flooring at every threshold never does.",
      "## What actually drives the cost",
      "Two things. The first is the extra cutting and fitting time, which makes herringbone dearer per square metre to install than the same material laid straight. The second, and the one people rarely budget for, is subfloor preparation.",
      "An uneven or springy subfloor shows through a herringbone pattern far more obviously than a straight floor, because every joint in the pattern gives the eye another reference point. So we survey the subfloor properly, and where it needs levelling or reinforcing we say so and price it in. It is the same principle we apply to [stud wall partitions](/services/stud-wall-partitions) and [loft boarding](/services/loft-boarding): the part nobody sees is the part that decides whether the finished job still looks right in five years.",
      "## Finishing details that separate a good floor from a great one",
      "Skirtings, thresholds and door undercuts are where a flooring job is won or lost. Refitting skirting after the floor goes down gives a far crisper line than scribing beads against the new boards, and it is worth having internal doors trimmed and rehung at the same time rather than leaving one catching on the extra build-up. We handle both as part of our [internal doors and flooring](/services/doors-and-flooring) work, so there is no gap between trades and no second visit to chase.",
      "If you are weighing up flooring for a hallway, a kitchen or a whole-house refit, take a look at the [recent work in our gallery](/gallery) or [get in touch for a free survey](/contact) and a fixed written quote.",
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
    relatedLinks: [
      { label: "Garden Rooms & Decking", href: "/services/garden-rooms-and-decking" },
      { label: "Timber Fencing", href: "/services/timber-fencing" },
      { label: "Sheds & Outbuildings", href: "/services/sheds-and-outbuildings" },
      { label: "Decking in Hamilton", href: "/services/garden-rooms-and-decking/hamilton" },
    ],
    testimonial: {
      quote:
        "Did a great job on my fence and decking. He was professional, efficient, and delivered high-quality, sturdy work that looks excellent. Everything was finished neatly and on time.",
      name: "Nathan Boyd",
      context: "Fencing and decking build, reviewed on Google",
    },
    body: [
      "Decking is one of the highest-impact things you can do to a garden. Done properly it adds a genuine outdoor room to the house; done badly it is a slippery, sagging platform you avoid from October onwards. The question we field at nearly every [garden survey](/services/garden-rooms-and-decking) is the same one: composite or timber?",
      "There is no single right answer, but there is usually a right answer for your garden. Here is how we talk it through with customers across [Glasgow](/areas/glasgow) and [Lanarkshire](/areas/lanarkshire).",
      "## Timber decking: cheaper up front, but it asks something of you",
      "Pressure-treated softwood is the lower-cost option at installation, and it has one advantage composite cannot match: you can change its colour. Re-stain it in a different tone in five years and the deck reads as new. Some customers value that flexibility a great deal.",
      "The trade-off is maintenance, and in the west of Scotland that is not a token commitment. Timber decking wants cleaning and re-treating every year or two to stop it greying, cupping, splitting and going green with algae. Keep on top of it and a well-built timber deck lasts a long time. Let two or three wet winters pass without treatment and the lifespan drops sharply, along with the grip underfoot.",
      "## Composite decking: more up front, almost nothing after",
      "Composite boards combine recycled wood fibre with plastic. They cost more per square metre, and they will not take a stain, so you commit to the colour on day one. In exchange there is no sanding, no annual treatment, far better resistance to rot and splintering, and considerably less algae to deal with on a north-facing deck.",
      "Over a ten to fifteen year horizon, on a deck that gets constant rain and realistically will not be treated every spring, composite tends to come out ahead on total cost rather than just installed cost. That is the comparison worth running, and it is the one people most often skip.",
      "## The part that matters more than the boards",
      "Whichever surface you choose, the sub-frame decides whether the deck is still solid in five years. Every deck we build starts with a properly engineered frame on concrete pads or screw-pile foundations, with joist spacing set for the board type and ventilation underneath so moisture can escape. Boards screwed to whatever happens to be lying in the garden is not a deck, it is a countdown.",
      "The same logic runs through the rest of our outdoor work. A [timber fence](/services/timber-fencing) is only as good as its post fixings, and a [garden room or outbuilding](/services/sheds-and-outbuildings) is only as good as its base. Getting the invisible structure right is most of the job.",
      "## How the deck connects to the house",
      "Where a deck meets the building is worth planning early. Levels need to sit below the damp-proof course, drainage has to run away from the wall, and if the deck is being built to serve new bi-fold or French doors, the threshold detail should be agreed before either job starts. If decking forms part of a wider project such as an [extension](/services/home-extensions) or a [full home renovation](/services/full-home-renovations), sequencing it correctly saves rework and, usually, money.",
      "## Our honest recommendation",
      "For a deck that adjoins the house and gets used daily, we generally point people toward composite, because low maintenance matches how those spaces actually get lived in. For a smaller, more occasional feature further down the garden, good timber on a good frame is still an easy recommendation, and it leaves budget for the fencing or lighting around it.",
      "What we will not do is default to the pricier option. You will get a straight answer for your specific garden, aspect and budget at the survey. See more on our [garden rooms and decking page](/services/garden-rooms-and-decking), look at [decking we build in Hamilton](/services/garden-rooms-and-decking/hamilton), or [ask for a free quote](/contact).",
    ],
  },
  {
    slug: "signs-your-loft-is-ready-for-conversion",
    title: "5 Signs Your Loft Is Ready for Conversion",
    metaTitle: "Is My Loft Suitable for Conversion? | Glasgow & Lanarkshire | RC Renovations",
    metaDescription:
      "Wondering if your Glasgow or Lanarkshire loft can be converted into a bedroom or office? Here are the five things we check on every free loft survey.",
    excerpt:
      "Not every loft is a straightforward conversion. These are the five things we check first, before you spend a penny on drawings.",
    date: "2026-04-21",
    category: "Loft Conversions",
    relatedService: "loft-conversions",
    relatedLinks: [
      { label: "Loft Conversions", href: "/services/loft-conversions" },
      { label: "Loft Boarding", href: "/services/loft-boarding" },
      { label: "Fitted Wardrobes", href: "/services/fitted-wardrobes" },
      { label: "Loft conversions in Bothwell", href: "/services/loft-conversions/bothwell" },
    ],
    testimonial: {
      quote:
        "Excellent quality work from start to finish. Turned up on time, kept everything tidy, and delivered exactly what was promised. Would definitely use again",
      name: "Jude Higgins",
      context: "Reviewed on Google after a completed renovation",
    },
    body: [
      "A [loft conversion](/services/loft-conversions) remains one of the best-value ways to add a bedroom to a home in Glasgow or Lanarkshire: you gain floor area without losing garden, and you rarely need to move a single external wall. But not every attic converts easily, and a survey that tells you so early saves a great deal of money.",
      "Here is what we actually look at on a free loft survey, before anyone spends money on drawings or a building warrant application.",
      "## 1. Head height at the ridge",
      "This is the first measurement and the one most likely to end the conversation. We want at least 2.2 metres from the top of the ceiling joists to the underside of the ridge board. Much below that and meeting building regulations means either lowering ceilings in the rooms beneath or raising the roof, which turns a contained project into a significant structural one with a very different price.",
      "Measure it yourself before you call anyone. A tape from joist to ridge takes two minutes and tells you most of what you need to know.",
      "## 2. What kind of roof you have",
      "Traditional cut roofs, built rafter by rafter on site, usually convert with less structural intervention because the loft void is already largely open. Modern trussed roofs use prefabricated W-shaped trusses that work as a network, so the webs cannot simply be cut away. Trussed roofs absolutely can be converted, but they need new steel or engineered timber to take the load first, and that shows up in both cost and programme.",
      "In practice, older properties around [Hamilton](/areas/hamilton), [Bothwell](/areas/bothwell) and Glasgow's inner suburbs are more often cut roofs, while estates built from the 1970s onward are more often trussed.",
      "## 3. Where the stairs will go",
      "Any new habitable room needs compliant stair access with adequate head height along its whole run, and the staircase has to come out of the floor below. Finding a workable position without wrecking the landing or eating into a bedroom is frequently the detail that dictates the final layout, more than the shape of the loft itself.",
      "It is also where good joinery earns its money. A well-planned stair, with [fitted storage](/services/fitted-wardrobes) built into the awkward space beside it, can leave the floor below better organised than it was before the work started.",
      "## 4. Services and structure already up there",
      "Water tanks, boiler flues, soil vent pipes and chimney breasts all influence the layout and the price. None of them stops a conversion. All of them are cheaper to design around at survey stage than to discover once the floor is up. Fire safety belongs in this conversation too: a new habitable storey changes the escape route requirements for the whole house, and [fire doors](/services/fire-doors) on the stairwell are commonly part of the answer.",
      "## 5. What you actually want the room to be",
      "A guest bedroom, a home office and a principal suite with en-suite are three different builds. They differ in insulation, electrics, plumbing, ventilation and how much natural light needs designing in. Telling us the end use up front means the quote reflects what you will actually get rather than a generic rate per square metre.",
      "## If the answer is no, at least for now",
      "Sometimes the honest answer is that a full conversion does not stack up. That is worth knowing early, and it is not the end of the idea. [Loft boarding](/services/loft-boarding) with proper insulation and a safe hatch and ladder gets you usable storage for a fraction of the cost, and it frees up space in the rooms below, which is often what people were really after.",
      "If your loft ticks most of the boxes above, [book a free survey](/contact) and we will give you a straight answer on whether conversion makes sense for your property, plus a fixed written quote if it does. You can also see [how we approach loft conversions in Bothwell and the surrounding towns](/services/loft-conversions/bothwell), or read our guide to [budgeting a renovation without nasty surprises](/blog/how-to-budget-for-a-renovation-in-glasgow).",
    ],
  },
  {
    slug: "how-to-budget-for-a-renovation-in-glasgow",
    title: "How to Budget for a Home Renovation in Glasgow (Without Nasty Surprises)",
    metaTitle: "How to Budget for a Renovation | Glasgow & Lanarkshire | RC Renovations",
    metaDescription:
      "Practical advice on budgeting for a kitchen, bathroom or full home renovation in Glasgow and Lanarkshire: what drives cost, and how to avoid mid-job surprises.",
    excerpt:
      "The renovations that go smoothly are almost always the ones that were budgeted properly before a single wall came down.",
    date: "2026-03-09",
    category: "Renovation Advice",
    relatedService: "full-home-renovations",
    relatedLinks: [
      { label: "Full Home Renovations", href: "/services/full-home-renovations" },
      { label: "Kitchen Renovations", href: "/services/kitchen-renovations" },
      { label: "Bathroom Renovations", href: "/services/bathroom-renovations" },
      { label: "Areas we cover", href: "/areas" },
    ],
    testimonial: {
      quote: "Top quality work at a very fair price totally recommend",
      name: "Luke Lickrish",
      context: "Reviewed on Google",
    },
    body: [
      "After years of renovating homes across [Glasgow and Lanarkshire](/areas), we can usually tell which projects will run smoothly from the budgeting conversation alone. Not from the trades involved, not from the materials chosen: from how carefully the numbers were set before anyone lifted a tool. Here is how we would suggest going about it.",
      "## Get a fixed written quote, and read what it excludes",
      "A verbal ballpark is not a budget. Ask for a written quote that itemises strip-out, materials, trades, waste disposal and decoration, and that states plainly what is not included. Exclusions are where quotes genuinely differ. Two prices for the same [kitchen renovation](/services/kitchen-renovations) can sit thousands apart simply because one covers making good, flooring and disposal and the other quietly does not.",
      "## Build a contingency, and make it bigger for older property",
      "Tenement flats and stone-built homes across the west of Scotland keep their secrets behind lath and plaster: perished wiring, old damp, joist ends that have seen better days, structural quirks that only reveal themselves once a wall is open. We flag the likely risk areas at survey, but nobody can see through a wall.",
      "Ten per cent is a sensible contingency for most jobs. For a period property where you are changing structure, or a [bathroom](/services/bathroom-renovations) going into a room that has clearly been wet before, plan for more. A contingency you do not spend is a pleasant surprise; a contingency you never set is what turns a small discovery into a stalled project.",
      "## Sequence the spend, not just the total",
      "On a [full renovation](/services/full-home-renovations), structural work and first fix, meaning plumbing, electrics and plastering, has to complete before kitchens, [flooring](/services/doors-and-flooring) and decoration begin. That means money leaves your account faster at the start of a project than at the end. Ask for a payment schedule tied to defined stages rather than a single lump sum, and you can plan cash flow around reality instead of hope.",
      "## Do not economise in the wrong places",
      "It is natural to save on the things that are easy to compare between suppliers, tiles, worktops, taps, and to assume the labour and preparation behind them are broadly equivalent. Our experience runs the other way. Waterproofing behind a shower wall, correct subfloor preparation before flooring goes down, structural work executed to warrant standard: these are invisible on completion and ruinously expensive to revisit.",
      "If the budget is tight, our advice is usually to reduce the scope rather than the standard. Renovate three rooms properly this year and the fourth next year. A half-done job done well ages considerably better than a whole job done cheaply.",
      "## Ask what happens when something unexpected turns up",
      "Ask this before you sign anything, because the answer tells you how the rest of the project will go. What you want to hear is that work stops, you are shown exactly what has been found, and a price is agreed in writing before anyone continues. What you do not want is a contractor who presses on and adds it to the final invoice.",
      "## Where you live should not add to the bill",
      "One thing that does not belong in your budget is a travel premium. We work across [Glasgow](/areas/glasgow), [Hamilton](/areas/hamilton), [Motherwell](/areas/motherwell), [East Kilbride](/areas/east-kilbride) and the surrounding towns with no travel charges, and quotes typically land within 48 hours of the survey. If a quote includes a mileage line for a job twenty minutes away, ask about it.",
      "Whether it is one room or a whole-house refurbishment, we are happy to talk through realistic numbers at a free, no-obligation survey. [Get in touch](/contact), have a look at [what we have built recently](/gallery), or read our guide to [checking whether your loft is suitable for conversion](/blog/signs-your-loft-is-ready-for-conversion).",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
