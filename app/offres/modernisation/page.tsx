import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: "Modernisation d'applications",
  description:
    'Rénovation complète de votre application obsolète. Technologies modernes, performance optimisée. À partir de 3 000€ HT.',
  alternates: {
    canonical: '/offres/modernisation',
  },
  openGraph: {
    title: "Modernisation d'applications - Neo Code",
    description:
      'Rénovation complète de votre application obsolète. Technologies modernes, performance optimisée. À partir de 3 000€ HT.',
    url: '/offres/modernisation',
    type: 'website',
  },
}

const problems = [
  'Votre application fonctionne mais le code est devenu difficile à maintenir',
  'Les performances se dégradent et les utilisateurs se plaignent',
  'Les technologies utilisées sont obsolètes et ne sont plus maintenues',
  'Votre équipe perd du temps à corriger des bugs récurrents',
  'Vous voulez ajouter des fonctionnalités mais le code actuel est trop rigide',
]

const deliverables = [
  {
    title: 'Audit technique',
    description: 'Analyse complète du code existant et des points de friction',
    icon: '🔍',
  },
  {
    title: 'Plan de modernisation',
    description: 'Roadmap détaillée avec priorisation des chantiers',
    icon: '📋',
  },
  {
    title: 'Refactoring du code',
    description: 'Réécriture progressive avec technologies modernes',
    icon: '⚙️',
  },
  {
    title: 'Tests automatisés',
    description: 'Suite de tests pour sécuriser les évolutions futures',
    icon: '✅',
  },
  {
    title: 'Optimisations',
    description: 'Performances améliorées (vitesse, SEO, accessibilité)',
    icon: '🚀',
  },
  {
    title: 'Documentation',
    description: 'Code documenté et guidelines pour votre équipe',
    icon: '📚',
  },
]

const process = [
  {
    phase: 'Audit',
    duration: '1 semaine',
    activities: [
      'Analyse du code existant',
      'Identification des points faibles',
      'Mesure des performances',
      'Recommandations priorisées',
    ],
  },
  {
    phase: 'Stratégie',
    duration: '1 semaine',
    activities: [
      'Choix des technologies cibles',
      'Plan de migration',
      'Définition des étapes',
      'Estimation budget & planning',
    ],
  },
  {
    phase: 'Refactoring progressif',
    duration: '3-8 semaines',
    activities: [
      'Migration par composants/modules',
      "Maintien de l'application en production",
      'Tests à chaque étape',
      'Validation fonctionnelle',
    ],
  },
  {
    phase: 'Optimisation',
    duration: '1-2 semaines',
    activities: [
      'Performance & vitesse',
      'SEO & accessibilité',
      'Sécurité renforcée',
      'Monitoring & alertes',
    ],
  },
  {
    phase: 'Déploiement',
    duration: '1 semaine',
    activities: [
      'Migration des données',
      'Mise en production',
      "Formation de l'équipe",
      'Support post-migration',
    ],
  },
]

const benefits = [
  {
    title: 'Code maintenable',
    description:
      'Architecture claire, moderne et documentée pour faciliter les évolutions',
    icon: '🛠️',
  },
  {
    title: 'Performances améliorées',
    description:
      'Temps de chargement réduits, expérience utilisateur fluidifiée',
    icon: '⚡',
  },
  {
    title: 'Sécurité renforcée',
    description: 'Technologies à jour, vulnérabilités corrigées',
    icon: '🔒',
  },
  {
    title: 'Coûts réduits',
    description:
      "Moins de bugs, moins de maintenance corrective, plus d'autonomie",
    icon: '💰',
  },
]

const examples = [
  {
    title: 'Application PHP legacy',
    description:
      "Migration d'une application PHP 5.6 vers stack moderne (Next.js + API)",
    results: [
      '−70% temps de chargement',
      '−50% bugs en production',
      'Stack à jour',
      'Tests automatisés',
    ],
  },
  {
    title: 'Interface jQuery obsolète',
    description: "Refonte d'un backoffice jQuery en React moderne",
    results: [
      'UX modernisée',
      'Mobile responsive',
      'Composants réutilisables',
      'Documentation complète',
    ],
  },
  {
    title: 'API monolithique',
    description: "Découpage d'une API monolithique en microservices",
    results: [
      'Architecture scalable',
      'Déploiements indépendants',
      'Performance +200%',
      'Monitoring avancé',
    ],
  },
]

