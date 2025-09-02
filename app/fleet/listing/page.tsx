import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

const FleetListing = () => {
  const vehicles = [
    {
      id: 1,
      name: 'BMW M3 Competition',
      model: '2023',
      price: 'From $299/day',
      image: '/api/placeholder/400/300',
      features: ['M Performance Package', 'Carbon Fiber Trim', 'Track Mode', 'Launch Control'],
      specs: {
        power: '503 HP',
        acceleration: '3.8s 0-60mph',
        topSpeed: '180 mph',
        transmission: '8-Speed Automatic'
      },
      category: 'performance'
    },
    {
      id: 2,
      name: 'BMW X5 M',
      model: '2023',
      price: 'From $249/day',
      image: '/api/placeholder/400/300',
      features: ['M Sport Package', 'Panoramic Roof', 'Premium Audio', 'All-Wheel Drive'],
      specs: {
        power: '617 HP',
        acceleration: '3.8s 0-60mph',
        topSpeed: '177 mph',
        transmission: '8-Speed Automatic'
      },
      category: 'suv'
    },
    {
      id: 3,
      name: 'BMW i8',
      model: '2023',
      price: 'From $399/day',
      image: '/api/placeholder/400/300',
      features: ['Hybrid Technology', 'Butterfly Doors', 'LED Lighting', 'Carbon Fiber Body'],
      specs: {
        power: '369 HP',
        acceleration: '4.2s 0-60mph',
        topSpeed: '155 mph',
        transmission: '6-Speed Automatic'
      },
      category: 'hybrid'
    },
    {
      id: 4,
      name: 'BMW M4 Convertible',
      model: '2023',
      price: 'From $279/day',
      image: '/api/placeholder/400/300',
      features: ['Soft-top Convertible', 'M Performance', 'Sport Exhaust', 'Adaptive Suspension'],
      specs: {
        power: '473 HP',
        acceleration: '4.1s 0-60mph',
        topSpeed: '174 mph',
        transmission: '8-Speed Automatic'
      },
      category: 'convertible'
    },
    {
      id: 5,
      name: 'BMW 330i',
      model: '2023',
      price: 'From $179/day',
      image: '/api/placeholder/400/300',
      features: ['Sport Package', 'Premium Interior', 'Advanced Safety', 'Comfort Access'],
      specs: {
        power: '255 HP',
        acceleration: '5.6s 0-60mph',
        topSpeed: '155 mph',
        transmission: '8-Speed Automatic'
      },
      category: 'sedan'
    },
    {
      id: 6,
      name: 'BMW X3 M40i',
      model: '2023',
      price: 'From $199/day',
      image: '/api/placeholder/400/300',
      features: ['M Sport Package', 'Adaptive Dampers', 'Premium Sound', 'Gesture Control'],
      specs: {
        power: '382 HP',
        acceleration: '4.4s 0-60mph',
        topSpeed: '155 mph',
        transmission: '8-Speed Automatic'
      },
      category: 'suv'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Vehicles', count: vehicles.length },
    { id: 'performance', name: 'Performance', count: vehicles.filter(v => v.category === 'performance').length },
    { id: 'suv', name: 'SUV', count: vehicles.filter(v => v.category === 'suv').length },
    { id: 'sedan', name: 'Sedan', count: vehicles.filter(v => v.category === 'sedan').length },
    { id: 'convertible', name: 'Convertible', count: vehicles.filter(v => v.category === 'convertible').length },
    { id: 'hybrid', name: 'Hybrid', count: vehicles.filter(v => v.category === 'hybrid').length }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium BMW Fleet</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Discover our collection of professionally upgraded BMWs, each vehicle meticulously 
              coded and customized for the ultimate driving experience.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors font-semibold"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56">
                  <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-20 h-20 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                      </svg>
                      <p className="text-lg font-semibold">{vehicle.name}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {vehicle.model}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{vehicle.price}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Power:</span>
                      <span className="font-semibold">{vehicle.specs.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">0-60mph:</span>
                      <span className="font-semibold">{vehicle.specs.acceleration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Top Speed:</span>
                      <span className="font-semibold">{vehicle.specs.topSpeed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Trans:</span>
                      <span className="font-semibold">{vehicle.specs.transmission}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                      {vehicle.features.length > 3 && (
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                          +{vehicle.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link
                      href={`/fleet/car-details?id=${vehicle.id}`}
                      className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      View Details
                    </Link>
                    <Link
                      href="/book-now"
                      className="flex-1 border border-blue-600 text-blue-600 text-center py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can{`'`}t Find What You{`'`}re Looking For?</h2>
          <p className="text-lg mb-8 opacity-90">
            We have access to a wider range of BMW models and can source specific vehicles for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Specific Vehicle
            </Link>
            <Link
              href="/fleet/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FleetListing
