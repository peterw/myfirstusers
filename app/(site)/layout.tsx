import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RecoilContextProvider from './RecoilProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My First User',
  description: 'Get your first user',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilContextProvider>
          <>
            <Navbar />
            {children}
            {modal}
            <Footer />
          </>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
