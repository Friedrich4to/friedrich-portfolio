import type { Metadata } from "next";
import "./globals.css";


import { Header } from './components/Navbar'

import localfont from "next/font/local";
import type { Viewport } from 'next'
import ScrollToTopButton from "./components/backTop_btn";

const borna = localfont({
  src: [
    {path: "../../public/fonts/borna-regular-webfont.ttf", weight: "300"},
    {path: "../../public/fonts/borna-medium-webfont.ttf", weight: "500"},
    {path: "../../public/fonts/borna-semibold-webfont.ttf", weight: "700"},
    {path: "../../public/fonts/borna-bold-webfont.ttf", weight: "900"},

    {path: "../../public/fonts/borna-regularitalic-webfont.ttf", weight: "300", style: "italic"},
    {path: "../../public/fonts/borna-mediumitalic-webfont.ttf", weight: "500", style: "italic"},
    {path: "../../public/fonts/borna-semibolditalic-webfont.ttf", weight: "700", style: "italic"},
    {path: "../../public/fonts/borna-bolditalic-webfont.ttf", weight: "900", style: "italic"}
  ],
});

export const metadata: Metadata = {
  title: "Frederick Pimentel",
  description: "Portafolio personal de Frederick A. Pimentel",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${borna.className} bg-blanco dark:bg-alt_negro`}>
      <body className="flex text-negro dark:text-blanco">
        <ScrollToTopButton />
        <Header />
        {children}
      </body>
    </html>
  );
}
