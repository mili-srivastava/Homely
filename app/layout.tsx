import './globals.css'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Homely',
  description: 'Homely provides domestic services to your home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
