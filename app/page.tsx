import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { productImage, products } from '@/lib/products'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="shell">
        <section className="home-intro" aria-labelledby="home-title">
          <div>
            <p className="eyebrow" lang="en">Jiuxueqian Lab</p>
            <h1 id="home-title">给日常做一点<br />好用的小工具。</h1>
          </div>
          <p className="home-intro-note">想法随手记，英文慢慢练，喜欢的书摆上架。这是我为这三件小事做的 App。</p>
        </section>

        <section className="apps-section" aria-labelledby="apps-title">
          <div className="section-line">
            <h2 id="apps-title">我的 App</h2>
            <ArrowDown size={16} aria-hidden />
          </div>
          <div className="app-collection">
            {products.map((product) => (
              <article className="app-card" data-product={product.slug} key={product.slug}>
                <Link className="app-card-link" href={`/${product.slug}`} aria-label={`了解 ${product.name}：${product.category}`}>
                  <div className="card-art">
                    <Image src={productImage(`${product.slug}-cover`)} alt="" width={1600} height={686} />
                  </div>
                  <div className="card-body">
                    <div className="card-identity">
                      <Image className="app-icon" src={productImage(`${product.slug}-icon`)} alt="" width={48} height={48} />
                      <div>
                        <p className="app-category">{product.category}</p>
                        <h3>{product.name}</h3>
                      </div>
                      <ArrowUpRight className="card-arrow" size={20} aria-hidden />
                    </div>
                    <p className="card-summary">{product.summary}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="lab-note" aria-labelledby="lab-title">
          <h2 id="lab-title">关于旧学前</h2>
          <p>我是 Yann，白天做制造业质量工程，业余做 App。在工作中，我习惯先弄清楚一件事为什么不好用。做自己的产品时也是一样：从日常遇到的小麻烦开始，把常用的那几步做顺手。</p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
