"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const CarDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock car data - in a real app, this would come from props or API based on ID
  const car = {
    id: 1,
    name: "BMW M3 Competition",
    model: "2023",
    price: "From $299/day",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    description:
      "The BMW M3 Competition represents the pinnacle of sports sedan engineering. With our professional coding and upgrades, this vehicle delivers an unmatched driving experience that combines luxury with track-ready performance.",
    specs: {
      engine: "3.0L Twin-Turbo I6",
      power: "503 HP @ 6,250 RPM",
      torque: "479 lb-ft @ 2,750 RPM",
      acceleration: "3.8s 0-60mph",
      topSpeed: "180 mph",
      transmission: "8-Speed M Steptronic",
      drivetrain: "Rear-Wheel Drive",
      fuelEconomy: "16/23 mpg",
      weight: "3,871 lbs",
    },
    features: [
      "M Performance Package",
      "Carbon Fiber Trim",
      "Track Mode",
      "Launch Control",
      "Adaptive M Suspension",
      "M Sport Brakes",
      "Harman Kardon Audio",
      "Heated Seats",
      "Wireless Charging",
      "Head-Up Display",
    ],
    codingUpgrades: [
      "Welcome Light Sequence",
      "Digital Speed Display",
      "Launch Control Activation",
      "Sport+ Mode Unlock",
      "Exhaust Sound Enhancement",
      "M-Power Display Features",
      "Custom Drive Mode Settings",
      "Video in Motion",
      "Comfort Access Programming",
      "Advanced Instrument Cluster",
    ],
    included: [
      "Full tank of premium fuel",
      "Comprehensive insurance",
      "GPS navigation system",
      "Bluetooth connectivity",
      "USB charging ports",
    ],
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-16">
        {/* Hero Section with Image Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div>
                <div className="aspect-w-16 aspect-h-12 mb-4">
                  <div className="w-full h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg
                        className="w-24 h-24 mx-auto mb-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                      </svg>
                      <p className="text-xl font-semibold">{car.name}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {car.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-w-16 aspect-h-12">
                      <div className="w-full h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Car Info */}
              <div>
                <div className="mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {car.model}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {car.name}
                </h1>
                <p className="text-2xl font-bold text-blue-600 mb-6">
                  {car.price}
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {car.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">
                      {car.specs.power.split(" ")[0]}
                    </div>
                    <div className="text-sm text-gray-600">Horsepower</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">
                      {car.specs.acceleration}
                    </div>
                    <div className="text-sm text-gray-600">0-60 mph</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">
                      {car.specs.topSpeed}
                    </div>
                    <div className="text-sm text-gray-600">Top Speed</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">
                      {car.specs.drivetrain.split("-")[0]}
                    </div>
                    <div className="text-sm text-gray-600">Drive Type</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link
                    href="/book-now"
                    className="flex-1 bg-blue-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Book This Vehicle
                  </Link>
                  <Link
                    href="/booking/contact"
                    className="flex-1 border-2 border-blue-600 text-blue-600 text-center py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Ask Questions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information Tabs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-8">
              {[
                { id: "overview", name: "Overview" },
                { id: "specs", name: "Specifications" },
                { id: "features", name: "Features" },
                { id: "coding", name: "Coding Upgrades" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    activeTab === tab.id
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === "overview" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      What{`'`}s Included
                    </h3>
                    <ul className="space-y-3">
                      {car.included.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-green-500 mr-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Key Highlights
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">
                          Performance Focused
                        </h4>
                        <p className="text-blue-700">
                          Track-ready performance with professional coding
                          enhancements
                        </p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">
                          Fully Customized
                        </h4>
                        <p className="text-green-700">
                          Extensive BMW coding unlocks hidden features and
                          capabilities
                        </p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">
                          Premium Experience
                        </h4>
                        <p className="text-purple-700">
                          Luxury meets performance in this expertly tuned
                          machine
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "specs" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Object.entries(car.specs).map(([key, value]) => (
                    <div key={key} className="p-6 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 capitalize mb-2">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </h4>
                      <p className="text-lg text-blue-600 font-semibold">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "features" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {car.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <svg
                        className="w-6 h-6 text-blue-600 mr-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="font-medium text-gray-900">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "coding" && (
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Professional BMW Coding Upgrades
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      This vehicle has been professionally coded to unlock
                      hidden BMW features and enhance the driving experience.
                      All modifications are safe, reversible, and do not affect
                      the vehicle warranty.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {car.codingUpgrades.map((upgrade, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-blue-50 rounded-lg"
                      >
                        <svg
                          className="w-6 h-6 text-blue-600 mr-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                        <span className="font-medium text-gray-900">
                          {upgrade}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related Vehicles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="text-center">
              <Link
                href="/fleet/listing"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                View All Vehicles
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetails;
