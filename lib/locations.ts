export type Location = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  local: string[];
  landmarks: string[];
  popularServices: string[]; // service slugs
};

export const locations: Location[] = [
  {
    slug: "glasgow",
    name: "Glasgow",
    metaTitle: "Joinery & Renovations Glasgow",
    metaDescription:
      "Trusted joiners and renovation specialists in Glasgow. Kitchens, bathrooms, bespoke joinery and full refurbishments across the city. Free fixed quotes.",
    intro:
      "From West End tenements to Southside semis and new builds on the city's edge, we've renovated homes across every corner of Glasgow.",
    local: [
      "Glasgow's housing stock is like nowhere else in Scotland: red and blond sandstone tenements with 3m ceilings, ornate cornicing and not a straight wall in sight. Renovating these properties takes joiners who respect the original features while bringing the space up to modern standards.",
      "We work city-wide: Shawlands, Dennistoun, Partick, Hyndland, Battlefield, Cathcart and everywhere between. Parking permits, factor approvals and close etiquette. We've dealt with it all.",
    ],
    landmarks: ["West End", "Southside", "Dennistoun", "Shawlands", "Partick"],
    popularServices: ["bespoke-joinery", "kitchen-renovations", "full-home-renovations"],
  },
  {
    slug: "lanarkshire",
    name: "Lanarkshire",
    metaTitle: "Joinery & Renovations Lanarkshire",
    metaDescription:
      "Joinery and renovation services across North and South Lanarkshire. Kitchens, bathrooms, extensions and bespoke joinery with free fixed quotes.",
    intro:
      "Covering both North and South Lanarkshire, we bring city-standard renovation work to towns and villages across the county.",
    local: [
      "Lanarkshire homes range from Victorian stone villas in Hamilton and Bothwell to inter-war bungalows, ex-council semis and large modern estates around East Kilbride and Motherwell. Each type has its own quirks, and we've worked on them all.",
      "Being based on Glasgow's doorstep means Lanarkshire jobs are home turf: no travel charges, no 'we don't cover that area', and quotes usually within 48 hours of your call.",
    ],
    landmarks: ["Hamilton", "Motherwell", "East Kilbride", "Bothwell", "Wishaw"],
    popularServices: ["home-extensions", "bathroom-renovations", "kitchen-renovations"],
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    metaTitle: "Joiners Hamilton | Renovations & Joinery",
    metaDescription:
      "Local joiners and renovation specialists in Hamilton, South Lanarkshire. Kitchens, bathrooms, fitted wardrobes and full renovations. Free quotes.",
    intro:
      "One of our busiest areas, we're in Hamilton most weeks fitting kitchens, refitting bathrooms and building bespoke joinery for homes from Burnbank to Ferniegair.",
    local: [
      "Hamilton's mix of Victorian sandstone around the town centre, solid inter-war semis and newer developments toward Larkhall means no two jobs are the same. Older properties here often reward renovation heavily: high ceilings and generous rooms give bespoke joinery real presence.",
      "We cover all of Hamilton including Burnbank, Whitehill, Silvertonhill, Eddlewood and Ferniegair, plus neighbouring Larkhall and Stonehouse.",
    ],
    landmarks: ["Hamilton town centre", "Burnbank", "Silvertonhill", "Ferniegair"],
    popularServices: ["kitchen-renovations", "bespoke-joinery", "bathroom-renovations"],
  },
  {
    slug: "bothwell",
    name: "Bothwell",
    metaTitle: "Joiners Bothwell | Renovations & Bespoke Joinery",
    metaDescription:
      "Renovations and bespoke joinery in Bothwell, South Lanarkshire. High-end kitchens, extensions, fitted wardrobes and period property work. Free quotes.",
    intro:
      "Bothwell's period villas and high-spec modern homes deserve craftsmanship to match, and that's exactly the standard we bring to every job in the village.",
    local: [
      "From sandstone villas on the Main Street side to executive homes near the Castle grounds, Bothwell properties tend to be renovated to a high specification. Much of our work here is bespoke: media walls, panelling, fitted dressing rooms and full kitchen projects.",
      "We're careful, tidy and used to working in occupied family homes: dust protection, daily clean-downs and realistic schedules as standard.",
    ],
    landmarks: ["Bothwell Main Street", "Bothwell Castle", "Uddingston border"],
    popularServices: ["bespoke-joinery", "kitchen-renovations", "home-extensions"],
  },
  {
    slug: "motherwell",
    name: "Motherwell",
    metaTitle: "Joiners Motherwell | Renovations & Joinery",
    metaDescription:
      "Renovation and joinery services in Motherwell and Wishaw. Kitchens, bathrooms, doors, flooring and full refits from trusted local joiners. Free quotes.",
    intro:
      "We cover Motherwell and the wider ML1 area with everything from single-door fits to complete property renovations.",
    local: [
      "Motherwell has a big stock of solid ex-council and inter-war housing that responds brilliantly to renovation: new kitchens, modern bathrooms and full-house flooring transform these properties for a fraction of the cost of moving.",
      "We work throughout Motherwell, Wishaw, Carfin, Newarthill and Holytown, with most quotes carried out within a couple of days of your enquiry.",
    ],
    landmarks: ["Motherwell town centre", "Wishaw", "Carfin", "Newarthill"],
    popularServices: ["bathroom-renovations", "doors-and-flooring", "kitchen-renovations"],
  },
  {
    slug: "east-kilbride",
    name: "East Kilbride",
    metaTitle: "Joiners East Kilbride | Renovations & Joinery",
    metaDescription:
      "Renovations, kitchens, bathrooms and bespoke joinery in East Kilbride. Trusted local joiners covering all EK neighbourhoods. Free fixed quotes.",
    intro:
      "Scotland's biggest town has decades of housing styles side by side, and we've renovated most of them, from Calderwood to Stewartfield.",
    local: [
      "East Kilbride's post-war terraces and villas are prime candidates for modernisation: open-plan kitchen conversions, new bathrooms and garden rooms are our most requested EK jobs. Newer estates around Stewartfield and Lindsayfield lean toward bespoke joinery: media walls and fitted storage especially.",
      "We cover every neighbourhood: The Murray, Calderwood, Westwood, Greenhills, St Leonards, Stewartfield and Lindsayfield.",
    ],
    landmarks: ["The Murray", "Calderwood", "Stewartfield", "Westwood"],
    popularServices: ["kitchen-renovations", "garden-rooms-and-decking", "bespoke-joinery"],
  },
  {
    slug: "uddingston",
    name: "Uddingston",
    metaTitle: "Joiners Uddingston | Renovations & Joinery",
    metaDescription:
      "Local joiners in Uddingston covering renovations, kitchens, bathrooms and bespoke joinery. Serving Uddingston, Tannochside and Birkenshaw. Free quotes.",
    intro:
      "A stone's throw from our home patch, Uddingston is a village we know street by street, and where a lot of our work comes from word of mouth.",
    local: [
      "Uddingston blends period sandstone homes near the Main Street with family estates in Tannochside and Birkenshaw. Loft conversions and extensions are popular here as families outgrow houses they don't want to leave.",
      "We're regularly recommended between neighbours in Uddingston, the best endorsement a local trades firm can get.",
    ],
    landmarks: ["Uddingston Main Street", "Tannochside", "Birkenshaw"],
    popularServices: ["loft-conversions", "home-extensions", "bathroom-renovations"],
  },
  {
    slug: "blantyre",
    name: "Blantyre",
    metaTitle: "Joiners Blantyre | Renovations & Joinery",
    metaDescription:
      "Renovation and joinery services in Blantyre, South Lanarkshire. Kitchens, bathrooms, flooring and full refits from trusted local joiners. Free quotes.",
    intro:
      "From High Blantyre to the Village, we deliver renovations and joinery across Blantyre with quick quotes and reliable scheduling.",
    local: [
      "Blantyre's housing is dominated by solid semis and terraces that renovate extremely well: full-house flooring, new internal doors and kitchen refits are our bread and butter here.",
      "We cover High Blantyre, Low Blantyre, Springwell and Auchinraith, and with the M74 on the doorstep we can be on site quickly for surveys and quotes.",
    ],
    landmarks: ["High Blantyre", "Low Blantyre", "Springwell"],
    popularServices: ["doors-and-flooring", "kitchen-renovations", "bathroom-renovations"],
  },
  {
    slug: "cambuslang",
    name: "Cambuslang",
    metaTitle: "Joiners Cambuslang | Renovations & Joinery",
    metaDescription:
      "Joinery and renovation services in Cambuslang and Halfway. Kitchens, bathrooms, bespoke joinery and full renovations. Free fixed quotes.",
    intro:
      "Covering Cambuslang, Halfway and Flemington with everything from bespoke fitted furniture to complete home refurbishments.",
    local: [
      "Cambuslang's Victorian villas around the Main Street and newer developments toward Newton give us a real mix of work: period-sympathetic renovation on one job, sharp modern fit-outs on the next.",
      "We're minutes away via the M74, which means fast surveys, easy scheduling and no travel premiums for Cambuslang customers.",
    ],
    landmarks: ["Cambuslang Main Street", "Halfway", "Newton", "Flemington"],
    popularServices: ["bespoke-joinery", "full-home-renovations", "kitchen-renovations"],
  },
  {
    slug: "rutherglen",
    name: "Rutherglen",
    metaTitle: "Joiners Rutherglen | Renovations & Joinery",
    metaDescription:
      "Renovations, kitchens, bathrooms and joinery in Rutherglen and Burnside. Trusted local joiners with free fixed quotes.",
    intro:
      "Scotland's oldest Royal Burgh has some of the area's best period housing, and we renovate it with the care it deserves.",
    local: [
      "Rutherglen and Burnside are full of red sandstone terraces and villas with original features worth keeping. Our joiners restore and replicate skirtings, facings and panelling rather than ripping out character that can't be replaced.",
      "We work across Rutherglen, Burnside, Fernhill and Spittal, on everything from single-room projects to whole-property refurbishments.",
    ],
    landmarks: ["Rutherglen Main Street", "Burnside", "Fernhill"],
    popularServices: ["full-home-renovations", "bespoke-joinery", "bathroom-renovations"],
  },
  {
    slug: "wishaw",
    name: "Wishaw",
    metaTitle: "Joiners Wishaw | Renovations & Joinery",
    metaDescription:
      "Joinery and renovation services in Wishaw, North Lanarkshire. Kitchens, bathrooms, doors, flooring and full renovations. Free quotes.",
    intro:
      "We cover Wishaw and the surrounding ML2 villages with reliable, fixed-price renovation and joinery work.",
    local: [
      "Wishaw's housing stock, from stone terraces near the Main Street to family homes in Coltness and Cambusnethan, renovates well and affordably. Kitchen and bathroom refits are our most requested jobs in the area.",
      "We also cover Newmains, Shotts and Overtown, with surveys usually arranged within a few days of enquiry.",
    ],
    landmarks: ["Wishaw Main Street", "Coltness", "Cambusnethan", "Newmains"],
    popularServices: ["kitchen-renovations", "bathroom-renovations", "doors-and-flooring"],
  },
  {
    slug: "bellshill",
    name: "Bellshill",
    metaTitle: "Joiners Bellshill | Renovations & Joinery",
    metaDescription:
      "Renovation and joinery services in Bellshill and Mossend. Kitchens, bathrooms, flooring and bespoke joinery from trusted local joiners.",
    intro:
      "Bellshill, Mossend and Orbiston are firmly inside our core patch: quick surveys, fixed quotes and joiners who turn up when they say they will.",
    local: [
      "Bellshill's solid semis and terraces are ideal renovation candidates. Full-house door and flooring packages, new kitchens and modernised bathrooms make up most of our work in the town.",
      "With the Raith interchange minutes away we cover Bellshill, Mossend, Orbiston and Holytown without travel charges.",
    ],
    landmarks: ["Bellshill Main Street", "Mossend", "Orbiston"],
    popularServices: ["doors-and-flooring", "kitchen-renovations", "bathroom-renovations"],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