export default function ModernisationPage() {
  return (
    <>
      {/* Hero */}
      <section className="from-accent-purple/10 via-primary/10 to-secondary/10 relative overflow-hidden bg-gradient-to-br py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="from-accent-purple to-secondary inline-block rounded-full bg-gradient-to-r px-4 py-1 text-sm font-semibold text-white">
              Rénovation & modernisation
            </div>
            <h1 className="font-heading mt-4 text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Donnez une{' '}
              <span className="from-accent-purple to-secondary bg-gradient-to-r bg-clip-text text-transparent">
                nouvelle vie
              </span>{' '}
              à votre application
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl dark:text-slate-400">
              Modernisez votre application existante : technologies à jour,
              performances optimisées, code maintenable. Sans tout réécrire from
              scratch.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">Demander un audit gratuit</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/expertise">Découvrir notre méthode</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Le constat */}
      <section className="bg-white py-20 dark:bg-slate-950">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Le constat
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Vous êtes confronté à l&apos;une de ces situations :
            </p>
            <ul className="mt-8 space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Notre réponse */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Notre réponse
            </h2>
            <div className="mt-6 space-y-4 text-lg text-slate-600 dark:text-slate-400">
              <p>
                Nous modernisons votre application par étapes, sans interruption
                de service. Vous conservez ce qui fonctionne, nous améliorons ce
                qui pose problème.
              </p>
              <p>
                Notre approche progressive permet de réduire les risques : nous
                migrons module par module, testons à chaque étape, et vous
                gardez le contrôle du planning et du budget.
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">
                Moins risqué et plus rapide qu&apos;une réécriture complète.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Livrables */}
      <section className="bg-white py-20 dark:bg-slate-950">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Ce que vous recevez
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Une application modernisée, performante et maintenable
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <Card key={item.title} variant="gradient">
                <CardHeader>
                  <div className="mb-3 text-4xl">{item.icon}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Processus */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Comment ça se passe ?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Un processus en 5 phases, progressif et sécurisé
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {process.map((step, index) => (
              <Card key={step.phase} variant="default">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="from-accent-purple to-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xl font-bold text-white">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                          {step.phase}
                        </h3>
                        <span className="bg-accent-purple/10 text-accent-purple rounded-full px-3 py-1 text-sm font-medium">
                          {step.duration}
                        </span>
                      </div>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {step.activities.map((activity) => (
                          <li
                            key={activity}
                            className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
                          >
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-green-500"
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
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Bénéfices */}
      <section className="bg-white py-20 dark:bg-slate-950">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Les bénéfices concrets
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Ce que vous gagnez avec une application modernisée
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title} variant="gradient">
                <CardHeader>
                  <div className="mb-3 text-4xl">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Exemples */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Exemples de projets
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Des modernisations réussies
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {examples.map((example) => (
              <Card key={example.title} variant="gradient">
                <CardHeader>
                  <CardTitle className="text-xl">{example.title}</CardTitle>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {example.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {example.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span className="text-accent-purple">→</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing & CTA */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 dark:from-slate-950 dark:to-slate-900">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Prêt à moderniser votre application ?
            </h2>
            <div className="mt-6 flex items-baseline justify-center gap-4">
              <span className="from-accent-purple to-secondary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                À partir de 3 000€ HT
              </span>
            </div>
            <p className="mt-4 text-slate-300">
              Budget final selon l&apos;ampleur de la modernisation et la
              complexité du code
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Durée : 3 à 10 semaines • Paiement échelonné possible • Audit
              initial offert
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">Demander un audit gratuit</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                asChild
              >
                <Link href="/offres">Voir l&apos;offre Développement</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
