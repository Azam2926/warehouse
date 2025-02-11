import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MainNav } from '@/components/layout/main-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Warehouse Management System',
  description: 'Modern warehouse management system built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}