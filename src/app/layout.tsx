import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared-Compo/Navbar";
import { ThemeProvider } from "@/components/Theme-Provider/theme-provider";
import Footer from "@/components/Shared-Compo/Footer";


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
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}