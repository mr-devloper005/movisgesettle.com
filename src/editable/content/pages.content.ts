import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Find trusted local businesses',
      description: 'Search local merchants, compare business listings, and connect with service providers near you.',
      openGraphTitle: 'Find trusted local businesses',
      openGraphDescription: 'Discover verified local businesses, helpful articles, and service providers in one focused directory.',
      keywords: ['business directory', 'local listings', 'merchant profiles', 'local services'],
    },
    hero: {
      badge: 'Find For Your Needs',
      title: ['Find the best local', 'merchants near you.'],
      description: 'Browse trusted companies, compare services, and contact local businesses from a clean directory built for fast decisions.',
      primaryCta: { label: 'Browse businesses', href: '/listing' },
      secondaryCta: { label: 'Add your listing', href: '/create' },
      searchPlaceholder: 'Mechanic, salon, contractor, restaurant',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Local listings, articles, and business profiles stay easy to scan.',
      featureCardDescription: 'The directory keeps contact details, categories, and useful business context close to every discovery path.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for finding real businesses, not wandering through clutter.',
      paragraphs: [
        'Visitors can search by service, location, or category and quickly understand which merchants fit their needs.',
        'Business profiles, contact actions, service descriptions, and supporting articles are kept in one consistent browsing flow.',
        'Owners can create a listing, share useful details, and give customers a cleaner path from discovery to contact.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Search-first homepage for business and location discovery.',
        'Listing cards with contact details, categories, and rating-style cues.',
        'Business profile pages inspired by practical merchant directories.',
        'Clear owner paths for creating and improving listings.',
      ],
      primaryLink: { label: 'Browse listings', href: '/listing' },
      secondaryLink: { label: 'Create a listing', href: '/create' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Put your business where local customers are already looking.',
      description: 'Create a listing, add service details, and give visitors a direct path to call, visit, or request help.',
      primaryCta: { label: 'Browse Businesses', href: '/listing' },
      secondaryCta: { label: 'Contact Support', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About the directory',
    title: 'Helping people discover useful local businesses with less guesswork.',
    description: `${slot4BrandConfig.siteName} is a listing-first business directory for people who want clear merchant profiles, useful contact details, and local service context in one place.`,
    paragraphs: [
      'We organize business listings around the things visitors actually need: what a company does, where it operates, how to contact it, and what makes it worth considering.',
      'For merchants, the platform provides a straightforward place to publish a profile, improve discoverability, and guide customers toward the next step.',
      'For visitors, it keeps browsing calm and practical with normal page widths, readable cards, helpful categories, and consistent action buttons.',
    ],
    values: [
      {
        title: 'Local context first',
        description: 'Listings highlight location, service category, contact options, and useful business summaries before anything decorative.',
      },
      {
        title: 'Clear merchant profiles',
        description: 'Business detail pages are designed for quick scanning, direct calls, websites, directions, hours, and related companies.',
      },
      {
        title: 'Owner-friendly publishing',
        description: 'The create flow helps businesses submit useful listing content without needing to navigate a complex publishing system.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Need help with a listing, category, or local business profile?',
    description: 'Send the details and we will help with listing updates, ownership questions, category coverage, business profile issues, or partnership requests.',
    formTitle: 'Send listing support request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Search businesses, services, categories, and resources faster.',
      description: 'Use keywords, locations, categories, and content types to find local businesses and helpful listing content.',
      placeholder: 'Search by business, service, city, or category',
    },
    resultsTitle: 'Latest searchable listings and resources',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit a local business listing or related directory content.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create or manage business listings.',
      description: 'Use your account to open the listing workspace and submit business profiles, service details, resources, and updates.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a useful listing for local discovery.',
      description: 'Choose a listing type, add contact details, include a category, and write a clear description that helps visitors decide.',
    },
    formTitle: 'Listing details',
    submitLabel: 'Submit listing',
    successTitle: 'Listing submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your local business account.',
      description: 'Login to create listings, save business details, and continue managing your directory submissions.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and list your business.',
      description: 'Create an account to submit business profiles, save listing details, and make your services easier to find.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
