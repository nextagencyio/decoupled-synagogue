import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_PROGRAMS } from '@/lib/queries'
import { ProgramsData } from '@/lib/types'
import Header from '../components/Header'
import ProgramCard from '../components/ProgramCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Programs | Congregation Beth Shalom',
  description: 'Explore programs at Congregation Beth Shalom including Religious School, adult education, youth groups, and community engagement opportunities.',
}

async function getPrograms() {
  try {
    const client = getClient()
    const data = await client.raw(GET_PROGRAMS, { first: 50 })
    return data?.nodePrograms?.nodes || []
  } catch (error) {
    console.error('Error fetching programs:', error)
    return []
  }
}

export default async function ProgramsPage() {
  const items = await getPrograms()

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Congregational Life
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Programs
            </h1>
            <p className="text-lg text-slate-300">
              Enriching programs for every age and interest, from Religious School to adult education.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Programs Yet</h2>
              <p className="text-gray-500">
                Programs will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item: any) => (
                <ProgramCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
