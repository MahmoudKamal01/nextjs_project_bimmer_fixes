import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PopularCars = () => {
  const cars = [
    {
      id: 1,
      name: 'BMW M3 Competition',
      model: '2023',
      image: '/api/placeholder/400/300',
      price: 'From $299/day',
      features: ['M Performance Package', 'Carbon Fiber Trim', 'Track Mode'],
      specs: {
        power: '503 HP',
        acceleration: '3.8s 0-60mph',
        topSpeed: '180 mph'
      }
    },
    {
      id: 2,
      name: 'BMW X5 M',
      model: '2023',
      image: '/api/placeholder/400/300',
      price: 'From $249/day',
      features: ['M Sport Package', 'Panoramic Roof', 'Premium Audio'],
      specs: {
        power: '617 HP',
        acceleration: '3.8s 0-60mph',
        topSpeed: '177 mph'
      }
    },
    {
      id: 3,
      name: 'BMW i8',
      model: '2023',
      image: '/api/placeholder/400/300',
      price: 'From $399/day',
      features: ['Hybrid Technology', 'Butterfly Doors', 'LED Lighting'],
      specs: {
        power: '369 HP',
        acceleration: '4.2s 0-60mph',
        topSpeed: '155 mph'
      }
    },
    {
      id: 4,
      name: 'BMW M4 Convertible',
      model: '2023',
      image: '/api/placeholder/400/300',
      price: 'From $279/day',
      features: ['Soft-top Convertible', 'M Performance', 'Sport Exhaust'],
      specs: {
        power: '473 HP',
        acceleration: '4.1s 0-60mph',
        topSpeed: '174 mph'
      }
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Popular Cars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium BMW fleet, each vehicle professionally upgraded 
            and coded for optimal performance and luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                    </svg>
                    <p className="text-sm">{car.name}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {car.model}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{car.price}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Power:</span>
                    <span className="font-semibold">{car.specs.power}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">0-60mph:</span>
                    <span className="font-semibold">{car.specs.acceleration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Top Speed:</span>
                    <span className="font-semibold">{car.specs.topSpeed}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {car.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/fleet/car-details?id=${car.id}`}
                    className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/book-now"
                    className="flex-1 border border-blue-600 text-blue-600 text-center py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-semibold"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/fleet/listing"
            className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center"
          >
            View All Vehicles
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PopularCars
