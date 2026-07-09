import type { Metadata } from "next";
import { cormorant, dmSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "FORMED — Private Personal Training, Delivered to Your Home",
  description:
    "Certified trainers come to your home, fully equipped. No gym membership, no commute. Just consistent, professional training built around your life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}