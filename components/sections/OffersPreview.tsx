'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const offers = [
  {
    title: 'Développement from scratch',
    description:
      "Création complète d'une application métier parfaitement adaptée à vos processus uniques.",
    features: [
      'Analyse approfondie de vos besoins',
      'Architecture sur-mesure',
      'Interface intuitive et moderne',
      'Formation de vos équipes',
    ],
    pricing: 'À partir de 5 000€ HT',
    image: '/images/offers/developpement.png',
    href: '/offres/developpement-sur-mesure',
    gradient: 'from-primary to-accent-blue',
  },
  {
    title: 'Modernisation',
    description:
      'Transformation de vos outils existants pour gagner en efficacité et en simplicité.',
    features: [
      "Audit de l'existant",
      'Refonte progressive',
      'Migration des données',
      'Amélioration continue',
    ],
    pricing: 'À partir de 2 000€ HT',
    image: '/images/offers/modernisation.png',
    href: '/offres/modernisation',
    gradient: 'from-secondary to-accent-purple',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function OffersPreview() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <Container>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Nos{' '}
            <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              offres
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Des solutions adaptées à vos besoins et à votre budget
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.title}
              variants={itemVariants}
              className="group"
            >
              <div className="hover:border-primary overflow-hidden rounded-3xl border-2 border-slate-200 bg-white transition-all hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-20`}
                  />
                  <Image
                    src={offer.image}
                    alt={`Illustration de l'offre ${offer.title}`}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={false}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                    {offer.title}
                  </h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-400">
                    {offer.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 space-y-3">
                    {offer.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-green-500"
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

                  {/* Pricing */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span
                      className={`bg-gradient-to-r ${offer.gradient} bg-clip-text text-3xl font-bold text-transparent`}
                    >
                      {offer.pricing}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Button variant="gradient" className="w-full" asChild>
                      <Link href={offer.href}>En savoir plus</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-slate-600 dark:text-slate-400">
            Pas sûr de quelle offre vous convient ?
          </p>
          <Button variant="outline" className="mt-4" asChild>
            <Link href="/contact">Discutons-en ensemble</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
