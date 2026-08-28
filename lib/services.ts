export type Service = {
  slug: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  body: string[];
  features: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "kitchen-renovations",
    title: "Kitchen Renovations",
    short: "Full kitchen strip-outs, fitting and finishing, from flat-pack installs to fully bespoke.",
    metaTitle: "Kitchen Renovations Glasgow | Kitchen Fitters",
    metaDescription:
      "Expert kitchen renovations and kitchen fitting across Glasgow and Lanarkshire. Full strip-out, supply and fit or fit-only, worktops, flooring and finishing. Free quotes.",
    intro:
      "Your kitchen is the hardest-working room in the house. We handle the full renovation: strip-out, first fix, cabinetry, worktops, flooring and finishing, so you deal with one trade from start to finish.",
    body: [
      "Whether you've bought your units from a high-street supplier and need a fit-only service, or you want us to manage the whole project including design, we work to a fixed written quote with a clear timeline before any work starts.",
      "Our joiners handle cabinetry, worktop templating and fitting, internal doors, skirtings and facings, while trusted electricians and plumbers we've worked with for years cover the wet and electrical work, all coordinated by us.",
    ],
    features: [
      "Full strip-out and disposal",
      "Supply & fit or fit-only",
      "Laminate, solid wood and stone worktops",
      "Coordinated plumbing and electrics",
      "Flooring, tiling and decoration",
      "Fixed written quotes",
      "Kitchen door and drawer front replacement",
    ],
    faqs: [
      {
        q: "How long does a kitchen renovation take?",
        a: "A typical kitchen refit takes 1–3 weeks depending on the scope. Fit-only installs of standard units are usually at the faster end; full renovations with structural work, new flooring and re-plastering take longer. We give you a written timeline with your quote.",
      },
      {
        q: "Can you fit a kitchen I've bought elsewhere?",
        a: "Yes, fit-only is one of our most requested services. We regularly install kitchens from Howdens, B&Q, Wren and IKEA, and we'll flag any issues with the supplied units before work starts.",
      },
      {
        q: "Do you handle plumbing and electrics?",
        a: "We coordinate qualified plumbers and electricians as part of the job, so you get one point of contact and one schedule rather than juggling trades yourself.",
      },
    ],
  },
  {
    slug: "bathroom-renovations",
    title: "Bathroom Renovations",
    short: "Complete bathroom refits: wet walls, tiling, suites and full waterproofing done right.",
    metaTitle: "Bathroom Renovations Glasgow | Bathroom Fitters",
    metaDescription:
      "Full bathroom renovations across Glasgow, Hamilton and Lanarkshire. Wet wall panelling, tiling, new suites, showers and flooring with fixed written quotes.",
    intro:
      "From dated avocado suites to sleek modern wet rooms, we strip out, refit and finish bathrooms across Glasgow and Lanarkshire with proper waterproofing behind every panel and tile.",
    body: [
      "A bathroom only stays looking good if the work behind the walls is right. We take waterproofing, ventilation and pipework seriously, because a leak six months down the line costs far more than doing it properly the first time.",
      "We fit wet wall panelling and traditional tiling, walk-in showers, baths, vanity units and all joinery finishing, coordinating plumbing and electrical work under one schedule.",
    ],
    features: [
      "Full strip-out and refit",
      "Wet wall panelling and tiling",
      "Walk-in showers and wet rooms",
      "Vanity units and bespoke storage",
      "Coordinated plumbing and electrics",
      "Anti-slip and LVT flooring",
      "Bath panels and pipework boxing-in",
    ],
    faqs: [
      {
        q: "How much does a bathroom renovation cost in Glasgow?",
        a: "Most full bathroom refits fall between £4,500 and £9,000 depending on size, spec and whether layout changes are needed. We give a fixed written quote after a free home visit, no surprises mid-job.",
      },
      {
        q: "Wet wall or tiles: which is better?",
        a: "Wet wall panels are faster to fit, easier to clean and completely grout-free, which suits busy family bathrooms. Tiles offer more design flexibility. We fit both and will talk you through the trade-offs at the quote stage.",
      },
      {
        q: "How long will I be without a bathroom?",
        a: "A straight refit usually takes 5–10 working days. We keep the toilet functional for as much of the job as physically possible and tell you in advance about any days it won't be.",
      },
    ],
  },
  {
    slug: "home-extensions",
    title: "Home Extensions",
    short: "Single-storey extensions and garden rooms that add space and value to your home.",
    metaTitle: "Home Extensions Glasgow & Lanarkshire",
    metaDescription:
      "Single-storey home extensions across Glasgow and Lanarkshire. From foundations to finishing, joinery-led builds with coordinated trades and fixed quotes.",
    intro:
      "More space, without moving house. We build single-storey extensions across Glasgow and Lanarkshire: kitchen extensions, sunrooms and garden rooms, managed from groundworks to final coat of paint.",
    body: [
      "An extension is a serious investment, and the difference between a smooth build and a stressful one is coordination. As a joinery-led firm, we manage the full sequence: groundworks, structure, roofing, windows, first and second fix, plastering and decoration.",
      "We'll work alongside your architect on drawings and building warrant requirements, or point you to architects we trust if you're starting from scratch.",
    ],
    features: [
      "Kitchen and rear extensions",
      "Sunrooms and garden rooms",
      "Roofing, windows and doors",
      "Full first and second fix joinery",
      "Plastering and decoration",
      "One project manager throughout",
      "Garage conversions",
    ],
    faqs: [
      {
        q: "Do I need planning permission for an extension?",
        a: "Many single-storey rear extensions in Scotland fall under permitted development, but a building warrant is almost always required. We'll advise on your specific situation and work with your architect on the paperwork.",
      },
      {
        q: "How long does a single-storey extension take?",
        a: "Typically 8–14 weeks on site depending on size and spec, once warrants are approved. We provide a build programme with your quote so you know what happens when.",
      },
    ],
  },
  {
    slug: "loft-conversions",
    title: "Loft Conversions",
    short: "Turn unused attic space into bedrooms, offices and living space.",
    metaTitle: "Loft Conversions Glasgow | Attic Conversions",
    metaDescription:
      "Loft and attic conversions across Glasgow, Hamilton and surrounding areas. Bedrooms, home offices and en-suites, structural work, stairs, insulation and finishing.",
    intro:
      "The cheapest square footage you'll ever add is the space already under your roof. We convert lofts and attics into bedrooms, home offices and en-suite spaces across Glasgow and Lanarkshire.",
    body: [
      "A proper conversion is more than flooring out an attic: it means structural strengthening, regulation-compliant stairs, insulation that meets current standards, and natural light designed in from the start.",
      "We handle the full package: structural work, Velux and dormer windows, staircases, electrics, plumbing for en-suites, plastering and finishing joinery.",
    ],
    features: [
      "Bedroom and office conversions",
      "Velux and dormer windows",
      "Regulation-compliant staircases",
      "Insulation to current standards",
      "En-suite plumbing",
      "Building warrant support",
      "Loft ladders and hatch installation",
    ],
    faqs: [
      {
        q: "Is my loft suitable for conversion?",
        a: "The main factors are head height (ideally 2.2m+ at the ridge), roof structure and stair access. We do a free survey and tell you honestly whether a conversion makes sense for your property.",
      },
      {
        q: "Will a loft conversion add value to my home?",
        a: "An additional bedroom, particularly with an en-suite, is consistently one of the highest-value improvements for Glasgow properties. Local estate agents typically estimate uplifts of 10–20% depending on the area.",
      },
    ],
  },
  {
    slug: "bespoke-joinery",
    title: "Bespoke Joinery",
    short: "Made-to-measure wardrobes, media walls, alcove units and custom carpentry.",
    metaTitle: "Bespoke Joinery Glasgow | Custom Carpentry",
    metaDescription:
      "Bespoke joinery in Glasgow and Lanarkshire: fitted wardrobes, media walls, alcove shelving, panelling and custom carpentry, made to measure and hand finished.",
    intro:
      "This is the craft the business was built on. Fitted wardrobes, media walls, alcove units, wall panelling and one-off pieces, measured, made and finished by time-served joiners.",
    body: [
      "Off-the-shelf furniture never quite fits, especially in older Glasgow tenements and Lanarkshire stone-built homes where no wall is truly straight. Bespoke joinery is built to your walls, your ceiling height and your storage needs.",
      "Every piece is scribed to the room, finished in your choice of paint or veneer, and fixed properly: no wobble, no gaps, no visible fixings.",
    ],
    features: [
      "Fitted wardrobes and sliding doors",
      "Media walls with hidden cabling",
      "Alcove units and shelving",
      "Wall panelling and wainscoting",
      "Internal doors and facings",
      "Staircase renovation",
      "Understairs storage",
      "Timber balustrades and handrails",
    ],
    faqs: [
      {
        q: "How much do fitted wardrobes cost?",
        a: "Most fitted wardrobe projects fall between £1,200 and £3,500 depending on size, doors and internal fit-out. Every job is quoted individually after a free measuring visit.",
      },
      {
        q: "Do you make media walls with electric fires?",
        a: "Yes, media walls with recessed TVs, electric fires, hidden cabling and LED lighting are one of our most popular projects. We coordinate the electrical work as part of the job.",
      },
    ],
  },
  {
    slug: "doors-and-flooring",
    title: "Doors & Flooring",
    short: "Internal doors, hardwood and laminate flooring, skirtings and finishing joinery.",
    metaTitle: "Door Fitting & Flooring Glasgow",
    metaDescription:
      "Internal door fitting, laminate, LVT and hardwood flooring across Glasgow and Lanarkshire. Skirtings, facings and finishing joinery by time-served joiners.",
    intro:
      "The details that transform a house: crisp new internal doors, properly laid flooring and clean skirtings and facings. Quick to fit, huge visual impact.",
    body: [
      "We supply and fit internal doors in all styles: panel, glazed, fire-rated, hung properly so they close cleanly for years. Full-house door packages are a speciality.",
      "For flooring we fit laminate, luxury vinyl tile (LVT), engineered hardwood and solid wood, with correct subfloor prep, underlays and trims so the finish lasts.",
    ],
    features: [
      "Internal and fire-rated doors",
      "Full-house door packages",
      "Laminate, LVT and hardwood flooring",
      "Subfloor preparation",
      "Skirtings, facings and trims",
      "Handles, hinges and ironmongery",
      "Bi-fold and sliding doors",
      "Architrave, beading and dado rails",
    ],
    faqs: [
      {
        q: "How much does it cost to fit internal doors?",
        a: "Supply and fit for a standard internal door typically starts around £150–£250 per door depending on the door itself, with discounts for full-house packages. Fire doors and glazed doors cost more.",
      },
      {
        q: "Which flooring is best for kitchens and hallways?",
        a: "For high-traffic and wet-risk areas we usually recommend LVT: it's waterproof, warm underfoot and extremely hard-wearing. We'll show you samples at the quote visit.",
      },
    ],
  },
  {
    slug: "garden-rooms-and-decking",
    title: "Garden Rooms & Decking",
    short: "Insulated garden offices, composite decking and outdoor structures.",
    metaTitle: "Garden Rooms & Decking Glasgow",
    metaDescription:
      "Insulated garden rooms, garden offices and composite decking across Glasgow and Lanarkshire. Built for Scottish weather with proper foundations and finishes.",
    intro:
      "Working from home? Need more space without an extension? We build fully insulated garden rooms and hard-wearing composite decking, designed for Scottish weather.",
    body: [
      "Our garden rooms are built on proper foundations with insulated floors, walls and roofs, double-glazed doors and full electrics, genuinely usable twelve months a year, not just a shed with plasterboard.",
      "Decking is built with either treated timber or composite boards on a properly constructed sub-frame, with balustrades, steps and lighting as required.",
    ],
    features: [
      "Insulated garden offices",
      "Full electrics and networking",
      "Composite and timber decking",
      "Balustrades, steps and lighting",
      "Pergolas and outdoor structures",
      "Built for Scottish weather",
      "Sleeper raised beds and garden landscaping",
    ],
    faqs: [
      {
        q: "Do garden rooms need planning permission?",
        a: "Most garden rooms under 2.5m in height fall under permitted development in Scotland, subject to positioning and garden coverage rules. We'll advise on your specific garden at the quote stage.",
      },
      {
        q: "Composite or timber decking?",
        a: "Composite costs more up front but needs virtually no maintenance and won't rot or splinter, a big advantage in the west of Scotland climate. Timber is cheaper and can be re-stained to change the look. We fit both.",
      },
    ],
  },
  {
    slug: "full-home-renovations",
    title: "Full Home Renovations",
    short: "Whole-property refurbishments managed end to end under one contract.",
    metaTitle: "Full Home Renovations Glasgow | Property Refurbishment",
    metaDescription:
      "Complete home renovations across Glasgow and Lanarkshire. Whole-property refurbishments, buy-to-let refits and period property upgrades managed under one contract.",
    intro:
      "Bought a fixer-upper? Renovating a rental? We manage complete property refurbishments: every room, every trade, one contract, one point of contact.",
    body: [
      "Full renovations live or die on sequencing. We plan the whole job: strip-out, structural alterations, first fix, plastering, second fix, kitchens, bathrooms, flooring and decoration, so trades arrive in the right order and the programme holds.",
      "We work on family homes, buy-to-let portfolios and period properties across Glasgow and Lanarkshire, and we're comfortable with the quirks of tenement flats and stone-built houses.",
    ],
    features: [
      "Whole-property refurbishment",
      "Structural alterations",
      "Buy-to-let and HMO refits",
      "Period and tenement properties",
      "All trades coordinated",
      "Single fixed contract",
      "Timber repairs: rot, woodworm and floorboards",
      "Between-tenancy landlord maintenance",
    ],
    faqs: [
      {
        q: "Can you renovate a property while I live in it?",
        a: "Yes, though it depends on scope. For full-house jobs we usually phase the work room by room and keep a functioning kitchen and bathroom available wherever possible. For heavy structural work we'll be honest if moving out for a period is the better option.",
      },
      {
        q: "Do you work with landlords?",
        a: "Regularly. We do between-tenancy refits, EPC-driven upgrades and full refurbishments for landlords across Glasgow and Lanarkshire, and can work to letting-agent timescales.",
      },
    ],
  },
  {
    slug: "fire-doors",
    title: "Fire Doors",
    short: "FD30 and FD60 fire door installation for landlords, HMOs and commercial premises.",
    metaTitle: "Fire Door Installation Glasgow | FD30 & FD60 Fire Doors",
    metaDescription:
      "FD30 and FD60 fire door installation across Glasgow and Lanarkshire for landlords, HMOs and commercial premises. Correct intumescent strips, seals and closers fitted to regulation. Free quotes.",
    intro:
      "Compliance work that has to be right first time. We install FD30 and FD60 fire doors for landlords, HMOs, flats and commercial premises, fitted to the standard your certification depends on.",
    body: [
      "Every fire door we fit gets the correct intumescent strips, smoke seals, hinges and self-closers for its rating, with gaps set to spec rather than eyeballed. That's the difference between a door that looks right and one that actually performs in a fire.",
      "We work regularly with landlords, letting agents and factors on flats and HMOs where fire door compliance is a legal requirement, and can supply documentation for your records or an upcoming inspection.",
    ],
    features: [
      "FD30 and FD60 rated doors",
      "Intumescent strips and smoke seals",
      "Correct hinges and self-closers",
      "HMO and landlord compliance",
      "Commercial premises covered",
      "Certification-ready installation",
    ],
    faqs: [
      {
        q: "Do I legally need fire doors in my rental property?",
        a: "Most flats, HMOs and multi-occupancy buildings in Scotland require fire doors to communal areas and certain internal rooms. Requirements vary by property type, so we'll advise on what your specific building needs.",
      },
      {
        q: "What's the difference between FD30 and FD60 doors?",
        a: "The number is the minutes of fire resistance the door provides: FD30 for 30 minutes, FD60 for 60. Which you need depends on the building's fire strategy, usually set out by your factor, building warrant or a fire risk assessment.",
      },
    ],
  },
  {
    slug: "media-walls",
    title: "Media Walls",
    short: "Bespoke media walls with recessed TV, electric fire and hidden cabling, built to your room.",
    metaTitle: "Media Wall Installation Glasgow | Bespoke TV & Fireplace Walls",
    metaDescription:
      "Bespoke media walls built and fitted across Glasgow and Lanarkshire. Recessed TV, electric fireplace opening, hidden cable routing and integrated shelving. Free quotes.",
    intro:
      "A media wall built around your TV size and room, not an off-the-shelf kit. Recessed screen, electric fireplace opening, hidden cabling and integrated shelving or lighting, framed and finished ready for decoration.",
    body: [
      "We design each media wall to your room's exact dimensions and your TV, so the recess fits properly instead of the TV sitting proud of the frame. Electric fireplace openings, cable routes and power points are planned in before we start building, not bodged in afterwards.",
      "Framed in timber stud, boarded and finished square and flush, with shelving, lighting or storage built in either side if you want it. Ready for your decorator, or we can coordinate that too.",
    ],
    features: [
      "Recessed TV opening, sized to your screen",
      "Electric fireplace openings",
      "Hidden cable routing",
      "Integrated shelving and lighting",
      "Framed, boarded and ready to decorate",
      "Designed to your room, not a fixed kit",
    ],
    faqs: [
      {
        q: "Can you fit an electric fire into the media wall?",
        a: "Yes, electric fire openings are one of our most requested features. We build the opening to your fire's exact dimensions and coordinate the electrical connection.",
      },
      {
        q: "How long does a media wall take to build?",
        a: "Most media walls take 2–4 days to frame, board and finish, depending on complexity and whether we're also fitting shelving or lighting.",
      },
    ],
  },
  {
    slug: "fitted-wardrobes",
    title: "Fitted Wardrobes",
    short: "Made-to-measure wardrobes built around sloped ceilings, chimney breasts and awkward corners.",
    metaTitle: "Fitted Wardrobes Glasgow | Made-to-Measure Bedroom Storage",
    metaDescription:
      "Fitted wardrobes made to measure for bedrooms of any shape across Glasgow and Lanarkshire. Hinged or sliding doors, finished flush to walls and ceiling. Free quotes.",
    intro:
      "Off-the-shelf wardrobes never fit a real bedroom. We build fitted wardrobes to measure for any shape of room, sloped ceilings and chimney breasts included, finished flush for a proper built-in look.",
    body: [
      "Every wardrobe is measured on site and built around what you actually own: hanging rails, shelving, drawers and shoe storage set out to suit your clothes rather than a generic layout.",
      "Hinged or sliding doors, finished in your choice of paint or veneer and fixed flush to the wall and ceiling, so there's no gap, no wobble and no visible fixings.",
    ],
    features: [
      "Built to measure for any room shape",
      "Sloped ceilings and chimney breasts",
      "Hinged or sliding doors",
      "Hanging rails, shelving and drawers",
      "Shoe storage and internal fit-out",
      "Finished flush for a built-in look",
    ],
    faqs: [
      {
        q: "How much do fitted wardrobes cost?",
        a: "Most fitted wardrobe projects fall between £1,200 and £3,500 depending on size, doors and internal fit-out. Every job is quoted individually after a free measuring visit.",
      },
      {
        q: "Can you fit wardrobes into a sloped ceiling or loft room?",
        a: "Yes, awkward angles are exactly what fitted wardrobes are for. We scribe the carcass to the slope so the space is fully usable instead of wasted behind an off-the-shelf unit.",
      },
    ],
  },
  {
    slug: "timber-fencing",
    title: "Timber Fencing",
    short: "Closeboard, feather edge, lap panel and slatted fencing, fitted properly and built to last.",
    metaTitle: "Timber Fencing Glasgow | Fence Installation & Gates",
    metaDescription:
      "Timber fencing supply and installation across Glasgow and Lanarkshire. Closeboard, feather edge, lap panel and slatted fencing, plus matching gates. Free quotes.",
    intro:
      "Fencing that's still standing straight in five years. We supply and fit closeboard, feather edge, lap panel, slatted and picket fencing, with posts set properly so it stays that way.",
    body: [
      "Posts are set in concrete to the correct depth, not just driven into the ground, with gravel boards fitted to keep timber off wet soil and extend its life. Lines are run straight and levels set correctly even on sloping gardens.",
      "We remove and dispose of old fencing as part of the job, and can fit matching garden or driveway gates, hung on heavy-duty hinges with the right latches or locks for security.",
    ],
    features: [
      "Closeboard, feather edge and lap panel",
      "Slatted and picket styles",
      "Posts set in concrete with gravel boards",
      "Old fencing removed and disposed of",
      "Straight lines on sloping ground",
      "Matching garden and driveway gates",
    ],
    faqs: [
      {
        q: "How long does timber fencing last?",
        a: "Properly installed timber fencing with gravel boards and concreted posts typically lasts 10–15 years, well beyond fencing that's just knocked into the ground. Pressure-treated timber and regular staining extend that further.",
      },
      {
        q: "Who is responsible for a boundary fence?",
        a: "Responsibility depends on your title deeds, which state which boundary is yours. We're happy to fit fencing regardless, but it's worth checking your deeds or asking your neighbour before replacing a shared boundary.",
      },
    ],
  },
  {
    slug: "stud-wall-partitions",
    title: "Stud Wall Partitions",
    short: "Timber stud walls to divide a room, create a bedroom or close off open-plan space.",
    metaTitle: "Stud Wall Partitions Glasgow | Timber Partition Walls",
    metaDescription:
      "Timber stud partition walls built and fitted across Glasgow and Lanarkshire. Framed, insulated for sound and boarded ready for plaster. Free quotes.",
    intro:
      "Need an extra room, or want to close off part of an open-plan space? We build timber stud partition walls, framed properly and insulated for sound, ready for your plasterer.",
    body: [
      "Every partition is set out to suit what's going in and around it: door openings positioned correctly, service voids left for pipework or cabling, and noggins built in wherever you'll want to hang shelves, a TV or a radiator.",
      "Walls are insulated with acoustic slab as standard to cut sound transfer between rooms, then boarded and left square and true, ready to plaster and decorate.",
    ],
    features: [
      "Framed to building standard",
      "Acoustic insulation for sound",
      "Door openings built in",
      "Service voids for pipework and cabling",
      "Noggins for wall-mounted fixings",
      "Boarded ready for plaster",
    ],
    faqs: [
      {
        q: "Do I need a building warrant for a stud wall?",
        a: "Most non-structural internal partitions don't need a warrant, but it depends on the room and whether it affects fire escape routes or ventilation. We'll flag it if your project needs one.",
      },
      {
        q: "Will a stud wall block out noise?",
        a: "A properly built partition with acoustic insulation cuts noise significantly compared to a bare stud wall, though it won't match a masonry wall. We'll talk through options if sound is a priority.",
      },
    ],
  },
  {
    slug: "loft-boarding",
    title: "Loft Boarding",
    short: "Loft boarding on raised legs so insulation isn't compressed, for genuinely usable storage.",
    metaTitle: "Loft Boarding Glasgow | Loft Storage Installation",
    metaDescription:
      "Loft boarding fitted across Glasgow and Lanarkshire on raised legs, so insulation performance isn't lost. Boarded walkway and storage, with loft ladders and lighting available. Free quotes.",
    intro:
      "Most loft boarding is fitted wrong: laid straight onto the joists, it squashes the insulation underneath and lets heat escape. We fit boards on raised legs so you get storage without losing performance.",
    body: [
      "Raising the boards above the joists on purpose-made legs means your insulation stays at full thickness, so you get proper loft storage without your heating bills going up.",
      "Boards are laid across the joists with a clear walkway and defined storage area, and we can fit a loft ladder and lighting at the same time to make the space genuinely usable rather than a crawl space.",
    ],
    features: [
      "Boards raised on legs, insulation untouched",
      "Clear walkway and storage area",
      "Loft ladders fitted at the same time",
      "Lighting installation available",
      "Boarded to current safety standards",
      "Quick turnaround, usually 1 day",
    ],
    faqs: [
      {
        q: "Will loft boarding damage my insulation?",
        a: "Not if it's done properly. We fit boards on raised legs specifically so the insulation underneath stays at full depth. Boarding straight onto joists compresses insulation and is something we won't do.",
      },
      {
        q: "How much weight can a boarded loft take?",
        a: "It depends on your joist size and spacing, which we check before boarding. Most standard lofts are fine for general storage; we'll tell you if yours has limitations before starting.",
      },
    ],
  },
  {
    slug: "sheds-and-outbuildings",
    title: "Sheds & Timber Outbuildings",
    short: "Sheds, workshops and timber outbuildings built on site to your size, not a flat-pack limit.",
    metaTitle: "Sheds & Timber Outbuildings Glasgow | Custom Garden Buildings",
    metaDescription:
      "Sheds, workshops and timber outbuildings built and installed across Glasgow and Lanarkshire, including base preparation, roofing and power routing. Free quotes.",
    intro:
      "Built on site to the size you actually need, not whatever a flat-pack range happens to offer. We build sheds, workshops and timber outbuildings complete with base, roofing and secure doors.",
    body: [
      "We prepare and level a proper base before building starts, then construct the structure on site: felt or EPDM roofing, secure doors and windows if you want them, with insulation and power routing available for a workshop or garden bar.",
      "Because it's built rather than bolted together from a kit, we're not limited to standard dimensions: awkward garden shapes and specific size requirements are exactly what this service is for.",
    ],
    features: [
      "Built on site to your exact size",
      "Base preparation and levelling",
      "Felt or EPDM roofing",
      "Secure doors and optional windows",
      "Insulation and power routing available",
      "Not limited to flat-pack dimensions",
    ],
    faqs: [
      {
        q: "Do I need planning permission for a shed or outbuilding?",
        a: "Most garden outbuildings fall under permitted development in Scotland provided they meet height and garden coverage rules. We'll advise on your specific garden at the quote stage.",
      },
      {
        q: "Can you run power to a garden workshop?",
        a: "Yes, we can route power for lighting, sockets and heating as part of the build, coordinated with a qualified electrician for the final connection.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
