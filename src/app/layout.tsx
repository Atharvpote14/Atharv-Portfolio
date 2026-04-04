import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Atharv Pote - Full Stack Developer",
  description: "Passionate full-stack developer creating beautiful, scalable web applications with modern technologies.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "Node.js", "TypeScript"],
  authors: [{ name: "Atharv Pote" }],
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
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
