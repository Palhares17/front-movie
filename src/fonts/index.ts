import { Inter, Poppins } from 'next/font/google';

export const inter = Inter({
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-poppins',
});
