import '@/styles/globals.scss';

import { Open_Sans } from 'next/font/google';
import { Metadata } from 'next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
        <QueryClientProvider client={new QueryClient()}>
            {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
