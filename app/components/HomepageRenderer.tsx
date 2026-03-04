'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Heart, BookOpen, Users, Calendar, Music, Star } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const services = [
  { icon: Heart, title: 'Worship & Prayer', description: 'Meaningful Shabbat and holiday services that blend tradition with contemporary expression.' },
  { icon: BookOpen, title: 'Torah Study', description: 'Engaging study sessions exploring Jewish texts, ethics, and their relevance to modern life.' },
  { icon: Users, title: 'Community & Social', description: 'Building lasting connections through social events, volunteer work, and shared celebrations.' },
  { icon: Calendar, title: 'Holiday Celebrations', description: 'Joyful observances of the Jewish calendar, from Rosh Hashanah to Purim and beyond.' },
  { icon: Music, title: 'Music & Arts', description: 'Enriching cultural programming featuring cantorial music, art exhibitions, and performances.' },
  { icon: Star, title: 'Youth & Education', description: 'Nurturing the next generation through Religious School, B\'nai Mitzvah preparation, and youth groups.' },
]

const communityHighlights = [
  { label: 'Shabbat Services', detail: 'Friday evenings and Saturday mornings' },
  { label: 'Torah Study', detail: 'Weekly classes for all levels' },
  { label: 'Youth Programs', detail: 'Religious School, teen groups, and summer camp' },
]

const showcaseIcons = [
  { icon: Heart, label: 'Tikkun Olam' },
  { icon: BookOpen, label: 'Lifelong Learning' },
  { icon: Users, label: 'Kehillah' },
  { icon: Calendar, label: 'Jewish Calendar' },
  { icon: Music, label: 'Sacred Music' },
  { icon: Star, label: 'Magen David' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 font-display">Congregational Life</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Experience the richness of Jewish life through our diverse programs and services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="bg-white border border-slate-200 rounded-lg p-6 hover:border-accent-300 transition-colors">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2 font-display">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Community */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-900 font-display">Our Community</h2>
            <p className="text-slate-600 mt-2">Building meaningful connections through shared values.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {communityHighlights.map((item) => (
              <div key={item.label} className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Star className="w-5 h-5 text-slate-400 mr-2" />
                  <span className="text-sm font-semibold text-primary-900 uppercase tracking-wide">{item.label}</span>
                </div>
                <p className="text-slate-600 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Icon Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {showcaseIcons.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                    <Icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 text-center mb-10 font-display">Our Congregation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&q=80" alt="Torah scroll" className="rounded-lg object-cover h-48 w-full" />
            <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&q=80" alt="Synagogue interior" className="rounded-lg object-cover h-48 w-full" />
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80" alt="Community gathering" className="rounded-lg object-cover h-48 w-full" />
            <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&q=80" alt="Celebration" className="rounded-lg object-cover h-48 w-full" />
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Footer */}
      <footer className="bg-primary-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-accent-400 mb-4 font-display">Congregation Beth Shalom</h3>
              <p className="text-slate-400 mb-4">
                A welcoming Reform synagogue dedicated to worship, learning, and building community for over 70 years.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/programs" className="hover:text-accent-400 transition-colors">Programs</a></li>
                <li><a href="/services" className="hover:text-accent-400 transition-colors">Service Times</a></li>
                <li><a href="/events" className="hover:text-accent-400 transition-colors">Events</a></li>
                <li><a href="/news" className="hover:text-accent-400 transition-colors">News</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>400 Shalom Way</li>
                <li>Brooklyn, NY 11201</li>
                <li>office@bethshalom.org</li>
                <li>(555) 678-9031</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Congregation Beth Shalom. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="/privacy" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-accent-400 transition-colors">Terms of Use</a>
              <a href="/accessibility" className="hover:text-accent-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
