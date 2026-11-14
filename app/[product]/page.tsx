import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { productImage, products } from '@/lib/products'

type Props = { params: Promise<{ product: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return products.map(({ slug }) => ({ product: slug }))
}

async function getProduct(params: Props['params']) {
  const { product: slug } = await params
  const product = products.find((entry) => entry.slug === slug)
  if (!product) notFound()
  return product
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params)
  return {
    title: `${product.name} · ${product.category}`,
    description: product.description,
    alternates: { canonical: `/${product.slug}` },
    openGraph: {
      title: `${product.name} · ${product.category}`,
      description: product.description,
      images: [{ url: productImage(`${product.slug}-cover`), width: 1600, height: 686 }],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params)

  return (
    <>
      <SiteHeader current={product.slug} />
      <main id="main-content" className="shell product-page" data-product={product.slug} tabIndex={-1}>
        <Link className="back-link" href="/"><ArrowLeft size={16} aria-hidden /> 全部 App</Link>
        <section className="product-hero" aria-labelledby="product-title">
          <div className="product-copy">
            <div className="product-identity">
              <Image className="app-icon" src={productImage(`${product.slug}-icon`)} alt="" width={60} height={60} />
              <div>
                <h1 id="product-title">{product.name}</h1>
                <p className="app-category">{product.category} <span aria-hidden> / </span> {product.platform}</p>
              </div>
            </div>
            <p className="product-tagline">{product.title}</p>
            <p className="product-description">{product.description}</p>
            {product.store ? (
              <a className="store-button" href={product.store}>在 App Store 下载 <ArrowUpRight size={17} aria-hidden /></a>
            ) : (
              <p className="release-note">App Store 下载暂未开放</p>
            )}
          </div>
          <div className="product-art">
            <Image src={productImage(`${product.slug}-cover`)} alt="" width={1600} height={686} preload />
          </div>
        </section>

        <section className="product-features" aria-labelledby="feature-title">
          <div className="section-line"><h2 id="feature-title">里面有什么</h2><span>{product.name}</span></div>
          <div className="feature-grid">
            {product.shots.map((shot) => (
              <figure className="feature" key={shot.image}>
                <div className="shot-frame">
                  <Image src={productImage(shot.image)} alt={shot.alt} width={640} height={product.slug === 'tuotuo' ? 1385 : 1387} />
                </div>
                <figcaption>
                  <h3>{shot.title}</h3>
                  <p>{shot.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="product-resources" aria-labelledby="resource-title">
          <h2 id="resource-title">支持与隐私</h2>
          <ul>
            <li><a href={product.support}>{product.support.startsWith('mailto:') ? '邮件支持' : '使用支持'} <ArrowUpRight size={15} aria-hidden /></a></li>
            <li><a href={product.privacy}>隐私政策 <ArrowUpRight size={15} aria-hidden /></a></li>
            {product.terms && <li><a href={product.terms}>使用条款 <ArrowUpRight size={15} aria-hidden /></a></li>}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
