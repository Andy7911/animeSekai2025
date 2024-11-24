import type { Metadata } from "next";
import "../styles/globals.scss";
import { Suspense } from "react";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Share+Tech&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"></link>
      </head>
      <body

      >

        <Header />
        <Suspense fallback={<div> loading ...</div>}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
