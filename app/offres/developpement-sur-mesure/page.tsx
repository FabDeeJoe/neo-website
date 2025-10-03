import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Développement sur-mesure',
  description:
    "Création complète d'une application métier parfaitement adaptée à vos processus. À partir de 5 000€ HT.",
  alternates: {
    canonical: '/offres/developpement-sur-mesure',
  },
  openGraph: {
    title: 'Développement sur-mesure - Neo Code',
    description:
      "Création complète d'une application métier parfaitement adaptée à vos processus. À partir de 5 000€ HT.",
    url: '/offres/developpement-sur-mesure',
    type: 'website',
  },
}

const problems = [
  'Aucun logiciel du marché ne correspond à vos processus spécifiques',
  'Les solutions généralistes vous obligent à adapter votre métier',
  'Vous perdez du temps avec des workarounds et des fichiers Excel',
  "Votre activité évolue et vous avez besoin d'un outil flexible",
  'Vous voulez intégrer plusieurs outils existants en une seule interface',
]

const deliverables = [
  {
    title: 'Analyse fonctionnelle',
    description: 'Cahier des charges détaillé avec tous vos besoins documentés',
    icon: '📋',
  },
  {
    title: 'Maquettes interactives',
    description:
      "Prototypes cliquables pour valider l'interface avant le développement",
    icon: '🎨',
  },
  {
    title: 'Application web sur-mesure',
    description: 'Code source complet, responsive, sécurisé et optimisé',
    icon: '💻',
  },
  {
    title: 'Base de données',
    description: 'Architecture données adaptée à votre volume et vos besoins',
    icon: '🗄️',
  },
  {
    title: 'Formation équipe',
    description:
      'Sessions de formation pour vos utilisateurs et administrateurs',
    icon: '👥',
  },
  {
    title: 'Documentation',
    description: 'Guides utilisateur et documentation technique complète',
    icon: '📚',
  },
]

const process = [
  {
    phase: 'Découverte',
    duration: '1-2 semaines',
    activities: [
      'Ateliers de cadrage',
      'Cartographie des processus',
      'Définition du périmètre',
      'Estimation budget & planning',
    ],
  },
  {
    phase: 'Conception',
    duration: '1-2 semaines',
    activities: [
      'Architecture technique',
      'Design des interfaces',
      'Validation des maquettes',
      'Planification des sprints',
    ],
  },
  {
    phase: 'Développement MVP',
    duration: '3-6 semaines',
    activities: [
      'Développement des features clés',
      "Tests unitaires et d'intégration",
      "Livraison d'une première version",
      'Recueil de feedback',
    ],
  },
  {
    phase: 'Itérations',
    duration: '2-6 semaines',
    activities: [
      'Ajout des fonctionnalités secondaires',
      "Ajustements basés sur l'usage réel",
      'Optimisations',
      'Préparation au déploiement',
    ],
  },
  {
    phase: 'Déploiement',
    duration: '1 semaine',
    activities: [
      'Migration des données',
      'Mise en production',
      'Formation des utilisateurs',
      'Support post-lancement',
    ],
  },
]

const examples = [
  {
    title: 'Gestion de planning',
    description:
      'Application de planification pour entreprise de services à la personne',
    features: [
      'Planning visuel',
      'Gestion des interventions',
      'Facturation automatique',
      'App mobile',
    ],
  },
  {
    title: 'Suivi de chantiers',
    description: 'Outil de gestion pour artisans du bâtiment',
    features: [
      'Photos géolocalisées',
      'Devis & factures',
      'Suivi temps & matériel',
      'Exports comptables',
    ],
  },
  {
    title: 'Gestion de stock',
    description: 'Système sur-mesure pour commerce avec dépôts multiples',
    features: [
      'Multi-sites',
      'Alertes de réapprovisionnement',
      'Historique complet',
      'Tableaux de bord',
    ],
  },
]

export default function DevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="from-primary/10 via-accent-blue/10 to-secondary/10 relative overflow-hidden bg-gradient-to-br py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="from-primary to-accent-blue inline-block rounded-full bg-gradient-to-r px-4 py-1 text-sm font-semibold text-white">
              Développement from scratch
            </div>
            <h1 className="font-heading mt-4 text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Créez l\'outil{' '}
              <span className="from-primary to-accent-blue bg-gradient-to-r bg-clip-text text-transparent">
                parfait
              </span>{' '}
              pour votre activité
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl dark:text-slate-400">
              Une application 100% adaptée à vos processus métier, conçue et
              développée sur-mesure pour répondre précisément à vos besoins.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">Discuter de mon projet</Link>
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
              Vous êtes confronté à l\'une de ces situations :
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
                Nous concevons et développons une application web sur-mesure,
                pensée spécifiquement pour votre métier et vos processus.
              </p>
              <p>
                Contrairement aux logiciels standardisés, chaque fonctionnalité
                est conçue pour s\'intégrer naturellement dans votre façon de
                travailler. Vous ne perdez plus de temps à adapter votre métier
                à l\'outil.
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">
                L\'outil s\'adapte à vous, pas l\'inverse.
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
              Une solution complète, clé en main
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
              Un processus en 5 phases, flexible et itératif
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {process.map((step, index) => (
              <Card key={step.phase} variant="default">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="from-primary to-accent-blue flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xl font-bold text-white">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                          {step.phase}
                        </h3>
                        <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
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

      {/* Exemples */}
      <section className="bg-white py-20 dark:bg-slate-950">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Exemples de projets
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Des solutions adaptées à différents métiers
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
                    {example.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span className="text-primary">→</span>
                        <span>{feature}</span>
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
              Prêt à créer votre outil sur-mesure ?
            </h2>
            <div className="mt-6 flex items-baseline justify-center gap-4">
              <span className="from-primary to-accent-blue bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                À partir de 5 000€ HT
              </span>
            </div>
            <p className="mt-4 text-slate-300">
              Budget final selon le périmètre et la complexité du projet
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Durée : 4 à 12 semaines • Paiement échelonné possible
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">Demander un devis gratuit</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                asChild
              >
                <Link href="/offres">Voir l\'offre Modernisation</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
