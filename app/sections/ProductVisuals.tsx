'use client';

import { useState, useEffect } from 'react';
import { FaPlay, FaChartBar, FaCode, FaBrain, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import Image from 'next/image';

export default function ProductVisuals() {
  // Add isMounted state to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  
  // Initialize on client-side only
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const tabs = [
    { name: 'Dashboard', icon: <FaChartBar /> },
    { name: 'Integration', icon: <FaCode /> },
    { name: 'Analytics', icon: <FaBrain /> }
  ];
  
  // Create deterministic user IDs instead of random ones
  const userIds = ['User #4281', 'User #3569', 'User #7102'];
  const userSizes = ['M', 'S', 'L'];
  
  return (
    <section id="product-demo" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-r from-indigo-100 to-blue-50 dark:from-indigo-900/50 dark:to-blue-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 shadow-sm">Product Demo</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:font-extrabold text-center text-gray-900 dark:text-white drop-shadow-sm">
            See <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Product</span> in Action
          </h2>
          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-indigo-600 to-blue-400 mt-4 sm:mt-6 rounded-full shadow-sm"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
          {/* Interactive carousel */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            {/* Tab navigation - hidden on mobile, show dots instead */}
            <div className="hidden sm:flex gap-2 mb-4 sm:mb-6">
              {tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeTab === index 
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="text-xs sm:text-sm">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Mobile tab selector */}
            <div className="flex sm:hidden items-center justify-center w-full mb-4">
              <button 
                onClick={() => setActiveTab(prev => (prev === 0 ? tabs.length - 1 : prev - 1))}
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-indigo-600 dark:text-indigo-400 text-xs"
                aria-label="Previous tab"
              >
                <FaArrowLeft />
              </button>
              <div className="flex-1 max-w-[180px] mx-4">
                <div className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-sm`}>
                  <span className="text-xs">{tabs[activeTab].icon}</span>
                  {tabs[activeTab].name}
                </div>
              </div>
              <button 
                onClick={() => setActiveTab(prev => (prev === tabs.length - 1 ? 0 : prev + 1))}
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-indigo-600 dark:text-indigo-400 text-xs"
                aria-label="Next tab"
              >
                <FaArrowRight />
              </button>
            </div>
            
            {/* Carousel display */}
            <div className="w-full relative">
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl p-3 sm:p-4 lg:p-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                {isMounted && activeTab === 0 && (
                  <div className="w-full h-full flex flex-col">
                    <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-indigo-500 rounded-md sm:rounded-lg flex items-center justify-center">
                          <HiOutlineSparkles className="text-white text-xs sm:text-sm lg:text-base" />
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base lg:text-xl">MIQYAS Dashboard</h3>
                      </div>
                      <div className="flex gap-1.5 sm:gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-2 sm:p-3 lg:p-4 rounded-md sm:rounded-lg">
                        <h4 className="font-bold text-xs sm:text-sm text-gray-700 dark:text-gray-200 mb-1 sm:mb-2">Accuracy Rate</h4>
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400">98.7%</p>
                        <div className="w-full h-1.5 sm:h-2 bg-blue-200 dark:bg-blue-700 rounded-full mt-1.5 sm:mt-2">
                          <div className="h-full w-[98.7%] bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/30 p-2 sm:p-3 lg:p-4 rounded-md sm:rounded-lg">
                        <h4 className="font-bold text-xs sm:text-sm text-gray-700 dark:text-gray-200 mb-1 sm:mb-2">Return Rate</h4>
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600 dark:text-green-400">-72%</p>
                        <div className="flex items-end h-4 sm:h-5 lg:h-6 gap-0.5 sm:gap-1 mt-1.5 sm:mt-2">
                          <div className="h-full w-1/4 bg-green-300 dark:bg-green-700 rounded-t-sm"></div>
                          <div className="h-3/4 w-1/4 bg-green-400 dark:bg-green-600 rounded-t-sm"></div>
                          <div className="h-1/3 w-1/4 bg-green-500 dark:bg-green-500 rounded-t-sm"></div>
                          <div className="h-1/4 w-1/4 bg-green-600 dark:bg-green-400 rounded-t-sm"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 bg-gray-50 dark:bg-gray-800/50 p-2 sm:p-3 lg:p-4 rounded-md sm:rounded-lg">
                      <h4 className="font-bold text-xs sm:text-sm text-gray-700 dark:text-gray-200 mb-1.5 sm:mb-2 lg:mb-3">Recent Measurements</h4>
                      <div className="space-y-1 sm:space-y-2">
                        {[0, 1, 2].map(i => (
                          <div key={i} className="flex items-center justify-between p-1.5 sm:p-2 bg-white dark:bg-gray-800 rounded-md">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full"></div>
                              <div className="text-xs sm:text-sm text-gray-900 dark:text-gray-200">{userIds[i]}</div>
                            </div>
                            <div className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400">
                              {userSizes[i]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {isMounted && activeTab === 1 && (
                  <div className="w-full h-full flex flex-col">
                    <div className="mb-3 sm:mb-4 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-800 dark:bg-black rounded-md sm:rounded-lg text-green-400 dark:text-green-500 font-mono text-[10px] xs:text-xs sm:text-sm overflow-x-auto">
                      <p>// Install MIQYAS SDK</p>
                      <p>npm install miqyas-sizing-api</p>
                      <p className="mt-1.5 sm:mt-2 lg:mt-4">// Simple integration</p>
                      <p>import {'{ MiqyasAPI }'} from 'miqyas-sizing-api';</p>
                      <p className="mt-1 sm:mt-2">const sizeRecommendation = await MiqyasAPI.predict({'{'}</p>
                      <p>  height: 175, weight: 70,</p>
                      <p>  gender: 'female', productId: 'tshirt-123'</p>
                      <p>{'}'}); </p>
                      <p className="mt-1 sm:mt-2 text-blue-400">// {'{ size: "M", confidence: 0.95 }'}</p>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800/60 rounded-md sm:rounded-lg p-2 sm:p-3 lg:p-4">
                        <h4 className="font-bold text-xs sm:text-sm text-gray-700 dark:text-gray-200 mb-1.5 sm:mb-2">Platforms</h4>
                        <div className="space-y-1 sm:space-y-2">
                          <div className="px-2 sm:px-3 py-1 sm:py-1.5 lg:py-2 bg-white dark:bg-gray-800 rounded-md flex items-center gap-1.5 sm:gap-2">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                            <span className="text-xs sm:text-sm">Shopify</span>
                          </div>
                          <div className="px-2 sm:px-3 py-1 sm:py-1.5 lg:py-2 bg-white dark:bg-gray-800 rounded-md flex items-center gap-1.5 sm:gap-2">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-xs sm:text-sm">WooCommerce</span>
                          </div>
                          <div className="px-2 sm:px-3 py-1 sm:py-1.5 lg:py-2 bg-white dark:bg-gray-800 rounded-md flex items-center gap-1.5 sm:gap-2">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-purple-500 rounded-full"></div>
                            <span className="text-xs sm:text-sm">Custom API</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-800/60 rounded-md sm:rounded-lg p-2 sm:p-3 lg:p-4">
                        <h4 className="font-bold text-xs sm:text-sm text-gray-700 dark:text-gray-200 mb-1.5 sm:mb-2">Response Time</h4>
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-indigo-600 dark:text-indigo-400">{'<'} 100ms</p>
                        <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-3">
                          <div className="flex-1 h-1 sm:h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="h-full w-[15%] bg-indigo-500 dark:bg-indigo-400 rounded-full"></div>
                          </div>
                          <span className="text-[10px] xs:text-xs text-gray-500 dark:text-gray-400">Blazing Fast</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {isMounted && activeTab === 2 && (
                  <div className="w-full h-full flex flex-col">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
                      <h3 className="font-bold text-xs sm:text-sm lg:text-base text-gray-900 dark:text-white">Sizing Analytics</h3>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded text-[10px] xs:text-xs">Last 30 Days</div>
                        <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-[10px] xs:text-xs">Export</div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800/40 rounded-md sm:rounded-lg p-2 sm:p-3 lg:p-4 mb-2 sm:mb-3 lg:mb-4">
                      <div className="flex justify-between mb-2 sm:mb-3 lg:mb-4">
                        <div>
                          <h4 className="text-[10px] xs:text-xs text-gray-500 dark:text-gray-400">Size Distribution</h4>
                          <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Product: Women's T-shirts</p>
                        </div>
                        <div className="text-[10px] xs:text-xs text-gray-500 dark:text-gray-400">Total: 4,328</div>
                      </div>
                      
                      <div className="flex items-end h-20 sm:h-24 lg:h-32 gap-1 sm:gap-2">
                        <div className="flex-1 flex flex-col items-center">
                          <div className="h-[15%] w-full bg-indigo-300 dark:bg-indigo-700 rounded-t-sm"></div>
                          <span className="text-[10px] xs:text-xs mt-0.5 sm:mt-1">XS</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <div className="h-[30%] w-full bg-indigo-400 dark:bg-indigo-600 rounded-t-sm"></div>
                          <span className="text-[10px] xs:text-xs mt-0.5 sm:mt-1">S</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <div className="h-[80%] w-full bg-indigo-500 dark:bg-indigo-500 rounded-t-sm"></div>
                          <span className="text-[10px] xs:text-xs mt-0.5 sm:mt-1">M</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <div className="h-[60%] w-full bg-indigo-600 dark:bg-indigo-400 rounded-t-sm"></div>
                          <span className="text-[10px] xs:text-xs mt-0.5 sm:mt-1">L</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <div className="h-[20%] w-full bg-indigo-700 dark:bg-indigo-300 rounded-t-sm"></div>
                          <span className="text-[10px] xs:text-xs mt-0.5 sm:mt-1">XL</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-md sm:rounded-lg p-2 sm:p-3 lg:p-4 flex flex-col">
                        <h4 className="text-[10px] xs:text-xs text-gray-700 dark:text-gray-200 mb-0.5 sm:mb-1">Return Reduction</h4>
                        <p className="text-lg sm:text-xl lg:text-3xl font-bold text-green-600 dark:text-green-400">72%</p>
                        <p className="text-[10px] xs:text-xs text-gray-500 dark:text-gray-400 mt-auto">Compared to 23% industry average</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-md sm:rounded-lg p-2 sm:p-3 lg:p-4 flex flex-col">
                        <h4 className="text-[10px] xs:text-xs text-gray-700 dark:text-gray-200 mb-0.5 sm:mb-1">Customer Satisfaction</h4>
                        <p className="text-lg sm:text-xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">96%</p>
                        <p className="text-[10px] xs:text-xs text-gray-500 dark:text-gray-400 mt-auto">Based on 10,000+ reviews</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Show a loading state or placeholder during SSR or before hydration */}
                {!isMounted && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full text-center">
                      <div className="h-6 sm:h-8 w-24 sm:w-32 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-3 sm:mb-4"></div>
                      <div className="h-3 sm:h-4 w-48 sm:w-64 bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
                    </div>
                  </div>
                )}
                
                {/* Gradient overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-10 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
              </div>
              
              {/* Tab navigation dots - mobile only */}
              <div className="flex justify-center mt-3 sm:hidden">
                <div className="flex gap-1.5">
                  {tabs.map((_, i) => (
                    <div 
                      key={i} 
                      onClick={() => setActiveTab(i)}
                      className={`w-2 h-2 rounded-full cursor-pointer ${activeTab === i ? 'bg-indigo-600 dark:bg-indigo-400' : 'bg-gray-300 dark:bg-gray-600'}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Video demo - mobile optimized */}
          <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
            <div className="aspect-video w-full bg-gradient-to-br from-indigo-900 to-blue-800 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl relative overflow-hidden group">
              {/* Video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-md sm:shadow-lg transform transition-all duration-300 group-hover:scale-110"
                  aria-label="Play video"
                >
                  <FaPlay className="text-indigo-600 ml-0.5 sm:ml-1 text-sm sm:text-base lg:text-lg" />
                </button>
              </div>
              
              {/* Overlay text - simplified for mobile */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 lg:p-6">
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-xl mb-0.5 sm:mb-1 lg:mb-2">See It In Action</h3>
                <p className="text-gray-200 text-xs sm:text-sm">Watch how MIQYAS transforms online shopping</p>
              </div>
              
              {/* Video controls - smaller for mobile */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-[10px] xs:text-xs text-white font-medium">1:24</span>
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-[10px] xs:text-xs text-white">HD</span>
                </div>
              </div>
            </div>
            
            {/* Feature cards - stacked on mobile */}
            <div className="mt-3 sm:mt-4 lg:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-md sm:rounded-lg text-indigo-600 dark:text-indigo-400">
                    <FaCode className="text-sm sm:text-base lg:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">Simple Integration</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-0.5 sm:mt-1">
                      Install with a single line of code
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-green-100 dark:bg-green-900/30 rounded-md sm:rounded-lg text-green-600 dark:text-green-400">
                    <FaChartBar className="text-sm sm:text-base lg:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">Real-time Results</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-0.5 sm:mt-1">
                      98.7% accuracy in milliseconds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
