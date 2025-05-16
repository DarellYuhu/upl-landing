import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ULU PLASTIK LATERSIA",
  description:
    "PT. Ulu Plastik Latersia adalah perusahaan daur ulang plastik di Jawa Timur yang memproduksi biji plastik dan tali rafia berkualitas untuk industri manufaktur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
