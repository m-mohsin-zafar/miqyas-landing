"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/common";
import { FaQuoteLeft, FaStar, FaFileAlt, FaAward, FaAngleRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FcBullish, FcApproval, FcShipped, FcGlobe } from 'react-icons/fc';
import { Dictionary } from '@/lib/i18n';

interface SocialProofProps {
  dictionary: Dictionary;
}

export default function SocialProof({ dictionary }: SocialProofProps) {
  const socialProof = dictionary.socialProof;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Get testimonials from dictionary
  const testimonials = socialProof.testimonials.items;

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
    <section id="social-proof" className="py-12 md:py-20 px-4 md:px-16 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 mb-3 bg-gradient-to-r from-indigo-100 to-blue-50 dark:from-indigo-900/50 dark:to-blue-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-xs md:text-sm font-medium shadow-sm">
            {socialProof.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{socialProof.heading}</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {socialProof.subheading}
          </p>
        </div>

        {/* Stats Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-16">
          {socialProof.stats.map((stat, index) => {
            // Define icons and colors based on index
            const icons = [
              { small: <FcBullish size={30} className="text-indigo-500 sm:hidden" />, large: <FcBullish size={40} className="text-indigo-500 hidden sm:block" />, color: "text-indigo-600 dark:text-indigo-400" },
              { small: <FcApproval size={30} className="text-green-500 sm:hidden" />, large: <FcApproval size={40} className="text-green-500 hidden sm:block" />, color: "text-green-600 dark:text-green-400" },
              { small: <FcShipped size={30} className="text-blue-500 sm:hidden" />, large: <FcShipped size={40} className="text-blue-500 hidden sm:block" />, color: "text-blue-600 dark:text-blue-400" },
              { small: <FcGlobe size={30} className="text-purple-500 sm:hidden" />, large: <FcGlobe size={40} className="text-purple-500 hidden sm:block" />, color: "text-purple-600 dark:text-purple-400" }
            ];
            
            return (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-center mb-2 md:mb-3">
                  {icons[index].small}
                  {icons[index].large}
                </div>
                <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center ${icons[index].color}`}>{stat.value}</h3>
                <p className="text-center text-gray-600 dark:text-gray-300 mt-1 md:mt-2 text-xs sm:text-sm md:text-base">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-12 md:mb-20 relative">
          <div className="text-center mb-5 md:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2">{socialProof.testimonials.heading}</h3>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              {/* Testimonial Card */}
              <div 
                className={`bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-5 sm:p-6 md:p-8 lg:p-12 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden relative bg-gray-200 flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                      {/* This would be replaced with actual avatar images */}
                      <span className="text-white text-xl sm:text-2xl font-bold">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <FaQuoteLeft className="text-indigo-200 dark:text-indigo-700 mb-2 md:mb-4" size={24} />
                    <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 text-gray-700 dark:text-gray-200 italic">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <p className="font-bold text-base sm:text-lg">{testimonials[currentTestimonial].name}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">{testimonials[currentTestimonial].title}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`${i < testimonials[currentTestimonial].rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                            size={16} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex justify-center mt-4 md:mt-6 gap-3 md:gap-4">
                <button 
                  onClick={handlePrevTestimonial}
                  className="p-1.5 md:p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-indigo-50 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <FiChevronLeft size={18} className="text-indigo-600 dark:text-indigo-400 sm:hidden" />
                  <FiChevronLeft size={24} className="text-indigo-600 dark:text-indigo-400 hidden sm:block" />
                </button>
                
                <div className="flex items-center gap-1.5 md:gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-2 md:h-3 rounded-full transition-all ${
                        currentTestimonial === index 
                          ? 'bg-indigo-600 dark:bg-indigo-400 w-5 md:w-6' 
                          : 'bg-gray-300 dark:bg-gray-600 w-2 md:w-3'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={handleNextTestimonial}
                  className="p-1.5 md:p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-indigo-50 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <FiChevronRight size={18} className="text-indigo-600 dark:text-indigo-400 sm:hidden" />
                  <FiChevronRight size={24} className="text-indigo-600 dark:text-indigo-400 hidden sm:block" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Partners & Logo Wall */}
        <div className="mb-10 md:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-5 md:mb-8">{socialProof.partners.heading}</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="w-full sm:w-32 h-12 sm:h-14 md:w-36 md:h-16 lg:w-40 lg:h-20 bg-white dark:bg-gray-800 rounded-md flex items-center justify-center p-2 sm:p-3 md:p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 font-semibold text-xs sm:text-sm md:text-base">LOGO {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press and Research Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-10 md:mb-16">
          {/* Press Mentions */}
          <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
              <span className="bg-indigo-100 dark:bg-indigo-900 p-1.5 md:p-2 rounded-lg text-base md:text-lg">📰</span>
              {socialProof.press.heading}
            </h3>
            
            <div className="flex flex-wrap gap-2 md:gap-4 items-center">
              <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{socialProof.press.featuredIn}</span>
              {socialProof.press.publications.map((name, i) => (
                <div 
                  key={i} 
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 text-xs md:text-sm font-medium"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
          
          {/* Research & Awards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Research Card */}
            <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <FaFileAlt className="text-blue-500" size={16} />
                  <h3 className="font-bold text-base md:text-lg">{socialProof.research.heading}</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {socialProof.research.description}
                </p>
              </div>
              <Button variant="outline" className="mt-3 w-full text-xs md:text-sm py-1 h-8 md:h-9">
                {socialProof.research.buttonText}
              </Button>
            </div>
            
            {/* Awards Card */}
            <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <FaAward className="text-yellow-500" size={16} />
                  <h3 className="font-bold text-base md:text-lg">{socialProof.awards.heading}</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {socialProof.awards.description}
                </p>
              </div>
              <Button variant="outline" className="mt-3 w-full text-xs md:text-sm py-1 h-8 md:h-9">
                {socialProof.awards.buttonText}
              </Button>
            </div>
          </div>
        </div>
        
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 lg:p-12 text-center text-white">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">{socialProof.cta.heading}</h3>
          <p className="mb-5 md:mb-8 text-indigo-100 dark:text-indigo-200 text-sm md:text-base">{socialProof.cta.subheading}</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <CTAButton primary href="#contact">
              {socialProof.cta.primaryButton}
            </CTAButton>
            <CTAButton href="#case-studies">
              {socialProof.cta.secondaryButton}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
