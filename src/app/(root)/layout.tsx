import type { Metadata } from "next";

import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import ThemeProvider from "@/providers/ThemeProvider";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "E-Commerce Store",
  description:
    "Welcome to our online e-commerce store! Explore a diverse range of products, including clothing, accessories, and more, available in various sizes and colors. Whether you're looking for trendy fashion pieces or everyday essentials, we've got you covered. Start shopping now!",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex min-h-dvh max-w-[100dvw] flex-col overflow-x-hidden font-system antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
