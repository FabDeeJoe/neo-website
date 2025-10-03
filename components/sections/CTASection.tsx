'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Container>
        <motion.div
          className="border-primary/30 relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br from-slate-800 to-slate-900 p-12 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background decoration */}
          <div className="from-primary/20 to-secondary/20 absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br blur-3xl" />
          <div className="from-accent-blue/20 to-accent-purple/20 absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.h2
              className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Un projet d&apos;outil métier{' '}
              <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
                sur-mesure
              </span>{' '}
              ?
            </motion.h2>

            <motion.p
              className="mt-6 text-lg text-slate-300 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Discutons de vos besoins et de vos contraintes. Premier échange
              gratuit et sans engagement pour comprendre votre contexte.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">Prendre rendez-vous</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                asChild
              >
                <Link href="/offres">Voir nos offres</Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-400"
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
                <span>Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-400"
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
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-400"
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
                <span>Réponse rapide</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
