import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Business listing platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Local business directory',
    primaryLinks: [
      { label: 'Listings', href: '/listing' },
      { label: 'Articles', href: '/article' },
      { label: 'Profiles', href: '/profile' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Find a business', href: '/listing' },
      secondary: { label: 'Add listing', href: '/create' },
    },
  },
  footer: {
    tagline: 'Find, compare, and contact local businesses',
    description: 'A focused business directory for discovering trusted local merchants, service providers, company profiles, and practical listing resources.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Listings', href: '/listing' },
          { label: 'Articles', href: '/article' },
          { label: 'Profiles', href: '/profile' },
          { label: 'PDF Library', href: '/pdf' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for clean local discovery and business growth.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
