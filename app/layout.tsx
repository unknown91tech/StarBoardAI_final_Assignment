import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ScenarioProvider } from './context/ScenarioContext';
import { ChatWidget } from '@/components/shared/ChatWidget';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Starboard - Property Analysis Platform',
  description: 'Analyze and workshop commercial property deals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ScenarioProvider>
          {children}
          <ChatWidget/>
        </ScenarioProvider>
      </body>
    </html>
  );
}