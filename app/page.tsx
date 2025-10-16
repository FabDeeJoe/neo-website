import { AuroraHero } from '@/components/sections/AuroraHero'
import { Problems } from '@/components/sections/Problems'
import { Approach } from '@/components/sections/Approach'
import { OffersPreview } from '@/components/sections/OffersPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <AuroraHero />
      <Problems />
      <Approach />
      <OffersPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}
