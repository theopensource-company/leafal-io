import './globals.scss';

import * as React from 'react';

import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Navbar from './Navbar';
import ClientProvider from './hooks/Queries/ClientProvider';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    icons: ['/favicon.ico', '/logo.svg'],
    title: 'leafal.io',
};

export function MainWrapper({ children }: { children: React.ReactNode }) {
  return <div className="main-wrapper">{children}</div>;
}

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
