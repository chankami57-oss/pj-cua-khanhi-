import Image from 'next/image'
import { profile } from '@/lib/site-config'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-24 pt-28 sm:px-6 sm:pb-32 sm:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-drift absolute -left-1/4 -top-1/3 h-[45rem] w-[45rem] rounded-full bg-blush/70 blur-3xl" />
        <div
          className="animate-drift absolute -right-1/4 top-1/4 h-[38rem] w-[38rem] rounded-full bg-glow/40 blur-3xl"
          style={{ animationDelay: '-8s' }}
        />
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_minmax(0,0.9fr)] lg:gap-16">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p
            className="animate-rise text-[0.68rem] uppercase tracking-luxe text-accent"
            style={{ animationDelay: '120ms' }}
          >
            Photo diary
          </p>

          <h1
            className="animate-rise mt-5 font-serif text-[clamp(3rem,10vw,5.75rem)] font-light leading-[0.92] tracking-[-0.02em] text-balance"
            style={{ animationDelay: '260ms' }}
          >
            {profile.name}
          </h1>

          <p
            className="animate-rise mx-auto mt-6 max-w-md font-serif text-lg italic leading-relaxed text-muted-foreground text-pretty sm:text-xl lg:mx-0"
            style={{ animationDelay: '420ms' }}
          >
            {profile.tagline}
          </p>

          <div
            className="animate-rise mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            style={{ animationDelay: '580ms' }}
          >
            <a
              href="#gallery"
              className="rounded-full bg-primary px-7 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground shadow-lg shadow-accent/20 transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              View gallery
            </a>
            <a
              href="#about"
              className="rounded-full border border-border px-7 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/40 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              About me
            </a>
          </div>
        </div>

        <div className="animate-soft-in order-1 lg:order-2" style={{ animationDelay: '200ms' }}>
          <figure className="animate-float-soft relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-t-full rounded-b-[3rem] border border-primary/35 sm:-inset-5"
            />
            {/* Thêm aspect-[3/4] hoặc aspect-square tùy thuộc vào form ảnh chân dung của bạn để cố định layout */}
            <div className="film-grain relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[2.5rem] shadow-2xl shadow-accent/30">
              <Image
                src={profile.heroPhoto.src || '/placeholder.svg'}
                alt={profile.heroPhoto.alt}
                width={profile.heroPhoto.width}
                height={profile.heroPhoto.height}
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="h-full w-full object-cover"
              />
            </div>
          </figure>
        </div>
      </div>

      <div className="mt-16 flex justify-center sm:mt-20">
        <div aria-hidden="true" className="h-16 w-px overflow-hidden bg-border">
          <span className="animate-scroll-hint block h-full w-px bg-accent" />
        </div>
      </div>
    </section>
  )
}
