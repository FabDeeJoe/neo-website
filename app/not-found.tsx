import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-6xl font-bold text-slate-900 dark:text-white">
            404
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-slate-700 dark:text-slate-300">
            Page non trouvée
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été
            déplacée.
          </p>
          <div className="mt-8">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/">Retour à l&apos;accueil</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
