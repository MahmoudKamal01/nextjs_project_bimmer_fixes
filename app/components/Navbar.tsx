'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isFleetOpen, setIsFleetOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Bimmer Fixes Logo"
                width={120}
                height={27}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>

            {/* Fleet Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsFleetOpen(true)}
                onMouseLeave={() => setIsFleetOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
              >
                Fleet
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isFleetOpen && (
                <div
                  onMouseEnter={() => setIsFleetOpen(true)}
                  onMouseLeave={() => setIsFleetOpen(false)}
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                >
                  <Link href="/fleet/listing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Listing
                  </Link>
                  <Link href="/fleet/car-details" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Car Details
                  </Link>
                  <Link href="/fleet/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Pricing
                  </Link>
                </div>
              )}
            </div>

            {/* Booking Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsBookingOpen(true)}
                onMouseLeave={() => setIsBookingOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
              >
                Booking
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isBookingOpen && (
                <div
                  onMouseEnter={() => setIsBookingOpen(true)}
                  onMouseLeave={() => setIsBookingOpen(false)}
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                >
                  <Link href="/booking/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    FAQ
                  </Link>
                  <Link href="/booking/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Contact
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>

            {/* Book Now CTA */}
            <Link
              href="/book-now"
              className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-700 hover:text-blue-600"
              aria-label="Open mobile menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
