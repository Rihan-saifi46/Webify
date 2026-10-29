import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webify — Modern Digital Agency & Systems",
  description: "We Webify Your Local Business with High-Converting Websites, WhatsApp Bots & Custom ERPs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFC] text-[#0F172A] min-h-screen selection:bg-[#7DD3FC]/30 selection:text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
