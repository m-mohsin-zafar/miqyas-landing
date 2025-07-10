'use client';

import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { getHowItWorksContent } from '../utils/contentLoader';
import { DynamicIcon } from '../utils/iconUtils';

export default function HowItWorks() {
  // Load content from JSON
  const content = getHowItWorksContent();
  
  return (
    <section className="py-24 px-4 md:px-16 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-60 h-60 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-blue-50 dark:from-indigo-900/50 dark:to-blue-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium mb-4 shadow-sm">{content.title.badge}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white drop-shadow-sm">
            How <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">{content.title.highlight}</span> {content.title.heading.replace(`${content.title.highlight} `, '')}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-400 mt-6 rounded-full shadow-sm"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 mt-20 relative">
          
          {content.steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step */}
              <div className="w-full md:w-1/4 flex flex-col items-center text-center relative">
                <div className="absolute -top-12 text-6xl font-black bg-gradient-to-r from-indigo-200 to-blue-100 dark:from-indigo-800 dark:to-indigo-600 bg-clip-text text-transparent select-none z-0">{step.number}</div>
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-500 dark:to-blue-400 rounded-full p-4 mb-6 shadow-lg flex items-center justify-center z-10 ring-8 ring-white dark:ring-gray-900 transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
                  <DynamicIcon iconName={step.icon} className="text-white text-2xl" />
                </div>
                <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-indigo-800 to-blue-700 dark:from-indigo-400 dark:to-blue-300 bg-clip-text text-transparent relative z-10">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">{step.description}</p>
              </div>
              
              {/* Arrow for mobile - only between steps, not after the last */}
              {index < content.steps.length - 1 && (
                <div className="md:hidden w-full flex justify-center my-4">
                  <div className="h-16 w-1 bg-gradient-to-b from-indigo-400 to-blue-500 dark:from-indigo-600 dark:to-blue-400 rounded-full"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Additional text or summary */}
        <div className="mt-20 text-center max-w-2xl mx-auto relative z-10">
          <p className="text-gray-700 dark:text-gray-200 text-lg">
            Our simple 4-step process ensures accurate sizing, reduces returns, and creates happy customers with minimal effort.
          </p>
        </div>
      </div>
    </section>
  );
}
