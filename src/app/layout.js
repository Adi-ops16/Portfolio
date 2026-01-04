import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { BackgroundEffect } from "@/components/ui/BackgroundEffect";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://portfolio-olive-one-13.vercel.app/"),
  title: "Abdul Hasib - MERN Stack Developer | Full-Stack Web Developer Portfolio",
  description: "Experienced MERN stack developer specializing in React, Node.js, Express, and MongoDB. Building scalable, performant web applications with modern JavaScript frameworks. View my portfolio of full-stack projects and let's connect.",
  keywords: ["MERN Stack Developer", "Full Stack Developer", "React Developer", "Node.js Developer", "MongoDB", "Express.js", "Web Developer Portfolio", "JavaScript Developer", "Frontend Developer", "Backend Developer"],
  authors: [{ name: "Abdul Hasib" }],
  creator: "Abdul Hasib",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-olive-one-13.vercel.app/",
    title: "Abdul Hasib - MERN Stack Developer | Full-Stack Portfolio",
    description: "Full-stack developer portfolio showcasing React, Node.js, Express, and MongoDB projects. Turning ideas into elegant, performant web applications.",
    siteName: "Abdul Hasib Portfolio",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Hasib - MERN Stack Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Hasib - MERN Stack Developer",
    description: "Full-stack developer specializing in React, Node.js, and the MERN stack",
    images: ["/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdul Hasib",
    jobTitle: "MERN Stack Developer",
    description: "Full Stack Web Developer specializing in React, Node.js, Express.js, and MongoDB",
    url: "https://portfolio-olive-one-13.vercel.app/",
    sameAs: [
      "https://github.com/Adi-ops16",
      "",
      "https://twitter.com/yourhandle"
    ],
    knowsAbout: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Web Development",
      "MERN Stack"
    ],
    alumniOf: {
      "@type": "Programming-hero",
      name: "Complete web development by programming hero"
    }
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased text-white bg-background-dark overflow-x-hidden selection:bg-primary selection:text-white`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SmoothScroll>
          <SplashScreen />
          <BackgroundEffect />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
