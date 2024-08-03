import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { generateMetadata } from "@/lib/metadata";
import { Libre_Bodoni, DM_Sans } from "next/font/google";
import "./globals.css";

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-libre-bodoni",
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
    <html lang="en" className={`${libreBodoni.variable} ${dmSans.variable}`}>
      <body className="mx-auto py-20 w-full max-w-[40rem] md:px-0 px-6">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
