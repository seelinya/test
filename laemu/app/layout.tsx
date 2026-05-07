import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LAEMU – Am Puls der Ländlermusik",
  description:
    "LAEMU entfacht das volle Potenzial der Ländlermusik – als starke, inspirierende und modern gelebte Kultur, die stolz getragen wird, Menschen berührt, verbindet und Zukunft schafft.",
  keywords: ["Ländlermusik", "Schweizer Volksmusik", "LAEMU", "Swiss Folk Music", "Handorgel", "Schwyzerörgeli"],
  openGraph: {
    title: "LAEMU – Am Puls der Ländlermusik",
    description: "Die zentrale Plattform für Schweizer Ländlermusik.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${inter.variable} ${dancing.variable}`}
    >
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
