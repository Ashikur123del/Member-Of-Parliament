import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared-Compo/Navbar";
import { ThemeProvider } from "@/components/Theme-Provider/theme-provider";
import Footer from "@/components/Shared-Compo/Footer";
import TextSlider from "@/components/TextSlider";
import { ToastContainer } from "react-toastify";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false, 
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
      <body className={`${hindSiliguri.className} min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TextSlider />
          <ToastContainer />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}