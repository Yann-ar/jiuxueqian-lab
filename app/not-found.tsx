import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="shell missing-page" tabIndex={-1}>
        <h1>找不到这个页面。</h1>
        <p>可以回到首页，继续看看旧学前的应用。</p>
        <Link className="text-link" href="/" prefetch={false}>返回首页 <ArrowRight size={17} aria-hidden /></Link>
      </main>
      <SiteFooter />
    </>
  )
}
