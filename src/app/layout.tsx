import '@/styles/globals.scss';

import { AuthProvider } from '@/app/hooks/Auth';
import { Open_Sans } from 'next/font/google';
import { Metadata } from 'next';

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
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
