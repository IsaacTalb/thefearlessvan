import type { Metadata, Viewport } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Spotlight } from "@/components/spotlight";

const display = Archivo_Black({ subsets: ["latin"], variable: "--font-display", weight: "400" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://thefearlessvan.com"),
  title: { default: "Joshua Van — The Fearless", template: "%s — Joshua Van" },
  description: "The digital home of Joshua Van — Myanmar-born UFC Flyweight World Champion.",
  openGraph: { title: "Joshua Van — The Fearless", description: "From Myanmar to the world. Built fearless.", type: "website" },
  twitter: { card: "summary_large_image", title: "Joshua Van — The Fearless", description: "From Myanmar to the world. Built fearless." },
};
export const viewport: Viewport = { themeColor: "#080808", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body><a className="skip-link" href="#content">Skip to content</a><Spotlight />{children}</body></html>;
}
