import type { Metadata } from "next";
import { Geist, Geist_Mono, Azeret_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import '@ant-design/v5-patch-for-react-19';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";


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
  title: "Emem Olushola Portfolio",
  description: "A portfolio to showcase my skills",
  icons: {
    icon: "/favicon.png",
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
