'use client';

import React, { useState } from 'react';
import { 
  FaBoxOpen, FaChartLine, FaShoppingBag, FaTshirt,
  FaSmile, FaSearch, FaExchangeAlt
} from 'react-icons/fa';
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from 'react-icons/hi';
import { Dictionary } from '../i18n/types';

type AudienceSplitProps = {
  dictionary: Dictionary;
};

export default function AudienceSplit({ dictionary }: AudienceSplitProps) {
  const [activeTab, setActiveTab] = useState('retailers');
  const { audienceSplit } = dictionary;

  // Define icons for benefits
  const retailerIcons = [<FaBoxOpen className="text-white" />, <FaChartLine className="text-white" />, <FaShoppingBag className="text-white" />];
  const shopperIcons = [<FaSmile className="text-white" />, <FaSearch className="text-white" />, <FaTshirt className="text-white" />];

  // Map retailer benefits with icons
  const retailerBenefits = audienceSplit.retailerBenefits.map((benefit, index) => ({
    icon: retailerIcons[index],
    title: benefit.title,
    description: benefit.description
  }));

  // Map shopper benefits with icons
  const shopperBenefits = audienceSplit.shopperBenefits.map((benefit, index) => ({
    icon: shopperIcons[index],
    title: benefit.title,
    description: benefit.description
  }));
  
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-indigo-50/50 dark:from-gray-900 dark:to-indigo-950/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-8 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-40 right-8 sm:right-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-r from-indigo-100 to-blue-50 dark:from-indigo-900/50 dark:to-blue-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 shadow-sm">{audienceSplit.title.badge}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:font-extrabold text-center text-gray-900 dark:text-white drop-shadow-sm">
            {audienceSplit.title.heading.split(audienceSplit.title.highlight).map((part, i, arr) => (
              <React.Fragment key={`heading-part-${i}`}>
                {part}
                {i < arr.length - 1 && (
                  <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                    {audienceSplit.title.highlight}
                  </span>
                )}
              </React.Fragment>
            ))}
          </h2>
          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-indigo-600 to-blue-400 mt-4 sm:mt-6 rounded-full shadow-sm"></div>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 text-center max-w-3xl mt-4 sm:mt-6">
            {audienceSplit.description}
          </p>
        </div>
        
        {/* Tab navigation - more compact for mobile */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          <button 
            onClick={() => setActiveTab('retailers')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === 'retailers' 
              ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md' 
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <HiOutlineShoppingBag className="text-xs sm:text-sm" />
            <span className="whitespace-nowrap">{audienceSplit.tabs.retailers}</span>
          </button>
          <button 
            onClick={() => setActiveTab('shoppers')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === 'shoppers' 
              ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md' 
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <HiOutlineShoppingCart className="text-xs sm:text-sm" />
            <span className="whitespace-nowrap">{audienceSplit.tabs.shoppers}</span>
          </button>
        </div>
        
        {/* Content section - enhanced mobile layout */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Left content - Benefits with improved mobile sizing */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8">
              {activeTab === 'retailers' ? 
                audienceSplit.retailerHeading : 
                audienceSplit.shopperHeading}
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {(activeTab === 'retailers' ? retailerBenefits : shopperBenefits).map((benefit, i) => (
                <div key={i} className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-md sm:shadow-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4 sm:pt-6">
              <a href="#contact" className="inline-block">
                <button className="px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-xs sm:text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center gap-1.5 sm:gap-2">
                  {activeTab === 'retailers' ? audienceSplit.retailerCta : audienceSplit.shopperCta} 
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
                    <path d="M4.16669 10H15.8334" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 4.16669L15.8333 10.0001L10 15.8334" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          
          {/* Right content - Visual with improved mobile optimization */}
          <div className="w-full lg:w-1/2 mt-5 sm:mt-6 md:mt-0">
            {activeTab === 'retailers' ? (
              <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl">
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 text-[10px] xs:text-xs font-semibold rounded-full">
                  Retailer Dashboard
                </div>
                
                {/* Dashboard visualization - Enhanced mobile optimization */}
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {/* Stats row - More compact for mobile */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 md:p-4 shadow-sm sm:shadow">
                      <div className="text-[10px] xs:text-xs text-gray-500 dark:text-gray-400 mb-0.5 sm:mb-1">Return Rate</div>
                      <div className="flex items-end gap-1 sm:gap-2">
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-green-600 dark:text-green-500">-72%</span>
                        <span className="text-[10px] xs:text-xs text-green-600 dark:text-green-500 pb-0.5 sm:pb-1">↓</span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 md:p-4 shadow-sm sm:shadow">
                      <div className="text-[10px] xs:text-xs text-gray-500 dark:text-gray-400 mb-0.5 sm:mb-1">Conversion</div>
                      <div className="flex items-end gap-1 sm:gap-2">
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-indigo-600 dark:text-indigo-500">+35%</span>
                        <span className="text-[10px] xs:text-xs text-indigo-600 dark:text-indigo-500 pb-0.5 sm:pb-1">↑</span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 md:p-4 shadow-sm sm:shadow">
                      <div className="text-[10px] xs:text-xs text-gray-500 dark:text-gray-400 mb-0.5 sm:mb-1">Customers</div>
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">12.5k</div>
                    </div>
                  </div>
                  
                  {/* Chart - Further optimized for mobile */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 md:p-4 shadow-sm sm:shadow">
                    <div className="mb-2 sm:mb-3 md:mb-4 flex justify-between items-center">
                      <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Size Distribution</div>
                      <div className="text-[10px] xs:text-xs text-gray-500 dark:text-gray-400">Last 30 days</div>
                    </div>
                    <div className="flex items-end h-20 sm:h-24 md:h-32 gap-1 sm:gap-2">
                      <div className="flex-1 flex flex-col items-center">
                        <div className="h-[15%] w-full bg-indigo-300 dark:bg-indigo-700 rounded-t-sm"></div>
                        <span className="text-[10px] xs:text-xs mt-1 sm:mt-2 text-gray-500 dark:text-gray-400">XS</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div className="h-[30%] w-full bg-indigo-400 dark:bg-indigo-600 rounded-t-sm"></div>
                        <span className="text-[10px] xs:text-xs mt-1 sm:mt-2 text-gray-500 dark:text-gray-400">S</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div className="h-[80%] w-full bg-indigo-500 dark:bg-indigo-500 rounded-t-sm"></div>
                        <span className="text-[10px] xs:text-xs mt-1 sm:mt-2 text-gray-500 dark:text-gray-400">M</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div className="h-[60%] w-full bg-indigo-600 dark:bg-indigo-400 rounded-t-sm"></div>
                        <span className="text-[10px] xs:text-xs mt-1 sm:mt-2 text-gray-500 dark:text-gray-400">L</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div className="h-[20%] w-full bg-indigo-700 dark:bg-indigo-300 rounded-t-sm"></div>
                        <span className="text-[10px] xs:text-xs mt-1 sm:mt-2 text-gray-500 dark:text-gray-400">XL</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product row - Improved mobile layout */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 md:p-4 shadow-sm sm:shadow">
                    <div className="mb-2 sm:mb-3 text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Top Products</div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex justify-between items-center p-1.5 sm:p-2 bg-gray-50 dark:bg-gray-700/50 rounded">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-blue-100 dark:bg-blue-900 rounded-sm"></div>
                          <span className="text-[10px] xs:text-xs sm:text-sm text-gray-900 dark:text-gray-200">Women's Fitted Tee</span>
                        </div>
                        <div className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-200">98%</div>
                      </div>
                      <div className="flex justify-between items-center p-1.5 sm:p-2 bg-gray-50 dark:bg-gray-700/50 rounded">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-indigo-100 dark:bg-indigo-900 rounded-sm"></div>
                          <span className="text-[10px] xs:text-xs sm:text-sm text-gray-900 dark:text-gray-200">Men's Slim Jeans</span>
                        </div>
                        <div className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-200">95%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl">
                {/* Shopper Experience - Further optimized for tiny mobile screens */}
                <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[9/16] bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden border-4 sm:border-6 md:border-8 border-white dark:border-gray-700">
                  {/* Mobile app mockup - better small screen sizing */}
                  <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 md:h-12 bg-indigo-600 flex items-center justify-between px-3 sm:px-4">
                    <div className="text-white text-xs sm:text-sm font-semibold">MIQYAS</div>
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white opacity-70"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white opacity-70"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                  
                  {/* App content - Better scaling for tiny screens */}
                  <div className="pt-10 sm:pt-12 md:pt-16 px-3 sm:px-4 h-full">
                    <div className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">Find Your Perfect Size</div>
                    
                    <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-3 sm:mb-4 md:mb-6">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 sm:p-3 md:p-4">
                        <div className="flex justify-between items-center mb-1 sm:mb-2">
                          <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Your Measurements</div>
                          <div className="text-[10px] xs:text-xs text-indigo-600 dark:text-indigo-400">Edit</div>
                        </div>
                        <div className="grid grid-cols-2 gap-1 sm:gap-2 text-[10px] xs:text-xs sm:text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">Height</span>
                            <span className="text-gray-900 dark:text-white">175cm</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">Weight</span>
                            <span className="text-gray-900 dark:text-white">68kg</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">Chest</span>
                            <span className="text-gray-900 dark:text-white">92cm</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">Waist</span>
                            <span className="text-gray-900 dark:text-white">76cm</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 sm:p-3 md:p-4">
                        <div className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-1.5 sm:mb-2 md:mb-3">Product: Women's Classic T-shirt</div>
                        <div className="flex justify-center items-center py-3 sm:py-4 md:py-6">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">M</div>
                              <div className="text-[8px] xs:text-[10px] sm:text-xs text-gray-700 dark:text-gray-300">98% match</div>
                            </div>
                          </div>
                        </div>
                        <div className="text-[10px] xs:text-xs sm:text-sm text-center text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
                          Perfect fit based on your measurements
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 sm:gap-3">
                      <button 
                        className="flex-1 bg-indigo-600 text-white rounded-full py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm font-medium"
                        aria-label="Add to Cart"
                      >
                        Add to Cart
                      </button>
                      <button 
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-indigo-100 dark:bg-gray-700 rounded-full flex items-center justify-center"
                        aria-label="View size alternatives"
                        title="View size alternatives"
                      >
                        <FaExchangeAlt className="text-xs sm:text-sm md:text-base text-indigo-600 dark:text-indigo-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
