import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/site-config'

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/45 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-[minmax(0,0.72fr)_1fr] md:items-start md:gap-14">
        <Reveal>
          <figure className="film-grain relative overflow-hidden rounded-[2rem] shadow-[0_40px_90px_-60px_var(--accent)]">
            <Image
              src={profile.profilePhoto.src || '/placeholder.svg'}
              alt={profile.profilePhoto.alt}
              width={profile.profilePhoto.width}
              height={profile.profilePhoto.height}
              sizes="(max-width: 768px) 88vw, 300px"
              className="h-full w-full object-cover"
            />
          </figure>

          <dl className="mt-6 space-y-3 border-l border-border pl-5">
            {profile.details.map((detail) => (
              <div key={detail.label}>
                <dt className="text-[0.62rem] uppercase tracking-[0.22em] text-accent">{detail.label}</dt>
                <dd className="mt-1 font-serif text-base italic text-muted-foreground">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={140}>
          <p className="text-[0.68rem] uppercase tracking-luxe text-accent">abt me</p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-[-0.01em] sm:text-5xl">
            {profile.name.split(' ')[0]}
          </h2>

          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            {profile.location}
          </p>

          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground text-pretty">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-10 text-[0.62rem] uppercase tracking-[0.22em] text-foreground/60">hobbies</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profile.interests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-primary/40 bg-card/60 px-4 py-1.5 text-xs tracking-wide text-muted-foreground transition-colors duration-500 hover:border-accent/45 hover:text-foreground"
              >
                {interest}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
