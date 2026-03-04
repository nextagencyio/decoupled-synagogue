import Link from 'next/link'
import { DrupalServiceTime } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight } from 'lucide-react'

interface ServiceTimeCardProps {
  item: DrupalServiceTime
}

export default function ServiceTimeCard({ item }: ServiceTimeCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-accent-300 transition-colors duration-200"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary-800 to-primary-950">
        {(item as any).image?.url ? (
          <ResponsiveImage
            src={(item as any).image.url}
            alt={(item as any).image.alt || item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            variations={(item as any).image.variations}
            targetWidth={400}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 text-white/30 text-4xl font-bold font-display">{item.title?.charAt(0)}</div>
          </div>
        )}
      </div>

      <div className="p-6">
        {(item as any).serviceName && (
          <p className="text-xs text-accent-600 font-semibold uppercase tracking-wide mb-2">{(item as any).serviceName}</p>
        )}
        <h3 className="text-lg font-semibold text-primary-900 mb-3 group-hover:text-accent-700 transition-colors font-display">
          {item.title}
        </h3>

        {(item as any).body?.processed && (
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">
            {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        <div className="flex items-center text-accent-600 font-medium text-sm">
          Learn more
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
