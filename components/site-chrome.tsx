import { ArrowUpRight, Mail } from 'lucide-react'
import Link from 'next/link'

const contact = 'mailto:yesiyang@outlook.com'

export function SiteHeader({ home = false }: { home?: boolean }) {
  const section = (id: string) => home ? `#${id}` : `/#${id}`

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">跳到正文</a>
      <div className="shell header-inner">
        <Link className="wordmark" href="/" prefetch={false} aria-current={home ? 'page' : undefined}>
          旧学前<span lang="en">Lab</span>
        </Link>
        <nav className="primary-nav" aria-label="主导航">
          <a href={section('apps')}>应用</a>
          <a href={section('about')}>关于</a>
          <a href={contact}>联系 <ArrowUpRight size={13} aria-hidden /></a>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>© {new Date().getFullYear()} 旧学前 Lab</span>
        <a className="text-link" href={contact}><Mail size={16} aria-hidden /> 联系 Yann</a>
      </div>
    </footer>
  )
}
