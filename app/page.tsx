import { Hero } from '@/components/sections/Hero'
import { Problems } from '@/components/sections/Problems'
import { Approach } from '@/components/sections/Approach'
import { OffersPreview } from '@/components/sections/OffersPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Approach />
      <OffersPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}
