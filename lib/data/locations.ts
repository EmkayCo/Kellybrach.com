// ─── Northeast Location SEO Data ──────────────────────────────────────────
// Each entry generates a dedicated landing page at /locations/[slug]
// optimized for local search: "lost dog tracker [location]", etc.

export interface Location {
  slug: string
  name: string           // Page heading / display name
  stateCode: string      // e.g. 'NY'
  tier: 1 | 2 | 3        // 1 = primary market, 2 = secondary, 3 = extended
  metaTitle: string
  metaDescription: string
  heroHeadline: string
  heroSubline: string
  intro: string          // Opening SEO paragraph
  localContext: string   // Specific cities/counties/terrain context
  whyKelly: string       // Why Kelly Brach specifically for this area
  closingNote: string    // Urgency + CTA prose
  areasServed: string[]  // Bullet list of specific places
  nearbyPage?: string    // Related location slug to cross-link
}

export const LOCATIONS: Location[] = [
  // ── TIER 1: PRIMARY MARKETS ──────────────────────────────────────────────

  {
    slug: 'long-island-ny',
    name: 'Long Island, NY',
    stateCode: 'NY',
    tier: 1,
    metaTitle: 'Lost Pet K9 Tracker — Long Island, NY | Kelly Brach K9',
    metaDescription:
      'Professional lost pet K9 tracking on Long Island, NY. Serving Nassau County, Suffolk County, and all Long Island communities. GPS-documented scent tracking with 1500+ searches. Call 631-973-LOST.',
    heroHeadline: 'Lost Pet Tracking on Long Island',
    heroSubline:
      'Home base. Fastest response times. Six trained K9s ready for Nassau and Suffolk County.',
    intro:
      'Kelly Brach K9 is based in Kings Park on Long Island\'s North Shore — which means when your pet goes missing anywhere on Long Island, you get the fastest possible response. We cover all of Nassau County and Suffolk County as our primary service area, from Montauk to the Queens border. With over 1,500 searches conducted and six trained K9s on the team, we have tracked lost dogs and cats through every type of terrain Long Island has to offer: dense pine barrens, suburban neighborhoods, marshlands, beachfronts, and everything in between.',
    localContext:
      'Long Island presents unique challenges for lost pet recovery. The patchwork of suburban neighborhoods, wetlands, state parks, and parkway corridors means a missing pet can travel unpredictably across multiple terrain types within hours. Pets lost near Pine Barrens preserve land can wander miles in a short time. Beach communities and waterfront areas add navigational complexity. Our K9s have worked searches in Smithtown, Huntington, Babylon, Islip, Brookhaven, Riverhead, Southampton, East Hampton, Hempstead, North Hempstead, and Oyster Bay — every township in the county.',
    whyKelly:
      'Kelly Brach started this work on Long Island. The scent trails here, the park systems, the neighborhoods — this is her home ground. Every search is GPS-documented so you receive a map of your pet\'s actual travel route, not just a general direction. That data tells you exactly where to set humane traps and concentrate your posting efforts. No other service in the region provides this level of documented evidence as standard practice.',
    closingNote:
      'Scent trails degrade within hours. If your pet went missing on Long Island, call now — not tomorrow. We respond 7 days a week.',
    areasServed: [
      'Nassau County — all towns and villages',
      'Suffolk County — all towns and villages',
      'Smithtown, Kings Park, Hauppauge',
      'Huntington, Cold Spring Harbor, Northport',
      'Babylon, Amityville, Massapequa',
      'Riverhead, Southampton, East Hampton',
      'Hempstead, Garden City, Long Beach',
      'Oyster Bay, Farmingdale, Bethpage',
      'Stony Brook, Port Jefferson, Setauket',
      'Shelter Island (ferry transport)',
    ],
    nearbyPage: 'new-york-city',
  },

  {
    slug: 'new-york-city',
    name: 'New York City',
    stateCode: 'NY',
    tier: 1,
    metaTitle: 'Lost Pet K9 Tracker — New York City, NY | Kelly Brach K9',
    metaDescription:
      'Professional K9 scent tracking for lost pets in New York City — Brooklyn, Queens, Manhattan, the Bronx, and Staten Island. GPS-documented searches. Call 631-973-LOST.',
    heroHeadline: 'Lost Pet Tracking in New York City',
    heroSubline:
      'All five boroughs. Urban terrain specialists. GPS evidence on every search.',
    intro:
      'Losing a pet in New York City is one of the most disorienting experiences imaginable — the density, the noise, the subway entrances, the parks packed with people. Kelly Brach K9 regularly works lost pet searches across all five boroughs. We have tracked dogs and cats through Brooklyn\'s Prospect Park, Queens\' Forest Hills and Jamaica Bay Wildlife Refuge, the Bronx\'s Van Cortlandt Park, Manhattan\'s Riverside Park and Inwood Hill, and Staten Island\'s Greenbelt. Urban tracking demands a different skill set, and our K9s have it.',
    localContext:
      'NYC terrain varies dramatically by borough. Brooklyn\'s grid of brownstone blocks and Greenwood Cemetery\'s 478 acres create very different tracking conditions than the elevated highway corridors and industrial waterfront of Queens. The Bronx offers Pelham Bay Park — the city\'s largest park — and the New York Botanical Garden, both of which can harbor a lost pet for days. Manhattan\'s island geography concentrates escape routes. Staten Island\'s suburban-rural mix most resembles the Long Island terrain we know best. We factor all of this into our approach on every call.',
    whyKelly:
      'Most K9 tracking services operate purely in suburban or rural settings and hesitate at dense urban work. We do not. Our GPS documentation is especially valuable in NYC searches because the data identifies exactly which direction your pet traveled, whether it crossed major roads, and where the trail ends — critical information when you are coordinating a search across multiple city blocks with dozens of volunteers.',
    closingNote:
      'In a city of millions, a missing pet needs professional eyes and a trained nose on the ground. Call immediately — trail time matters even more in urban terrain.',
    areasServed: [
      'Brooklyn (Kings County)',
      'Queens (Queens County)',
      'Manhattan (New York County)',
      'The Bronx (Bronx County)',
      'Staten Island (Richmond County)',
      'Westchester County (immediate NYC suburbs)',
      'Rockland County',
    ],
    nearbyPage: 'hudson-valley-ny',
  },

  {
    slug: 'new-jersey',
    name: 'New Jersey',
    stateCode: 'NJ',
    tier: 1,
    metaTitle: 'Lost Pet K9 Tracking — New Jersey | Kelly Brach K9',
    metaDescription:
      'Professional lost pet K9 tracking throughout New Jersey. North NJ, Central NJ, and the Jersey Shore. GPS-documented scent searches. Based on Long Island — fast travel to NJ. Call 631-973-LOST.',
    heroHeadline: 'Lost Pet K9 Tracking in New Jersey',
    heroSubline:
      'From Bergen County to the Shore. GPS evidence. 1,500+ searches conducted.',
    intro:
      'New Jersey is one of our most active service areas outside of Long Island. Whether your pet went missing in the dense suburbs of Bergen or Essex County, the wooded areas of Morris or Hunterdon County, or the barrier islands and beachfront communities of the Jersey Shore, Kelly Brach K9 travels to New Jersey regularly for lost pet searches. Our K9s have tracked across the full range of New Jersey terrain — from the Pine Barrens in the south to the Palisades along the Hudson in the north.',
    localContext:
      'New Jersey\'s geography creates varied tracking challenges. The Highlands region in the northwest features steep forested terrain with limited road access. The Pine Barrens — over a million acres of undeveloped land — can be dangerous territory for a lost pet and its owners. The dense suburban corridors along Route 1 and the Turnpike introduce high traffic risk quickly. We assess terrain before every search to identify the highest-priority recovery zones first.',
    whyKelly:
      'We cross into New Jersey with zero hesitation. From Kings Park, we can reach most of northern and central New Jersey in under two hours — faster than services based further into New England. Every NJ search gets the same GPS documentation as all our work: you leave with a map, not just a story.',
    closingNote:
      'Don\'t assume a NJ address means we won\'t come. Call us — we discuss every case individually and we travel.',
    areasServed: [
      'Bergen County — Fort Lee, Hackensack, Paramus',
      'Essex County — Newark, Montclair, Livingston',
      'Morris County — Morristown, Parsippany, Madison',
      'Middlesex County — New Brunswick, Edison, Woodbridge',
      'Somerset County — Bridgewater, Basking Ridge',
      'Monmouth County — Red Bank, Freehold, Asbury Park',
      'Ocean County — Toms River, Brick, Lakewood',
      'Burlington County — Cherry Hill adjacent, Burlington City',
      'Hunterdon & Warren Counties — northwestern NJ',
      'Hudson County — Jersey City, Hoboken, Bayonne',
      'Union County — Elizabeth, Summit, Westfield',
      'Passaic County — Paterson, Wayne, Clifton',
    ],
    nearbyPage: 'connecticut',
  },

  {
    slug: 'connecticut',
    name: 'Connecticut',
    stateCode: 'CT',
    tier: 1,
    metaTitle: 'Lost Pet K9 Tracking — Connecticut | Kelly Brach K9',
    metaDescription:
      'Professional K9 scent tracking for lost pets statewide in Connecticut — Fairfield, New Haven, Hartford, and beyond. GPS-documented. Call 631-973-LOST.',
    heroHeadline: 'Lost Pet K9 Tracking in Connecticut',
    heroSubline:
      'Statewide coverage. Fairfield to Hartford. GPS-documented every time.',
    intro:
      'Connecticut is well within our regular service area. We travel to CT searches frequently, with Fairfield and New Haven County representing the fastest travel from our Long Island base via I-95 or the Merritt Parkway. For searches further into Hartford, Tolland, or Windham County, we plan travel accordingly and will overnight when searches require multi-day effort. Connecticut\'s mix of wooded suburban preserves, rocky ridgelines, and river corridors demands experienced K9 handlers.',
    localContext:
      'Fairfield County\'s dense suburb-to-urban gradient (Stamford through Greenwich to Bridgeport) is terrain we know well. New Haven County includes Yale\'s urban campus and the sprawling West Rock Ridge State Park. Hartford\'s river valley communities and eastern Connecticut\'s quieter rural towns each present unique scent-tracking conditions. The Quinnipiac, Housatonic, and Connecticut River corridors can channel a lost pet\'s movement in predictable — and trackable — ways.',
    whyKelly:
      'Most Connecticut residents assume professional K9 pet tracking services don\'t exist nearby. They do — call us. We bring full GPS documentation to every CT search, the same way we work every case. You\'ll have an actual map of your pet\'s route and a specific action plan, not just a general area.',
    closingNote:
      'Whether you\'re in Westport or Woodstock, call us before giving up hope. Trail quality degrades by the hour.',
    areasServed: [
      'Fairfield County — Greenwich, Stamford, Westport, Darien, Norwalk, Bridgeport',
      'New Haven County — New Haven, Hamden, Milford, Shelton, Derby',
      'Hartford County — Hartford, West Hartford, Simsbury, Avon, Glastonbury',
      'Litchfield County — Torrington, Litchfield, Canaan',
      'Middlesex County — Middletown, Essex, Old Saybrook',
      'New London County — New London, Groton, Norwich, Mystic',
      'Tolland County — Tolland, Coventry, Storrs (UConn area)',
      'Windham County — Putnam, Killingly (eastern CT)',
    ],
    nearbyPage: 'new-jersey',
  },

  // ── TIER 2: SECONDARY MARKETS ─────────────────────────────────────────────

  {
    slug: 'hudson-valley-ny',
    name: 'Hudson Valley, NY',
    stateCode: 'NY',
    tier: 2,
    metaTitle: 'Lost Pet K9 Tracking — Hudson Valley, NY | Kelly Brach K9',
    metaDescription:
      'Professional K9 scent tracking for lost pets in the Hudson Valley — Westchester, Rockland, Orange, Putnam, and Dutchess County. GPS-documented. Call 631-973-LOST.',
    heroHeadline: 'Lost Pet K9 Tracking in the Hudson Valley',
    heroSubline:
      'Westchester through Dutchess County. Wooded terrain specialists. GPS every time.',
    intro:
      'The Hudson Valley is one of the most challenging regions for lost pet recovery in the Northeast. Dense deciduous forest, steep rocky ridgelines, river bottomland, and farmland patchwork create complex terrain where a lost pet can travel far and fast. Kelly Brach K9 works Westchester, Rockland, Orange, Putnam, and Dutchess Counties on a regular basis. The region\'s proximity to New York City means many families have recently relocated with pets unfamiliar with rural and semi-rural terrain — pets that go missing quickly and move unpredictably.',
    localContext:
      'Westchester County\'s combination of Bronx River greenway, Croton watershed reservoirs, and dense suburbs is terrain we know well from NYC-adjacent searches. Rockland County\'s Harriman State Park — 47,000 acres of forest and ridgeline — is one of the most demanding search environments in the region. Orange County extends into true agricultural land. Putnam and Dutchess Counties add Hudson River frontage, rail trail corridors, and the Catskill foothills to the mix. Each requires a different tracking strategy.',
    whyKelly:
      'We don\'t just follow a dog\'s nose and hand you a pamphlet. Every Hudson Valley search comes with a GPS map of your pet\'s actual travel route — which ridgeline it crossed, which stream it followed, which direction it was moving when the trail went cold. That data is essential for placing traps and focusing a volunteer search.',
    closingNote:
      'The Hudson Valley\'s forests can swallow a missing pet quickly. Don\'t wait to call.',
    areasServed: [
      'Westchester County — White Plains, Yonkers, Scarsdale, Mount Vernon, Ossining, Tarrytown',
      'Rockland County — New City, Nyack, Suffern, Haverstraw',
      'Orange County — Newburgh, Middletown, Monroe, Warwick',
      'Putnam County — Carmel, Brewster, Cold Spring',
      'Dutchess County — Poughkeepsie, Beacon, Rhinebeck, Hyde Park',
      'Sullivan County — Monticello, Liberty (contact to confirm)',
      'Ulster County — Kingston, Woodstock, Saugerties (contact to confirm)',
    ],
    nearbyPage: 'new-york-city',
  },

  {
    slug: 'pennsylvania',
    name: 'Eastern Pennsylvania',
    stateCode: 'PA',
    tier: 2,
    metaTitle: 'Lost Pet K9 Tracking — Eastern Pennsylvania | Kelly Brach K9',
    metaDescription:
      'Professional K9 scent tracking for lost pets in eastern Pennsylvania — Philadelphia, Bucks County, Montgomery County, Delaware County, and the Lehigh Valley. GPS-documented. Call 631-973-LOST.',
    heroHeadline: 'Lost Pet K9 Tracking in Eastern Pennsylvania',
    heroSubline:
      'Philadelphia metro, Bucks County, the Lehigh Valley. GPS-documented scent searches.',
    intro:
      'Eastern Pennsylvania is one of the furthest regions we regularly travel to, and we make that trip when the case calls for it. The Philadelphia metro area — including Bucks, Montgomery, Delaware, and Chester Counties — is a natural destination for us given its population density and the volume of lost pet cases in suburban and semi-rural terrain. The Lehigh Valley, with Allentown, Bethlehem, and Easton, sits at a comfortable travel distance and is an area we\'ve worked multiple times.',
    localContext:
      'The Philadelphia suburbs present a patchwork of highly developed corridors (Route 30, Route 1, the Main Line) adjacent to preserved open space like Valley Forge National Historical Park, Wissahickon Valley Park, and the Brandywine Creek Natural Area. Pets escaping into these corridors can move miles before reaching open farmland. Bucks County\'s Delaware River waterfront adds a directional element — lost dogs frequently follow rivers downstream. We factor this geography into every search plan.',
    whyKelly:
      'Travel from Long Island to eastern PA runs roughly three to four hours depending on location. For a serious search, that travel time is offset by the quality of the evidence we gather. Unlike services that provide a general search and a guess, we deliver a GPS map of your pet\'s actual route — and that map tells you exactly where the trail ends and where to focus recovery efforts.',
    closingNote:
      'Call us before you assume no professional service is available in your area. We have traveled to eastern PA many times and will discuss your case.',
    areasServed: [
      'Philadelphia County — Philadelphia city',
      'Bucks County — Doylestown, Newtown, New Hope, Langhorne',
      'Montgomery County — Norristown, Lansdale, Blue Bell',
      'Delaware County — Media, Chester, Havertown',
      'Chester County — West Chester, Exton, Kennett Square',
      'Lehigh County — Allentown, Emmaus, Whitehall',
      'Northampton County — Bethlehem, Easton, Nazareth',
    ],
    nearbyPage: 'new-jersey',
  },

  // ── TIER 3: EXTENDED COVERAGE ─────────────────────────────────────────────

  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    stateCode: 'MA',
    tier: 3,
    metaTitle: 'Lost Pet K9 Tracking — Massachusetts | Kelly Brach K9',
    metaDescription:
      'Professional K9 scent tracking for lost pets in Massachusetts. Select areas — contact to confirm availability. GPS-documented searches. Call 631-973-LOST.',
    heroHeadline: 'Lost Pet K9 Tracking in Massachusetts',
    heroSubline:
      'Select MA coverage — contact us to confirm. We travel for the right case.',
    intro:
      'Massachusetts is at the outer edge of our regular travel radius, but it is not outside our reach. We have traveled to MA for searches before and will do so again for the right case. Eastern Massachusetts — Greater Boston, the South Shore, the Cape, and the Pioneer Valley — are the areas most accessible for us. If your pet is missing in Massachusetts and you cannot find a local K9 handler, call us. We would rather spend two minutes on the phone working out travel logistics than have you go without help.',
    localContext:
      'Greater Boston\'s urban-to-suburban gradient from downtown through Newton, Brookline, and into the MetroWest suburbs presents familiar terrain to experienced handlers. The Cape Cod National Seashore and the woods of the South Shore offer challenging rural environments. The Pioneer Valley\'s Connecticut River bottomland and Quabbin Reservoir watershed in central MA are prime examples of terrain that makes GPS documentation essential — the data tells you which side of the reservoir your pet was on.',
    whyKelly:
      'We won\'t pretend that a Massachusetts search is as easy to arrange as a Long Island one. Travel takes time and adds cost. But if you\'re in eastern Massachusetts and you\'re out of options, call us. Every search we do follows the same GPS documentation standard regardless of where we travel.',
    closingNote:
      'Please call to discuss your location, the situation, and logistics. We will be direct about what is feasible.',
    areasServed: [
      'Greater Boston — Boston, Cambridge, Somerville, Newton, Brookline',
      'North Shore — Salem, Beverly, Gloucester, Marblehead',
      'South Shore — Quincy, Brockton, Plymouth',
      'Cape Cod — Falmouth, Barnstable, Orleans (seasonal access)',
      'MetroWest — Framingham, Natick, Milford',
      'Pioneer Valley — Springfield, Northampton, Amherst (contact to confirm)',
    ],
    nearbyPage: 'rhode-island',
  },

  {
    slug: 'rhode-island',
    name: 'Rhode Island',
    stateCode: 'RI',
    tier: 3,
    metaTitle: 'Lost Pet K9 Tracking — Rhode Island | Kelly Brach K9',
    metaDescription:
      'Professional K9 scent tracking for lost pets in Rhode Island. Available upon request — contact us to confirm. GPS-documented. Call 631-973-LOST.',
    heroHeadline: 'Lost Pet K9 Tracking in Rhode Island',
    heroSubline: 'Available upon request. Call to discuss your case.',
    intro:
      'Rhode Island may be the smallest state, but it has real terrain diversity — from Providence\'s urban core to the wooded hills of the northwest to the beaches of Narragansett Bay. We travel to Rhode Island on request, and we take those requests seriously. If your pet has gone missing in RI and you can\'t find a local K9 trailing service, call us. We will be honest about timing and travel, and we will tell you what you need to know right now even before we can get there.',
    localContext:
      'Providence County and the immediate metro area represent the most accessible RI locations from our Long Island base. The Blackstone Valley corridor, Lincoln Woods State Park, and the bay-adjacent communities of Narragansett and Newport are examples of RI environments where professional K9 documentation adds real value. The state\'s compact size means a pet missing anywhere in RI is rarely far from the coast or a major population center — which affects search strategy.',
    whyKelly:
      'When you can\'t find anyone locally, call us. We\'ve done longer trips. What matters to us is the trail — and trails don\'t care what state they\'re in.',
    closingNote:
      'Call 631-973-LOST. We\'ll talk through your situation and be honest about whether and when we can be there.',
    areasServed: [
      'Providence County — Providence, North Providence, Cranston, Johnston',
      'Kent County — Warwick, Coventry, West Warwick',
      'Washington County — South Kingstown, Narragansett, Westerly',
      'Newport County — Newport, Middletown, Portsmouth, Tiverton',
      'Bristol County — Bristol, Barrington, Warren',
    ],
    nearbyPage: 'massachusetts',
  },

  {
    slug: 'northeast',
    name: 'Northeast United States',
    stateCode: 'NE',
    tier: 3,
    metaTitle: 'Lost Pet K9 Tracking — Northeast US | Kelly Brach K9',
    metaDescription:
      'Professional K9 scent tracking for lost pets throughout the Northeast — NY, NJ, CT, PA, MA, RI. GPS-documented searches. Based on Long Island. Call 631-973-LOST.',
    heroHeadline: 'Lost Pet K9 Tracking Across the Northeast',
    heroSubline:
      'NY · NJ · CT · PA · MA · RI — 1,500+ searches. GPS evidence. Six K9s.',
    intro:
      'Kelly Brach K9 is the Northeast\'s most experienced GPS-documented lost pet K9 tracking service. Based in Kings Park, NY on Long Island\'s North Shore, we travel throughout New York, New Jersey, Connecticut, Pennsylvania, Massachusetts, and Rhode Island — and beyond for the right case. With six trained K9s and over 1,500 searches conducted, our team has worked in urban apartment complexes, coastal marshes, dense Pine Barrens wilderness, mountain ridgelines, and everything in between.',
    localContext:
      'The Northeast\'s varied terrain — from New York City\'s five boroughs to Pennsylvania\'s Pocono ridge systems, from the Connecticut shore to the Berkshire hills — demands genuine expertise in scent tracking across different environments. Suburban pet populations are dense, which means more competing scents. Urban environments add noise and traffic complexity. Rural terrain means greater distances to cover. We have worked all of it.',
    whyKelly:
      'Every search we conduct is GPS-documented. That means you receive a map — not a guess — showing the exact route your pet traveled, where the trail crossed roads, where it entered wooded areas, and where it ended. No other service in the region provides this level of evidence as standard practice. That data is what turns a missing pet situation into an actionable recovery plan.',
    closingNote:
      'If your pet is missing anywhere in the Northeast, do not wait. Every hour the scent trail degrades. Call now.',
    areasServed: [
      'New York — Long Island, NYC, Hudson Valley, Upstate',
      'New Jersey — statewide',
      'Connecticut — statewide',
      'Pennsylvania — eastern PA and Philadelphia metro',
      'Massachusetts — select areas',
      'Rhode Island — upon request',
      'Other Northeast states — contact to discuss',
    ],
    nearbyPage: 'long-island-ny',
  },
]

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug)
}

export function getLocationsByTier(tier: 1 | 2 | 3): Location[] {
  return LOCATIONS.filter((l) => l.tier === tier)
}
