import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
 

 
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

 
 
 
 
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';
const font = Inter({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Todo app',
  description: 'ms developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const queryClient = new QueryClient()
  return (
    <ClerkProvider appearance={{ elements: { footer: 'hidden' } }}>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className)}>
          <ThemeProvider
            defaultTheme=""
            attribute="class"
            enableSystem={false}
            storageKey="ui"
          >   
              {children}  
         
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
         
  );
}
