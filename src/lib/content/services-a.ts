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
      "Esteve's Fence Company is locally owned and based in Thibodaux. We put up fences for homes and businesses in town and well outside it, including Houma and the towns around it.",
      "We build wood, vinyl, aluminum, chain link, barbed wire and ranch fences, and we build gates to go with them. Estimates are free and done at your property.",
    ],
    heroImage: "/images/projects/wood/wood-privacy-fence-new-construction.jpg",
    heroAlt: "New wood privacy fence installed on a new-construction home lot near Thibodaux",
    sections: [
      {
        h2: "How does a fence estimate work?",
        body: [
          "We come to your property, measure the fence and go over the details with you. You don't need to know the footage before you call.",
          "Then we send you a price for the entire job as a PDF, by text or email. Tearing out and hauling off an old fence, permits, and travel on long jobs cost extra, and we'll go over those with you.",
        ],
      },
      {
        h2: "Which fence material makes sense for your yard?",
        body: [
          "Start with what the fence needs to do. Blocking the view, keeping a dog in, closing in a pool and marking a property line can each point to a different material.",
          "Wood is usually the cheapest privacy option, but it needs stain or sealer to last in this humidity. Vinyl gives you privacy without that upkeep. Aluminum is an open picket fence that won't rust. Chain link costs the least and covers a big area. Each one has its own page if you want more.",
          "A lot of yards use more than one material, and any of them can run to brick columns at the front of the house. We'll go over styles, heights and colors at the estimate.",
        ],
      },
      {
        h2: "What should I know before putting up a fence?",
        body: [
          "Find out where your property line is. A recent survey or the property pins will tell you, and it's a lot cheaper to sort that out now than to move a fence later.",
          "If you're in a subdivision with an HOA, read the covenants. Many of them set the height, material and color, and some want plans approved first. Bring them to the estimate and we'll work from them.",
        ],
      },
    ],
    included: [
      "Free estimate at your property",
      "Price for your entire job, sent as a PDF",
      "Wood, vinyl, aluminum, chain link, barbed wire and ranch fences",
      "Walk gates and double gates",
      "Brick columns",
      "Old fence removal and haul-off (extra charge)",
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
        a: "The price comes from the footage, the material, the number of gates and whether an old fence has to come out. We give you a number after we measure, and the estimate costs you nothing.",
      },
      {
        q: "Do I need to measure my yard before calling?",
        a: "No. We do the measuring.",
      },
      {
        q: "Do you put up fences for businesses too?",
        a: "We do residential and commercial fences. Call (985) 414-0858 to set up an estimate.",
      },
      {
        q: "Will you remove my old fence?",
        a: "We can. Taking out and hauling off the old fence is an extra charge.",
      },
      {
        q: "What areas do you serve?",
        a: "We're based in Thibodaux and work across Lafourche, Terrebonne and Assumption parishes plus surrounding areas. Give us your address when you call.",
      },
    ],
    related: ["wood-fence", "vinyl-fence", "aluminum-fence", "fence-repair"],
    serviceType: "Fence installation",
    cardBlurb:
      "Wood, vinyl, aluminum, chain link and ranch fences for homes and businesses, with gates to go with them.",
    cta: {
      heading: "Get a price on your fence",
      text: "We measure at your place and send you the price.",
    },
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
      "We fix leaning sections, broken boards and storm damage on fences for homes and businesses.",
      "We'll look it over for free and tell you what we think. Some fences are worth fixing and some are better off replaced.",
    ],
    heroImage: "/images/projects/wood/wood-privacy-fence-long-run-rural.jpg",
    heroAlt: "Long wood privacy fence running along a rural backyard in Lafourche Parish",
    sections: [
      {
        h2: "Why is my fence leaning?",
        body: [
          "Most of the time a post has failed at or under the ground. The boards above it are usually still good.",
          "Wood posts rot at the soil line because that's where they stay wet the longest. Wet clay can let a post work loose, and wind leans hard on a solid privacy fence. Push on the fence at the worst spot. If a post snaps or feels soft down low, it's probably rotted.",
        ],
      },
      {
        h2: "Should I repair or replace my fence?",
        body: [
          "Repair it when the damage is in a few spots. Replace it when posts are going bad all down the line or the boards are soft and splitting.",
          "Also ask yourself if the fence still does its job. If it doesn't keep the dog in or block the view anymore and it's already been patched, a new one may be the better use of your money. We'll tell you which way we'd go when we see it.",
        ],
      },
      {
        h2: "What should I do after a storm damages my fence?",
        body: [
          "Take pictures before anything gets moved. If you file an insurance claim, those pictures matter, and your insurance company decides what's covered.",
          "Get wide shots of the whole damaged stretch and close-ups of broken posts, boards and gates. If a tree or limb fell on it, photograph that before it gets cut up. Then give us a call, and we'll send you a written price you can pass along.",
        ],
      },
    ],
    included: [
      "Free look at the damage",
      "Leaning sections, broken boards and storm damage",
      "Residential and commercial repairs",
      "A straight answer on fixing vs. replacing",
      "A written price for the repair",
    ],
    gallery: [
      "/images/fb/gates/wood-privacy-double-gate.jpg",
      "/images/projects/wood/wood-picket-fence-side-yard.jpg",
      "/images/fb/chain-link/black-chain-link-fence-residential.jpg",
    ],
    faqs: [
      {
        q: "Can you fix just part of my fence?",
        a: "A lot of the time, yes. That comes down to what broke and how much of the fence it affects, and we'll tell you once we see it.",
      },
      {
        q: "How can I tell if a fence post is rotted?",
        a: "Stick a screwdriver into the post right at the dirt. If it goes in easy or the wood crumbles, it's rotted. A post that wobbles but feels hard may just be loose in the ground.",
      },
      {
        q: "Will you handle my insurance claim?",
        a: "No. The claim is between you and your insurance company. We'll price the repair, and you can send our proposal in with your claim.",
      },
      {
        q: "Do you repair gate openers?",
        a: "We don't install or work on automatic gate openers. If you need one fixed or put in, we can bring in a gate company that's licensed for that work.",
      },
      {
        q: "How do I get a repair estimate?",
        a: "Call (985) 414-0858 Monday through Saturday, 7:30am to 6pm. We don't charge for estimates.",
      },
    ],
    related: ["fence-installation", "wood-fence", "automatic-gates"],
    serviceType: "Fence repair",
    cardBlurb:
      "Leaning posts, broken boards and storm damage. We'll tell you if it's worth fixing.",
    cta: {
      heading: "Leaning or broken fence?",
      text: "We’ll look at it and tell you if it needs a repair or a new fence.",
    },
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
      "Wood is still the most common privacy fence on South Louisiana lots. We build wood fences for homes and businesses.",
      "There are several styles and heights to pick from. You can add a gate in the same style, or run the fence between brick columns.",
    ],
    heroImage: "/images/projects/wood/cedar-board-on-board-fence-columns-long-run.jpg",
    heroAlt: "Long run of stained board-on-board wood fence with white columns across a large lot",
    sections: [
      {
        h2: "Is cedar or pine better for a fence?",
        body: [
          "Cedar holds up to rot and bugs on its own. Pressure-treated pine costs less and depends on the treatment to last outside. Both are common fence woods.",
          "Cedar usually stays straighter as it dries and takes stain well. Pine is strong and easier on the budget, but it moves more as it dries, so a few boards may twist or cup early on. We can talk about which wood fits your yard at the estimate.",
        ],
      },
      {
        h2: "How does a wood fence hold up in South Louisiana?",
        body: [
          "It holds up with some upkeep. Humidity, termites and ground that hardly ever dries out are all hard on wood, and the posts usually fail first, right at the ground line.",
          "Keep dirt, mulch and grass clippings off the bottom of the posts, and don't let a sprinkler hit the fence every day. If you see mud tubes on a post, call a pest control company.",
        ],
      },
      {
        h2: "Do I need to stain or seal a new wood fence?",
        body: [
          "You don't have to, but a wood fence looks good a lot longer here if it's stained or sealed. Bare wood goes gray, splits and grows mildew in this humidity.",
          "New pressure-treated pine is often too wet to take stain at first, so let it dry out. Re-coat when the color fades. The side that gets sun will fade faster than the shady side.",
        ],
      },
    ],
    included: [
      "Free estimate",
      "Several styles and heights",
      "Gates to go with the fence",
      "Wood fence between brick columns",
      "Old fence taken out and hauled off (extra charge)",
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
        a: "The finished side usually faces the neighbor and the street, and the rails face you. Some HOAs require that, so check your covenants.",
      },
      {
        q: "Why are the boards on my new pine fence twisting?",
        a: "New treated pine is wet and moves as it dries. A little twisting and cupping at first is normal.",
      },
      {
        q: "Can you put a wood fence between brick columns?",
        a: "We do. We've built privacy fences and cedar lattice between brick columns.",
      },
      {
        q: "Can you add a gate to my existing wood fence?",
        a: "Call (985) 414-0858 and we'll come look at it. Whether it works depends on the fence and the opening.",
      },
      {
        q: "How long does a wood fence last?",
        a: "That varies with the wood, the yard and the upkeep. Staining or sealing and keeping the bottoms of the posts dry make a big difference.",
      },
    ],
    related: ["fence-installation", "brick-columns", "fence-repair"],
    serviceType: "Wood fence installation",
    cardBlurb:
      "Wood privacy fences in several styles and heights, with brick columns if you want them.",
    cta: {
      heading: "Wood fence estimates",
      text: "We’ll bring styles and heights to talk over when we come measure.",
    },
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
      "Vinyl gives you a privacy fence you never have to stain or seal. We put up vinyl fences for homes, businesses and subdivision entrances.",
      "It comes in a few colors and styles and looks good with brick columns. We'll go over the options with you at the estimate.",
    ],
    heroImage: "/images/projects/vinyl/white-vinyl-fence-backyard.jpg",
    heroAlt: "White vinyl privacy fence along a backyard beside a screened porch",
    sections: [
      {
        h2: "Is a vinyl fence worth it compared to wood?",
        body: [
          "For a lot of people it is. Vinyl usually costs more up front, but you won't be replacing rotten boards later.",
          "Vinyl doesn't soak up water, so humidity and wet ground don't break it down, and termites don't eat it. The downsides: a mower or a falling limb can crack a panel, and you keep the color you pick because vinyl isn't meant to be painted.",
        ],
      },
      {
        h2: "How does vinyl hold up in storms?",
        body: [
          "A solid vinyl fence catches wind like any solid fence, so a big storm puts a lot of strain on the posts. A yard facing open ground gets more wind than one tucked between houses.",
          "Styles with lattice or a spaced top let some air through. If a panel gets damaged, it can often be replaced by itself, but matching an older, weathered fence can be hard.",
        ],
      },
      {
        h2: "Vinyl fences with brick columns",
        body: [
          "Vinyl panels between brick columns work well at subdivision entrances and along the front of a property. We've built a subdivision entrance this way.",
          "The brick ties in with brick homes. HOA boards and developers can call (985) 414-0858 to set up an estimate.",
        ],
      },
    ],
    included: [
      "Free estimate at the property",
      "A choice of vinyl colors and styles",
      "Walk gates and double gates",
      "Vinyl panels between brick columns",
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
        a: "A hose, a soft brush and mild soap handle most dirt. If you pressure wash it, keep the pressure low so you don't scuff the panels.",
      },
      {
        q: "Can you paint a vinyl fence?",
        a: "We don't recommend it. Paint doesn't stick well to vinyl and tends to peel, so choose the color you want up front.",
      },
      {
        q: "Is a vinyl fence more expensive than wood?",
        a: "Up front, usually. If you're torn between the two, we can price both.",
      },
      {
        q: "What colors does vinyl fence come in?",
        a: "There’s more than one color to pick from.",
      },
      {
        q: "Will my HOA allow a vinyl fence?",
        a: "Many do, but each neighborhood has its own rules. Look in your covenants for allowed materials, colors and heights, and whether plans need approval.",
      },
    ],
    related: ["fence-installation", "brick-columns", "pool-fencing"],
    serviceType: "Vinyl fence installation",
    cardBlurb:
      "Low-upkeep vinyl privacy fences, including vinyl panels set between brick columns.",
    cta: {
      heading: "Pricing vinyl",
      text: "Still deciding between vinyl and wood? We can price both.",
    },
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
      "An aluminum fence keeps kids and pets in and still lets you see out. We install aluminum fences, pool fences and gates.",
      "It comes in several styles, heights and colors. It costs more per foot than chain link, so people usually put it where it shows: the front yard, around the pool, or across the driveway.",
    ],
    heroImage: "/images/projects/aluminum/black-aluminum-fence-new-home.jpg",
    heroAlt: "Black aluminum fence enclosing the yard of a new home",
    sections: [
      {
        h2: "Does aluminum fence rust in Louisiana humidity?",
        body: [
          "Aluminum doesn't rust.",
          "It looks like wrought iron without the scraping and painting. The coating can chip if a mower or weed eater hits it, so be careful trimming along the posts. Other than that, hose it off now and then.",
        ],
      },
      {
        h2: "Is aluminum fence good for a pool?",
        body: [
          "Yes, aluminum is one of the most common pool fence materials. Splashing water won't rust it, and you can see the pool through it.",
          "Pool fences have their own rules on height, spacing and gates. We've put aluminum fence around pools and can go over yours at the estimate.",
        ],
      },
      {
        h2: "Pairing aluminum with a privacy fence",
        body: [
          "On bigger lots, a lot of people put a privacy fence across the back and aluminum on the sides or front. The back stays private and the view toward the street or the water stays open.",
          "Walk gates and double driveway gates can be made in aluminum to match the fence. We don't install openers ourselves.",
        ],
      },
    ],
    included: [
      "Free estimate and measuring",
      "Several styles, heights and colors",
      "Aluminum fence around pools",
      "Aluminum walk gates and double driveway gates",
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
        a: "For most dogs, it will, as long as the pickets are close enough that they can't squeeze through. Tell us about your dog and we'll help you pick a style.",
      },
      {
        q: "Does an aluminum fence give any privacy?",
        a: "Very little. You can see right through it. If part of the yard needs privacy, use wood or vinyl on that stretch.",
      },
      {
        q: "How do aluminum fences handle hurricane winds?",
        a: "Wind goes through the open pickets, so the fence takes much less force than a solid one. Falling limbs and flying debris are the bigger worry.",
      },
      {
        q: "Do you install aluminum pool fences?",
        a: "We do, along with pool gates.",
      },
      {
        q: "Can you put an automatic opener on my aluminum gate?",
        a: "No. Esteve's doesn't install gate openers. When a customer wants one, we bring in a separate licensed gate company.",
      },
    ],
    related: ["pool-fencing", "automatic-gates", "fence-installation"],
    serviceType: "Aluminum fence installation",
    cardBlurb:
      "Rust-free aluminum fence for pools, front yards and driveways, with walk and driveway gates.",
    cta: {
      heading: "Aluminum fence estimates",
      text: "Most aluminum jobs are priced by the foot, so we start by measuring.",
    },
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
      "Chain link is the practical way to fence a big area, keep a dog in, or close off a back lot for less than a privacy fence costs. We install chain link for homes and businesses.",
      "We can add gates, privacy slats and barbed wire on top where it makes sense.",
    ],
    heroImage: "/images/projects/commercial/commercial-chain-link-gate-picnic-area.jpg",
    heroAlt: "Galvanized chain link fence and gate enclosing a picnic area beside a commercial building",
    sections: [
      {
        h2: "Is chain link a good choice for my yard?",
        body: [
          "It is if you want to keep something in or out and don't need privacy. It's usually the cheapest option per foot.",
          "You can still see your dog from the house. It's easy to repair, and water and wind pass right through it.",
        ],
      },
      {
        h2: "Galvanized or coated chain link: what's the difference?",
        body: [
          "Galvanized is the plain silver chain link you see around commercial lots, and it usually costs less. Coated chain link has a colored layer over the wire, which a lot of people like better for a yard they look at every day.",
          "Both are steel wire protected against rust. After many years, galvanized can get rust spots where it stays wet.",
        ],
      },
      {
        h2: "Chain link for businesses",
        body: [
          "Chain link is the usual choice for commercial lots, equipment yards and work areas. Privacy slats slide into the mesh to block the view from the road, and barbed wire can go on top.",
          "We've put up commercial chain link with privacy slats. Call (985) 414-0858 to have us look at your property.",
        ],
      },
    ],
    included: [
      "Free estimate",
      "Chain link for homes and businesses",
      "Walk and double gates",
      "Privacy slats",
      "Barbed wire on top",
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
        a: "Usually. Chain link is one of the lowest-cost fences per foot. Gates and slats add to the price.",
      },
      {
        q: "Can privacy slats be added to chain link?",
        a: "They can. Slats slide into the mesh for screening.",
      },
      {
        q: "What height chain link do I need?",
        a: "That comes down to what you're keeping in or out.",
      },
      {
        q: "Can chain link go on a slope?",
        a: "Generally. The fabric flexes, so it follows uneven ground better than most fences.",
      },
      {
        q: "Do you add barbed wire to chain link?",
        a: "Yes, we can add barbed wire.",
      },
    ],
    related: ["commercial-fencing", "farm-ranch-fencing", "fence-repair"],
    serviceType: "Chain link fence installation",
    cardBlurb:
      "Chain link for homes, dog yards and businesses, with slats and barbed wire available.",
    cta: {
      heading: "Chain link for your yard or lot",
      text: "Want slats or barbed wire? Tell us up front and we’ll price them in.",
    },
  },
]
