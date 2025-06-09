import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '电商促销活动',
  description: '限时特惠，全场商品低至5折起',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
} 
 