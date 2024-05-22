import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shfit Inc.',
  description: 'The movies and series',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} ${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
