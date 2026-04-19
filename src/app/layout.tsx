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
  title: "Atharv Pote - Full Stack Developer",
  description: "Passionate full-stack developer creating beautiful, scalable web applications with modern technologies.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "Node.js", "TypeScript"],
  authors: [{ name: "Atharv Pote" }],
  verification: {
    google: "40Izo8cQISBY_PKssbJhRe_eDAMpkFVS376FRUL8zJg",
  },
  icons: {
    icon: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
  },
  openGraph: {
    title: "Atharv Pote - Full Stack Developer",
    description: "Passionate full-stack developer creating beautiful, scalable web applications with modern technologies.",
    type: "website",
    url: "https://atharvpote.com",
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
