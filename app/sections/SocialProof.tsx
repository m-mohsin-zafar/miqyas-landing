"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import { Button } from "../components/ui/button";
import CTAButton from "../components/CTAButton";
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { FaStar, FaQuoteLeft, FaAward, FaFileAlt } from 'react-icons/fa';
import { FcBullish, FcApproval, FcShipped, FcGlobe } from 'react-icons/fc';

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sample testimonials data
  const testimonials = [
    {
      quote: "Returns dropped by 40% since implementing MIQYAS. The integration was seamless and our customers love the accuracy.",
      name: "Sarah Johnson",
      title: "E-commerce Manager, FashionHub",
      rating: 5,
      image: "/placeholder-avatar-1.png"
    },
    {
      quote: "Our conversion rates have gone up by 23% in just three months. MIQYAS has been a game changer for our online store.",
      name: "Michael Chen",
      title: "CTO, StyleBoutique",
      rating: 5,
      image: "/placeholder-avatar-2.png"
    },
    {
      quote: "The data insights are incredible. We've reduced our carbon footprint by cutting down on returns and our customers are happier.",
      name: "Jessica Williams",
      title: "Sustainability Lead, EcoWear",
      rating: 4,
      image: "/placeholder-avatar-3.png"
    }
  ];

  // Navigate testimonials
  const handleNextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const handlePrevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextTestimonial();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentTestimonial]);

  return (
    <section id="social-proof" className="py-20 px-4 md:px-16 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Results That Speak For Themselves</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied retailers and shoppers who have transformed their sizing experience
          </p>
        </div>

        {/* Stats Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center mb-3">
              <FcBullish size={40} className="text-indigo-500" />
            </div>
            <h3 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400">87%</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2">Reduction in return rates</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center mb-3">
              <FcApproval size={40} className="text-green-500" />
            </div>
            <h3 className="text-4xl font-bold text-center text-green-600 dark:text-green-400">98.5%</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2">Size recommendation accuracy</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center mb-3">
              <FcShipped size={40} className="text-blue-500" />
            </div>
            <h3 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400">23%</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2">Increase in conversions</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center mb-3">
              <FcGlobe size={40} className="text-purple-500" />
            </div>
            <h3 className="text-4xl font-bold text-center text-purple-600 dark:text-purple-400">45+</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2">Countries reached</p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-20 relative">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">What Our Partners Say</h3>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              {/* Testimonial Card */}
              <div 
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden relative bg-gray-200 flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                      {/* This would be replaced with actual avatar images */}
                      <span className="text-white text-2xl font-bold">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <FaQuoteLeft className="text-indigo-200 dark:text-indigo-700 mb-4" size={32} />
                    <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-200 italic">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                        <p className="text-gray-500 dark:text-gray-400">{testimonials[currentTestimonial].title}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`${i < testimonials[currentTestimonial].rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                            size={20} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex justify-center mt-6 gap-4">
                <button 
                  onClick={handlePrevTestimonial}
                  className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-indigo-50 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <FiChevronLeft size={24} className="text-indigo-600 dark:text-indigo-400" />
                </button>
                
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentTestimonial === index 
                          ? 'bg-indigo-600 dark:bg-indigo-400 w-6' 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={handleNextTestimonial}
                  className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-indigo-50 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <FiChevronRight size={24} className="text-indigo-600 dark:text-indigo-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Partners & Logo Wall */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Trusted By Leading Brands</h3>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="w-32 h-16 md:w-40 md:h-20 bg-white dark:bg-gray-800 rounded-md flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 font-semibold">LOGO {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press and Research Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Press Mentions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-lg">📰</span>
              Press Mentions
            </h3>
            
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Featured in:</span>
              {["TechCrunch", "Vogue", "WWD", "Forbes"].map((name, i) => (
                <div 
                  key={i} 
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 text-sm font-medium"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
          
          {/* Research & Awards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Research Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FaFileAlt className="text-blue-500" size={20} />
                  <h3 className="font-bold">Research</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  92% accuracy in sizing prediction across all body types
                </p>
              </div>
              <Button variant="outline" className="mt-3 w-full text-sm py-1">
                Download Whitepaper
              </Button>
            </div>
            
            {/* Awards Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FaAward className="text-yellow-500" size={20} />
                  <h3 className="font-bold">Awards</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  RetailTech Innovation Award 2023
                </p>
              </div>
              <Button variant="outline" className="mt-3 w-full text-sm py-1">
                See All Awards
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your sizing experience?</h3>
          <p className="mb-8 text-indigo-100 dark:text-indigo-200">Join the retailers who have increased sales and customer satisfaction with MIQYAS</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <CTAButton primary href="#contact">
              Request Demo
            </CTAButton>
            <CTAButton href="#case-studies">
              View Case Studies
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
