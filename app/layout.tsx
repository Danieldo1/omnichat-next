import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import ClientProvider from '@/components/ClientProvider'
import FirebaseAuthProv from '@/components/FirebaseAuthProv'
import SubscriptionProvider from '@/components/SubscriptionProvider'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({ weight:['200', '400', '600', '700', '800'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OmniChat',
  description: 'Connect Globally, Communicate Locally. AI translation for any language.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProvider>
    <html lang="en">
    <body className={[poppins.className,'flex flex-col min-h-screen'].join(' ')}>
      <FirebaseAuthProv>
        <SubscriptionProvider>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
            <Header />
          {children}
          <Toaster />
          </ThemeProvider>
        </SubscriptionProvider>
      </FirebaseAuthProv>
      </body>
    </html>
    </ClientProvider>
  )
}
