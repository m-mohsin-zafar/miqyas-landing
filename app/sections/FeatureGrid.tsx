'use client';

import { useState, useEffect } from 'react';
import { FaPlus, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { DynamicIcon } from '../utils/iconUtils';
import { Dictionary } from '../i18n/types';

interface FeatureGridProps {
  dictionary: Dictionary;
}

export default function FeatureGrid({ dictionary }: FeatureGridProps) {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  
  // Initialize on client-side only to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Use features from dictionary instead of JSON file
  const features = dictionary.features.allFeatures || [];
  
  return (
    <section className="py-24 px-4 md:px-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-blue-50 dark:from-indigo-900/50 dark:to-blue-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium mb-4 shadow-sm">{dictionary.features.badge || "Why MIQYAS"}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white drop-shadow-sm">
            {dictionary.features.title} <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">{dictionary.features.highlight || "Transform"}</span> {dictionary.features.titleEnd || "Sizing"}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-400 mt-6 rounded-full shadow-sm"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mt-6">
            {dictionary.features.description || "Our AI-powered sizing solution offers a comprehensive suite of features designed to reduce returns, increase conversions, and enhance the customer experience."}
          </p>
        </div>
        
        {/* Mobile view with ProductVisuals-like design */}
        <div className="sm:hidden">
          {/* Mobile feature selector with arrows */}
          <div className="flex items-center justify-center w-full mb-6">
            <button 
              onClick={() => setActiveFeature(prev => (prev === 0 ? features.length - 1 : prev - 1))}
              className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-indigo-600 dark:text-indigo-400 text-xs"
              aria-label="Previous feature"
            >
              <FaArrowLeft />
            </button>
            <div className="flex-1 max-w-[220px] mx-4">
              <div className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${features[activeFeature].color} text-white shadow-sm`}>
                <span className="text-sm">
                  <DynamicIcon iconName={features[activeFeature].icon} />
                </span>
                {features[activeFeature].title}
              </div>
            </div>
            <button 
              onClick={() => setActiveFeature(prev => (prev === features.length - 1 ? 0 : prev + 1))}
              className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-indigo-600 dark:text-indigo-400 text-xs"
              aria-label="Next feature"
            >
              <FaArrowRight />
            </button>
          </div>
          
          {/* Active feature card for mobile */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 border border-gray-100 dark:border-gray-700 mb-6">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${features[activeFeature].color} flex items-center justify-center text-white shadow-md mb-5`}>
              <span className="text-xl">
                <DynamicIcon iconName={features[activeFeature].icon} />
              </span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
              {features[activeFeature].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {features[activeFeature].desc}
            </p>
          </div>
          
          {/* Feature indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-2 h-2 rounded-full transition-all ${activeFeature === index ? `bg-gradient-to-r ${features[index].color} w-4` : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop grid layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group relative"
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Animated gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 rounded-2xl -z-10 blur-sm transition-opacity duration-300`}></div>
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-xl">
                  <DynamicIcon iconName={feature.icon} />
                </span>
              </div>
              
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300">
                {feature.desc}
              </p>
              
              {/* Hover animation */}
              {hoveredFeature === i && isMounted && (
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md border border-gray-100 dark:border-gray-700 text-indigo-600 dark:text-indigo-400">
                  <FaPlus size={12} />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <span>{dictionary.features.exploreAllFeatures || "Explore All Features"}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16669 10H15.8334" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16669L15.8333 10.0001L10 15.8334" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
