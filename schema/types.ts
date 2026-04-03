// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeEvent {
  id: string;
  body: { value: string; summary?: string };
  cost: string;
  endDate: { time: string };
  eventCategory: any[];
  eventDate: { time: string };
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  path: string;
  registrationUrl: string;
  speaker: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeNews {
  id: string;
  author: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  newsCategory: any[];
  path: string;
  publishDate: { time: string };
  summary: { value: string };
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeProgram {
  id: string;
  ageGroup: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  leader: string;
  location: string;
  path: string;
  programType: any[];
  registrationUrl: string;
  schedule: string;
  title: string;
}

export interface NodeServiceTime {
  id: string;
  body: { value: string; summary?: string };
  dayOfWeek: string;
  endTime: string;
  image: { url: string; alt: string; width: number; height: number };
  notes: { value: string };
  path: string;
  serviceName: string;
  serviceStyle: string;
  startTime: string;
  title: string;
}
