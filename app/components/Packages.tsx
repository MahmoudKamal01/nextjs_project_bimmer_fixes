import React from 'react'
import Link from 'next/link'

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: 'Essential Coding',
      price: '$299',
      description: 'Perfect for basic BMW enhancements',
      features: [
        'Welcome Light Coding',
        'Daytime Running Lights',
        'Auto Start/Stop Disable',
        'Digital Speed Display',
        'Comfort Access Programming'
      ],
      popular: false,
      color: 'blue'
    },
    {
      id: 2,
      name: 'Performance Plus',
      price: '$599',
      description: 'Advanced coding and performance upgrades',
      features: [
        'Everything in Essential',
        'Launch Control Activation',
        'Sport+ Mode Unlock',
        'Exhaust Sound Enhancement',
        'Performance Display Coding',
        'M-Power Features Unlock',
        'Custom Drive Modes'
      ],
      popular: true,
      color: 'blue'
    },
    {
      id: 3,
      name: 'Ultimate Experience',
      price: '$999',
      description: 'Complete BMW transformation package',
      features: [
        'Everything in Performance Plus',
        'Full iDrive Menu Unlock',
        'Advanced Driver Assistance',
        'Custom Ambient Lighting',
        'Video in Motion',
        'Navigation Enhancements',
        'Personalization Coding',
        'Lifetime Support'
      ],
      popular: false,
      color: 'blue'
    }
  ]

  const additionalServices = [
    {
      name: 'Diagnostic Scan',
      price: '$99',
      description: 'Complete vehicle health check'
    },
    {
      name: 'Custom Coding',
      price: '$149/hour',
      description: 'Specialized modifications'
    },
    {
      name: 'Performance Tune',
      price: '$799',
      description: 'ECU optimization'
    },
    {
      name: 'Maintenance Reset',
      price: '$49',
      description: 'Service indicator reset'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Service Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our expertly crafted BMW coding and upgrade packages, 
            designed to unlock your vehicle's full potential.
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-lg border-2 overflow-hidden ${
                pkg.popular ? 'border-blue-500 transform scale-105' : 'border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book-now"
                  className={`w-full block text-center py-4 px-6 rounded-xl font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Choose Package
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
                <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Quote CTA */}
        <div className="text-center mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our experts can create a personalized package tailored to your specific BMW model and requirements.
          </p>
          <Link
            href="/booking/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Custom Quote
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Packages
