'use client';

import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { getHowItWorksContent } from '@/lib/utils/content/content-loader';
import { DynamicIcon } from '@/lib/utils/icons/dynamic-icon';
import { Dictionary } from '@/lib/i18n';

interface HowItWorksProps {
  dictionary: Dictionary;
}

export default function HowItWorks({ dictionary }: HowItWorksProps) {
  // Load content from JSON for icons only
  const content = getHowItWorksContent();
  const [activeStep, setActiveStep] = useState(0);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-indigo-50/70 dark:from-gray-900 dark:to-indigo-950/40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-60 h-60 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block">
            <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium mb-3">
              {dictionary.howItWorks.title.badge}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {dictionary.howItWorks.title.heading.split(dictionary.howItWorks.title.highlight).map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                    {dictionary.howItWorks.title.highlight}
                  </span>
                )}
              </React.Fragment>
            ))}
          </h2>
        </div>
        
        {/* Mobile view with ProductVisuals-like design */}
        <div className="md:hidden">
          {/* Mobile step selector with arrows */}
          <div className="flex items-center justify-center w-full mb-6">
            <button 
              onClick={() => setActiveStep(prev => (prev === 0 ? dictionary.howItWorks.steps.length - 1 : prev - 1))}
              className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-indigo-600 dark:text-indigo-400 text-xs"
              aria-label="Previous step"
            >
              <FaArrowLeft />
            </button>
            <div className="flex-1 max-w-[200px] mx-4">
              <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-sm">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white text-xs">
                  {dictionary.howItWorks.steps[activeStep].number}
                </span>
                {dictionary.howItWorks.steps[activeStep].title}
              </div>
            </div>
            <button 
              onClick={() => setActiveStep(prev => (prev === dictionary.howItWorks.steps.length - 1 ? 0 : prev + 1))}
              className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-indigo-600 dark:text-indigo-400 text-xs"
              aria-label="Next step"
            >
              <FaArrowRight />
            </button>
          </div>
          
          {/* Active step card for mobile */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 border border-gray-100 dark:border-gray-700 mb-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-500 dark:to-blue-400 rounded-full flex items-center justify-center shadow-md mr-4">
                <DynamicIcon iconName={content.steps[activeStep].icon} className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {dictionary.howItWorks.steps[activeStep].title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {dictionary.howItWorks.steps[activeStep].description}
            </p>
          </div>
          
          {/* Step indicators */}
          <div className="flex justify-center gap-2 mb-6">
            {dictionary.howItWorks.steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-2 h-2 rounded-full transition-all ${activeStep === index ? 'bg-indigo-600 w-4' : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop view with centered grid layout */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {dictionary.howItWorks.steps.map((step, index) => (
              <div 
                key={index} 
                className="w-full max-w-[260px]"
              >
                <div className="group bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md p-4 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {/* Compact header with number and icon */}
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 flex-shrink-0 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-2 shadow-sm">
                      {step.number}
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-500 dark:to-blue-400 rounded-full flex items-center justify-center shadow-sm ml-auto">
                      <DynamicIcon iconName={content.steps[index].icon} className="text-white text-lg" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">{step.description}</p>
                  
                  {/* Subtle indicator */}
                  <div className="mt-3 flex justify-end">
                    <div className="text-indigo-500 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Summary and CTA */}
        <div className="mt-10 md:mt-14 text-center max-w-2xl mx-auto">
          <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg mb-6">
            {dictionary.howItWorks.summary}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            {dictionary.howItWorks.cta || 'Learn More'}
            <BsArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
