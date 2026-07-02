import { validateProject } from '@/lib/utils';

/** @type {Project[]} */
export const projects = [
  {
    title: "Swift-Tix",
    slug: "swift-tix",
    description: "Swift-Tix is a full-stack Online Ticket Booking Platform built with the MERN stack. It enables users to discover, book, and securely pay for travel tickets including Bus, Train, Launch, and Plane services, with a robust role-based system and real-world booking workflows.",
    image: "https://i.ibb.co.com/Mx1sGcm0/Screenshot-2026-01-05-012118.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    gitHub_link: "https://github.com/Adi-ops16/Swift-Tix-client",
    live_link: "https://assignment-11-2501.web.app/",
    colors: ["yellow", "orange", "gray", "green"],
    role: "Full-Stack Developer",
    problem: "Travelers in Bangladesh have to visit physical counters or use fragmented apps to book multi-modal transport tickets, leading to long queues, missed journeys, and no unified digital record of bookings.",
    solution: "A single-page MERN application with role-based dashboards (User, Vendor, Admin) that aggregates all transport types, processes payments via Stripe, and issues downloadable e-tickets with QR codes.",
    outcomes: [
      "Reduced end-to-end booking flow to under 3 minutes from browsing to payment confirmation",
      "Vendors can publish new routes and manage seat inventory in real time without developer intervention",
      "Admin dashboard surfaces booking analytics and revenue breakdowns, eliminating manual spreadsheet reporting",
      "JWT refresh-token strategy keeps sessions secure across long journeys without repeated logins",
    ],
    challenges: [
      "Designing a seat-locking mechanism that prevents double-booking during concurrent Stripe checkout sessions",
      "Implementing role-based route guards on both client and server so vendor and admin endpoints are never exposed to ordinary users",
      "Handling Stripe webhook retries idempotently so payment confirmations are never double-processed",
    ],
    techDecisions: [
      {
        decision: "MongoDB for persistence",
        reason: "Schema flexibility allowed iterating on the booking model (adding new transport types, seat maps) without costly migrations during the development phase.",
      },
      {
        decision: "Stripe for payment processing",
        reason: "Stripe's webhook system provides reliable asynchronous payment confirmation, which is essential for decoupling the booking creation from the payment outcome.",
      },
      {
        decision: "JWT with refresh tokens instead of sessions",
        reason: "Stateless auth scales horizontally without a shared session store, and short-lived access tokens minimise the blast radius of token leakage.",
      },
    ],
    architectureOverview: "React SPA communicates with an Express REST API hosted on Render. MongoDB Atlas stores users, routes, bookings, and vendor profiles. Stripe handles payments and fires webhooks back to the API to confirm booking status. Firebase Auth handles social login; JWT manages subsequent sessions.",
    duration: "6 weeks",
    teamSize: 1,
    featured: true,
  },
  {
    title: "Krishi-Link",
    slug: "krishi-link",
    description: "KrishiLink is a modern agricultural marketplace that connects farmers, traders, and consumers directly, empowering farmers to showcase crops, helping buyers discover fresh local produce, and encouraging sustainable farming practices across Bangladesh.",
    image: "https://i.ibb.co.com/LhsThgf0/Screenshot-2026-01-05-011409.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
    gitHub_link: "https://github.com/Adi-ops16/Krishi-Link-client",
    live_link: "https://assignment-10-46c35.web.app/",
    colors: ["blue", "green", "gray"],
    role: "Full-Stack Developer",
    problem: "Smallholder farmers in Bangladesh lack a direct digital channel to reach buyers, resulting in heavy reliance on middlemen who capture most of the value margin and leave farmers with below-market prices.",
    solution: "A marketplace web app where farmers post crop listings with photos and pricing, and buyers browse, filter, and directly contact sellers, removing intermediaries and increasing price transparency.",
    outcomes: [
      "Farmers can publish a new crop listing in under two minutes using the guided form",
      "Buyers can filter listings by crop type, region, and price range, reducing discovery time",
      "Real-time listing updates ensure out-of-stock crops are surfaced immediately rather than after a page reload",
    ],
    challenges: [
      "Building a performant image upload flow that compresses images client-side before storing them to keep hosting costs low",
      "Designing a search and filter system that remains fast as the listing count grows, using MongoDB compound indexes",
      "Handling unauthenticated browsing while restricting listing creation and direct messaging to verified accounts",
    ],
    techDecisions: [
      {
        decision: "Firebase Authentication for user identity",
        reason: "Firebase Auth handles email/password and Google OAuth out of the box, cutting auth implementation time and providing a battle-tested security layer.",
      },
      {
        decision: "MongoDB compound indexes on crop type + region",
        reason: "The primary browse interaction is filtering by category and location; compound indexes bring those query times below 10 ms even on larger datasets.",
      },
    ],
    architectureOverview: "React frontend deployed on Firebase Hosting. Express API on Render connects to MongoDB Atlas. Firebase Auth issues tokens that the Express API verifies on protected routes. Images are stored as URLs via ImgBB CDN to avoid egress costs.",
    duration: "4 weeks",
    teamSize: 1,
    featured: true,
  },
  {
    title: "Toy-verse",
    slug: "toy-verse",
    description: "Toy Verse is a modern, responsive toy store web application. Users can explore toys, view featured products, and manage authentication securely with Firebase, designed for a smooth and interactive shopping experience.",
    image: "https://i.ibb.co.com/N2DpqZys/Screenshot-2025-12-05-180706.png",
    tags: ["React.js", "Firebase", "Tailwind CSS", "Node.js", "MongoDB"],
    gitHub_link: "https://github.com/Adi-ops16/toy-verse",
    live_link: "https://my-toy-store-59c1e.web.app/",
    colors: ["green", "yellow", "sky"],
    role: "Frontend Developer",
    problem: "Small toy retailers lack an affordable, visually engaging online storefront that handles user accounts, product discovery, and a shopping experience without requiring expensive e-commerce platforms.",
    solution: "A React + Firebase SPA with a product catalogue backed by MongoDB, featuring category filtering, a featured-products carousel, and Firebase Auth for secure user sessions.",
    outcomes: [
      "Product pages load in under 1.5 seconds on a standard 4G connection due to lazy-loaded images",
      "Category filtering narrows a 50+ product catalogue to relevant items in a single interaction",
      "Firebase Auth integration provides social login without building a custom auth system",
    ],
    challenges: [
      "Implementing a responsive product grid that gracefully handles varying image aspect ratios without layout shift",
      "Synchronising the shopping cart state between local state and Firebase Firestore for logged-in users",
    ],
    techDecisions: [
      {
        decision: "Tailwind CSS for styling",
        reason: "Utility-first CSS enabled rapid UI iteration and consistent spacing/color tokens across components without writing custom CSS files.",
      },
      {
        decision: "Firebase for auth and hosting",
        reason: "Zero-configuration deployment and built-in auth providers significantly reduced infrastructure overhead for a solo side project.",
      },
    ],
    architectureOverview: "React SPA hosted on Firebase Hosting. Firebase Auth manages sessions. Product data is stored in MongoDB Atlas and served through an Express API on Render. Cart state is persisted in localStorage for guests and Firestore for authenticated users.",
    duration: "3 weeks",
    teamSize: 1,
    featured: false,
  },
  {
    title: "Dragon News",
    slug: "dragon-news",
    description: "Dragon News is a local news website where users can read recent articles, watch headlines, and browse category-wise news. Only authenticated users can access full detailed articles, demonstrating a news application with authentication-gated content.",
    image: "https://i.ibb.co.com/7xNPkqF6/Screenshot-2025-12-05-181358.png",
    tags: ["React.js", "Firebase", "React Router"],
    gitHub_link: "https://github.com/Adi-ops16/Dragon-news",
    live_link: "https://dragon---news-25.web.app/category/0",
    colors: ["gray", "orange", "purple"],
    role: "Frontend Developer",
    problem: "Local news readers have no dedicated platform to browse categorised regional news with a clean reading experience — most aggregators are cluttered and do not gate in-depth articles to encourage account creation.",
    solution: "A React SPA using React Router for category-based navigation and Firebase Auth to gate full article access, providing a clean, distraction-free reading experience with a headline ticker.",
    outcomes: [
      "Users can browse all categories without login and see previews, driving account sign-up to read full articles",
      "Category-based routing enables direct deep-linking to any news section via URL",
      "Firebase Auth provides instant login via Google, reducing friction to zero for new readers",
    ],
    challenges: [
      "Implementing protected routes in React Router v6 that redirect unauthenticated users to login while preserving their intended destination",
      "Designing a headline ticker that auto-scrolls without causing layout reflow on the main content area",
    ],
    techDecisions: [
      {
        decision: "React Router v6 for navigation",
        reason: "Nested routes and the new loader API made category-based navigation clean and declarative without manual conditional rendering.",
      },
      {
        decision: "Firebase Auth for article gating",
        reason: "Firebase Auth's onAuthStateChanged listener allows instant, reactive UI updates when session state changes without polling.",
      },
    ],
    architectureOverview: "React SPA deployed on Firebase Hosting. News data is fetched from a third-party REST API. Firebase Auth manages user sessions. React Router handles all client-side navigation including protected routes that redirect unauthenticated users.",
    duration: "2 weeks",
    teamSize: 1,
    featured: false,
  },
];

// Validate all projects in development
if (process.env.NODE_ENV === 'development') {
  projects.forEach(validateProject);
}
