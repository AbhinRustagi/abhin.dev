import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { generateMetadata } from "@/lib/metadata";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="mx-auto py-20 w-full max-w-[40rem] md:px-0 px-6">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
