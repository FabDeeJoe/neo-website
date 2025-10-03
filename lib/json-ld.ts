/**
 * JSON-LD Schema definitions for SEO and structured data
 */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Neo Code',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://neo-code.fr',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://neo-code.fr'}/logo.png`,
  description:
    "Créateur de solutions numériques sur-mesure pour PME/TPE. Développement from scratch et modernisation d'applications.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bergerac',
    addressRegion: 'Dordogne',
    addressCountry: 'FR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33564340304',
    contactType: 'customer service',
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'fabien@neo-code.fr',
    availableLanguage: ['French'],
    areaServed: ['FR'],
  },
  sameAs: [
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      'https://www.linkedin.com/in/fabien-dijaud',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Neo Code',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://neo-code.fr',
  description:
    "Artisan du logiciel sur-mesure. Développement web et modernisation d'applications pour PME/TPE.",
  publisher: {
    '@type': 'Organization',
    name: 'Neo Code',
  },
  inLanguage: 'fr-FR',
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Neo Code',
  image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://neo-code.fr'}/logo.png`,
  '@id': process.env.NEXT_PUBLIC_SITE_URL || 'https://neo-code.fr',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://neo-code.fr',
  telephone: '+33564340304',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bergerac',
    addressRegion: 'Dordogne',
    postalCode: '24100',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.8517,
    longitude: 0.4869,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Bergerac',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Dordogne',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Gironde',
    },
    {
      '@type': 'City',
      name: 'Paris',
    },
  ],
}

export function createServiceSchema(service: {
  name: string
  description: string
  url: string
  priceRange?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: 'Neo Code',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://neo-code.fr',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    ...(service.priceRange && { priceRange: service.priceRange }),
  }
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://neo-code.fr'}${item.url}`,
    })),
  }
}
