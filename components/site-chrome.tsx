import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { products } from '@/lib/products'

export function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">跳到正文</a>
      <div className="shell header-inner">
        <Link className="wordmark" href="/">旧学前<span>Lab</span></Link>
        <nav className="primary-nav" aria-label="产品导航">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/${product.slug}`}
              aria-current={current === product.slug ? 'page' : undefined}
            >
              {product.name}
            </Link>
          ))}
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
        <a href="mailto:yesiyang@outlook.com">联系 Yann <ArrowUpRight size={14} aria-hidden /></a>
      </div>
    </footer>
  )
}
