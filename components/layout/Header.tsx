'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Expertise', href: '/expertise' },
  { name: 'Offres', href: '/offres' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
      <Container>
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Navigation principale"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Retour à l'accueil"
          >
            <Image
              src="/images/logo/Color logo - no background.png"
              alt="Neo Code"
              width={150}
              height={50}
              className="h-12 w-auto"
              priority
              quality={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'hover:text-primary text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-slate-600 dark:text-slate-400'
                )}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="gradient" asChild>
              <Link href="/contact">Démarrer un projet</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-slate-200 py-4 md:hidden dark:border-slate-800"
            role="navigation"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'hover:text-primary text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-slate-600 dark:text-slate-400'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="gradient" className="w-full" asChild>
                <Link href="/contact">Démarrer un projet</Link>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
