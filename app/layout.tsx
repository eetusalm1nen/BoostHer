import type { Metadata } from "next";
import { Gilda_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { portfolioData } from "@/lib/portfolio-data";
import "./globals.css";

const gildaDisplay = Gilda_Display({
  weight: "400",
  variable: "--font-gilda-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boosther | Portfolio",
  description:
    "Design & development that makes an impact. A portfolio of projects and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gildaDisplay.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer data={portfolioData.contact} />
      </body>
    </html>
  );
}
