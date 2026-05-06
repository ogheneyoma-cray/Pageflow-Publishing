import type { Metadata } from "next";
import { Lexend, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-playfair", // Kept original variable name to match tailwind.config
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-dm-sans", // Kept original variable name to match tailwind.config
});

export const metadata: Metadata = {
  title: "Pisired | Where Every Story Finds Its Flow",
  description: "Discover a curated sanctuary of premium ebooks designed for the modern reader.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable} ${inter.variable}`}>
      <body className="bg-slate-50 text-slate-900 antialiased" suppressHydrationWarning>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}