'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { gallery } from '@/lib/site-config'

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isOpen = openIndex !== null

  const close = useCallback(() => setOpenIndex(null), [])

  const step = useCallback((delta: number) => {
    setOpenIndex((current) => {
      if (current === null) return current
      return (current + delta + gallery.length) % gallery.length
    })
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    
    document.body.style.overflow = previousOverflow === 'hidden' ? '' : 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, close, step])

  const active = openIndex === null ? null : gallery[openIndex]

  return (
    <section id="gallery" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center sm:mb-16">
          <p className="text-[0.68rem] uppercase tracking-luxe text-accent">dev Ngoc Kha Nhi</p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-[-0.01em] sm:text-5xl">Co nhan co cau</h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
            "una yaha yaha una"
          </p>
        </Reveal>

        <div className="columns-2 gap-3 sm:gap-4 lg:columns-3">
          {gallery.map((photo, index) => (
            <Reveal key={photo.src} className="mb-3 sm:mb-4" delay={(index % 3) * 110}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Open photo: ${photo.caption ?? photo.alt}`}
                className="group relative block w-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <Image
                  src={photo.src || '/placeholder.svg'}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 300px"
                  className="h-auto w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                {photo.caption && (
                  <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left font-serif text-sm italic text-background opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                    {photo.caption}
                  </span>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption ?? active.alt}
          className="animate-soft-in fixed inset-0 z- flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-md sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              close()
            }}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full border border-background/25 p-2.5 text-background transition-colors hover:bg-background/15 sm:right-6 sm:top-6"
          >
            <X className="size-4" />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation()
              step(-1)
            }}
            className="absolute left-3 rounded-full border border-background/25 p-2.5 text-background transition-colors hover:bg-background/15 sm:left-6"
          >
            <ArrowLeft className="size-4" />
          </button>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation()
              step(1)
            }}
            className="absolute right-3 rounded-full border border-background/25 p-2.5 text-background transition-colors hover:bg-background/15 sm:right-6"
          >
            <ArrowRight className="size-4" />
          </button>

          <figure
            className="animate-rise max-h-full w-full max-w-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.src || '/placeholder.svg'}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="(max-width: 768px) 92vw, 672px"
              className="mx-auto max-h-[76vh] w-auto rounded-2xl object-contain shadow-2xl"
              priority
            />
            <figcaption className="mt-4 text-center font-serif text-sm italic text-background/85">
              {active.caption || <span className="not-italic opacity-50">Photo</span>}
              <span className="ml-3 font-sans text-[0.65rem] not-italic tracking-[0.2em] text-background/55">
                {String((openIndex ?? 0) + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
