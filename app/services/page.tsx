import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_SERVICE_TIMES } from '@/lib/queries'
import { ServiceTimesData } from '@/lib/types'
import Header from '../components/Header'
import ServiceTimeCard from '../components/ServiceTimeCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Service Times | Synagogue',
  description: 'Browse our service times.',
}

async function getServiceTimes() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<ServiceTimesData>({
      query: GET_SERVICE_TIMES,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeServiceTimes?.nodes || []
  } catch (error) {
    console.error('Error fetching service times:', error)
    return []
  }
}

export default async function ServiceTimesPage() {
  const items = await getServiceTimes()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Service Times
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Explore our service times.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Service Times Yet</h2>
              <p className="text-gray-500">
                Service Times will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <ServiceTimeCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
