'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const pillars = [
  {
    number: '01',
    title: 'Écoute profonde',
    description:
      'Immersion dans votre métier pour comprendre vos processus, vos contraintes et vos besoins réels.',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Conception sur-mesure',
    description:
      "Création d'une solution parfaitement adaptée à votre contexte, sans compromis sur vos spécificités.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Itérations rapides',
    description:
      'Développement par étapes courtes avec votre feedback constant pour ajuster le cap en temps réel.',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Évolution continue',
    description:
      'Accompagnement dans la durée pour faire évoluer votre outil au rythme de votre activité.',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Approach() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 dark:from-slate-950 dark:to-slate-900">
      <Container>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Notre approche{' '}
            <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              artisanale
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Un accompagnement sur-mesure en 4 étapes
          </p>
        </motion.div>

        <motion.div
          className="mt-16 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              variants={itemVariants}
              className="group relative"
            >
              <div className="hover:border-primary flex flex-col gap-6 rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm transition-all hover:bg-slate-800 md:flex-row md:items-center">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="from-primary/20 to-secondary/20 text-primary flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br text-2xl font-bold">
                    {pillar.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="text-primary flex-shrink-0">{pillar.icon}</div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-slate-400">{pillar.description}</p>
                </div>

                {/* Connector line (except for last item) */}
                {index < pillars.length - 1 && (
                  <div className="from-primary/50 absolute -bottom-4 left-8 hidden h-8 w-0.5 bg-gradient-to-b to-transparent md:block" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
