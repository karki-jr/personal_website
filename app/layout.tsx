import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Yukesh Karki",
  icons: {
    icon: "yukesh.png",
  },
  description:
    "Aerospace Engineer and PhD student",
  keywords: [
    "aerospace engineer",
    "CFD",
    "aerodynamics",
    "propulsion",
    "fluid dynamics",
    "Nepal",
  ],
  authors: [{ name: "Yukesh Karki" }],
  openGraph: {
    title: "Yukesh Karki - Aerospace Engineer",
    description:
      "PhD student focusing in  in aerodynamics, CFD and FSI",
    type: "website",
    locale: "en_US",
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
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
