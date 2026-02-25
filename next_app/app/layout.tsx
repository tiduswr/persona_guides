import { Navbar } from '@/components/navbar';
import QueryProvider from '@/providers/query-provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Persona Guides — S.E.E.S Network',
  description: 'Guia completo de respostas para Social Links, Exames e Database de Shadows para jogos da série Persona.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#051115]">
        <QueryProvider>
          {/* A Navbar fica fixa no topo para navegação entre guias */}
          <Navbar />
          
          {children}
        </QueryProvider>

        <footer className="border-t border-white/5 py-12 text-center text-sm text-muted-foreground">
          <p>
            Made by{" "}
            <a 
              href="https://github.com/tiduswr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-slate-200 hover:text-cyan-400 transition-colors underline underline-offset-4"
            >
              tiduswr
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}