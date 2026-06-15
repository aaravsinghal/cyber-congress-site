import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Cyber Congress",
  description: "The prestigious cyber security society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col justify-between bg-my-black text-white">
        <Navbar />
        <div className="flex-grow pt-24">{children}</div>
      </body>
    </html>
  );
}