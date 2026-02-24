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
  title: "BoostHer",
  description:
    "Lowering the threshold towards entrepreneurship.",
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
