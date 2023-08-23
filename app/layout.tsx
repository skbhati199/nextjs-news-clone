import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative ">
            <div className="a">
              {/* Header */}
              <Header />
              {/* Navbar */}
              <Navbar />
              {/* SearchBox */}
              {children}
            </div>
            <div className="sticky bg-fixed bottom-0 bg-background w-full">
              {/* Footer */}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
