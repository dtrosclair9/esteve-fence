import type { ServicePage } from "../types"

/**
 * Fence service pages, part A: installation, repair, wood, vinyl, aluminum, chain link.
 * Claims rules: no prices, no licensing, no years, no warranties, no timelines.
 * Regulatory numbers are from Lafourche Parish DPW (fence permit, Ord. 6279) and the
 * Lafourche ISPSC 305 pool barrier affidavit. Do not add Terrebonne specifics.
 */
export const servicesA: ServicePage[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. FENCE INSTALLATION
  // ─────────────────────────────────────────────────────────────
  {
    slug: "fence-installation",
    navLabel: "Fence Installation",
    group: "fences",
    title: "Fence Installation in Thibodaux, Houma & Bayou Country",
    description:
      "Fence installation in Thibodaux, Houma and nearby towns. Esteve's Fence Company plans the layout, permit questions, posts for soft ground, gates and cleanup.",
    h1: "Fence Installation in Thibodaux, Houma & Bayou Country",
    eyebrow: "Fence installation · Lafourche & Terrebonne",
    intro: [
      "Esteve's Fence Company handles fence installation for homes and businesses in Thibodaux, Houma and the towns around them. We're locally owned and based in Thibodaux, and most of our work is up and down Bayou Lafourche or over in Terrebonne.",
      "Most lots here come with at least one complication. The clay holds water, a ditch runs along the back line, the subdivision has HOA rules, or the fence faces open ground where wind comes in hard. Each of those changes where the posts go and how they get set.",
    ],
    heroImage: "/images/projects/wood/wood-privacy-fence-new-construction.jpg",
    heroAlt: "New wood privacy fence installed on a new-construction home lot near Thibodaux",
    sections: [
      {
        h2: "What happens before the first post goes in?",
        body: [
          "Before anyone digs, we need to know where the property line is, what the permit and HOA rules allow, and what's buried in the yard. Sorting that out usually takes a few phone calls, and it heads off mistakes that cost real money to undo.",
          "The property line comes first. Lafourche Parish puts the job of identifying the line on the owner, and the parish may ask for a survey. If you have a recent survey or can find your pins, we lay the fence out from those. If the pins are gone, or the neighbor remembers the line differently, get a surveyor out before anything goes in the ground. Moving a finished fence costs far more than a survey.",
          "Buried utilities have to be marked through Louisiana 811 before anyone digs, so gas, power, water and cable get flagged first. Then there are HOA covenants, if your neighborhood has them. Many subdivisions around Thibodaux and Bayou Blue spell out height, material and color, and some want plans approved in writing first. Hand us a copy and the layout gets drawn to fit it.",
        ],
      },
      {
        h2: "Do I need a permit to build a fence in Lafourche Parish?",
        body: [
          "Yes, a new fence in unincorporated Lafourche Parish needs a permit from the parish Department of Public Works. The fee is $50 and non-refundable, and it covers plan review and a final inspection. The permit expires one year after it's issued, and the owner calls Public Works for the inspection when the fence is finished.",
          "The parish rules shape the design. Once a fence passes the front of the building, it has to taper down to 3 feet or less, and a corner lot counts as having two fronts. A fence can't block a driver's view of signs or traffic. It has to sit on private property, out of the right-of-way, and it can't keep the lot from draining properly. Anything over 8 feet has to be noncombustible and needs stamped plans.",
          "Inside Thibodaux city limits the permit comes from the City of Thibodaux, not the parish. Houma and the rest of Terrebonne go through Terrebonne Parish Consolidated Government, which runs a process separate from Lafourche's. We look up what applies to your address before the job goes on the schedule.",
        ],
      },
      {
        h2: "How are fence posts set in wet South Louisiana clay?",
        body: [
          "Posts have to be set for the soil they're going into, and on most lots around here that means wet, heavy clay and water close to the surface. Posts are where most fences give out, so this is the part of the job we slow down on.",
          "Our clay swells when it's soaked and shrinks back when it dries, which works a post loose over time if the footing is shallow or the hole is sloppy. In plenty of yards a fresh post hole starts filling with water before the concrete is even mixed, and that water has to be dealt with before anything is poured. It also helps to shape the top of the footing so rain runs off and doesn't sit against the wood.",
          "Live oaks bring their own problem. The roots spread a long way, and cutting a big one can hurt the tree. When we can, we shift a post a few inches or adjust the panel layout to miss the root. Lots that back up to cane outside Thibodaux and Schriever bring a field ditch and farm equipment into the plan.",
        ],
      },
      {
        h2: "Which fence material makes sense for your yard?",
        body: [
          "The right material depends on what the fence has to do: block the view, hold a dog, meet pool code, or just mark the line. Each one handles our weather a little differently, and each has its own page with more detail.",
          "Wood is the most common privacy fence on South Louisiana lots. Cedar and pine both work, and the board style (shadowbox, board-on-board, picket or horizontal) changes the look a lot. Vinyl skips the staining and sealing, comes in white and tan, and needs reinforced posts because solid panels catch wind. Aluminum gives you an open black picket line that won't rust, and it's a common pick around pools. Chain link is the practical answer for dog yards, back lots and acreage, and black vinyl-coated chain link looks cleaner than most people expect.",
          "Plenty of yards mix materials. Wood privacy across the back with aluminum down the sides keeps the yard private while leaving the view open toward the street. Any of these can also tie into brick or masonry columns at the front of the house.",
        ],
      },
      {
        h2: "What does installation day look like?",
        body: [
          "Our crew strings the line, marks every post and gate location, and walks the layout with you before digging if you'd like to see it. Gate placement is the decision people most often want to change, so we settle it at layout instead of after the posts are in.",
          "Posts go in first and the concrete gets time to set before rails and boards go on. On wood fences we watch the top line as we go, so it either follows the grade of the yard smoothly or steps in even increments, depending on what you picked. Gates are hung last and adjusted until they swing freely and latch on their own.",
          "Cleanup covers the dirt from the post holes, cutoffs, loose fasteners and packaging. If an old fence has to come out first, removal gets priced on the estimate, and you can say if there are boards or posts you want to keep for a project.",
        ],
      },
    ],
    included: [
      "Free on-site estimate and fence layout",
      "Property line and survey review before digging",
      "Utility lines marked through Louisiana 811 before digging",
      "Permit guidance for Lafourche, Terrebonne and the City of Thibodaux",
      "HOA covenant check on height, material and color",
      "Post depth and footings planned for wet ground and high water",
      "Walk gates, double drive gates and hardware",
      "Old fence removal priced on the estimate, plus jobsite cleanup",
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
        a: "It depends mostly on total footage, the material you choose and how many gates you need. Posts, brick columns, removing an old fence, and difficult ground like roots or ditches also move the number. Estimates are free, so the quickest way to a real price is to have us measure the property.",
      },
      {
        q: "Who is responsible for finding my property line before a fence goes up?",
        a: "The property owner is. Lafourche Parish says so in its fence permit rules and may require a survey. We build from your survey or property pins, and we'll recommend a surveyor if the pins are missing or a neighbor disagrees about the line.",
      },
      {
        q: "Can I build a fence across a drainage ditch?",
        a: "Usually not, because in Lafourche a fence isn't allowed to prevent proper drainage of a lot. Many back lots here have a ditch or a drainage servitude along the rear line, so check your plat. We'll keep the fence on your side of the ditch or leave an opening that lets water through.",
      },
      {
        q: "Do I have to call 811 before putting in a fence?",
        a: "Yes, buried utility lines have to be marked before anyone digs. Louisiana 811 notifies the utilities so they can flag their lines, and we can go over who places the request for your job at the estimate. Private lines such as sprinkler pipe or a feed to a backyard shop aren't marked, so show us where those run.",
      },
      {
        q: "How tall can a front yard fence be in Lafourche Parish?",
        a: "No more than 3 feet once it passes the front of the building. Corner lots count as having two fronts, so the limit applies along both streets. Backyard fences can go taller, but anything over 8 feet must be noncombustible with stamped plans.",
      },
      {
        q: "Do you put fences on new construction homes?",
        a: "Yes, plenty of our work is on new brick homes in subdivisions around Thibodaux, Houma and Bayou Blue. Installing after final grade and before sod usually makes for a cleaner job. If your HOA has to approve the fence, start that paperwork while the house is still being finished.",
      },
      {
        q: "Do you build fences outside of Thibodaux?",
        a: "Yes. Our service area includes Houma, Gray, Raceland, Labadieville and Bayou Blue, and we take jobs in nearby places like Schriever, Lockport, Chackbay and Napoleonville. Give us the address when you call.",
      },
    ],
    related: ["wood-fence", "vinyl-fence", "aluminum-fence", "fence-repair"],
    serviceType: "Fence installation",
    cardBlurb:
      "New fences planned from the survey pins and 811 marks through posts, gates and cleanup, built for the clay and storms of Lafourche and Terrebonne.",
  },

  // ─────────────────────────────────────────────────────────────
  // 2. FENCE REPAIR
  // ─────────────────────────────────────────────────────────────
  {
    slug: "fence-repair",
    navLabel: "Fence Repair",
    group: "fences",
    title: "Fence Repair & Storm Damage in Thibodaux & Houma, LA",
    description:
      "Fence repair in Thibodaux and Houma for leaning posts, rotted wood, sagging gates and storm damaged fence sections. Free estimates from Esteve's Fence Company.",
    h1: "Fence Repair in Thibodaux & Houma",
    eyebrow: "Fence repair · Thibodaux, Houma & nearby",
    intro: [
      "Esteve's handles fence repair for leaning posts, broken rails, gates that drag, and sections a storm laid flat. The first step is finding the part that actually failed. Sometimes that's one post, and sometimes the whole line is done.",
      "Most repair calls around Thibodaux and Houma come back to the same few causes: wet ground, rot where the posts meet the soil, wind, and gates hung on posts that were too light for them.",
    ],
    heroImage: "/images/projects/wood/wood-privacy-fence-long-run-rural.jpg",
    heroAlt: "Long wood privacy fence running along a rural backyard in Lafourche Parish",
    sections: [
      {
        h2: "Why is my fence leaning?",
        body: [
          "A leaning fence almost always means a post has failed at or below the ground. The boards and rails above it are usually fine. The post has either rotted where the wood meets the soil, worked loose in soft clay, or been pushed by wind until the footing tipped.",
          "To tell which, we push on the fence and dig around the base of the worst posts. A post that snaps off at grade is rotted. One that moves as a single unit, concrete and all, is sitting in ground that went soft. That's common here after a long wet spell, and on lots where water stands along the fence line.",
          "A rotted post gets pulled and replaced. A post that rocked loose can sometimes be straightened and re-poured. When several posts in a row are going, we'll usually talk about a new line of posts and reusing the boards and rails if they're still sound. Live oak roots also shove fences out of line over the years, and that fix may mean moving the post instead of setting it back in the same hole.",
        ],
      },
      {
        h2: "Should I repair or replace my fence?",
        body: [
          "Repair makes sense when the damage is limited to a few posts, some boards or a single gate. Replacement makes sense when posts are failing up and down the line, the boards have gone soft, or the same fence has already been patched more than once.",
          "A few questions usually settle it. How many posts are rotted at grade? One or two are an easy fix, but if it's most of them, you'd be putting old boards on new posts. Are the boards gray and dirty, or gray and splitting? Weathered wood can often be cleaned and stained, while split and soft wood can't. Does the fence still do its job? A fence that no longer holds the dog or blocks the view is worth replacing.",
          "Unincorporated Lafourche Parish also draws a permit line. When more than 50% of the existing fence length is being replaced or repaired, the parish requires a permit, the same as a new fence. Replacing individual pickets or posts, painting or staining doesn't need one. Inside Thibodaux city limits, ask the city instead.",
        ],
      },
      {
        h2: "What do you do after a storm knocks a fence down?",
        body: [
          "First the yard gets made safe, then we sort out what can go back up and what has to be rebuilt. After a big blow there are usually broken panels, exposed nails and splintered posts across the grass, and that has to be picked up before anyone can judge what's left standing.",
          "Wind pushes on a solid fence like a sail. When it gives, it nearly always gives at the posts, and you'll see whole sections lying flat with the concrete still attached or ripped out of the ground. Plenty of yards looked like that after Ida in 2021. Panels that came down in one piece can often go back up on new posts. Panels that twisted or splintered get replaced.",
          "We'll also look at why it went down. Some fences fail because the posts were already rotted and only needed a push. Others were built without enough post for the height and the exposure. If a run faces open field or water, we may suggest closer post spacing or a board style that lets some air through when it goes back up.",
        ],
      },
      {
        h2: "How should I document fence damage for my insurance claim?",
        body: [
          "Take photos before anything gets moved, and take more than you think you need. Your insurance company decides what your policy covers, and those photos are your evidence.",
          "Start from a distance so the full length of the damage shows, then move in close on broken posts, snapped rails and footings pulled out of the ground. Put something in the frame for scale. Photograph the gate and its hardware if they took a hit. If a tree or limb came down on the fence, get pictures of it in place before anyone cuts it up. Write down the date and back the photos up somewhere besides your phone.",
          "We can give you an itemized estimate for the repair or replacement that lists footage, material, posts and gates, which you can send in with your claim. Working with the adjuster and handling the claim itself stays between you and your insurer.",
        ],
      },
      {
        h2: "Fixing gates that sag, drag or won't latch",
        body: [
          "A sagging gate is usually a post problem, a hinge problem or a frame problem, and sometimes all three at once. The hinge post carries all of the gate's swinging weight, so if it leans even slightly, the latch side drops and starts scraping the ground.",
          "We check the hinge post first. If it's loose or rotted, a new, heavier post does more for the gate than anything else. Then we look at the frame. A wood gate needs a diagonal brace running from the bottom corner on the hinge side up to the top corner on the latch side, or it will rack out of square. Hinges and latches also rust out in our humidity, and heavier hardware helps on a gate that opens all day.",
          "Wide double gates across a driveway put a lot of load on two posts. If yours keep dropping, we'll look at the posts, the frames, and whether a drop rod or a gate wheel would help. An automatic gate that stopped closing right is a separate conversation, and our gates page covers it.",
        ],
      },
    ],
    included: [
      "Leaning and rotted post replacement",
      "Broken rail, board and picket replacement",
      "Storm-damaged section rebuilds",
      "Gate re-hanging with new hinges and latches",
      "Gate frame bracing, drop rods and wheels",
      "Chain link repairs: fabric, top rail and tension wire",
      "Itemized estimate you can send with your own insurance claim",
      "Removal of broken panels and posts, priced with the repair",
    ],
    gallery: [
      "/images/fb/gates/wood-privacy-double-gate.jpg",
      "/images/projects/wood/wood-picket-fence-side-yard.jpg",
      "/images/fb/chain-link/black-chain-link-fence-residential.jpg",
    ],
    faqs: [
      {
        q: "Can you replace just a few boards on my fence?",
        a: "Yes, individual boards and pickets can be swapped out. New wood looks lighter than the weathered boards around it for a while, so staining the whole fence afterward helps it blend. In Lafourche, repairs at the picket level don't need a permit.",
      },
      {
        q: "Do I need a permit to repair a fence in Lafourche Parish?",
        a: "Only when more than half of the fence length is being replaced or repaired. Swapping individual posts or pickets, or painting and staining, doesn't require one. Past that 50% mark, the parish treats the work like a new fence and the $50 permit applies.",
      },
      {
        q: "How can I tell if a fence post is rotted?",
        a: "Push a screwdriver into the post right at the soil line. If it sinks in easily or the wood comes away soft and stringy, the post is rotted. A post that wobbles but feels hard is more likely loose in its footing, which is a different fix.",
      },
      {
        q: "Will you handle my insurance claim for a storm damaged fence?",
        a: "No, the claim stays between you and your insurance company. We can price the repair and explain what failed. Photograph the damage before anything is moved or cleaned up.",
      },
      {
        q: "Do you repair chain link fences too?",
        a: "Yes, we fix chain link as well as wood. Typical repairs are bent top rail, torn fabric, loose tension wire and leaning corner or end posts. Chain link is usually very repairable as long as the posts are still solid.",
      },
      {
        q: "My neighbor's fence is leaning into my yard. What can I do?",
        a: "The repair decision belongs to whoever owns the fence, so start with a conversation. If it's a shared fence on the property line, both owners should agree before work begins. Either owner can call us for an estimate.",
      },
    ],
    related: ["fence-installation", "wood-fence", "automatic-gates"],
    serviceType: "Fence repair",
    cardBlurb:
      "Leaning posts, rotted bases, sagging gates and storm-flattened sections repaired, plus an honest look at whether replacing the line makes more sense.",
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
      "Wood fence and cedar privacy fence installation in Thibodaux and Houma. Shadowbox, board-on-board, picket and horizontal styles, plus brick column tie-ins.",
    h1: "Wood Privacy Fences in Thibodaux & Houma",
    eyebrow: "Wood fences · Cedar & pine · Lafourche & Terrebonne",
    intro: [
      "A wood fence is still the most common privacy fence on South Louisiana lots, and it makes up a big share of what we build. Esteve's installs cedar and pine privacy fences in shadowbox, board-on-board, picket and horizontal styles around Thibodaux, Houma and the bayou parishes.",
      "Wood looks warm and costs less than most alternatives, but here it lives with humidity, termites and soil that rarely dries out. The choices you make on posts, boards and finish decide how well it holds up.",
    ],
    heroImage: "/images/projects/wood/cedar-board-on-board-fence-columns-long-run.jpg",
    heroAlt: "Long run of stained board-on-board wood fence with white columns across a large lot",
    sections: [
      {
        h2: "Is cedar or pine better for a fence in South Louisiana?",
        body: [
          "Cedar handles our humidity better and resists rot and insects on its own, while pine costs less and depends on pressure treatment to survive outdoors. Both make a good fence when they're built and finished properly.",
          "Cedar has natural oils that slow decay, it stays straighter as it dries, and it takes stain well. The warm reddish color on many of the fences in our photos is stained cedar. It costs more per board, and because it's a softer wood, it dents more easily.",
          "Pressure-treated pine is the budget choice and a perfectly reasonable one. It's strong and easy to get. It moves more as it dries, so expect some boards to twist or cup early on, and it needs a stain or sealer to keep it from graying and checking in the sun.",
          "Many owners split the difference: pressure-treated posts and rails for strength where the fence meets the ground, with cedar boards on the face for looks. If you can't decide, ask for both on the estimate.",
        ],
      },
      {
        h2: "Shadowbox, board-on-board, picket or horizontal: what's the difference?",
        body: [
          "Shadowbox alternates boards on opposite sides of the rails, so the fence looks the same from both yards and lets a little air move through. It's popular in subdivisions because neither neighbor gets stuck with the back side. Straight on it looks solid, and from an angle you can see through the gaps a bit.",
          "Board-on-board overlaps the boards on one face, so there's no gap even after the wood shrinks. It's the most private wood fence there is and also the heaviest, which makes post size and spacing more important.",
          "Dog-ear picket is the classic side-yard and front-yard fence, with the top corners clipped on each board. It suits the front of a lot in Lafourche, where fences past the front of the house have to come down to 3 feet. Horizontal fences run the boards side to side for a cleaner, modern look, and they need more framing so long boards don't sag between posts.",
          "Diamond-lattice panels between brick columns are another option, mostly for courtyards where the look matters as much as the privacy.",
        ],
      },
      {
        h2: "Board-on-board fences with brick and masonry columns",
        body: [
          "A board-on-board wood fence paired with brick or painted masonry columns is one of the best-looking fences you can put on a brick home. The columns tie the fence to the house, and the stained wood between them gives you the privacy.",
          "We've built this on large lots around Thibodaux where the fence runs a long way down a road or property line, with white columns spaced along the run and stained boards in between. On smaller lots it often shows up only across the front, with a column at each corner of the house and a walk gate set between two of them.",
          "Columns change how the fence goes together. Each column needs its own footing, the wood panels have to land cleanly against the column face, and gate hinges have to anchor into something solid. Columns cost more than wood posts, so some owners put them only where the fence is most visible and use wood posts down the sides and across the back. Our brick columns page covers the masonry side in more detail.",
        ],
      },
      {
        h2: "Why do wood fence posts fail at the ground line?",
        body: [
          "Wood posts fail at the ground line because that's where they stay damp the longest and where termites and decay fungi get to them. Above the soil the wood dries out between rains. Right at the surface it never really does.",
          "Our clay holds water against the post, and in yards with a high water table the bottom of the hole can sit in wet soil for long stretches. Formosan subterranean termites are widespread in south Louisiana, and they come up through the soil. Sprinklers aimed at the fence and mulch heaped against the posts make all of it worse.",
          "Post material is a real decision. Pressure-treated pine posts should be rated for ground contact, which is a heavier treatment than lumber meant for use above ground. Some owners choose galvanized steel posts hidden behind the wood face for the most rot resistance. Either way, keep soil, mulch and grass clippings pulled back from the base so the wood can dry out between rains.",
        ],
      },
      {
        h2: "Do I need to stain or seal a new wood fence?",
        body: [
          "You don't have to, but stain or sealer keeps a wood fence looking good a lot longer in our climate. Bare wood turns gray, splits along the grain and grows mildew in the humidity.",
          "New pressure-treated pine is often too wet to take stain well, so it usually needs to dry out first. Cedar can generally be finished sooner. A penetrating semi-transparent stain soaks in and shows the grain, which is the look on most of the cedar fences in our photos. Solid stains cover more and hold their color longer, but they can peel.",
          "Plan on re-coating as the color fades. The sunny side of a fence fades faster than the shady side, and sprinkler spray wears the bottom of the boards. Cleaning the wood before re-staining helps the new coat soak in evenly. Finish choices are worth a few minutes at the estimate.",
        ],
      },
    ],
    included: [
      "Cedar or pressure-treated pine boards",
      "Shadowbox, board-on-board, dog-ear picket and horizontal styles",
      "Post options for wet ground, including ground-contact pine or steel",
      "Matching walk gates and double drive gates",
      "Tie-ins to brick or masonry columns",
      "Diamond-lattice and courtyard panels",
      "Removal of an existing fence, priced separately on the estimate",
      "Cleanup of cutoffs, post-hole dirt and packaging",
    ],
    gallery: [
      "/images/projects/wood/wood-shadowbox-fence-side-yard.jpg",
      "/images/fb/wood/dog-ear-picket-fence-side-yard.jpg",
      "/images/fb/wood/horizontal-wood-fence-new-build.jpg",
      "/images/fb/brick-columns/brick-columns-cedar-lattice-fence.jpg",
    ],
    faqs: [
      {
        q: "How tall can a wood privacy fence be in Lafourche Parish?",
        a: "Backyard privacy fences are commonly 6 feet tall, and anything over 8 feet has to be noncombustible with stamped plans. Once the fence passes the front of the house, it has to taper down to 3 feet. Many HOAs set their own height limits too, so check your covenants.",
      },
      {
        q: "Which side of a wood fence should face the neighbor?",
        a: "Traditionally the finished side faces out toward the neighbor and the street, with the rails on your side. Some HOAs require it. A shadowbox fence avoids the question because it looks finished from both yards.",
      },
      {
        q: "Why are the boards on my new pine fence twisting?",
        a: "Pressure-treated pine is wet when it's installed and moves as it dries out. Some twisting and cupping early on is normal. Boards that warp badly can be swapped, and cedar moves much less if that bothers you.",
      },
      {
        q: "Can you build a wood fence along a sugarcane field?",
        a: "Yes. Cedar and pine privacy fences are the usual pick along cane, and a 6 foot fence also knocks down some of the dust that blows in during harvest. The field ditch usually belongs to the farm, so the fence stays on your side of it.",
      },
      {
        q: "Can you add a gate to my existing wood fence?",
        a: "Yes, as long as there's solid support on both sides of the opening. We'll usually set a new, heavier hinge post instead of trusting an old one. The gate gets built to match your board style and height.",
      },
      {
        q: "How do I keep termites out of my wood fence?",
        a: "Keep soil, mulch and wood debris away from the base of the posts, and don't let sprinklers soak the fence every day. Ground-contact rated posts resist termites far better than untreated wood. If you see mud tubes running up a post, call a pest control company.",
      },
    ],
    related: ["fence-installation", "brick-columns", "fence-repair"],
    serviceType: "Wood fence installation",
    cardBlurb:
      "Cedar and pine privacy fences in shadowbox, board-on-board, picket and horizontal styles, with posts set for wet ground and optional brick columns.",
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
      "Vinyl fence installation in Thibodaux and Houma. White and tan PVC privacy fences for homes, subdivisions and HOA entrances, and how they handle wind.",
    h1: "Vinyl Fences in Thibodaux & Houma",
    eyebrow: "Vinyl & PVC fences · Lafourche & Terrebonne",
    intro: [
      "A vinyl fence gives you privacy without the staining, sealing and board replacement that come with wood. Esteve's installs vinyl privacy fences in white and tan for homes, subdivisions and HOA entrances around Thibodaux and Houma.",
      "Vinyl does well in humid air because there's nothing in it to rot or feed termites. The trade-offs are the cost up front and how it handles wind, and both are worth understanding before you choose it.",
    ],
    heroImage: "/images/projects/vinyl/white-vinyl-fence-backyard.jpg",
    heroAlt: "White vinyl privacy fence along a backyard beside a screened porch",
    sections: [
      {
        h2: "Is a vinyl fence worth it compared to wood?",
        body: [
          "For many owners it is, because vinyl costs more up front but asks for very little upkeep afterward. There's no staining, no soft boards to swap out, and no wood posts rotting at the ground.",
          "Vinyl, also sold as PVC fencing, doesn't soak up water, so our humidity and wet ground don't break it down the way they break down wood. Termites have no interest in it. Cleaning is a garden hose, or a soft brush and mild soap when mildew shows up on the shady side.",
          "The downsides are real, though. The material costs more per foot than pine. A hard hit from a mower or a falling limb can crack a panel, and you replace that piece instead of patching it. The color you pick is also the color you keep, since vinyl isn't made to be painted.",
          "If you plan to stay in the house a long while and want to stop thinking about fence maintenance, vinyl is a strong choice. If you'd rather spend less now and don't mind staining every so often, wood still makes sense.",
        ],
      },
      {
        h2: "White or tan vinyl: which color should I pick?",
        body: [
          "White is the classic and most common choice, and tan is the one to pick when you want the fence to blend in with brick. We've installed both around Thibodaux.",
          "White looks crisp against a green lawn and goes well with white trim, porches and screened rooms. It shows dirt and mildew sooner, especially along the bottom where rain splashes mud up onto the panels. Tan hides that better and sits comfortably next to the reds and browns of most brick homes in Lafourche and Terrebonne subdivisions.",
          "If your neighborhood has an HOA, read the covenants before deciding. Some associations allow only one vinyl color, and a few specify the panel style as well. When the subdivision entrance already has vinyl panels, matching that color is usually the safe call.",
        ],
      },
      {
        h2: "How does vinyl fencing hold up to hurricane winds?",
        body: [
          "With a solid vinyl privacy fence, the posts decide how it does in a storm, more than the panels. Stiffened posts on good footings ride out ordinary storms, and a fence put up light tends to lean or pull apart in a strong blow.",
          "Vinyl posts are hollow, and on their own they flex. The usual ways to stiffen them are an aluminum or steel insert, concrete poured down the post, or both, and gate, corner and end posts need it most. We can recommend a setup for each run. Exposure matters too. A line facing open field on the edge of Thibodaux sees far more wind than one tucked between two houses.",
          "Panel style plays a part too. A semi-private style with a lattice or spaced top, or a picket fence in the front yard, lets some air through and puts less load on the posts. And if a panel does pop out during a storm, vinyl panels can often be slid back into place or replaced one at a time.",
        ],
      },
      {
        h2: "Vinyl fences for subdivisions and HOA entrances",
        body: [
          "Vinyl is a natural fit for subdivision entrances and shared fence lines because it stays consistent with little care, which matters when an HOA is the one paying for upkeep. We've built a subdivision entrance with tan vinyl panels set between brick columns, and that pairing works well here.",
          "The brick columns give the entrance some weight and match the homes behind it. The vinyl panels fill the spans between them without needing a staining budget every few years. Along a subdivision sidewalk, the same column-and-panel pattern can carry on for a long run so the whole edge of the neighborhood reads as one design.",
          "Work like this takes coordination. The HOA or developer usually needs to approve drawings, the column spacing has to match the panel widths (or the panels get cut to fit), and the fence has to stay out of the right-of-way and clear of drivers' sight lines near the street. HOA boards and developers can set up a site visit before the drawings are final.",
        ],
      },
      {
        h2: "Can a vinyl fence be used as a pool barrier?",
        body: [
          "Yes, a vinyl fence can serve as a pool barrier if the style and installation meet the barrier rules. In Lafourche Parish the top has to be at least 48 inches above grade, the gap at the bottom can't be more than 2 inches, and no opening can pass a 4 inch sphere.",
          "Solid privacy panels clear the opening rule easily. Horizontal rails are where vinyl can trip people up: when rails are less than 45 inches apart, they have to be on the pool side, so a child can't use them as a ladder from outside. Gates must open outward, away from the pool, and close and latch on their own. Both the owner and the contractor sign the parish pool barrier affidavit, and our pool fencing page walks through the rest of the list.",
        ],
      },
    ],
    included: [
      "White or tan vinyl privacy panels",
      "Picket and semi-private styles",
      "Post stiffening options for gates, corners and exposed runs",
      "Matching vinyl walk gates and drive gates",
      "Vinyl panels set between brick columns",
      "HOA color and style check",
      "Old fence removal, if you need it",
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
        a: "A garden hose and a soft brush with mild soap take care of most dirt. Mildew on the shady side usually comes off with diluted vinegar or a cleaner made for vinyl. Keep a pressure washer on a low setting and back from the surface so it doesn't scuff the panels.",
      },
      {
        q: "Can you paint a vinyl fence?",
        a: "It isn't recommended. Paint doesn't bond well to vinyl and tends to peel, and a dark color can make the panels heat up and warp in the sun. Pick the color you want at the start.",
      },
      {
        q: "Is a vinyl fence more expensive than wood?",
        a: "Usually, yes, at least up front. Vinyl costs more per foot than pressure-treated pine. You make some of that back over the years by never staining or replacing rotted boards.",
      },
      {
        q: "Can a damaged vinyl fence be repaired?",
        a: "Yes, damaged panels, rails and post caps can usually be replaced one piece at a time. The tricky part is matching color on an older fence that has weathered. Keeping a spare panel from the original install makes future repairs easier.",
      },
      {
        q: "Will my HOA allow a vinyl fence?",
        a: "Many subdivisions around Thibodaux and Houma do, but rules vary by neighborhood. Check your covenants for allowed materials, colors and heights, and whether the board has to approve plans first. Approval can take a few meetings, so start early.",
      },
      {
        q: "Can vinyl fence go in on a sloped yard?",
        a: "Yes, but vinyl panels step down a slope instead of following it, because the rails are fixed into the posts. Each panel sits a little higher or lower than the next, which leaves small triangle gaps at the bottom. Most lots around here are close to flat, so stepping is rarely a big issue.",
      },
    ],
    related: ["fence-installation", "brick-columns", "pool-fencing"],
    serviceType: "Vinyl fence installation",
    cardBlurb:
      "White and tan vinyl privacy fences that skip the staining, with post options for windy lots and HOA entrances between brick columns.",
  },

  // ─────────────────────────────────────────────────────────────
  // 5. ALUMINUM FENCE
  // ─────────────────────────────────────────────────────────────
  {
    slug: "aluminum-fence",
    navLabel: "Aluminum Fences",
    group: "fences",
    title: "Black Aluminum Fence Installation in Thibodaux & Houma",
    description:
      "Aluminum fence installation in Thibodaux and Houma. Black aluminum and ornamental fences for pools, yards and driveways that won't rust in South Louisiana air.",
    h1: "Aluminum Fences in Thibodaux & Houma",
    eyebrow: "Black aluminum fences · Pools, yards & gates",
    intro: [
      "An aluminum fence gives you a clean black picket line that keeps kids and pets in without closing off the view. Esteve's installs black aluminum and ornamental fences, pool fences and matching gates around Thibodaux, Houma and the surrounding parishes.",
      "It's the fence we point people toward when they want something open and dressy that won't rust. It costs more per foot than chain link, so it usually goes where people will see it, like the front yard, the pool and the driveway.",
    ],
    heroImage: "/images/projects/aluminum/black-aluminum-fence-new-home.jpg",
    heroAlt: "Black aluminum fence enclosing the yard of a new home",
    sections: [
      {
        h2: "Does aluminum fence rust in Louisiana humidity?",
        body: [
          "No, aluminum doesn't rust, which is the main reason it has replaced iron and steel for most ornamental fencing in South Louisiana. Humid air, salt air near the coast and daily sprinkler spray don't eat at it the way they eat at steel.",
          "Most people who ask about an iron fence are really after the wrought iron look: black pickets, a strong top rail, maybe a decorative top. Aluminum gives you that look with a powder-coated finish over a metal that can't rust underneath. Real iron needs scraping and repainting, and rust streaks show up fast on properties in lower Lafourche and lower Terrebonne.",
          "The finish can still chip if a mower deck or string trimmer catches it, so be careful trimming along the posts. Touch-up paint covers small marks. Beyond that, an occasional rinse to wash off dirt and pollen is about all an aluminum fence asks of you.",
        ],
      },
      {
        h2: "Is aluminum fence good for a pool?",
        body: [
          "Yes, aluminum is one of the most common pool fence materials, as long as the picket spacing, rails and gates meet the barrier rules. Lafourche Parish uses the ISPSC Section 305 barrier requirements, and both the owner and the contractor sign an affidavit.",
          "The top of the barrier must be at least 48 inches above grade, with no more than 2 inches of clearance at the bottom, and no opening can pass a 4 inch sphere. Rail placement matters a lot on aluminum. When horizontal rails are less than 45 inches apart, they have to sit on the pool side and the pickets can be no more than 1-3/4 inches apart. When the rails are 45 inches or more apart, pickets can be up to 4 inches apart.",
          "Pool gates have to open outward, away from the pool, and close and latch on their own. If the latch release sits less than 54 inches above the bottom of the gate, it goes on the pool side, at least 3 inches below the top. Our pool fencing page covers the rest, including the clear zone outside the fence.",
        ],
      },
      {
        h2: "Matching aluminum walk gates and driveway gates",
        body: [
          "Aluminum gates are made in the same styles as the fence panels, so a walk gate and a double driveway gate can match the fence line exactly. That's a big part of why an aluminum fence looks so finished across the front of a house.",
          "Walk gates are simple. A double driveway gate takes more planning. Two wide leaves put a lot of weight on the hinge posts, so those posts need to be heavier and set more firmly than the line posts. The drive needs to be level enough for the leaves to swing without dragging, or we'll talk about an arched gate or a different swing direction. A center drop rod holds the leaves closed and keeps them from sagging.",
          "If you think you'll want an automatic opener someday, say so at the start. It changes the post sizing, the gate frame and where conduit should run under the drive. Our automatic gates page covers that side of things.",
        ],
      },
      {
        h2: "Will an aluminum fence work on a sloped yard?",
        body: [
          "Yes, aluminum handles slopes well, either by racking the panels to follow the grade or by stepping them. Which one makes sense depends on how steep the change is and what the fence needs to keep in.",
          "Rackable panels let the pickets shift at an angle, so the bottom rail follows the ground with an even gap all the way along. It's the cleanest look on a gentle slope, like a yard that falls toward a ditch or a bayou bank. Stepped panels stay square, and each one sits a little higher or lower than the last. Stepping leaves triangle-shaped gaps under each panel, which matters around a pool or with a small dog.",
          "Most lots in Thibodaux and Houma are close to flat, so plenty of aluminum fences here go in straight with no racking at all. Slope shows up on waterfront lots, around raised slabs, and where fill dirt was hauled in for a new house pad. We check the grade when we lay out the line.",
        ],
      },
      {
        h2: "Pairing aluminum with a wood privacy fence",
        body: [
          "A common layout on bigger lots is wood privacy across the back and black aluminum along the sides or front. You get privacy where you need it and an open view toward the street, the water or the pasture.",
          "We've built this on large backyards around Thibodaux, with a stained wood fence along the rear property line and aluminum running up the sides to the house. It also works well on corner lots, where Lafourche's rules cap the fence at 3 feet once it passes the front of the house. Aluminum looks right at that lower height and doesn't feel like a wall facing the street.",
          "The transition takes some care. The wood and aluminum should meet at a shared post or land on a brick column so the change looks planned. Heights usually step down at that point, and gates are often aluminum even where most of the fence is wood. We'll sketch the layout with you when we come out.",
        ],
      },
    ],
    included: [
      "Black aluminum fence panels in several picket styles",
      "Pool fences laid out to the Lafourche barrier rules",
      "Self-closing, self-latching pool gates",
      "Matching walk gates and double driveway gates",
      "Racked or stepped panels for sloped ground",
      "Transitions to wood privacy fence or brick columns",
      "Taking out the old fence, when there is one",
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
        a: "For most dogs, yes. It works as long as the pickets are close enough that your dog can't squeeze through and the gap at the bottom stays small. Small breeds can slip through wider spacing, so tell us about your dog and we'll pick a style that fits.",
      },
      {
        q: "Does an aluminum fence give any privacy?",
        a: "Very little, since it's an open picket fence you can see straight through. If you want privacy on part of the yard, pair it with a wood or vinyl privacy fence along that stretch. A hedge planted along the inside also works.",
      },
      {
        q: "How do aluminum fences handle hurricane winds?",
        a: "Open aluminum pickets let wind pass through, so the fence takes far less load than a solid privacy fence. Falling limbs and flying debris are the bigger risk. A bent picket or damaged panel can usually be replaced without redoing the whole run.",
      },
      {
        q: "How tall does an aluminum pool fence need to be?",
        a: "At least 48 inches from grade to the top in Lafourche Parish, with no more than a 2 inch gap at the bottom. Some owners go taller. Gate latches have their own height rules, covered on our pool fencing page.",
      },
      {
        q: "Can an aluminum fence be mounted on a concrete patio or pool deck?",
        a: "Yes, aluminum posts can be surface-mounted to concrete with base plates instead of being set in the ground. It's a common approach at patios and pool decks. The slab has to be thick and solid enough to hold the anchors.",
      },
      {
        q: "Can I put an aluminum gate in a wood fence?",
        a: "Yes, and it's a nice detail. We've installed a black aluminum walk gate between brick columns on a wood privacy fence. The hinge side needs a solid post or column to carry the gate.",
      },
    ],
    related: ["pool-fencing", "automatic-gates", "fence-installation"],
    serviceType: "Aluminum fence installation",
    cardBlurb:
      "Black aluminum and ornamental fences that won't rust, laid out for pool barrier rules, with matching walk and driveway gates.",
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
      "Chain link fence installation in Thibodaux and Houma. Galvanized and black chain link for dog yards, back lots, acreage and businesses, with gates and slats.",
    h1: "Chain Link Fences in Thibodaux & Houma",
    eyebrow: "Chain link · Residential, commercial & acreage",
    intro: [
      "A chain link fence is the most practical way to fence a big area, keep a dog in, or close off a back lot without paying what a privacy fence costs. Esteve's builds galvanized and black vinyl-coated chain link for homes, businesses and acreage around Thibodaux and Houma.",
      "It looks simple, but whether it stays straight comes down to the terminal posts and how tight the fabric is stretched.",
    ],
    heroImage: "/images/projects/commercial/commercial-chain-link-gate-picnic-area.jpg",
    heroAlt: "Galvanized chain link fence and gate enclosing a picnic area beside a commercial building",
    sections: [
      {
        h2: "Galvanized or black vinyl-coated chain link: which is better?",
        body: [
          "Galvanized is the lower-cost, all-business choice, and black vinyl-coated looks much cleaner in a residential yard. Both are steel wire with a zinc coating underneath to fight rust.",
          "Galvanized chain link is the silver fence you see around commercial lots, equipment yards and ball fields. It's strong and easy to repair, and the zinc protects it well in most yards. Near salt air, or where the bottom of the fence stays wet, it will eventually show rust spots.",
          "Black vinyl-coated chain link adds a bonded black coating over the galvanized wire, and the posts and rails are coated to match. From the street, black chain link fades into the grass and trees in a way silver never does. It's a common backyard pick because it stays open, holds the dog, and costs less than aluminum. The coating also puts one more layer between the steel and our humidity.",
          "We usually steer people toward galvanized for work areas and black for any yard they'll be looking at every day.",
        ],
      },
      {
        h2: "What gauge and height of chain link do I need?",
        body: [
          "For most homes, a heavier-gauge fabric at 4 to 5 feet covers dog yards and backyards, while commercial lots usually go 6 feet or taller. Gauge is the thickness of the wire, and a lower gauge number means thicker wire.",
          "Heavier fabric holds up better against dogs, kids and mowers and keeps its shape once it's stretched. Lighter fabric costs less and is fine for low-traffic garden or property-line fencing. Mesh size matters too. Standard mesh works for most jobs, but around a pool, Lafourche limits chain link openings to 1-3/4 inches unless slats bring them down to that size, so standard mesh needs slats there.",
          "Height depends on what you're keeping in or out. A 4 foot fence holds most dogs and small kids, while jumpers and climbers call for 5 or 6 feet. In the front yard, Lafourche caps fences at 3 feet once they pass the front of the building. Barbed wire on top has to sit at least 7 feet above grade, unless the land is used for pasture, farming or agriculture.",
        ],
      },
      {
        h2: "Chain link for dog yards and residential backyards",
        body: [
          "Chain link works well for dogs because they can't chew through it, it's hard to climb, and you can see them from the kitchen window. A few details make it work better.",
          "If your dog digs, a bottom tension wire and fabric kept close to grade help a lot, and some owners add a strip of buried wire or a small concrete curb at the worst spots. A dog that jumps needs more height. The gate is where most escapes happen, so a good latch and a tight gap under the gate matter more than people expect.",
          "Inside a bigger yard, a short run of chain link with its own gate can keep the dog out of the garden or away from the pool equipment. Black vinyl-coated fabric looks clean enough to run right off the back corners of the house. If you want privacy along with containment, privacy slats can go into the same fence.",
        ],
      },
      {
        h2: "How do terminal posts and tension keep chain link straight?",
        body: [
          "Terminal posts carry the whole fence, and the fabric has to be stretched tight between them. When chain link sags or leans, one of those two things has usually failed.",
          "Every end, corner and gate post is a terminal post. They're heavier than the line posts, set in concrete and braced back toward the next post. The fabric attaches to them with a tension bar and bands, and it gets pulled tight before it's tied off. The line posts in between hold the fabric up but don't take the pull.",
          "In soft, wet clay, terminal posts are the ones most likely to lean over time, because they're fighting the tension of the entire run. So they get set deeper and sized heavier than the line posts. A top rail or top tension wire keeps the upper edge from waving, and a bottom tension wire stops the fabric from being pushed out by dogs or debris.",
        ],
      },
      {
        h2: "Where does chain link make sense on acreage and back lots?",
        body: [
          "Chain link is the practical pick on long runs where privacy isn't the goal: back lots, shop yards, equipment storage and the rear of rural properties. It costs far less per foot than wood privacy or aluminum, and a damaged section is easy to repair.",
          "On larger properties around Gray, Labadieville and the edges of Thibodaux, a split approach is common. A nicer fence goes around the house and yard, and galvanized chain link closes off the shop, the equipment or the back of the lot. Along a field or a drainage canal, chain link lets water and wind pass through, which counts on low ground.",
          "When you need screening without a wood fence, privacy slats slide into the mesh and hide equipment, trash areas or a work yard from the road. We've used slatted chain link around commercial equipment and picnic areas. For pasture and livestock, a board fence or barbed wire is usually the better fit, and our farm and ranch page covers those.",
        ],
      },
    ],
    included: [
      "Galvanized or black vinyl-coated fabric, posts and rails",
      "Heavier-gauge fabric for dog yards and commercial lots",
      "Braced terminal posts at ends, corners and gates",
      "Top rail or tension wire, plus a bottom tension wire",
      "Walk gates and wide double drive gates",
      "Privacy slats for screening",
      "Barbed wire tops where the parish allows them",
      "Repairs and add-ons to existing chain link",
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
        a: "Usually, yes. Galvanized chain link is typically the lowest-cost fence per foot, and black vinyl-coated costs somewhat more. Gates, terminal posts and slats add to the price, so the difference shrinks on short runs with lots of corners.",
      },
      {
        q: "Can I add privacy slats to my existing chain link fence?",
        a: "Yes, slats can usually go into a fence that's still straight and tight. They do add wind load, so leaning posts should be fixed first. Slats come in several colors.",
      },
      {
        q: "Can a chain link fence go near a drainage ditch?",
        a: "Chain link is one of the better options near drainage because water passes through the mesh. In Lafourche the fence still can't block drainage, so keep it out of the ditch and check your plat for drainage servitudes. Low spots may need a bottom wire set to keep debris from building up.",
      },
      {
        q: "How high does barbed wire have to be on a chain link fence?",
        a: "In Lafourche Parish, barbed wire can't sit lower than 7 feet above grade, except on land used for pasture, farming or agriculture. Fences over 8 feet must be noncombustible and need stamped plans, though plans may be waived for open designs. We'll lay out the height to fit the rule.",
      },
      {
        q: "Can chain link be installed on a slope?",
        a: "Yes, chain link follows grade better than almost any other fence because the fabric flexes. It's stretched along the slope instead of stepped, so there are no stair-step gaps underneath. Sharp dips may need extra fabric or a short filler section.",
      },
      {
        q: "Is chain link a good fence for a business?",
        a: "Yes, it's the standard for securing commercial lots, equipment yards and utility areas. Galvanized fabric, heavy terminal posts, barbed wire where allowed, and slats for screening cover most needs. Our commercial fencing page goes into gates and larger sites.",
      },
    ],
    related: ["commercial-fencing", "farm-ranch-fencing", "fence-repair"],
    serviceType: "Chain link fence installation",
    cardBlurb:
      "Galvanized and black vinyl-coated chain link for dog yards, back lots, acreage and businesses, with braced posts, gates and privacy slats.",
  },
]
