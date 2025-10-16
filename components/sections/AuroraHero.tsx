'use client'

import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

// Neo Code brand colors: Cyan → Blue → Purple → Magenta
const COLORS_TOP = ['#00D9FF', '#4D7FFF', '#9D4DFF', '#FF00FF']

export function AuroraHero() {
  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    })
  }, [color])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-slate-950 px-4 py-24 text-slate-200"
    >
      <Container className="relative z-10">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <motion.span
            className="mb-6 inline-block rounded-full bg-slate-800/50 px-4 py-2 text-sm font-medium backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ✨ Artisan du numérique
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            className="font-heading max-w-4xl bg-gradient-to-br from-white to-slate-400 bg-clip-text text-center text-4xl leading-tight font-bold text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Artisan du logiciel
            <br />
            <span className="from-primary via-accent-blue to-secondary bg-gradient-to-r bg-clip-text">
              sur-mesure
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="my-6 max-w-2xl text-center text-base leading-relaxed text-slate-300 md:text-lg md:leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nous créons des solutions numériques{' '}
            <strong className="font-semibold text-white">
              fluides et sensées
            </strong>{' '}
            pour éliminer vos{' '}
            <strong className="font-semibold text-white">
              frictions quotidiennes
            </strong>
            . Ensemble, combattons vos vrais ennemis : les fichiers Excel qui
            s'accumulent, les processus papier qui ralentissent tout, et ces
            plannings impossibles à déchiffrer.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-4 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="rounded-full"
            >
              <Button
                variant="gradient"
                size="lg"
                className="group relative flex w-full items-center gap-2 border-0 sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Discutons de votre projet
                  <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </Link>
              </Button>
            </motion.div>

            <Button
              variant="outline"
              size="lg"
              className="border-slate-700 bg-slate-900/50 text-slate-200 backdrop-blur-sm hover:border-slate-600 hover:bg-slate-800/50"
              asChild
            >
              <Link href="/expertise">Découvrir notre approche</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <FiCheck className="text-primary h-5 w-5" />
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheck className="text-primary h-5 w-5" />
              <span>Tarifs transparents</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheck className="text-primary h-5 w-5" />
              <span>Dordogne • Gironde • Paris</span>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Starfield Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  )
}
