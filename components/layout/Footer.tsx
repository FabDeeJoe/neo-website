import Link from 'next/link'
import { Container } from '@/components/ui/Container'

const footerLinks = {
  navigation: [
    { name: 'Accueil', href: '/' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Offres', href: '/offres' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="from-primary to-secondary h-8 w-8 rounded-lg bg-gradient-to-br" />
                <span className="text-xl font-bold">Neo Code</span>
              </Link>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                Artisan du logiciel sur-mesure. <br />
                Nous créons des solutions numériques fluides et sensées pour
                éliminer vos frictions quotidiennes.
              </p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary text-slate-600 dark:text-slate-400"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-slate-100">
                Navigation
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-primary text-sm text-slate-600 dark:text-slate-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-slate-100">
                Contact
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                    className="hover:text-primary"
                  >
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                    className="hover:text-primary"
                  >
                    05 64 34 03 04
                  </a>
                </li>
                <li>Bergerac, Dordogne</li>
                <li className="text-xs">
                  Zones d&apos;intervention:
                  <br />
                  Dordogne, Gironde, Paris
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-800">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                © {new Date().getFullYear()} Neo Code. Tous droits réservés.
              </p>
              <div className="flex gap-4">
                {footerLinks.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-primary text-sm text-slate-600 dark:text-slate-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
