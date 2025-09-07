import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const About = () => {
  const team = [
    {
      name: "Michael Rodriguez",
      role: "Founder & Lead BMW Specialist",
      experience: "15+ years BMW experience",
      certifications: [
        "BMW Master Technician",
        "ISTA/D Certified",
        "E-Sys Expert",
      ],
      bio: "Michael founded Bimmer Fixes with a passion for unlocking the hidden potential in every BMW. With over 15 years of BMW-specific experience, he leads our team in delivering exceptional coding and upgrade services.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Sarah Chen",
      role: "Senior Coding Specialist",
      experience: "12+ years BMW coding",
      certifications: [
        "BMW Software Specialist",
        "ICOM Certified",
        "NCS Expert",
      ],
      bio: "Sarah specializes in complex BMW coding projects and custom modifications. Her expertise in BMW software systems ensures safe and effective upgrades for all BMW models.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "David Thompson",
      role: "Performance Tuning Expert",
      experience: "10+ years performance tuning",
      certifications: ["BMW M Performance Certified", "Dyno Tuning Specialist"],
      bio: "David focuses on performance optimization and M-series vehicles. His track background brings real-world performance expertise to every tuning project.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Lisa Johnson",
      role: "Customer Experience Manager",
      experience: "8+ years automotive service",
      certifications: [
        "BMW Service Advisor Certified",
        "Customer Relations Expert",
      ],
      bio: "Lisa ensures every customer receives exceptional service and support throughout their BMW transformation journey. She coordinates all aspects of the customer experience.",
      image: "/api/placeholder/300/300",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to unlock BMW potential",
    },
    {
      year: "2019",
      title: "100+ Vehicles Coded",
      description: "Reached first major milestone in BMW coding services",
    },
    {
      year: "2020",
      title: "Expanded Services",
      description: "Added vehicle rental and mobile coding services",
    },
    {
      year: "2021",
      title: "Multiple Locations",
      description: "Opened service centers in LA, Miami, and NYC",
    },
    {
      year: "2022",
      title: "500+ Happy Customers",
      description: "Achieved 500+ successful BMW transformations",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Named top BMW coding service provider",
    },
    {
      year: "2024",
      title: "Innovation Continues",
      description: "Leading BMW coding technology and techniques",
    },
  ];

  const values = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in every BMW coding project, ensuring safe and effective modifications.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Safety First",
      description:
        "All modifications are warranty-safe and fully reversible, protecting your BMW investment.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "We stay at the forefront of BMW technology, constantly updating our methods and capabilities.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We provide lifetime support for all our coding services.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Bimmer Fixes
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Passionate BMW specialists dedicated to unlocking your vehicle
              {`'`}s hidden potential through professional coding, upgrades, and
              exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            At Bimmer Fixes, we believe every BMW has untapped potential waiting
            to be unlocked. Our mission is to provide professional, safe, and
            innovative BMW coding services that transform your driving
            experience while maintaining your vehicle{`'`}s integrity and
            warranty.
          </p>
          <div className="bg-blue-50 rounded-2xl p-8">
            <blockquote className="text-2xl font-semibold text-blue-900 italic">
              {`"`}We don{`'`}t just modify BMWs – we unlock their true
              personality and potential.{`"`}
            </blockquote>
            <cite className="text-blue-700 font-medium mt-4 block">
              - Michael Rodriguez, Founder
            </cite>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From a small startup to the leading BMW coding service provider
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-blue-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              BMW specialists with decades of combined experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {member.experience}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Certifications:
                  </h4>
                  <div className="space-y-1">
                    {member.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Bimmer Fixes?
            </h2>
            <p className="text-xl opacity-90">
              Experience the difference that expertise and passion make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">BMWs Successfully Modified</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Available Coding Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-lg">Average Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Warranty Safe Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your BMW?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of satisfied customers who have unlocked their BMW
            {`'`}s true potential with Bimmer Fixes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-now"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Your Service
            </Link>
            <Link
              href="/booking/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
