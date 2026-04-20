import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// SEO Configuration based on template
export const metadata: Metadata = {
  metadataBase: new URL("https://itsatharv.vercel.app"),
  title: "Full Stack Developer Portfolio | Atharv Pote",
  description: "Full Stack Developer specializing in React, Node.js, and scalable web applications. Explore real-world projects, modern UI design, and performance-focused builds. Hire Atharv Pote for your next project.",
  keywords: [
    "Atharv Pote",
    "Atharv Pote Developer",
    "Atharv Pote Freelancer",
    "Atharv Pote India",
    "Hire Atharv Pote",
    "Full Stack Developer Portfolio",
    "React Developer",
    "React Developer India",
    "Node.js Developer",
    "Node.js Developer India",
    "MERN Stack Developer",
    "MERN Stack Developer India",
    "Web Developer Portfolio",
    "Hire Full Stack Developer",
    "Freelance Web Developer India",
    "Freelance Web Developer",
    "Web Developer India",
    "Full Stack Developer India",
    "Web Developer for Hire",
    "Hire Web Developer",
    "Web Development Services",
    "Website Developer Near Me",
    "E-commerce Developer India",
    "Next.js Developer",
    "Website Designer India",
    "Landing Page Developer",
    "Business Website Developer",
    "Custom Web Application",
    "Web App Developer",
    "Frontend Developer India",
    "Backend Developer India",
    "Portfolio Website Developer",
    "Professional Web Developer",
    "Affordable Web Developer",
    "Remote Web Developer",
    "Indian Web Developer",
    "Web Development Company India",
    "Web Design Services",
    "Web Development Freelancer",
    "Shopify Developer India",
    "WordPress Developer India",
    "JavaScript Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "Express Developer",
  ],
  authors: [{ name: "Atharv Pote", url: "https://itsatharv.vercel.app" }],
  creator: "Atharv Pote",
  publisher: "Atharv Pote",
  verification: {
    google: "40Izo8cQISBY_PKssbJhRe_eDAMpkFVS376FRUL8zJg",
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
  alternates: {
    canonical: "https://itsatharv.vercel.app",
  },
  icons: {
    icon: "/AP logo.jpg",
    shortcut: "/AP logo.jpg",
    apple: "/AP logo.jpg",
  },
  openGraph: {
    title: "Full Stack Developer Portfolio | Atharv Pote",
    description: "Explore projects built with React, Node.js, and modern technologies. Hire Atharv Pote - skilled full stack developer from India for scalable web applications.",
    url: "https://itsatharv.vercel.app",
    type: "website",
    siteName: "Atharv Pote - Full Stack Developer Portfolio",
    locale: "en_IN",
    images: [
      {
        url: "/images/Atharv Profile Pic.JPG",
        width: 800,
        height: 600,
        alt: "Atharv Pote - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Developer Portfolio | Atharv Pote",
    description: "React, Node.js, and scalable web apps portfolio. Hire Atharv Pote for your next project.",
    creator: "@atharvpote14",
    images: ["/images/Atharv Profile Pic.JPG"],
  },
  other: {
    "contact:email": "atharvpote14@gmail.com",
    "contact:phone": "",
    "contact:city": "Pune",
    "contact:country": "India",
  },
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Atharv Pote",
  "url": "https://itsatharv.vercel.app",
  "jobTitle": "Full Stack Developer",
  "description": "Full Stack Developer specializing in React, Node.js, and scalable web applications",
  "email": "atharvpote14@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressCountry": "India"
  },
  "sameAs": [
    "https://github.com/Atharvpote14",
    "https://www.linkedin.com/in/atharv-pote-762964395"
  ],
  "knowsAbout": [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Atharv Pote - Freelance Web Developer"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Web Development Services",
      "description": "Full stack web development services including React, Node.js, and modern web applications"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TVSL685G');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVSL685G"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
