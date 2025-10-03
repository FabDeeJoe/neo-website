'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const approaches = [
  {
    title: 'Immersion terrain',
    description:
      'Nous passons du temps dans votre environnement de travail pour comprendre vos processus réels, pas théoriques.',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Ateliers collaboratifs',
    description:
      "Sessions de travail avec vos équipes pour identifier les vrais points de friction et les opportunités d'amélioration.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Cartographie des processus',
    description:
      'Documentation visuelle de vos flux de travail actuels pour identifier où le logiciel peut apporter le plus de valeur.',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
]

export function BusinessUnderstanding() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <Container>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Compréhension{' '}
            <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              métier
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Avant d\'écrire la moindre ligne de code, nous prenons le temps de
            vraiment comprendre votre activité, vos contraintes et vos
            objectifs.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="gradient" className="h-full">
                <CardHeader>
                  <div className="from-primary/10 to-secondary/10 text-primary mb-4 inline-flex rounded-xl bg-gradient-to-br p-4">
                    {approach.icon}
                  </div>
                  <CardTitle className="text-xl">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    {approach.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why It Matters */}
        <motion.div
          className="mt-16 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-12 dark:from-slate-900 dark:to-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
            Pourquoi cette approche ?
          </h3>
          <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-400">
            <p>
              Trop de projets logiciels échouent parce qu\'ils sont conçus par
              des développeurs qui ne comprennent pas vraiment le métier de
              leurs clients. Le résultat ? Des fonctionnalités inutiles, des
              workflows contre-intuitifs, et des utilisateurs frustrés.
            </p>
            <p>
              Notre méthode d\'immersion nous permet de concevoir des solutions
              qui correspondent exactement à votre réalité terrain, pas à une
              vision théorique du problème.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
