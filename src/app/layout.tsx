import { generateMetadata } from "@/lib/metadata";
import { Lora, Inter_Tight } from "next/font/google";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="mx-auto my-20 w-full max-w-[40rem] md:px-0 px-6">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
