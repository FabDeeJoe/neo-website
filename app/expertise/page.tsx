import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { BusinessUnderstanding } from '@/components/sections/BusinessUnderstanding'
import { AgilityProcess } from '@/components/sections/AgilityProcess'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Notre Expertise',
  description:
    "Découvrez notre approche artisanale du développement logiciel : écoute profonde de votre métier et agilité dans l'exécution.",
  alternates: {
    canonical: '/expertise',
  },
  openGraph: {
    title: 'Notre Expertise - Neo Code',
    description:
      "Découvrez notre approche artisanale du développement logiciel : écoute profonde de votre métier et agilité dans l'exécution.",
    url: '/expertise',
    type: 'website',
  },
}

export default function ExpertisePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 dark:from-slate-950 dark:to-slate-900">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Notre{' '}
              <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
                expertise
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 sm:text-xl">
              Deux piliers fondamentaux : une compréhension approfondie de votre
              métier et une exécution agile pour vous livrer rapidement de la
              valeur.
            </p>
          </div>
        </Container>
      </section>

      <BusinessUnderstanding />
      <AgilityProcess />
      <CTASection />
    </>
  )
}
