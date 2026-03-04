'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X, Star } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Programs', href: '/programs' },
  { name: 'Service Times', href: '/services' },
  { name: 'Events', href: '/events' },
  { name: 'News', href: '/news' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(0)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const banner = document.querySelector('[data-demo-banner]')
    if (banner) {
      const updateHeight = () => setBannerHeight(banner.getBoundingClientRect().height)
      updateHeight()
      const observer = new MutationObserver(updateHeight)
      observer.observe(banner, { attributes: true, childList: true, subtree: true })
      window.addEventListener('resize', updateHeight)
      return () => {
        observer.disconnect()
        window.removeEventListener('resize', updateHeight)
      }
    }
  }, [])

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) {
        return item.name
      }
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header ref={headerRef} className="sticky z-50" style={{ top: `${bannerHeight}px` }}>
      {/* Utility Bar */}
      <div className="bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-xs">
            <div className="hidden sm:flex items-center space-x-4 text-primary-200">
              <span>400 Shalom Way, Brooklyn, NY 11201</span>
              <span className="text-primary-600">|</span>
              <span>(555) 678-9031</span>
            </div>
            <div className="flex items-center space-x-4 text-primary-200">
              <span>Shabbat Services: Friday 6:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-accent-400" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-primary-900 font-display">Beth Shalom</span>
                <span className="block text-xs text-slate-500 -mt-1">Congregation</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'px-4 py-2 text-sm font-medium transition-colors border-b-2',
                    activeTab === item.name
                      ? 'border-accent-500 text-primary-900'
                      : 'border-transparent text-slate-600 hover:text-primary-900 hover:border-slate-300'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center bg-accent-500 text-primary-900 px-5 py-2 rounded-md hover:bg-accent-600 transition-colors duration-200 font-semibold text-sm"
              >
                Contact Us
              </Link>

              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-primary-900 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 py-4">
              <nav className="flex flex-col space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      'px-4 py-3 rounded-md text-sm font-medium transition-colors',
                      activeTab === item.name
                        ? 'bg-primary-50 text-primary-900'
                        : 'text-slate-600 hover:text-primary-900 hover:bg-slate-50'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 bg-accent-500 text-primary-900 rounded-md text-sm font-semibold text-center mt-2"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
