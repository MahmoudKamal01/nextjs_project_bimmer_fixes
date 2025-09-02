import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Schmidt',
      location: 'Los Angeles, CA',
      car: 'BMW M3 Competition',
      rating: 5,
      text: "Absolutely incredible service! The team at Bimmer Fixes transformed my M3 with their coding expertise. The launch control activation and custom drive modes have completely changed my driving experience. Professional, knowledgeable, and worth every penny.",
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      location: 'Miami, FL',
      car: 'BMW X5 M',
      rating: 5,
      text: "I was skeptical about BMW coding services until I found Bimmer Fixes. They unlocked features I didn't even know my X5 had! The ambient lighting customization and comfort access programming are game-changers. Highly recommend!",
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'David Chen',
      location: 'San Francisco, CA',
      car: 'BMW i8',
      rating: 5,
      text: "The Ultimate Experience package was worth every dollar. My i8 now has features that feel like they came from the factory. The video-in-motion and navigation enhancements make long drives so much better. Outstanding work!",
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'Emma Rodriguez',
      location: 'Austin, TX',
      car: 'BMW M4 Convertible',
      rating: 5,
      text: "Fast, professional, and transparent. The diagnostic scan revealed issues I wasn't aware of, and their custom coding gave my M4 personality. The exhaust sound enhancement is absolutely perfect. Will definitely return for future services.",
      image: '/api/placeholder/80/80'
    },
    {
      id: 5,
      name: 'James Wilson',
      location: 'Seattle, WA',
      car: 'BMW 330i',
      rating: 5,
      text: "Even with my 330i, Bimmer Fixes made it feel like a completely different car. The Essential Coding package unlocked so many convenience features. Great communication throughout the process and excellent results.",
      image: '/api/placeholder/80/80'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      location: 'Denver, CO',
      car: 'BMW X3 M40i',
      rating: 5,
      text: "The attention to detail is remarkable. They explained every modification and made sure I understood what was being done. My X3 now has features I thought were only available on higher-end models. Exceptional service!",
      image: '/api/placeholder/80/80'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '50+', label: 'BMW Models Serviced' },
    { number: '100%', label: 'Satisfaction Rate' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don{`'`}t just take our word for it. Here{`'`}s what BMW enthusiasts say about their experience with Bimmer Fixes.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                {`"`}{testimonial.text}{`"`}
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.car}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Platforms */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Find Us On</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-gray-700">Google Reviews</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm">(4.9/5)</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">f</span>
              </div>
              <span className="text-gray-700">Facebook</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm">(5.0/5)</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y</span>
              </div>
              <span className="text-gray-700">Yelp</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm">(4.8/5)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
