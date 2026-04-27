import type { Metadata } from "next";
import { Geist, Geist_Mono, Azeret_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/context/ThemeContext";
import '@ant-design/v5-patch-for-react-19';
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { Contact } from "@/src/components/Contact";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emem-olushola.vercel.app"),

  title: {
    default: "Emem Olushola | Frontend Engineer",
    template: "%s | Emem Olushola",
  },

  description:
    "Frontend Engineer with 4+ years of experience building scalable, responsive, and high-performance web applications using React.js, Next.js, TypeScript, and modern frontend tooling.",

  keywords: [
    "Emem Olushola",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer Nigeria",
    "Web Developer",
  ],

  authors: [{ name: "Emem Olushola" }],
  creator: "Emem Olushola",

  openGraph: {
    title: "Emem Olushola | Frontend Engineer",
    description:
      "Frontend Engineer building scalable, responsive, and high-performance web applications with React, Next.js, and TypeScript.",
    url: "https://emem-olushola.vercel.app",
    siteName: "Emem Olushola Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Emem Olushola Portfolio",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Emem Olushola | Frontend Engineer",
    description:
      "Frontend Engineer building modern web applications with React, Next.js, and TypeScript.",
    images: ["/twitter-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${azeretMono.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen body-gradient-bg  ">
            {/* <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-black dark:to-slate-900 light:from-slate-50 light:via-purple-50 light:to-pink-50 transition-colors duration-500"> */}
            <Navbar />
            {children}
            <div className="mx-8 lg:px-14 3xl:px-28 py-16 lg:py-28">
              {/* Contact */}
              <Contact />
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
