'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const steps = [
  {
    number: '01',
    title: 'Découverte',
    duration: '1-2 semaines',
    description:
      'Immersion dans votre environnement, ateliers collaboratifs, cartographie des processus.',
    deliverables: [
      'Cahier des charges fonctionnel',
      'Maquettes wireframe',
      'Planning prévisionnel',
    ],
  },
  {
    number: '02',
    title: 'MVP',
    duration: '2-4 semaines',
    description:
      "Développement d'un premier prototype fonctionnel centré sur votre besoin principal.",
    deliverables: [
      'Version minimale utilisable',
      'Formation initiale',
      'Feedback structuré',
    ],
  },
  {
    number: '03',
    title: 'Itérations',
    duration: 'Cycles de 1-2 semaines',
    description:
      'Ajout progressif des fonctionnalités, ajustements basés sur votre utilisation réelle.',
    deliverables: ['Nouvelles features', 'Corrections', 'Points réguliers'],
  },
  {
    number: '04',
    title: 'Déploiement',
    duration: '1 semaine',
    description:
      'Mise en production, migration des données, formation complète de vos équipes.',
    deliverables: [
      'Application en production',
      'Documentation utilisateur',
      'Support dédié',
    ],
  },
  {
    number: '05',
    title: 'Évolution',
    duration: 'Continu',
    description:
      'Accompagnement dans la durée, nouvelles fonctionnalités, optimisations.',
    deliverables: ['Support technique', 'Évolutions métier', 'Maintenance'],
  },
]

export function AgilityProcess() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 dark:from-slate-900 dark:to-slate-950">
      <Container>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Processus{' '}
            <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              agile
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Un développement en 5 étapes pour vous livrer rapidement de la
            valeur et ajuster en continu.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="from-primary via-accent-blue to-secondary absolute top-8 bottom-8 left-8 w-0.5 bg-gradient-to-b md:left-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  >
                    <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg md:p-8 dark:border-slate-800 dark:bg-slate-900">
                      <div className="flex items-center gap-4 md:justify-end">
                        <div
                          className={`flex items-baseline gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                          <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                            {step.title}
                          </h3>
                          <span className="text-primary text-sm font-medium">
                            {step.duration}
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 text-slate-600 dark:text-slate-400">
                        {step.description}
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          Livrables :
                        </p>
                        <ul
                          className={`mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400 ${index % 2 === 0 ? 'md:text-right' : ''}`}
                        >
                          {step.deliverables.map((deliverable) => (
                            <li key={deliverable}>• {deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="from-primary to-secondary flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br text-xl font-bold text-white shadow-lg dark:border-slate-950">
                      {step.number}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 md:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-slate-600 dark:text-slate-400">
            Chaque projet est unique. Ces étapes s\'adaptent à votre contexte et
            à votre rythme.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
