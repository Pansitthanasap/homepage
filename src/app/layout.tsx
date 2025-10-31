import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const prompt = Prompt({
  weight: ["300", "400", "700"],
  variable: "--font-prompt",
  subsets: ["latin"],
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
      <body className={`${prompt.variable} ${prompt.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
