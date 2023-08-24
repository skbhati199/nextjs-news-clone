import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next News",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-secondary", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              {/* Header */}
              <Header />
              {/* Navbar */}
              <Navbar />
              {/* SearchBox */}
              <SearchBox />
              {children}
            </div>
            <div className="sticky bg-fixed shadow z-100 bottom-0 bg-background w-full">
              {/* Footer */}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
