'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BookNow = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    serviceType: '',
    vehicleInfo: {
      year: '',
      model: '',
      vin: ''
    },
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    appointmentInfo: {
      date: '',
      time: '',
      location: '',
      additionalServices: []
    },
    specialRequests: ''
  })

  const services = [
    {
      id: 'essential',
      name: 'Essential Coding',
      price: '$299',
      duration: '2-3 hours',
      description: 'Basic BMW enhancements and convenience features',
      features: ['Welcome Light Coding', 'DRL Activation', 'Auto Start/Stop Disable', 'Digital Speed Display']
    },
    {
      id: 'performance',
      name: 'Performance Plus',
      price: '$599',
      duration: '3-4 hours',
      description: 'Advanced coding with performance enhancements',
      features: ['Everything in Essential', 'Launch Control', 'Sport+ Mode', 'Exhaust Enhancement', 'M-Power Features']
    },
    {
      id: 'ultimate',
      name: 'Ultimate Experience',
      price: '$999',
      duration: '4-5 hours',
      description: 'Complete BMW transformation package',
      features: ['Everything in Performance Plus', 'Full iDrive Unlock', 'Video in Motion', 'Custom Lighting', 'Advanced Features']
    },
    {
      id: 'diagnostic',
      name: 'Diagnostic Scan',
      price: '$99',
      duration: '1 hour',
      description: 'Complete vehicle health check and analysis',
      features: ['Full System Scan', 'Error Code Analysis', 'Health Report', 'Recommendations']
    },
    {
      id: 'custom',
      name: 'Custom Coding',
      price: 'Quote',
      duration: 'Variable',
      description: 'Tailored modifications for specific requirements',
      features: ['Consultation Included', 'Custom Solutions', 'Expert Implementation', 'Documentation']
    }
  ]

  const locations = [
    { id: 'la', name: 'Los Angeles, CA', address: '1234 BMW Boulevard, Beverly Hills' },
    { id: 'miami', name: 'Miami, FL', address: '5678 Ocean Drive, Miami Beach' },
    { id: 'nyc', name: 'New York, NY', address: '9012 Madison Avenue, Manhattan' },
    { id: 'mobile', name: 'Mobile Service', address: 'We come to you (+$75 fee)' }
  ]

  const additionalServices = [
    { id: 'pickup', name: 'Vehicle Pickup/Delivery', price: '$75' },
    { id: 'loaner', name: 'Loaner Vehicle', price: '$49/day' },
    { id: 'detailed', name: 'Detailed Explanation Session', price: '$25' },
    { id: 'documentation', name: 'Complete Documentation Package', price: '$15' },
    { id: 'warranty', name: 'Extended Support (1 year)', price: '$99' }
  ]

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ]

  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }))
  }

  const handleServiceSelect = (serviceId: string) => {
    setFormData(prev => ({ ...prev, serviceType: serviceId }))
  }

  const handleAdditionalServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      appointmentInfo: {
        ...prev.appointmentInfo,
        additionalServices: prev.appointmentInfo.additionalServices.includes(serviceId)
          ? prev.appointmentInfo.additionalServices.filter(id => id !== serviceId)
          : [...prev.appointmentInfo.additionalServices, serviceId]
      }
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Booking submitted:', formData)
    alert('Booking request submitted! We\'ll contact you shortly to confirm your appointment.')
  }

  const selectedService = services.find(s => s.id === formData.serviceType)

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-16 bg-gray-50 min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Book Your BMW Service</h1>
            <p className="text-xl opacity-90">
              Schedule your professional BMW coding and upgrade service in just a few steps
            </p>
          </div>
        </section>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {step}
                </div>
                <div className={`ml-4 font-medium ${
                  currentStep >= step ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {step === 1 && 'Service'}
                  {step === 2 && 'Vehicle'}
                  {step === 3 && 'Details'}
                  {step === 4 && 'Confirm'}
                </div>
                {step < 4 && (
                  <div className={`flex-1 h-1 mx-4 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Service</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-colors ${
                          formData.serviceType === service.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                          <div className="text-right">
                            <div className="text-xl font-bold text-blue-600">{service.price}</div>
                            <div className="text-sm text-gray-500">{service.duration}</div>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-center">
                              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-sm text-blue-600">+{service.features.length - 3} more features</li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Vehicle Information */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Vehicle Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                                              <select
                        required
                        value={formData.vehicleInfo.year}
                        onChange={(e) => handleInputChange('vehicleInfo', 'year', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        aria-label="Select vehicle year"
                      >
                        <option value="">Select Year</option>
                        {Array.from({ length: 17 }, (_, i) => 2024 - i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">BMW Model *</label>
                      <select
                        required
                        value={formData.vehicleInfo.model}
                        onChange={(e) => handleInputChange('vehicleInfo', 'model', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        aria-label="Select BMW model"
                      >
                        <option value="">Select Model</option>
                        <option value="1-series">1 Series</option>
                        <option value="2-series">2 Series</option>
                        <option value="3-series">3 Series</option>
                        <option value="4-series">4 Series</option>
                        <option value="5-series">5 Series</option>
                        <option value="6-series">6 Series</option>
                        <option value="7-series">7 Series</option>
                        <option value="8-series">8 Series</option>
                        <option value="x1">X1</option>
                        <option value="x2">X2</option>
                        <option value="x3">X3</option>
                        <option value="x4">X4</option>
                        <option value="x5">X5</option>
                        <option value="x6">X6</option>
                        <option value="x7">X7</option>
                        <option value="z4">Z4</option>
                        <option value="i3">i3</option>
                        <option value="i8">i8</option>
                        <option value="ix">iX</option>
                        <option value="m-series">M Series</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        VIN (Optional)
                        <span className="text-sm text-gray-500 ml-2">Helps us prepare for your appointment</span>
                      </label>
                      <input
                        type="text"
                        value={formData.vehicleInfo.vin}
                        onChange={(e) => handleInputChange('vehicleInfo', 'vin', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="17-character VIN"
                        maxLength={17}
                      />
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Selected Service</h3>
                    {selectedService && (
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{selectedService.name}</span>
                          <span className="font-bold text-blue-600">{selectedService.price}</span>
                        </div>
                        <p className="text-sm text-blue-700">{selectedService.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Personal & Appointment Details */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal & Appointment Details</h2>
                  
                  {/* Personal Information */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                              <input
                        type="text"
                        required
                        value={formData.personalInfo.firstName}
                        onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                              <input
                        type="text"
                        required
                        value={formData.personalInfo.lastName}
                        onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                              <input
                        type="email"
                        required
                        value={formData.personalInfo.email}
                        onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                                              <input
                        type="tel"
                        required
                        value={formData.personalInfo.phone}
                        onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                      </div>
                    </div>
                  </div>

                  {/* Appointment Information */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointment Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          required
                          value={formData.appointmentInfo.date}
                          onChange={(e) => handleInputChange('appointmentInfo', 'date', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                        <select
                          required
                          value={formData.appointmentInfo.time}
                          onChange={(e) => handleInputChange('appointmentInfo', 'time', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          aria-label="Select preferred time"
                        >
                          <option value="">Select Time</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                        <select
                          required
                          value={formData.appointmentInfo.location}
                          onChange={(e) => handleInputChange('appointmentInfo', 'location', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          aria-label="Select service location"
                        >
                          <option value="">Select Location</option>
                          {locations.map(location => (
                            <option key={location.id} value={location.id}>{location.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Services (Optional)</h3>
                    <div className="space-y-3">
                      {additionalServices.map(service => (
                        <label key={service.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.appointmentInfo.additionalServices.includes(service.id)}
                            onChange={() => handleAdditionalServiceToggle(service.id)}
                            className="mr-4 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <span className="font-medium text-gray-900">{service.name}</span>
                              <span className="font-semibold text-blue-600">{service.price}</span>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Notes</label>
                    <textarea
                      rows={4}
                      value={formData.specialRequests}
                      onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Any specific requirements, questions, or special requests..."
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Confirm Your Booking</h2>
                  
                  <div className="space-y-6">
                    {/* Service Summary */}
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4">Service Details</h3>
                      {selectedService && (
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Service:</span>
                            <span className="font-medium">{selectedService.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Price:</span>
                            <span className="font-medium">{selectedService.price}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="font-medium">{selectedService.duration}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Vehicle Summary */}
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4">Vehicle Information</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Year:</span>
                          <span className="font-medium">{formData.vehicleInfo.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Model:</span>
                          <span className="font-medium">{formData.vehicleInfo.model}</span>
                        </div>
                        {formData.vehicleInfo.vin && (
                          <div className="flex justify-between">
                            <span>VIN:</span>
                            <span className="font-medium font-mono">{formData.vehicleInfo.vin}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Appointment Summary */}
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4">Appointment Details</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Date:</span>
                          <span className="font-medium">{formData.appointmentInfo.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span className="font-medium">{formData.appointmentInfo.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Location:</span>
                          <span className="font-medium">
                            {locations.find(l => l.id === formData.appointmentInfo.location)?.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Contact Summary */}
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Name:</span>
                          <span className="font-medium">{formData.personalInfo.firstName} {formData.personalInfo.lastName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Email:</span>
                          <span className="font-medium">{formData.personalInfo.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Phone:</span>
                          <span className="font-medium">{formData.personalInfo.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <div className="flex items-start">
                                            <input
                      type="checkbox"
                      required
                      className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      aria-label="Accept terms and conditions"
                    />
                        <div className="text-sm text-gray-700">
                          I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and 
                          <a href="#" className="text-blue-600 hover:underline ml-1">Privacy Policy</a>. 
                          I understand that this is a booking request and final confirmation will be provided by Bimmer Fixes.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Previous
                  </button>
                )}
                
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && !formData.serviceType) ||
                      (currentStep === 2 && (!formData.vehicleInfo.year || !formData.vehicleInfo.model))
                    }
                    className="ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    Confirm Booking
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BookNow
