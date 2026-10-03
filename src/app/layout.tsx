import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Analytics from "@/components/Analytics";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "webfun — Agência Digital",
  description: "Sites, lojas virtuais, sistemas e automações para negócios que querem crescer. Design que comunica e tecnologia que entrega.",
  metadataBase: new URL("https://webfun.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://webfun.com.br",
    siteName: "Webfun",
    title: "webfun — Agência Digital",
    description: "Sites, lojas virtuais, sistemas e automações para negócios que querem crescer. Design que comunica e tecnologia que entrega.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webfun — Agência Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "webfun — Agência Digital",
    description: "Sites, lojas virtuais, sistemas e automações para negócios que querem crescer.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Analytics />
      </head>
      <body className={`${display.variable} ${body.variable}`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
