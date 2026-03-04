'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

const defaultStats = [
  { value: '70+', label: 'Years of Community' },
  { value: '500+', label: 'Member Families' },
  { value: '25+', label: 'Weekly Programs' },
  { value: '100%', label: 'Welcoming Spirit' },
]

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  const displayStats = stats.length > 0 ? stats : defaultStats

  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
          {displayStats.map((stat: any, i: number) => (
            <div key={stat.id || i} className="py-10 md:py-12 text-center px-4">
              <div className="text-3xl md:text-4xl font-bold text-accent-600 font-display">{stat.value || stat.statValue}</div>
              <div className="text-slate-600 mt-2 text-sm">{stat.label || stat.statLabel || stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
