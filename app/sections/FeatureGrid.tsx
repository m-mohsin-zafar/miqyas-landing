'use client';

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { getFeatureGridContent } from '../utils/contentLoader';
import { DynamicIcon } from '../utils/iconUtils';

export default function FeatureGrid() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  // Load content from JSON
  const { features } = getFeatureGridContent();
  
  return (
    <section className="py-24 px-4 md:px-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-blue-50 dark:from-indigo-900/50 dark:to-blue-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium mb-4 shadow-sm">Why MIQYAS</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white drop-shadow-sm">
            Features That <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Transform</span> Sizing
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-400 mt-6 rounded-full shadow-sm"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mt-6">
            Our AI-powered sizing solution offers a comprehensive suite of features designed to reduce returns, 
            increase conversions, and enhance the customer experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              {hoveredFeature === i && (
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md border border-gray-100 dark:border-gray-700 text-indigo-600 dark:text-indigo-400">
                  <FaPlus size={12} />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <span>Explore All Features</span>
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
