import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vansh Malhotra',
  description: 'A sleek Apple-style portfolio website with glassmorphism design and futuristic animations',
  keywords: ['portfolio', 'developer', 'react', 'next.js', 'web development'],
  authors: [{ name: 'Vansh Malhotra' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}