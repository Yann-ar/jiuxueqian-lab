import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { FeatureGallery } from '@/components/feature-gallery'
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
  const supportLabel = product.support.startsWith('mailto:') ? '邮件支持' : '获取支持'

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="shell product-page" data-product={product.slug} tabIndex={-1}>
        <Link className="breadcrumb" href="/#apps" prefetch={false}><ArrowLeft size={16} aria-hidden /> 全部应用</Link>
        <section className="product-hero" aria-labelledby="product-title">
          <div className="product-copy">
            <div className="product-identity">
              <Image className="app-icon" src={productImage(`${product.slug}-icon`)} alt="" width={54} height={54} />
              <div>
                <h1 id="product-title" lang="en">{product.name}</h1>
                <p>{product.category} · {product.platform}</p>
              </div>
            </div>
            <p className="product-tagline">{product.title}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-actions">
              {product.store ? (
                <>
                  <a className="button-link" href={product.store}>App Store 下载 <ArrowUpRight size={17} aria-hidden /></a>
                  <a className="text-link" href={product.support}>{supportLabel} <ArrowUpRight size={15} aria-hidden /></a>
                </>
              ) : (
                <a className="button-link" href={product.support}>{supportLabel} <ArrowUpRight size={17} aria-hidden /></a>
              )}
            </div>
            {!product.store && <p className="release-note">App Store 下载暂未开放</p>}
          </div>
          <div className="product-art">
            {product.slug === 'vellum' ? (
              <Image src={productImage('vellum-tablet')} alt="Vellum 在 iPad 上同时显示主题列表和笔记" width={780} height={1117} loading="eager" />
            ) : (
              <Image src={productImage(`${product.slug}-cover`)} alt="" width={1600} height={686} loading="eager" />
            )}
          </div>
        </section>

        <section id="features" className="product-features" aria-labelledby="feature-title">
          <div className="feature-heading">
            <p className="section-label">主要功能</p>
            <h2 id="feature-title" className="section-title">{product.featureTitle}</h2>
          </div>
          <FeatureGallery name={product.name} shots={product.shots} />
        </section>

        <section id="support" className="product-resources" aria-labelledby="resource-title">
          <h2 id="resource-title" className="section-title">支持与隐私</h2>
          <ul>
            <li><a className="text-link" href={product.support}>{supportLabel} <ArrowUpRight size={15} aria-hidden /></a></li>
            <li><a className="text-link" href={product.privacy}>隐私政策 <ArrowUpRight size={15} aria-hidden /></a></li>
            {product.terms && <li><a className="text-link" href={product.terms}>使用条款 <ArrowUpRight size={15} aria-hidden /></a></li>}
          </ul>
        </section>

        <nav className="related-apps" aria-label="其他应用">
          <span>其他应用</span>
          {products.filter(({ slug }) => slug !== product.slug).map((entry) => (
            <Link className="text-link" key={entry.slug} href={`/${entry.slug}`} prefetch={false}>
              <span lang="en">{entry.name}</span> <ArrowRight size={15} aria-hidden />
            </Link>
          ))}
        </nav>
      </main>
      <SiteFooter />
    </>
  )
}
