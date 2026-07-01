import type { Metadata } from "next";
import { JetBrains_Mono, IBM_Plex_Sans, Fraunces } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Marvy Nwaokobia — Full-stack & Protocol Engineer",
  description:
    "Full-stack & protocol engineer. I build secure systems end-to-end — smart contracts, cryptography, backends, and the apps on top of them.",
  openGraph: {
    title: "Marvy Nwaokobia — Full-stack & Protocol Engineer",
    description:
      "Full-stack & protocol engineer. I build secure systems end-to-end — smart contracts, cryptography, backends, and the apps on top of them.",
    type: "website",
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
      className={`${jetbrainsMono.variable} ${plexSans.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
