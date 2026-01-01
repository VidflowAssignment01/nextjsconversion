import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Import your components
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VidFlow",
  description: "A YouTube Clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100`}>
        
        {/* 2. Navbar goes here (Top of page) */}
        <Navbar />

        {/* 3. Create a Flex container to put Sidebar and Content side-by-side */}
        <div className="flex">
          
          {/* Sidebar goes here (Left side) */}
          <Sidebar />

          {/* Main content area (Right side) */}
          {/* flex-1 makes it take up all remaining width */}
          <main className="flex-1">
            {children}
          </main>
          
        </div>

      </body>
    </html>
  );
}