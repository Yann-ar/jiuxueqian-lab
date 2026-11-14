import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jiuxueqian.xin'),
  title: { default: '旧学前 Lab', template: '%s｜旧学前 Lab' },
  description: 'Yann 的独立 App：用 Vellum 记想法，用 TuoTuo 练口语，用 iLoveBook 整理藏书和阅读记录。',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f8f4',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
