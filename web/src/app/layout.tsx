import { Header } from '@/components/header/header';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer/footer';

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: 'Block Play',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        urbanist.variable,
      )}
    >
      <head>
        <link
          rel='icon'
          type='image/svg+xml'
          href='/assets/favicon/favicon.svg'
        />
        <link rel='icon' type='image/png' href='/assets/favicon/favicon.png' />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@600&display=swap" rel="stylesheet"/>

      </head>
      <body>
        <Header />
        <main className='p-4 xl:p-12 2xl:px-24'>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
