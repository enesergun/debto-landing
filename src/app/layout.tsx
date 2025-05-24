import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { siteDetails } from "@/data/siteDetails";

import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL('https://debto.money/'),
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${sourceSans.className} antialiased`}>
        <Providers>
          {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
