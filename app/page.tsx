import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { SiteNav } from '@/components/site-nav'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
    </>
  )
}
