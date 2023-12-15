import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import { ReactNode } from 'react';
import { YandexMetrika } from "@/components/ym";
import './globals.css';

const font = Ubuntu({ subsets: [], weight: '400' });

export const metadata: Metadata = {
  title: 'Anton Karpov - web developer',
  description: 'Anton Karpov - web developer',

  openGraph: {
    title: 'Anton Karpov - web developer',
    description: 'Anton Karpov - web developer',
    url: 'https://karpoff.pro',
    images: [
      { url: 'https://karpoff.pro/social.png' },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en_US">
      <head><YandexMetrika /></head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
