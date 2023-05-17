import './globals.scss';

import { Open_Sans } from 'next/font/google';
import { Metadata } from 'next';
import ClientProvider from './hooks/Queries/ClientProvider';
import Navbar from './Navbar';

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    icons: [
        "/favicon.ico",
        "/logo.svg"
    ],
    title: 'leafal.io',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
      <html lang="en">
        <body className={openSans.className}>
            <ClientProvider>
              <Navbar />
              {children}
          </ClientProvider>
        </body>
      </html>
    )
}
