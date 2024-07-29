import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Implementation in Software Development",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={`${spaceGrotesk.className} bg-gradient-to-b from-[#030014] from-95% via-[#800be0] via-200% to-transparent overflow-y-scroll overflow-x-hidden `}>
            <Navbar />
            {children}
        </body>
    </html>
  );
}
