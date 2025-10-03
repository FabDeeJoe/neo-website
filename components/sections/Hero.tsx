'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Animated geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-grid-pattern absolute inset-0 opacity-20" />
        <motion.div
          className="from-primary/30 to-secondary/30 absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="from-accent-blue/30 to-accent-purple/30 absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <Container className="relative z-10 flex min-h-[90vh] items-center py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-5xl leading-tight font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
              Artisan du{' '}
              <span className="from-primary via-accent-blue to-secondary bg-gradient-to-r bg-clip-text text-transparent">
                logiciel sur-mesure
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nous créons des solutions numériques fluides et sensées pour
            éliminer vos frictions quotidiennes. Fini les fichiers Excel
            complexes, les processus papier et les plannings illisibles.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">Discutons de votre projet</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/expertise">Découvrir notre approche</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-500"
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
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-500"
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
              <span>Tarifs transparents</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-500"
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
              <span>Dordogne • Gironde • Paris</span>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Grid pattern CSS */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(
              to right,
              rgba(0, 217, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(0, 217, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 4rem 4rem;
        }
      `}</style>
    </section>
  )
}
