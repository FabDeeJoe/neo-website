'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const problems = [
  {
    title: 'Fini les frictions',
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    items: [
      'Saisies multiples et redondantes',
      'Aller-retours incessants entre outils',
      "Temps perdu à chercher l'information",
      'Processus manuels chronophages',
    ],
  },
  {
    title: 'Fini la confusion',
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    items: [
      'Fichiers Excel illisibles et partagés',
      'Versions multiples sans cohérence',
      'Difficultés à retrouver les documents',
      'Informations dispersées partout',
    ],
  },
  {
    title: 'Fini les blocages',
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    items: [
      "Logiciels figés qui n'évoluent pas",
      "Impossibilité d'adapter aux besoins",
      'Dépendance aux éditeurs externes',
      'Coûts cachés et licences rigides',
    ],
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Problems() {
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
            Vos{' '}
            <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              irritants quotidiens
            </span>
            , notre mission
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Nous comprenons les frustrations qui ralentissent votre activité
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem) => (
            <motion.div key={problem.title} variants={itemVariants}>
              <Card variant="gradient" className="h-full">
                <CardHeader>
                  <div className="from-primary/10 to-secondary/10 text-primary mb-4 inline-flex rounded-xl bg-gradient-to-br p-3">
                    {problem.icon}
                  </div>
                  <CardTitle className="text-2xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {problem.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                      >
                        <svg
                          className="mt-1 h-5 w-5 flex-shrink-0 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
