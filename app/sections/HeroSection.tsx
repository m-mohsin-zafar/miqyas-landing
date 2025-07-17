'use client';

import CTAButton from '@/app/components/CTAButton';
import Image from 'next/image';
import './heroSection.css';
import { getHeroSectionContent } from '../utils/contentLoader';
import { DynamicIcon } from '../utils/iconUtils';
import { FaTshirt } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import { Dictionary } from '../i18n/types';

interface HeroSectionProps {
  dictionary: Dictionary;
}

export default function HeroSection({ dictionary }: HeroSectionProps) {
  // Load content from JSON
  const content = getHeroSectionContent();
  
  return (
    <section 
      aria-label="Hero Section"
      itemScope 
      itemType="https://schema.org/WebPageElement"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-indigo-50 via-blue-100 to-indigo-200 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-900 min-h-[70vh] sm:min-h-[75vh] overflow-hidden">
      {/* Enhanced animated background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-60 sm:w-72 h-60 sm:h-72 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-2xl animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-28 sm:w-36 h-28 sm:h-36 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-xl animate-pulse" />
      </div>
      <div className="flex-1 flex flex-col items-start gap-3 sm:gap-4 md:gap-6 z-10 mt-4 md:mt-0">
        <Image 
          src={content.logo.src} 
          alt={content.logo.alt} 
          width={content.logo.width} 
          height={content.logo.height} 
          className="mb-0 sm:mb-1 w-24 sm:w-28 md:w-32 h-auto" 
          priority 
        />
        <div className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full text-[10px] xs:text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2 shadow-md relative animate-pulse">
          <span className="flex items-center gap-1 sm:gap-1.5 font-bold tracking-wider">
            <DynamicIcon iconName={content.badge.icon} className="inline text-sm sm:text-base text-yellow-300" /> {dictionary.hero.badge}
          </span>
          <div className="absolute -right-1 -top-1 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
        </div>
        <h1 
          itemProp="headline" 
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight drop-shadow-sm sm:drop-shadow-md"
        >
          {dictionary.hero.headline.main}<br />
          <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">{dictionary.hero.headline.highlight}</span>
        </h1>
        <p 
          itemProp="description"
          className="text-xs xs:text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 max-w-xl"
        >
          {dictionary.hero.subheading}
        </p>
        <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-3 flex-wrap">
          {content.ctaButtons.map((button, index) => (
            <CTAButton key={index} primary={button.primary} href={button.href}>
              <span className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm">
                <DynamicIcon iconName={button.icon} className="text-sm sm:text-base" /> 
                {index === 0 ? dictionary.hero.ctaButtons.demo : dictionary.hero.ctaButtons.action}
              </span>
            </CTAButton>
          ))}
        </div>
        <div className="flex items-center gap-1.5 sm:gap-3 mt-4 sm:mt-6 bg-white/80 dark:bg-gray-900/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm sm:shadow-md backdrop-blur-sm">
          <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">{dictionary.hero.compatibility}</span>
          {content.compatibilityIcons.map((icon, index) => (
            <DynamicIcon 
              key={index} 
              iconName={icon.icon} 
              className={`${icon.color} text-base sm:text-lg`} 
              title={icon.title} 
            />
          ))}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center w-full md:w-auto mb-6 md:mb-0 z-10">
        {/* Enhanced product mockup with SVGs and illustrations - simplified for mobile */}
        <div className="relative w-full max-w-sm md:max-w-md">
          <div className="relative w-full aspect-square max-w-xs sm:max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
            {/* Dashboard mockup */}
            <div className="absolute inset-0 p-3 sm:p-4 flex flex-col">
              <div className="h-6 sm:h-8 w-full mb-3 sm:mb-4 flex items-center">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-4 sm:h-6 w-32 sm:w-48 bg-indigo-100 dark:bg-indigo-800 rounded-md mx-auto"></div>
              </div>
              
              <div className="flex flex-col gap-3 sm:gap-4 h-full">
                {/* Dashboard content */}
                <div className="flex gap-3 sm:gap-4 h-1/3">
                  <div className="w-1/2 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <FaTshirt className="text-3xl sm:text-4xl md:text-5xl text-indigo-500 opacity-80" />
                  </div>
                  <div className="w-1/2 flex flex-col gap-1.5 sm:gap-2">
                    <div className="h-2 sm:h-3 w-full bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                    <div className="h-2 sm:h-3 w-4/5 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                    <div className="h-2 sm:h-3 w-2/3 bg-indigo-200 dark:bg-indigo-700 rounded-full mt-1 sm:mt-2"></div>
                  </div>
                </div>
                
                {/* Charts and data visualization */}
                <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-1.5 sm:p-2">
                    <div className="h-2 sm:h-3 w-2/3 bg-gray-200 dark:bg-gray-600 rounded-full mb-1.5 sm:mb-2"></div>
                    <div className="flex items-end h-3/4 gap-0.5 sm:gap-1 pt-1.5 sm:pt-2">
                      <div className="h-full w-1/5 bg-blue-400 dark:bg-blue-600 rounded-t-sm"></div>
                      <div className="h-3/4 w-1/5 bg-blue-400 dark:bg-blue-600 rounded-t-sm"></div>
                      <div className="h-1/2 w-1/5 bg-blue-400 dark:bg-blue-600 rounded-t-sm"></div>
                      <div className="h-4/5 w-1/5 bg-blue-400 dark:bg-blue-600 rounded-t-sm"></div>
                      <div className="h-3/5 w-1/5 bg-blue-400 dark:bg-blue-600 rounded-t-sm"></div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center">
                    <MdCheckCircle className="text-2xl sm:text-3xl md:text-4xl text-green-500" />
                  </div>
                  <div className="col-span-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1.5 sm:p-2 flex flex-col gap-1.5 sm:gap-2">
                    <div className="h-2 sm:h-3 w-1/2 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                    <div className="flex-1 flex gap-1.5 sm:gap-2">
                      <div className="w-1/2 bg-indigo-100 dark:bg-indigo-900/30 rounded flex items-center justify-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-indigo-200 dark:bg-indigo-700"></div>
                      </div>
                      <div className="w-1/2 flex flex-col justify-center gap-1">
                        <div className="h-1.5 sm:h-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                        <div className="h-1.5 sm:h-2 w-4/5 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Human silhouettes and measurements overlay */}
            <div className="absolute inset-0 bg-indigo-50/50 dark:bg-indigo-900/20 backdrop-blur-sm opacity-40 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="relative h-4/5 w-4/5 flex items-center justify-center">
                <div className="relative h-full">
                  <Image 
                    src="/outline_front.svg" 
                    alt="Human body outline front" 
                    width={120} 
                    height={300} 
                    className="h-full w-auto opacity-80"
                  />
                  {/* Measurement indicators */}
                  <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-indigo-500 animate-pulse"></div>
                  <div className="absolute top-2/5 left-0 right-0 h-0.5 bg-blue-500 animate-pulse delayed-pulse-1"></div>
                  <div className="absolute top-3/5 left-0 right-0 h-0.5 bg-indigo-500 animate-pulse delayed-pulse-2"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating badges */}
          <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0 bg-white dark:bg-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg border-2 border-indigo-500 slow-bounce">
            <div className="text-[10px] xs:text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400">98% Accurate</div>
          </div>
          <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 bg-white dark:bg-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg border-2 border-green-500 slow-bounce-delayed">
            <div className="text-[10px] xs:text-xs sm:text-sm font-bold text-green-600 dark:text-green-400">-40% Returns</div>
          </div>
        </div>
      </div>
    </section>
  );
}
