import { FaCode, FaCreditCard, FaServer, FaDatabase, FaShoppingCart, FaPaintBrush } from 'react-icons/fa';

const services = [
    {
        icon: FaCode,
        slug: "website-development",
        title: "Website Development",
        shortDesc: "Custom, responsive websites built with modern frameworks and pixel-perfect execution.",
        color: "from-primary via-purple-500 to-primary",
        longDesc: "I build fast, responsive, and SEO-friendly websites tailored to your brand identity. From single-page portfolios to complex multi-page applications, every project is crafted with clean code architecture, optimized performance, and modern design principles. Whether you need a landing page, a corporate site, or a full-blown web application — I deliver production-ready solutions.",
        features: [
            "Responsive & mobile-first design",
            "Server-side rendering with Next.js",
            "SEO optimization & structured data",
            "Performance tuning (Core Web Vitals)",
            "Cross-browser compatibility",
            "Progressive Web App (PWA) support"
        ],
        techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"]
    },
    {
        icon: FaCreditCard,
        slug: "payment-integration",
        title: "Payment Integration",
        shortDesc: "Secure payment gateways and subscription billing wired into your application.",
        color: "from-green-500 via-emerald-500 to-teal-500",
        longDesc: "I integrate secure, PCI-compliant payment solutions into your web applications. Whether you need one-time checkout flows, recurring subscriptions, or marketplace split payments — I handle the full implementation from API integration to webhook handling and receipt generation. Your customers get a seamless checkout experience, and you get reliable revenue collection.",
        features: [
            "Stripe & SSLCommerz integration",
            "Subscription & recurring billing",
            "Webhook event handling",
            "Invoice & receipt generation",
            "Refund & dispute management",
            "Multi-currency support"
        ],
        techStack: ["Stripe API", "SSLCommerz", "Node.js", "Express.js", "Webhook Handlers", "MongoDB"]
    },
    {
        icon: FaServer,
        slug: "api-development",
        title: "API Development",
        shortDesc: "Robust, scalable RESTful APIs with authentication, validation, and documentation.",
        color: "from-blue-500 via-cyan-500 to-blue-600",
        longDesc: "I design and build production-grade RESTful APIs that serve as the backbone of your application. Every endpoint is secured with JWT authentication, validated with schema-level checks, rate-limited for protection, and documented for easy consumption. From simple CRUD services to complex multi-tenant architectures — your API will be fast, reliable, and maintainable.",
        features: [
            "RESTful API architecture",
            "JWT & OAuth authentication",
            "Input validation & error handling",
            "Rate limiting & security headers",
            "API documentation (Swagger/OpenAPI)",
            "Automated testing & CI/CD"
        ],
        techStack: ["Node.js", "Express.js", "TypeScript", "Prisma", "PostgreSQL", "MongoDB"]
    },
    {
        icon: FaDatabase,
        slug: "database-design",
        title: "Database Design",
        shortDesc: "Efficient schema design, migrations, and query optimization for SQL & NoSQL.",
        color: "from-amber-500 via-orange-500 to-amber-600",
        longDesc: "I architect database schemas that are normalized, indexed, and optimized for your exact access patterns. Whether you're using MongoDB for flexible document storage or PostgreSQL for relational integrity — I design data models that scale with your growth. I handle migrations, seed scripts, backup strategies, and performance tuning to keep your data layer bulletproof.",
        features: [
            "Schema design & data modeling",
            "Database migrations & seeding",
            "Query optimization & indexing",
            "Relational (PostgreSQL) & NoSQL (MongoDB)",
            "ORM integration (Prisma, Mongoose)",
            "Backup & recovery strategies"
        ],
        techStack: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose", "Redis", "SQL"]
    },
    {
        icon: FaShoppingCart,
        slug: "ecommerce-solutions",
        title: "E-Commerce Solutions",
        shortDesc: "Full-featured online stores with cart, checkout, inventory, and admin dashboards.",
        color: "from-pink-500 via-rose-500 to-pink-600",
        longDesc: "I build end-to-end e-commerce platforms that handle everything from product catalogs and shopping carts to secure checkout and order management. Each store is equipped with an admin dashboard for inventory tracking, order processing, and analytics. Whether you need a single-vendor shop or a multi-vendor marketplace — I deliver a complete, revenue-ready solution.",
        features: [
            "Product catalog & search/filter",
            "Shopping cart & wishlist",
            "Secure checkout with payment gateways",
            "Admin dashboard & analytics",
            "Inventory & order management",
            "Email notifications & receipts"
        ],
        techStack: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Prisma"]
    },
    {
        icon: FaPaintBrush,
        slug: "ui-ux-animation",
        title: "UI/UX & Animation",
        shortDesc: "Polished interfaces with smooth micro-animations and delightful interactions.",
        color: "from-secondary via-sky-500 to-secondary",
        longDesc: "I craft premium user interfaces where every transition, hover state, and scroll interaction feels intentional and polished. Using Framer Motion and CSS animations, I bring your designs to life with smooth page transitions, staggered reveals, parallax effects, and interactive micro-animations that elevate the user experience from functional to exceptional.",
        features: [
            "Framer Motion page transitions",
            "Scroll-triggered animations",
            "Micro-interactions & hover effects",
            "Responsive layout systems",
            "Accessible UI components",
            "Design system implementation"
        ],
        techStack: ["Framer Motion", "Tailwind CSS", "React.js", "CSS Animations", "Figma to Code", "ARIA"]
    }
];

export default services;
