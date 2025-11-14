'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Lora, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="es" className={`${lora.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />

        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            className="flex-grow pt-24"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1], // curva de easing suave (tipo easeOutCubic)
            }}
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Footer />
      </body>
    </html>
  );
}
