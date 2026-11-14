import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { productImage, products } from '@/lib/products'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Page() {
  return (
    <>
      <SiteHeader home />
      <main id="main-content" className="shell" tabIndex={-1}>
        <section className="home-intro" aria-labelledby="home-title">
          <h1 id="home-title">给日常做点好用的工具。</h1>
          <p>Yann 做的独立 App，用来记笔记、练口语和整理藏书。</p>
        </section>

        <section id="apps" className="app-directory" aria-labelledby="apps-title">
          <h2 id="apps-title" className="section-title">应用</h2>
          <div className="app-collection">
            {products.map((product, index) => {
              const shot = product.shots[0]

              return (
                <article className="app-card" data-product={product.slug} key={product.slug}>
                  <Link
                    className="app-card-link"
                    href={`/${product.slug}`}
                    aria-labelledby={`name-${product.slug} action-${product.slug}`}
                    aria-describedby={`summary-${product.slug}`}
                    prefetch={false}
                  >
                    <div className="card-copy">
                      <div className="card-identity">
                        <Image className="app-icon" src={productImage(`${product.slug}-icon`)} alt="" width={40} height={40} />
                        <div>
                          <h3 id={`name-${product.slug}`} lang="en">{product.name}</h3>
                          <p className="card-category">{product.category}</p>
                        </div>
                      </div>
                      <p id={`summary-${product.slug}`} className="card-summary">{product.summary}</p>
                      <span className="card-action" id={`action-${product.slug}`}>查看详情 <ArrowRight size={16} aria-hidden /></span>
                    </div>
                    <div className="card-art" aria-hidden>
                      <Image
                        src={productImage(`${shot.image}-preview`)}
                        alt=""
                        width={384}
                        height={shot.previewHeight ?? 832}
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        </section>

        <section id="about" className="lab-note" aria-labelledby="lab-title">
          <h2 id="lab-title" className="section-title">关于旧学前</h2>
          <div className="lab-note-copy">
            <p>我是 Yann，业余写点代码。遇到现成的工具用不顺手，就试着自己做一个。</p>
            <p>我喜欢简单、干净的设计。这里会记下做产品的过程、踩过的坑，还有偶尔冒出来的想法。</p>
            <p>慢慢做，不着急。</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
