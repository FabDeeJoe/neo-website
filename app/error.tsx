'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-6xl font-bold text-slate-900 dark:text-white">
            Erreur
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-slate-700 dark:text-slate-300">
            Une erreur est survenue
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Désolé, quelque chose s&apos;est mal passé. Veuillez réessayer.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="gradient" size="lg" onClick={reset}>
              Réessayer
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">Retour à l&apos;accueil</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
