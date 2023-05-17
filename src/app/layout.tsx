import "./globals.scss";

import * as React from "react";

import { Open_Sans } from "next/font/google";
import { Metadata } from "next";
import ClientProvider from "./hooks/Queries/ClientProvider";
import Navbar from "./Navbar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: ["/favicon.ico", "/logo.svg"],
  title: "leafal.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div id="app">
          <ClientProvider>
            <Navbar />
            {children}
          </ClientProvider>
        </div>
      </body>
    </html>
  );
}
