'use client'

import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is BMW coding and why do I need it?",
      answer: "BMW coding involves modifying your vehicle's software to unlock hidden features, customize settings, and enhance functionality. Many BMW features are disabled by default due to regional regulations or marketing strategies. Coding allows you to activate features like welcome lights, comfort access, sport modes, and much more that your car is already capable of but not enabled from the factory."
    },
    {
      question: "Is BMW coding safe for my vehicle?",
      answer: "Absolutely! Our coding services are completely safe when performed by certified professionals. We use official BMW diagnostic tools and only modify software parameters, never hardware. All changes are reversible, and we maintain detailed records of all modifications. Our team has years of experience and follows strict protocols to ensure your vehicle's warranty and functionality remain intact."
    },
    {
      question: "Will coding void my BMW warranty?",
      answer: "No, coding does not void your BMW warranty. We only modify software parameters that don't affect the core functionality of your vehicle. However, if a specific coded feature causes an issue, that particular feature may not be covered. We provide detailed documentation of all changes and can reverse any modification if needed for warranty service."
    },
    {
      question: "How long does the coding process take?",
      answer: "Most coding services take 2-4 hours depending on the package selected. Our Essential Coding package typically takes 2 hours, while the Ultimate Experience package may require up to 4 hours. We also offer express services for simple modifications that can be completed in under an hour. We'll provide an accurate time estimate when you book your appointment."
    },
    {
      question: "Which BMW models do you support?",
      answer: "We support all BMW models from 2008 onwards, including all series (1, 2, 3, 4, 5, 6, 7, 8, X1, X2, X3, X4, X5, X6, X7, Z4, i3, i8, iX). We also work with BMW M models and hybrid vehicles. Our diagnostic tools are regularly updated to support the latest BMW models and software versions."
    },
    {
      question: "Can I reverse the coding changes later?",
      answer: "Yes, all coding changes are completely reversible. We maintain detailed records of your vehicle's original settings before making any modifications. If you ever want to return your BMW to factory settings or remove specific features, we can easily reverse any changes we've made. This flexibility is one of the key advantages of professional BMW coding."
    },
    {
      question: "What's included in your coding packages?",
      answer: "Our packages range from Essential Coding ($299) with basic features like welcome lights and comfort access, to Ultimate Experience ($999) with advanced features like video-in-motion, custom ambient lighting, and full iDrive menu unlock. Each package builds upon the previous one, and we also offer custom coding for specific requests not covered in our standard packages."
    },
    {
      question: "Do you provide mobile coding services?",
      answer: "Yes! We offer mobile coding services where our certified technicians come to your location with professional diagnostic equipment. This service is available throughout our service areas and includes the same quality and warranty as our shop-based services. Mobile service fees vary by location and can be added to any coding package."
    },
    {
      question: "How do I prepare my BMW for coding?",
      answer: "Ensure your BMW has at least a half tank of fuel and the battery is in good condition. Remove any aftermarket accessories that might interfere with diagnostics. If possible, have your BMW serviced recently to avoid any existing fault codes. We'll perform a complete diagnostic scan before coding to ensure your vehicle is in optimal condition."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and cash payments. We also offer financing options for larger packages through our partner providers. Payment is typically required upon completion of services, though we may require a deposit for extensive custom coding projects."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our BMW coding and upgrade services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our BMW coding experts are here to help. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+201002144865"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
              <a
                href="/booking/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
