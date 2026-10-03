import { Reveal } from '@/components/reveal'
import { socialIcons } from '@/components/social-icons'
import { profile, socials } from '@/lib/site-config'

export function Contact() {
  return (
    <footer id="contact" className="scroll-mt-24 px-4 pb-14 pt-20 sm:px-6 sm:pb-16 sm:pt-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="glass rounded-[2rem] px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-[0.68rem] uppercase tracking-luxe text-accent">Heluuuu wlc to my website</p>

          <h2 className="mt-4 font-serif text-4xl font-light leading-tight tracking-[-0.01em] text-balance sm:text-5xl">
            PJ by
            <span className="italic"> Kami Wang</span>
          </h2>

          <a
            href={`mailto:chankami57@gmail.com`}
            className="mt-7 inline-block border-b border-accent/40 pb-1 font-serif text-lg italic text-muted-foreground transition-colors duration-500 hover:border-accent hover:text-foreground"
          >
            chankami57@gmail.com
          </a>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon]
              return (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                    aria-label={social.name}
                    className="flex size-11 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/45 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <Icon className="size-[1.05rem]" />
                  </a>
                </li>
              )
            })}
          </ul>
        </Reveal>

        <p className="mt-10 text-center text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground/70">
          {profile.name} — {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}