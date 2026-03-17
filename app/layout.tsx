import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"]
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Temilade Afolayan Mercy | Biochemistry Graduate & Science Teacher",
  description:
    "Professional portfolio for Temilade Afolayan Mercy, a biochemistry graduate and science teacher passionate about education and research."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen bg-sand font-[var(--font-body)] text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
