import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Shei Villalba',
    default: 'Shei Villalba - Creadora de Contenido',
  },
  description: 'Hola soy Shei Villalba, creadora de contenido UGC y de Redes Sociales',
  keywords: 'Shei Villalba, UGC, Creacion de Contenido, User Generated Content, TikTok, Instagram, Facebook'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
