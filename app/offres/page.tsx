import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Nos Offres',
  description:
    "Développement from scratch ou modernisation d'applications existantes. Des solutions sur-mesure adaptées à votre budget.",
  alternates: {
    canonical: '/offres',
  },
  openGraph: {
    title: 'Nos Offres - Neo Code',
    description:
      "Développement from scratch ou modernisation d'applications existantes. Des solutions sur-mesure adaptées à votre budget.",
    url: '/offres',
    type: 'website',
  },
}

const offers = [
  {
    title: 'Développement from scratch',
    tagline: "Créez l'outil parfait pour votre activité",
    description:
      "Vous n'avez pas trouvé de logiciel qui corresponde vraiment à vos besoins ? Nous concevons et développons une application 100% adaptée à vos processus métier.",
    pricing: 'À partir de 5 000€ HT',
    duration: '4 à 12 semaines',
    image:
      'https://placehold.co/800x600/00D9FF/ffffff/webp?text=Development+from+Scratch',
    href: '/offres/developpement-sur-mesure',
    gradient: 'from-primary to-accent-blue',
    features: [
      'Analyse complète de vos besoins',
      "Conception d'architecture sur-mesure",
      'Développement agile par itérations',
      'Formation de vos équipes',
      'Documentation complète',
      'Support post-lancement',
    ],
    idealFor: [
      'Processus métier très spécifiques',
      'Besoin de flexibilité maximale',
      'Croissance rapide prévue',
      'Intégration avec vos outils existants',
    ],
  },
  {
    title: 'Modernisation',
    tagline: 'Donnez un nouveau souffle à vos outils',
    description:
      "Vous avez déjà un outil mais il ne suit plus votre activité ? Nous le modernisons, l'optimisons et l'adaptons à vos besoins actuels.",
    pricing: 'À partir de 2 000€ HT',
    duration: '2 à 8 semaines',
    image: 'https://placehold.co/800x600/FF00FF/ffffff/webp?text=Modernization',
    href: '/offres/modernisation',
    gradient: 'from-secondary to-accent-purple',
    features: [
      "Audit de l'existant",
      'Identification des points de friction',
      'Refonte progressive',
      'Migration sécurisée des données',
      'Optimisation des performances',
      "Amélioration de l'UX",
    ],
    idealFor: [
      'Application existante mais obsolète',
      'Interface peu ergonomique',
      'Performances dégradées',
      'Difficultés de maintenance',
    ],
  },
]

export default function OffersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 dark:from-slate-950 dark:to-slate-900">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Nos{' '}
              <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
                offres
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 sm:text-xl">
              Deux approches complémentaires pour répondre précisément à votre
              situation : création sur-mesure ou modernisation de l\'existant.
            </p>
          </div>
        </Container>
      </section>

      {/* Offers Comparison */}
      <section className="bg-white py-20 dark:bg-slate-950">
        <Container>
          <div className="space-y-16">
            {offers.map((offer, index) => (
              <div
                key={offer.title}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-20`}
                    />
                    <Image
                      src={offer.image}
                      alt={`Illustration de l'offre ${offer.title}`}
                      width={800}
                      height={600}
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div
                    className={`inline-block rounded-full bg-gradient-to-r ${offer.gradient} px-4 py-1 text-sm font-semibold text-white`}
                  >
                    {offer.tagline}
                  </div>
                  <h2 className="font-heading mt-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
                    {offer.title}
                  </h2>
                  <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    {offer.description}
                  </p>

                  <div className="mt-6 flex items-baseline gap-4">
                    <div
                      className={`bg-gradient-to-r ${offer.gradient} bg-clip-text text-3xl font-bold text-transparent`}
                    >
                      {offer.pricing}
                    </div>
                    <div className="text-sm text-slate-500">
                      • Durée : {offer.duration}
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Inclus dans l\'offre :
                    </p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {offer.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <svg
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Idéal si :
                    </p>
                    <ul className="mt-3 space-y-2">
                      {offer.idealFor.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <span className="text-primary">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button variant="gradient" size="lg" asChild>
                      <Link href={offer.href}>En savoir plus</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              Pas sûr de l\'offre qui vous convient ?
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Discutons de votre situation pour identifier la meilleure
              approche.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">Prendre rendez-vous</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/expertise">Découvrir notre approche</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
