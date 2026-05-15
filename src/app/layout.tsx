import type { Metadata } from "next";
import { Geist, Geist_Mono, Azeret_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/context/ThemeContext";
import "@ant-design/v5-patch-for-react-19";
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
    default:
      "Ememobong Olushola Umoren | Frontend Engineer & React Developer",
    template: "%s | Ememobong Olushola Umoren",
  },

  description:
    "Ememobong Olushola Umoren is a Frontend Engineer and React Developer based in Nigeria, specializing in React.js, Next.js, TypeScript, and modern web applications. Explore projects, experience, and frontend engineering work.",

  applicationName: "Ememobong Olushola Portfolio",

  keywords: [
    "Ememobong Olushola Umoren",
    "Ememobong Umoren",
    "Emem Olushola",
    "Olushola Umoren",
    "Emem Umoren",
    "Ememobong Olushola",
    "Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Engineer Nigeria",
    "Frontend Developer Nigeria",
    "React Engineer",
    "Web Developer Nigeria",
    "Software Engineer",
    "JavaScript Developer",
    "Portfolio Website",
    "Frontend Portfolio",
    "React Portfolio",
  ],

  authors: [
    {
      name: "Ememobong Olushola Umoren",
      url: "https://emem-olushola.vercel.app",
    },
  ],

  creator: "Ememobong Olushola Umoren",
  publisher: "Ememobong Olushola Umoren",

  alternates: {
    canonical: "https://emem-olushola.vercel.app",
  },

  category: "technology",

  openGraph: {
    title:
      "Ememobong Olushola Umoren | Frontend Engineer & React Developer",

    description:
      "Frontend Engineer building scalable, responsive, and high-performance web applications with React.js, Next.js, and TypeScript.",

    url: "https://emem-olushola.vercel.app",

    siteName: "Ememobong Olushola Portfolio",

    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Ememobong Olushola Umoren Portfolio Website",
      },
    ],

    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Ememobong Olushola Umoren | Frontend Engineer & React Developer",

    description:
      "Frontend Engineer specializing in React.js, Next.js, TypeScript, and scalable frontend systems.",

    images: ["/opengraph-image.jpeg"],

    creator: "@FTechbro",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "5EmNQyuRvCWeHlb3Fv4WBqXU7O0P9Ho9nCpWmThWeTk",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ememobong Olushola Umoren",
              alternateName: [
                "Ememobong Umoren",
                "Emem Olushola",
                "Emem Umoren",
                "Emem Olushola Umoren",
                "Olushola Umoren",
              ],
              url: "https://emem-olushola.vercel.app",
              image: "https://emem-olushola.vercel.app/opengraph-image.jpeg",
              jobTitle: "Frontend Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              sameAs: [
                "https://github.com/Ememobong-dev",
                "https://www.linkedin.com/in/ememobong-olushola-umoren/",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "Frontend Engineering",
                "JavaScript",
                "UI Engineering",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
