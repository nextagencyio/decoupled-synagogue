'use client'

import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Congregation Beth Shalom'
  const subtitle = (homepageContent as any)?.heroSubtitle || 'Where Tradition Meets Community'
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-3">
            A Welcoming Reform Congregation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl text-primary-100 mb-8">{subtitle}</p>}
          {description && (
            <div className="text-lg text-primary-200" dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
      </div>
    </section>
  )
}
