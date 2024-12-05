import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import generateMetadata from "@/lib/metadata";

const cascadia_code = localFont({
  src: [
    {
      path: "_fonts/CascadiaCode-Light.otf",
      weight: "normal",
    },
    {
      path: "_fonts/CascadiaCode-Bold.otf",
      weight: "bold",
    },
  ],
  variable: "--font-cascadia-code",
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${cascadia_code.variable} antialiased`}
      >
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
      {process.env?.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
    </html>
  );
}
