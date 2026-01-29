import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Ptah Systems | Geleceğin Dijital Çözümleri",
  description: "Ptah Systems, kurumsal yazılım çözümleri, yapay zeka entegrasyonları ve modern web deneyimleri sunan profesyonel bir teknoloji çözüm ortağıdır.",
  keywords: ["yazılım", "yapay zeka", "kurumsal web sitesi", "dijital dönüşüm", "ptah systems", "next.js", "yazılım geliştirme"],
  authors: [{ name: "Ptah Systems Team" }],
  openGraph: {
    title: "Ptah Systems | Geleceğin Dijital Çözümleri",
    description: "Profesyonel teknoloji ve yazılım çözümleri.",
    url: "https://ptahsystems.com",
    siteName: "Ptah Systems",
    images: [
      {
        url: "/og-image.png", // User would need to add this
        width: 1200,
        height: 630,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ptah Systems | Geleceğin Dijital Çözümleri",
    description: "Geleceğin dijital dünyasını bugün inşa ediyoruz.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
