import { Navbar } from '@/components/navbar';
import QueryProvider from '@/providers/query-provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Persona Guides Repository",
  description: "Complete database for Persona Games. Filter shadows by Arcana, search by name, and master the Tartarus data. Developed by Harllem Nascimento.",
  keywords: ["Persona 3 Reload", "Persona 5 Royal", "Shadows", "Arcana", "P3R Guide", "Database", "Gaming Tools"],
  authors: [{ name: "Harllem Nascimento", url: "https://harllemnascimento.cloud" }],
  metadataBase: new URL("https://persona-guides.harllemnascimento.cloud"),
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Persona Guides Repository",
    description: "Explore every Shadow and Arcana from Persona 3 Reload and P5R.",
    url: "https://persona-guides.harllemnascimento.cloud",
    siteName: "Persona Hub",
    images: [
      {
        url: "/og-image.png",
        width: 1126,
        height: 854,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

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