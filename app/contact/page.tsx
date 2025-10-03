import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Prenez rendez-vous pour discuter de votre projet. Réponse sous 24h en semaine.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact - Neo Code',
    description:
      'Prenez rendez-vous pour discuter de votre projet. Réponse sous 24h en semaine.',
    url: '/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 dark:from-slate-950 dark:to-slate-900">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Discutons de votre{' '}
              <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
                projet
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 sm:text-xl">
              Premier échange gratuit et sans engagement pour comprendre vos
              besoins. Réponse garantie sous 24h en semaine.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 dark:bg-slate-950">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left Column - Info */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                  Pourquoi me contacter ?
                </h2>
                <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-400">
                  <p>
                    Que vous ayez un projet précis ou simplement une idée à
                    explorer, je suis là pour vous écouter et vous conseiller.
                  </p>
                  <p>Lors de notre premier échange, nous discuterons de :</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg
                        className="text-primary mt-1 h-5 w-5 flex-shrink-0"
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
                      <span>Vos besoins et contraintes spécifiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="text-primary mt-1 h-5 w-5 flex-shrink-0"
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
                      <span>Les solutions possibles pour votre situation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="text-primary mt-1 h-5 w-5 flex-shrink-0"
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
                      <span>Une estimation de budget et de délais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="text-primary mt-1 h-5 w-5 flex-shrink-0"
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
                      <span>
                        Les prochaines étapes si nous travaillons ensemble
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Info Cards */}
                <div className="mt-8 space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                          <svg
                            className="text-primary h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white">
                            Basé à Bergerac
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            Interventions en Dordogne, Gironde et Paris
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                          <svg
                            className="text-primary h-5 w-5"
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
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white">
                            Réponse sous 24h
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            Du lundi au vendredi, 9h-18h
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Column - Contact Methods */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                  Choisissez votre mode de contact
                </h2>

                <div className="mt-6 space-y-4">
                  {/* Calendar */}
                  <Card variant="gradient" className="group cursor-pointer">
                    <a
                      href={process.env.NEXT_PUBLIC_CALENDAR_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="from-primary/20 to-secondary/20 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br">
                            <svg
                              className="text-primary h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <CardTitle>Réserver un créneau</CardTitle>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                              Visio de 30 minutes
                            </p>
                          </div>
                          <svg
                            className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1"
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
                        </div>
                      </CardHeader>
                    </a>
                  </Card>

                  {/* Email */}
                  <Card variant="gradient" className="group cursor-pointer">
                    <a
                      href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=Demande de contact - Neo Code`}
                      className="block"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="from-primary/20 to-secondary/20 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br">
                            <svg
                              className="text-primary h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <CardTitle>Envoyer un email</CardTitle>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                              {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                            </p>
                          </div>
                          <svg
                            className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1"
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
                        </div>
                      </CardHeader>
                    </a>
                  </Card>

                  {/* Phone */}
                  <Card variant="gradient" className="group cursor-pointer">
                    <a
                      href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                      className="block"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="from-primary/20 to-secondary/20 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br">
                            <svg
                              className="text-primary h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <CardTitle>Appeler directement</CardTitle>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                              05 64 34 03 04
                            </p>
                          </div>
                          <svg
                            className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1"
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
                        </div>
                      </CardHeader>
                    </a>
                  </Card>

                  {/* LinkedIn */}
                  <Card variant="gradient" className="group cursor-pointer">
                    <a
                      href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="from-primary/20 to-secondary/20 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br">
                            <svg
                              className="text-primary h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <CardTitle>Connecter sur LinkedIn</CardTitle>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                              Voir mon profil professionnel
                            </p>
                          </div>
                          <svg
                            className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1"
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
                        </div>
                      </CardHeader>
                    </a>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
