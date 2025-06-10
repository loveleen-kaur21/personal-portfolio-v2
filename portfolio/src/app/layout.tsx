import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Loveleen Kaur | Portfolio',
  description: 'Portfolio website showcasing my projects and skills as a developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <footer className="bg-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>© {new Date().getFullYear()} Loveleen Kaur. All rights reserved.</p>
          </div>
        </footer> */}
      </body>
    </html>
  );
}