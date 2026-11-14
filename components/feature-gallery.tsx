'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { productImage, type ProductShot } from '@/lib/products'

export function FeatureGallery({ name, shots }: { name: string; shots: ProductShot[] }) {
  const id = useId()
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  const [active, setActive] = useState(0)

  function handleKeys(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const offsets: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1 }
    let next: number
    if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = shots.length - 1
    else if (Object.hasOwn(offsets, event.key)) next = (index + offsets[event.key] + shots.length) % shots.length
    else return

    event.preventDefault()
    setActive(next)
    buttons.current[next]?.focus()
  }

  return (
    <div className="feature-gallery">
      <div className="feature-tabs" role="tablist" aria-label={`${name} 的主要功能`}>
        {shots.map((shot, index) => (
          <button
            key={shot.image}
            ref={(button) => { buttons.current[index] = button }}
            id={`${id}-tab-${index}`}
            role="tab"
            type="button"
            aria-controls={`${id}-panel-${index}`}
            aria-selected={index === active}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => handleKeys(event, index)}
          >
            {shot.label}
          </button>
        ))}
      </div>

      {shots.map((shot, index) => {
        const image = productImage(shot.image)
        return (
          <section
            className="feature-panel"
            key={shot.image}
            id={`${id}-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${index}`}
            hidden={index !== active}
          >
            <div className="feature-copy">
              <h3>{shot.title}</h3>
              <p>{shot.description}</p>
              <a className="text-link" href={image} target="_blank" rel="noreferrer" aria-label={`在新标签页查看${shot.label}截图`}>
                查看大图 <ArrowUpRight size={15} aria-hidden />
              </a>
            </div>
            <div className="feature-image">
              {index === active && <Image src={image} alt={shot.alt} width={640} height={shot.height ?? 1387} />}
            </div>
          </section>
        )
      })}
    </div>
  )
}
