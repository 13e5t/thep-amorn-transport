import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: 'หจก. เทพอมร ทรานสปอร์ต - บริการขนส่งสินค้าทั่วประเทศ',
  description: 'ให้บริการขนส่งสินค้าทั่วประเทศ ด้วยรถบรรทุกที่ได้มาตรฐาน บริการรวดเร็ว ปลอดภัย ไว้วางใจได้',
  keywords: 'สิบล้อ, รถสิบล้อ, ขนส่ง, ขนส่งสินค้า, รถบรรทุก, ขนส่งทั่วประเทศ, เทพอมร, ทรานสปอร์ต'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
