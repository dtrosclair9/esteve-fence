import type { ServicePage } from "../types"

/**
 * Fence service pages, part A: installation, repair, wood, vinyl, aluminum, chain link.
 * Claims rules (owner review 2026-10-26): only assert what Ross Esteve confirmed.
 * No prices, licensing, years, warranties, timelines, install specs, permit/pool-code
 * details, or brand names. Esteve's does NOT install or service gate openers.
 */
export const servicesA: ServicePage[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. FENCE INSTALLATION
  // ─────────────────────────────────────────────────────────────
  {
    slug: "fence-installation",
    navLabel: "Fence Installation",
    group: "fences",
    title: "Fence Installation in Thibodaux, Houma & Lafourche Parish",
    description:
      "Fence installation across Lafourche, Terrebonne and Assumption parishes. Wood, vinyl, aluminum and chain link fences with matching gates. Free estimates.",
    h1: "Fence Installation in Thibodaux, Houma & Surrounding Areas",
    eyebrow: "Fence installation · Lafourche, Terrebonne & Assumption",
    intro: [
      "Esteve's Fence Company installs fences for homes and businesses across Lafourche, Terrebonne and Assumption parishes. We're locally owned and based in Thibodaux, and we work well beyond it.",
      "We build wood, vinyl, aluminum, chain link, barbed wire and ranch fences, plus walk gates and double gates made to match. Every job starts with a free estimate at your property.",
    ],
    heroImage: "/images/projects/wood/wood-privacy-fence-new-construction.jpg",
    heroAlt: "New wood privacy fence installed on a new-construction home lot near Thibodaux",
    sections: [
      {
        h2: "How does a fence estimate work?",
        body: [
          "We come out to the property, measure, and talk through what you want. You don't need to have the footage figured out ahead of time.",
          "After that you get a price for the entire job, sent as a PDF by text or email. Tearing out and hauling off an old fence, permits, and travel on long jobs are extra charges, and we'll go over those with you.",
        ],
      },
      {
        h2: "Which fence material makes sense for your yard?",
        body: [
          "It depends on what the fence has to do: block the view, keep a dog in, go around a pool, or just mark the line. Each material handles South Louisiana weather a little differently.",
          "Wood is the most common privacy fence here and usually costs the least of the privacy options, but it needs staining or sealing to hold up in the humidity. Vinyl gives you privacy without that upkeep. Aluminum is an open picket fence that doesn't rust, which is why you see it around a lot of pools. Chain link is the economical way to fence a big area or a dog yard. Each one has its own page with more detail.",
          "Plenty of yards mix materials, and any of them can tie into brick columns at the front of the house. Styles, heights and colors vary by material, and we'll show you the options at the estimate.",
        ],
      },
      {
        h2: "What should I know before putting up a fence?",
        body: [
          "Know where your property line is. A recent survey or the property pins is the best way to settle that, and it's worth doing before a fence goes in, since moving one later costs real money.",
          "If you live in a subdivision with an HOA, read the covenants first. Many spell out height, material and color, and some want plans approved before work starts. Bring what you have to the estimate and we'll plan the fence around it.",
        ],
      },
    ],
    included: [
      "Free on-site estimate and measurement",
      "One price for your whole job, sent as a PDF",
      "Wood, vinyl, aluminum, chain link, barbed wire and ranch fences",
      "Matching walk gates and double gates",
      "Brick columns available",
      "Old fence tear-out and haul-off available",
    ],
    gallery: [
      "/images/projects/wood/wood-privacy-fence-backyard-pavilion.jpg",
      "/images/fb/wood/cedar-privacy-fence-cane-field.jpg",
      "/images/projects/wood/wood-privacy-fence-concrete-driveway.jpg",
      "/images/fb/wood/wood-privacy-fence-large-backyard.jpg",
    ],
    faqs: [
      {
        q: "How much does fence installation cost?",
        a: "It depends on the footage, the material, how many gates you need, and whether an old fence has to come out. The estimate is free, and you get a price for the whole job after we measure.",
      },
      {
        q: "Do I need to measure my yard before calling?",
        a: "No. We measure at the free estimate and talk through the details with you there.",
      },
      {
        q: "Do you put up fences for businesses too?",
        a: "Yes, we install residential and commercial fences. Call (985) 414-0858 to set up an estimate.",
      },
      {
        q: "Will you remove my old fence?",
        a: "Yes. Tearing out and hauling off an old fence is an extra charge, and it will be on your estimate.",
      },
      {
        q: "What areas do you serve?",
        a: "We're based in Thibodaux and work across Lafourche, Terrebonne and Assumption parishes plus surrounding areas. Give us your address when you call.",
      },
    ],
    related: ["wood-fence", "vinyl-fence", "aluminum-fence", "fence-repair"],
    serviceType: "Fence installation",
    cardBlurb:
      "Wood, vinyl, aluminum, chain link and ranch fences with matching gates, installed across Lafourche, Terrebonne and Assumption parishes.",
  },

  // ─────────────────────────────────────────────────────────────
  // 2. FENCE REPAIR
  // ─────────────────────────────────────────────────────────────
  {
    slug: "fence-repair",
    navLabel: "Fence Repair",
    group: "fences",
    title: "Fence Repair in Thibodaux, Houma & Lafourche Parish",
    description:
      "Fence repair across Lafourche, Terrebonne and Assumption parishes for leaning posts, broken boards and storm damage. Free estimates from Esteve's Fence Company.",
    h1: "Fence Repair in Thibodaux, Houma & Surrounding Areas",
    eyebrow: "Fence repair · Lafourche, Terrebonne & Assumption",
    intro: [
      "Esteve's Fence Company repairs fences for homes and businesses across Lafourche, Terrebonne and Assumption parishes. Leaning sections, broken boards and storm damage are the usual calls.",
      "We'll come look at it for free and tell you what we see. Sometimes a repair makes sense, and sometimes the fence is better off replaced.",
    ],
    heroImage: "/images/projects/wood/wood-privacy-fence-long-run-rural.jpg",
    heroAlt: "Long wood privacy fence running along a rural backyard in Lafourche Parish",
    sections: [
      {
        h2: "Why is my fence leaning?",
        body: [
          "A leaning fence usually means a post has given out at or below the ground. The boards above it are often fine.",
          "Wood posts tend to rot right at the soil line, where they stay damp the longest. Wet clay can also let a post work loose over time, and strong wind pushes hard on a solid privacy fence. Push on the fence near the worst spot: if a post snaps or feels soft at the ground, it's likely rotted.",
        ],
      },
      {
        h2: "Should I repair or replace my fence?",
        body: [
          "Repair usually makes sense when the damage is limited to a few spots. Replacement makes more sense when posts are failing up and down the line or the boards are soft and splitting.",
          "Another fair question is whether the fence still does its job. If it no longer keeps the dog in or blocks the view, and it's been patched before, a new fence may be the better spend. We'll give you our honest take at the estimate.",
        ],
      },
      {
        h2: "What should I do after a storm damages my fence?",
        body: [
          "Take photos before anything gets moved. If you're filing an insurance claim, those pictures are your evidence, and your insurance company decides what's covered.",
          "Get wide shots that show the whole damaged stretch, then close-ups of broken posts, boards and gates. If a tree or limb came down on the fence, photograph it before it's cut up. Then call us for an estimate. Our proposal comes as a PDF, so it's easy to pass along.",
        ],
      },
    ],
    included: [
      "Free on-site estimate",
      "Repairs for leaning sections, broken boards and storm damage",
      "Residential and commercial fence repair",
      "A straight answer on repair vs. replacement",
      "Price for the whole job, sent as a PDF",
    ],
    gallery: [
      "/images/fb/gates/wood-privacy-double-gate.jpg",
      "/images/projects/wood/wood-picket-fence-side-yard.jpg",
      "/images/fb/chain-link/black-chain-link-fence-residential.jpg",
    ],
    faqs: [
      {
        q: "Can you fix just part of my fence?",
        a: "Often, yes. It depends on what failed and how much of the fence is affected. We'll look at it at the free estimate and tell you what makes sense.",
      },
      {
        q: "How can I tell if a fence post is rotted?",
        a: "Push a screwdriver into the post right at the soil line. If it sinks in easily or the wood comes away soft, the post is likely rotted. A post that wobbles but feels solid may just be loose in the ground.",
      },
      {
        q: "Will you handle my insurance claim?",
        a: "No, the claim stays between you and your insurance company. We can give you a price for the repair, and the proposal comes as a PDF you can send along.",
      },
      {
        q: "Can you work on my gate opener?",
        a: "No. We don't install or work on automatic gate openers. When a customer needs that, we bring in a separate licensed gate company.",
      },
      {
        q: "How do I get a repair estimate?",
        a: "Call (985) 414-0858, Monday through Saturday, 7:30am to 6pm. Estimates are free.",
      },
    ],
    related: ["fence-installation", "wood-fence", "automatic-gates"],
    serviceType: "Fence repair",
    cardBlurb:
      "Repairs for leaning, broken and storm-damaged fences, with an honest answer on whether repair or replacement makes more sense.",
  },

  // ─────────────────────────────────────────────────────────────
  // 3. WOOD FENCE
  // ─────────────────────────────────────────────────────────────
  {
    slug: "wood-fence",
    navLabel: "Wood Fences",
    group: "fences",
    title: "Wood Privacy Fence Installation in Thibodaux & Houma",
    description:
      "Wood privacy fence installation across Lafourche, Terrebonne and Assumption parishes. Several styles and heights, matching gates and brick columns available.",
    h1: "Wood Privacy Fences in Thibodaux & Houma",
    eyebrow: "Wood fences · Lafourche, Terrebonne & Assumption",
    intro: [
      "A wood fence is still the most common privacy fence on South Louisiana lots. Esteve's Fence Company installs wood fences for homes and businesses across Lafourche, Terrebonne and Assumption parishes.",
      "You can pick from several styles and heights, add a matching walk gate or double gate, and set the fence between brick columns if you want a more permanent look.",
    ],
    heroImage: "/images/projects/wood/cedar-board-on-board-fence-columns-long-run.jpg",
    heroAlt: "Long run of stained board-on-board wood fence with white columns across a large lot",
    sections: [
      {
        h2: "Is cedar or pine better for a fence?",
        body: [
          "Cedar resists rot and insects on its own, while pressure-treated pine costs less and relies on the treatment to hold up outdoors. Both are common fence woods.",
          "Cedar tends to stay straighter as it dries and takes stain well. Pine is strong and budget-friendly, but it moves more as it dries, so some boards may twist or cup early on. We can go over wood choices at your estimate.",
        ],
      },
      {
        h2: "How does a wood fence hold up in South Louisiana?",
        body: [
          "A wood fence holds up fine here with some upkeep, but humidity, termites and soil that rarely dries out are hard on it. Posts usually go first, right at the ground line, where the wood stays damp the longest.",
          "Keep soil, mulch and grass clippings pulled back from the base of the posts, and don't let sprinklers soak the fence every day. If you see mud tubes running up a post, call a pest control company.",
        ],
      },
      {
        h2: "Do I need to stain or seal a new wood fence?",
        body: [
          "You don't have to, but stain or sealer keeps a wood fence looking good a lot longer in our climate. Bare wood turns gray, splits along the grain and grows mildew in the humidity.",
          "New pressure-treated pine is often too wet to take stain well at first, so it usually needs time to dry. Plan on re-coating as the color fades. The sunny side of a fence fades faster than the shady side.",
        ],
      },
    ],
    included: [
      "Free on-site estimate and measurement",
      "Several wood fence styles and heights",
      "Matching walk gates and double gates",
      "Brick columns available",
      "Old fence tear-out and haul-off available",
    ],
    gallery: [
      "/images/projects/wood/wood-shadowbox-fence-side-yard.jpg",
      "/images/fb/wood/dog-ear-picket-fence-side-yard.jpg",
      "/images/fb/wood/horizontal-wood-fence-new-build.jpg",
      "/images/fb/brick-columns/brick-columns-cedar-lattice-fence.jpg",
    ],
    faqs: [
      {
        q: "Which side of a wood fence should face the neighbor?",
        a: "Traditionally the finished side faces out toward the neighbor and the street, with the rails on your side. Some HOAs require it, so check your covenants.",
      },
      {
        q: "Why are the boards on my new pine fence twisting?",
        a: "Pressure-treated pine is wet when it's new and moves as it dries out. Some twisting and cupping early on is normal.",
      },
      {
        q: "Can you put a wood fence between brick columns?",
        a: "Yes. We build wood fences between brick columns, including privacy fences and cedar lattice.",
      },
      {
        q: "Can you add a gate to my existing wood fence?",
        a: "Call us at (985) 414-0858 and we'll take a look. It depends on the fence and the opening.",
      },
      {
        q: "How long does a wood fence last?",
        a: "It varies with the wood, the yard and how well it's kept up. Staining or sealing and keeping the posts dry at the base both help a lot.",
      },
    ],
    related: ["fence-installation", "brick-columns", "fence-repair"],
    serviceType: "Wood fence installation",
    cardBlurb:
      "Wood privacy fences in several styles and heights, with matching gates and brick columns available.",
  },

  // ─────────────────────────────────────────────────────────────
  // 4. VINYL FENCE
  // ─────────────────────────────────────────────────────────────
  {
    slug: "vinyl-fence",
    navLabel: "Vinyl Fences",
    group: "fences",
    title: "Vinyl Privacy Fence Installation in Thibodaux & Houma",
    description:
      "Vinyl fence installation across Lafourche, Terrebonne and Assumption parishes for homes, businesses and subdivision entrances. Several colors and styles.",
    h1: "Vinyl Fences in Thibodaux & Houma",
    eyebrow: "Vinyl fences · Lafourche, Terrebonne & Assumption",
    intro: [
      "A vinyl fence gives you privacy without the staining and sealing that come with wood. Esteve's Fence Company installs vinyl fences for homes, businesses and subdivision entrances across Lafourche, Terrebonne and Assumption parishes.",
      "Vinyl comes in several colors and styles, and it pairs well with brick columns. We'll show you the options at your free estimate.",
    ],
    heroImage: "/images/projects/vinyl/white-vinyl-fence-backyard.jpg",
    heroAlt: "White vinyl privacy fence along a backyard beside a screened porch",
    sections: [
      {
        h2: "Is a vinyl fence worth it compared to wood?",
        body: [
          "For many owners it is, because vinyl usually costs more up front but needs very little upkeep afterward. There's no staining and no boards rotting out.",
          "Vinyl doesn't soak up water, so humidity and wet ground don't break it down the way they do wood, and termites leave it alone. The trade-offs: a hard hit from a mower or a falling limb can crack a panel, and the color you pick is the color you keep, since vinyl isn't made to be painted.",
        ],
      },
      {
        h2: "How does vinyl hold up in storms?",
        body: [
          "A solid vinyl privacy fence catches wind like any solid fence, so a strong storm puts a lot of load on the posts. Lots facing open ground see more wind than ones tucked between houses.",
          "Styles with a lattice or spaced top let some air through. If a panel does get damaged, vinyl parts can often be replaced piece by piece, though matching an older fence that has weathered can be tricky.",
        ],
      },
      {
        h2: "Vinyl fences with brick columns",
        body: [
          "Vinyl panels set between brick columns is a look that works well for subdivision entrances and the front of a property. We've built a subdivision entrance this way.",
          "The columns give the fence some weight and match brick homes, and the vinyl fills the spans without a staining budget. HOA boards and developers can call us to set up an estimate.",
        ],
      },
    ],
    included: [
      "Free on-site estimate and measurement",
      "Several vinyl colors and styles",
      "Matching walk gates and double gates",
      "Vinyl panels between brick columns",
      "Old fence tear-out and haul-off available",
    ],
    gallery: [
      "/images/fb/brick-columns/subdivision-vinyl-fence-brick-columns-entrance.jpg",
      "/images/fb/vinyl/vinyl-fence-brick-columns-sidewalk.jpg",
      "/images/fb/vinyl/vinyl-fence-brick-columns-oak.jpg",
      "/images/fb/vinyl/subdivision-vinyl-fence-brick-columns-corner.jpg",
    ],
    faqs: [
      {
        q: "How do you clean a vinyl fence?",
        a: "A garden hose and a soft brush with mild soap take care of most dirt. If you use a pressure washer, keep it on a low setting so it doesn't scuff the panels.",
      },
      {
        q: "Can you paint a vinyl fence?",
        a: "It isn't recommended. Paint doesn't bond well to vinyl and tends to peel, so pick the color you want at the start.",
      },
      {
        q: "Is a vinyl fence more expensive than wood?",
        a: "Usually, yes, at least up front. You make some of that back by never staining it. We can price both at your estimate if you're deciding.",
      },
      {
        q: "What colors does vinyl fence come in?",
        a: "There are several colors and styles to choose from. We'll go over the options at your free estimate.",
      },
      {
        q: "Will my HOA allow a vinyl fence?",
        a: "Many do, but rules vary by neighborhood. Check your covenants for allowed materials, colors and heights, and whether plans need approval first.",
      },
    ],
    related: ["fence-installation", "brick-columns", "pool-fencing"],
    serviceType: "Vinyl fence installation",
    cardBlurb:
      "Vinyl fences in several colors and styles that skip the staining, including vinyl panels set between brick columns.",
  },

  // ─────────────────────────────────────────────────────────────
  // 5. ALUMINUM FENCE
  // ─────────────────────────────────────────────────────────────
  {
    slug: "aluminum-fence",
    navLabel: "Aluminum Fences",
    group: "fences",
    title: "Aluminum Fence Installation in Thibodaux & Houma, LA",
    description:
      "Aluminum fence installation across Lafourche, Terrebonne and Assumption parishes for pools, yards and driveways. Matching gates. Free estimates from Esteve's.",
    h1: "Aluminum Fences in Thibodaux & Houma",
    eyebrow: "Aluminum fences · Pools, yards & gates",
    intro: [
      "An aluminum fence keeps kids and pets in without closing off the view. Esteve's Fence Company installs aluminum fences, pool fences and matching gates across Lafourche, Terrebonne and Assumption parishes.",
      "Aluminum comes in several styles, heights and colors. It costs more per foot than chain link, so it usually goes where people will see it, like the front yard, the pool or the driveway.",
    ],
    heroImage: "/images/projects/aluminum/black-aluminum-fence-new-home.jpg",
    heroAlt: "Black aluminum fence enclosing the yard of a new home",
    sections: [
      {
        h2: "Does aluminum fence rust in Louisiana humidity?",
        body: [
          "No, aluminum doesn't rust. That's the main reason it has replaced iron and steel for most ornamental fencing in South Louisiana.",
          "It gives you the look of a wrought iron fence without the scraping and repainting. The coated finish can chip if a mower or string trimmer catches it, so take care trimming along the posts. Beyond that, an occasional rinse is about all it asks.",
        ],
      },
      {
        h2: "Is aluminum fence good for a pool?",
        body: [
          "Yes, aluminum is one of the most common pool fence materials. It doesn't rust from splashing water, and you can see the pool through it.",
          "Pool barriers have their own rules for height, spacing and gates. We install aluminum fences around pools, and we can go over your pool fence at the free estimate.",
        ],
      },
      {
        h2: "Pairing aluminum with a privacy fence",
        body: [
          "A common layout on bigger lots is a privacy fence across the back and aluminum along the sides or front. You get privacy where you need it and an open view toward the street or the water.",
          "Aluminum walk gates and double driveway gates are made to match the fence. If you want an automatic opener on a gate, we don't install those, but we bring in a separate licensed gate company for that part.",
        ],
      },
    ],
    included: [
      "Free on-site estimate and measurement",
      "Several aluminum styles, heights and colors",
      "Aluminum pool fences",
      "Matching walk gates and double driveway gates",
      "Old fence tear-out and haul-off available",
    ],
    gallery: [
      "/images/projects/pool/black-aluminum-pool-fence-sunset.jpg",
      "/images/fb/gates/black-aluminum-double-driveway-gates.jpg",
      "/images/projects/aluminum/wood-privacy-and-aluminum-fence-backyard.jpg",
      "/images/fb/aluminum/black-aluminum-fence-waterfront-porch.jpg",
    ],
    faqs: [
      {
        q: "Will an aluminum fence keep my dog in?",
        a: "For most dogs, yes, as long as the pickets are close enough that your dog can't squeeze through. Tell us about your dog at the estimate and we'll talk through styles.",
      },
      {
        q: "Does an aluminum fence give any privacy?",
        a: "Very little, since you can see straight through it. If you want privacy on part of the yard, pair it with a wood or vinyl fence along that stretch.",
      },
      {
        q: "How do aluminum fences handle hurricane winds?",
        a: "Open pickets let wind pass through, so the fence takes far less load than a solid privacy fence. Falling limbs and flying debris are the bigger risk.",
      },
      {
        q: "Do you install aluminum pool fences?",
        a: "Yes. We'll go over your pool fence and gate at the free estimate.",
      },
      {
        q: "Can you put an automatic opener on my aluminum gate?",
        a: "We don't install gate openers. When a customer wants one, we bring in a separate licensed gate company.",
      },
    ],
    related: ["pool-fencing", "automatic-gates", "fence-installation"],
    serviceType: "Aluminum fence installation",
    cardBlurb:
      "Aluminum fences that won't rust, for pools, front yards and driveways, with matching walk and driveway gates.",
  },

  // ─────────────────────────────────────────────────────────────
  // 6. CHAIN LINK FENCE
  // ─────────────────────────────────────────────────────────────
  {
    slug: "chain-link-fence",
    navLabel: "Chain Link Fences",
    group: "fences",
    title: "Chain Link Fence Installation in Thibodaux & Houma, LA",
    description:
      "Chain link fence installation across Lafourche, Terrebonne and Assumption parishes for homes, dog yards and businesses. Gates and privacy slats available.",
    h1: "Chain Link Fences in Thibodaux & Houma",
    eyebrow: "Chain link · Residential & commercial",
    intro: [
      "Chain link is the most practical way to fence a big area, keep a dog in, or close off a back lot without paying what a privacy fence costs. Esteve's Fence Company installs chain link for homes and businesses across Lafourche, Terrebonne and Assumption parishes.",
      "We can add matching gates, privacy slats for screening, and barbed wire on top where it fits the job.",
    ],
    heroImage: "/images/projects/commercial/commercial-chain-link-gate-picnic-area.jpg",
    heroAlt: "Galvanized chain link fence and gate enclosing a picnic area beside a commercial building",
    sections: [
      {
        h2: "Is chain link a good choice for my yard?",
        body: [
          "Chain link is a good choice when you want to keep something in or out and privacy isn't the goal. It's usually the economical option per foot.",
          "It works well for dogs because they can't chew through it and you can still see them from the house. It's also easy to repair, and on low ground, water and wind pass right through it.",
        ],
      },
      {
        h2: "Galvanized or coated chain link: what's the difference?",
        body: [
          "Galvanized is the plain silver chain link you see around commercial lots, and it's usually the lower-cost choice. Coated chain link adds a colored layer over the wire, which many people prefer for a yard they look at every day.",
          "Both are steel wire with protection against rust. Over many years, galvanized can show rust spots where it stays wet.",
        ],
      },
      {
        h2: "Chain link for businesses",
        body: [
          "Chain link is a standard choice for securing commercial lots, equipment yards and work areas. Privacy slats slide into the mesh to hide equipment or a work yard from the road, and barbed wire can go on top.",
          "We've installed commercial chain link with privacy slats. Call us to set up an estimate for your property.",
        ],
      },
    ],
    included: [
      "Free on-site estimate and measurement",
      "Residential and commercial chain link",
      "Matching walk gates and double gates",
      "Privacy slats for screening",
      "Barbed wire available",
      "Old fence tear-out and haul-off available",
    ],
    gallery: [
      "/images/fb/chain-link/black-chain-link-fence-backyard.jpg",
      "/images/fb/chain-link/black-chain-link-gate.jpg",
      "/images/fb/chain-link/black-chain-link-fence-oak-trees.jpg",
      "/images/fb/commercial/galvanized-chain-link-commercial-oak.jpg",
    ],
    faqs: [
      {
        q: "Is chain link fence cheaper than wood?",
        a: "Usually, yes. Chain link is typically one of the lowest-cost fences per foot. Gates and slats add to the price, and your estimate will show the whole job.",
      },
      {
        q: "Can privacy slats be added to chain link?",
        a: "Yes, slats slide into the mesh for screening. Call us and we'll go over it at the estimate.",
      },
      {
        q: "What height chain link do I need?",
        a: "It depends on what you're keeping in or out. We'll talk through height at the free estimate.",
      },
      {
        q: "Can chain link go on a slope?",
        a: "Generally, yes. Chain link fabric flexes, so it follows uneven ground better than most fence types.",
      },
      {
        q: "Do you add barbed wire to chain link?",
        a: "Yes, barbed wire is one of the fences we install. We'll go over where it makes sense at the estimate.",
      },
    ],
    related: ["commercial-fencing", "farm-ranch-fencing", "fence-repair"],
    serviceType: "Chain link fence installation",
    cardBlurb:
      "Chain link for homes, dog yards and businesses, with gates, privacy slats and barbed wire available.",
  },
]
