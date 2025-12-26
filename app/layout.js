import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vexo — Smart URL Shortener with Analytics & Custom Links",
  description: "Vexo is a modern URL shortener built for speed and control. Create short links, custom aliases, track clicks, and manage everything from a clean dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-orange-50`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
