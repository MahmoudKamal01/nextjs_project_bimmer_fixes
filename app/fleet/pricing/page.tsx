import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

const Pricing = () => {
  const pricingTiers = [
    {
      category: 'Economy BMW',
      models: ['320i', '330i', 'X1', 'X2'],
      dailyRate: '$179',
      weeklyRate: '$1,099',
      monthlyRate: '$3,999',
      features: [
        'Basic BMW features',
        'Essential coding package included',
        'Premium fuel included',
        'Standard insurance',
        '24/7 support'
      ],
      popular: false
    },
    {
      category: 'Performance BMW',
      models: ['M340i', 'M440i', 'X3 M40i', 'X4 M40i'],
      dailyRate: '$249',
      weeklyRate: '$1,499',
      monthlyRate: '$5,499',
      features: [
        'M Sport package',
        'Performance Plus coding',
        'Premium fuel included',
        'Comprehensive insurance',
        'Priority support',
        'Performance monitoring'
      ],
      popular: true
    },
    {
      category: 'M Series BMW',
      models: ['M3', 'M4', 'M5', 'X5 M', 'X6 M'],
      dailyRate: '$399',
      weeklyRate: '$2,399',
      monthlyRate: '$8,999',
      features: [
        'Full M Performance package',
        'Ultimate Experience coding',
        'Premium fuel included',
        'Full coverage insurance',
        'Concierge support',
        'Track day preparation',
        'Performance data logging'
      ],
      popular: false
    }
  ]

  const additionalServices = [
    {
      service: 'Airport Pickup/Drop-off',
      price: '$49',
      description: 'Convenient airport transfer service'
    },
    {
      service: 'Extended Mileage (per day)',
      price: '$0.25/mile',
      description: 'Additional mileage beyond daily limit'
    },
    {
      service: 'Additional Driver',
      price: '$25/day',
      description: 'Add authorized drivers to your rental'
    },
    {
      service: 'GPS Navigation',
      price: '$15/day',
      description: 'Premium BMW navigation system'
    },
    {
      service: 'Child Safety Seat',
      price: '$12/day',
      description: 'BMW-approved safety seats available'
    },
    {
      service: 'Mobile Delivery',
      price: '$75',
      description: 'Vehicle delivered to your location'
    }
  ]

  const discounts = [
    {
      type: 'Weekly Rental',
      discount: '15% OFF',
      description: '7+ day rentals',
      code: 'WEEK15'
    },
    {
      type: 'Monthly Rental',
      discount: '25% OFF',
      description: '30+ day rentals',
      code: 'MONTH25'
    },
    {
      type: 'Returning Customer',
      discount: '10% OFF',
      description: 'Previous customers',
      code: 'RETURN10'
    },
    {
      type: 'Corporate Rate',
      discount: '20% OFF',
      description: 'Business accounts',
      code: 'CORP20'
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Competitive rates for premium BMW experiences. All vehicles include professional 
              coding upgrades and comprehensive support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Rental Pricing</h2>
            <p className="text-xl text-gray-600">
              Choose from our range of professionally upgraded BMW vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 overflow-hidden ${
                  tier.popular ? 'border-blue-500 transform scale-105' : 'border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.category}</h3>
                    <div className="text-sm text-gray-600 mb-4">
                      Models: {tier.models.join(', ')}
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-blue-600">{tier.dailyRate}</div>
                      <div className="text-sm text-gray-500">per day</div>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Weekly Rate:</span>
                        <span className="font-semibold">{tier.weeklyRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Rate:</span>
                        <span className="font-semibold">{tier.monthlyRate}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
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
                      tier.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">
              Enhance your BMW experience with our optional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.service}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-3">{service.price}</div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts & Promotions */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Promotions</h2>
            <p className="text-xl text-gray-600">
              Save more with our special offers and discounts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {discounts.map((discount, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-2">{discount.discount}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{discount.type}</h3>
                <p className="text-sm text-gray-600 mb-3">{discount.description}</p>
                <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-mono text-gray-700">
                  Code: {discount.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Details</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What{`'`}s Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Professional BMW coding upgrades
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Full tank of premium fuel
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Comprehensive insurance coverage
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 roadside assistance
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited mileage (300 miles/day)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Professional vehicle preparation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Complete vehicle orientation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Expert technical support
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Notes</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Minimum age requirement: 25 years old</li>
                <li>• Valid driver{`'`}s license and major credit card required</li>
                <li>• Security deposit: $500-$2,000 depending on vehicle category</li>
                <li>• Fuel policy: Return with same fuel level or pay refueling fee</li>
                <li>• Late return fee: $50/hour after grace period</li>
                <li>• Cleaning fee applies for excessive dirt or odors</li>
                <li>• All prices subject to applicable taxes and fees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience BMW Excellence?</h2>
          <p className="text-lg mb-8 opacity-90">
            Book your professionally upgraded BMW today and discover the difference our coding makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-now"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/booking/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Pricing
