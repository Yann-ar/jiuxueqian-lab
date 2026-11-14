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
          <div className="lab-note-copy">
            <p>我是 Yann，业余时间做一些喜欢的工具。</p>
            <p>平时有自己的工作，写代码算是工作之外的一点兴趣。</p>
            <p>经常会遇到一些小问题，找了一圈，发现现有的工具要么太复杂，要么不太符合自己的习惯。于是就想着，能不能自己做一个。</p>
            <p>不是什么专业开发者，很多东西也是边学边做。想到一个点子，就试着把它变成真正能用的产品。</p>
            <p>喜欢简单、干净的设计，也希望做出来的东西足够好用。</p>
            <p>这里会记录一些做产品的过程、踩过的坑，还有偶尔冒出来的新想法。</p>
            <p>慢慢做，不着急。</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
