'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const testimonials = [
  {
    quote:
      'Avant Neo Code, on perdait 2 heures par jour sur nos plannings Excel. Maintenant, tout est fluide et automatisé. On a enfin un outil qui nous comprend.',
    author: 'Marie D.',
    role: 'Gérante',
    company: 'Services à la personne, Bergerac',
    industry: 'Services',
    image: '/images/testimonials/marie.jpg',
  },
  {
    quote:
      "J'avais des dizaines de fichiers pour gérer mes interventions, mes factures, mon stock. Neo Code a créé une solution unique qui centralise tout. Un gain de temps incroyable.",
    author: 'Thomas L.',
    role: 'Artisan électricien',
    company: 'Bordeaux',
    industry: 'Artisanat',
    image: '/images/testimonials/thomas.jpg',
  },
  {
    quote:
      "Notre ancien logiciel ne suivait plus notre croissance. Fabien a su moderniser notre outil tout en gardant notre historique. La transition s'est faite en douceur.",
    author: 'Sophie M.',
    role: 'Responsable logistique',
    company: 'PME transport, Dordogne',
    industry: 'Logistique',
    image: '/images/testimonials/sophie.jpg',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 dark:from-slate-900 dark:to-slate-950">
      <Container>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Ils nous font{' '}
            <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              confiance
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Retours d'expérience de nos clients
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Testimonial */}
          <div className="relative min-h-[300px] md:min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="mx-auto max-w-4xl"
              >
                <div className="border-primary/20 rounded-3xl border-2 bg-white p-8 shadow-xl md:p-12 dark:bg-slate-900">
                  {/* Quote Icon */}
                  <div className="from-primary/10 to-secondary/10 mb-6 inline-flex rounded-xl bg-gradient-to-br p-3">
                    <svg
                      className="text-primary h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-slate-700 md:text-xl dark:text-slate-300">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={`Photo de ${testimonials[currentIndex].author}`}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonials[currentIndex].role} •{' '}
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-6">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="hover:border-primary hover:text-primary flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-700 transition-all dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              aria-label="Témoignage précédent"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'w-2 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="hover:border-primary hover:text-primary flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-700 transition-all dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              aria-label="Témoignage suivant"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
