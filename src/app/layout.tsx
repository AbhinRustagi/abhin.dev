import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { generateMetadata } from "@/lib/metadata";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { DM_Sans, Vidaloka } from "next/font/google";
import "./globals.css";
config.autoAddCss = false;

const vidaloka = Vidaloka({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vidaloka",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${vidaloka.variable} ${dmSans.variable}`}>
      <body className="mx-auto pt-6 pb-20 w-full max-w-[36rem] md:px-0 px-6">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
