import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit, Crimson_Text } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pansitthanasap",
  description: "We Build Teams That Build Your Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${kanit.className} ${crimsonText.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
