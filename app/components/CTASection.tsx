'use client'

import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Join Our Community'
  const description = (homepageContent as any)?.ctaDescription?.processed || ''
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Contact Us'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'Learn More'

  return (
    <section className="bg-primary-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-display">{title}</h2>
        {description && (
          <div className="text-primary-200 mb-8 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/contact" className="px-8 py-4 bg-accent-500 text-primary-900 rounded-md hover:bg-accent-600 transition-colors font-semibold">
            {primaryLabel}
          </a>
          <a href="/about" className="px-8 py-4 border border-slate-400 text-white rounded-md hover:bg-primary-700 transition-colors font-semibold">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
