import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { inter } from '@/fonts';

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
    <html lang="pt-BR" className={`${inter.className}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
