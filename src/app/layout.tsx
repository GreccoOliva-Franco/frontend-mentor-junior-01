import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Testimonials Grid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'flex flex-col h-screen items-center bg-Gray-100 antialiased',
        barlow.className
      )}>
        {children}
      </body>
    </html>
  );
}
