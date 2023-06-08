import './globals.scss';

import * as React from 'react';

import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Navigation from './Navigation';
import ClientProvider from './hooks/Queries/ClientProvider';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    icons: {
        icon: ['/favicon.ico', '/logo.svg'],
        shortcut: ['/logo.svg'],
        apple: ['/images/icons/touch_icon_192x192.png'],
    },
    title: 'leafal.io',
    description: `leafal.io is a platform that aims to make gaming more social. The best moments in gaming are experienced together.`,
    applicationName: 'leafal.io',
    keywords: [
        'leafal.io',
        'leafal',
        'io',
        'leafalio',
        'leafal_io',
        'games',
        'gaming',
        'game',
        'store',
        'celesteia',
        'game store',
        'f2p',
    ],
    themeColor: '#131313',
    colorScheme: 'dark',
    viewport: { width: 'device-width', initialScale: 1 },
    robots: 'index, follow',
    alternates: {
        canonical: 'leafal.io',
    },
    manifest: '/manifest.json',
    formatDetection: { telephone: false },

    openGraph: {
        type: 'website',
        url: 'https://leafal.io',
        title: 'leafal.io',
        description: `leafal.io is a platform that aims to make gaming more social. The best moments in gaming are experienced together.`,
        siteName: 'leafal.io',
        images: [
            {
                url: 'https://leafal.io/images/icons/icon_512x512.png',
            },
        ],
    },
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
                        <Navigation />
                        {children}
                    </ClientProvider>
                </div>
            </body>
        </html>
    );
}
