import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared-Compo/Navbar";
import { ThemeProvider } from "@/components/Theme-Provider/theme-provider";
import Footer from "@/components/Shared-Compo/Footer";
import TextSlider from "@/components/TextSlider";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
});

export const metadata: Metadata = {
  title: "এমপি পোর্টফোলিও | অফিশিয়াল ওয়েবসাইট",
  description: "সংসদ সদস্যের অফিশিয়াল ডিজিটাল পোর্টাল ও জনসেবা ডেস্ক",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={hindSiliguri.variable} suppressHydrationWarning>
      <body className={`${hindSiliguri.className} min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* নিউজ/আপডেট স্লাইডার */}
          <TextSlider />
          
          {/* মূল নেভিগেশন বার */}
          <Navbar />

          {/* পেজের মূল কনটেন্ট */}
          <main className="flex-grow">{children}</main>

          {/* ফুটার */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}