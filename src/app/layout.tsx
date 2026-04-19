import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itsatharv.vercel.app"),
  title: "Atharv Pote | Freelance Web Developer India | Hire Full Stack Developer",
  description: "Hire Atharv Pote - Professional freelance web developer in India. I build high-converting websites, web apps & e-commerce stores for businesses. Get a free quote in 24 hours. React, Next.js, Node.js expert.",
  keywords: [
    "Atharv Pote",
    "Atharv Pote Developer",
    "Atharv Pote Freelancer",
    "Atharv Pote India",
    "Hire Atharv Pote",
    "Freelance Web Developer India",
    "Freelance Web Developer",
    "Web Developer India",
    "Full Stack Developer India",
    "Web Developer for Hire",
    "Hire Web Developer",
    "Web Development Services",
    "Website Developer Near Me",
    "E-commerce Developer India",
    "React Developer India",
    "Next.js Developer",
    "Node.js Developer",
    "Website Designer India",
    "Landing Page Developer",
    "Business Website Developer",
    "Custom Web Application",
    "Web App Developer",
    "Frontend Developer India",
    "Backend Developer India",
    "MERN Stack Developer",
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
    title: "Atharv Pote | Freelance Web Developer India | Hire Full Stack Developer",
    description: "Hire Atharv Pote - Professional freelance web developer in India. I build high-converting websites, web apps & e-commerce stores for businesses. Get a free quote in 24 hours.",
    type: "website",
    url: "https://itsatharv.vercel.app",
    siteName: "Atharv Pote - Freelance Web Developer",
    locale: "en_IN",
    images: [
      {
        url: "/images/Atharv Profile Pic.JPG",
        width: 800,
        height: 600,
        alt: "Atharv Pote - Freelance Web Developer India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharv Pote | Freelance Web Developer India",
    description: "Hire professional freelance web developer in India. Websites, web apps & e-commerce. Get free quote in 24h.",
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
