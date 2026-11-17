import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import "./arch-studio.css";
import { Toaster } from "@/components/ui/toaster";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MR L Production — Spaces That Inspire",
  description:
    "Architecture, Interiors and Landscapes. We design meaningful spaces that blend architecture, nature and modern living.",
  keywords: [
    "Architecture",
    "Interior Design",
    "Landscape Design",
    "MR L Production",
    "Modern Villa",
  ],
  authors: [{ name: "MR L Production" }],
  icons: {
    icon: "A:/mrl-production-source/public/logo.svg",
  },
  openGraph: {
    title: "MR L Production — Spaces That Inspire",
    description:
      "Architecture, Interiors and Landscapes. We design meaningful spaces that blend architecture, nature and modern living.",
    siteName: "MR L Production",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
