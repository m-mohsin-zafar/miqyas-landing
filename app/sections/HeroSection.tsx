import CTAButton from '@/app/components/CTAButton';
import { FaShopify, FaWordpressSimple, FaTshirt, FaRuler } from 'react-icons/fa';
import { MdWeb, MdDevices, MdCheckCircle } from 'react-icons/md';
import { HiOutlineSparkles } from 'react-icons/hi';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between py-20 md:py-32 px-4 md:px-16 bg-gradient-to-br from-indigo-50 via-blue-100 to-indigo-200 min-h-[80vh] overflow-hidden">
      {/* Enhanced animated background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-200 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 rounded-full opacity-20 blur-2xl animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-200 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="flex-1 flex flex-col items-start gap-8 z-10 mt-8 md:mt-0">
        <Image src="/brand.svg" alt="MIQYAS Logo" width={140} height={50} className="mb-2" priority />
        <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full text-sm font-medium text-white mb-4 shadow-lg relative animate-pulse">
          <span className="flex items-center gap-2 font-bold tracking-wider">
            <HiOutlineSparkles className="inline text-xl text-yellow-300" /> COMING SOON
          </span>
          <div className="absolute -right-2 -top-2 w-5 h-5 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight drop-shadow-lg">
          Cut Returns. Boost Sales.<br />
          <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">AI Sizing That Gets It Right—Every Time.</span>
        </h1>
        <p className="text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-200 max-w-xl">
          For fashion brands, online stores, and shoppers who want a perfect fit with zero hassle.
        </p>
        <div className="flex gap-4 mt-4 flex-wrap">
          <CTAButton primary href="#contact">
            <span className="flex items-center gap-2">
              <MdDevices className="text-xl" /> Request a Demo
            </span>
          </CTAButton>
          <CTAButton href="#product-demo">
            <span className="flex items-center gap-2">
              <FaRuler className="text-xl" /> See it in Action
            </span>
          </CTAButton>
        </div>
        <div className="flex items-center gap-4 mt-8 bg-white/80 dark:bg-gray-900/80 px-6 py-3 rounded-xl shadow-lg backdrop-blur-sm">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Works with:</span>
          <FaShopify className="text-green-600 dark:text-green-500 text-2xl" title="Shopify" />
          <FaWordpressSimple className="text-blue-700 dark:text-blue-400 text-2xl" title="WooCommerce" />
          <MdWeb className="text-indigo-500 dark:text-indigo-400 text-2xl" title="Custom Platforms" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center w-full md:w-auto mb-12 md:mb-0 z-10">
        {/* Enhanced product mockup with SVGs and illustrations */}
        <div className="relative w-full max-w-lg">
          <div className="relative w-full aspect-square max-w-md mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Dashboard mockup */}
            <div className="absolute inset-0 p-4 flex flex-col">
              <div className="h-8 w-full mb-4 flex items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-6 w-48 bg-indigo-100 dark:bg-indigo-800 rounded-md mx-auto"></div>
              </div>
              
              <div className="flex flex-col gap-4 h-full">
                {/* Dashboard content */}
                <div className="flex gap-4 h-1/3">
                  <div className="w-1/2 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <FaTshirt className="text-5xl text-indigo-500 opacity-80" />
                  </div>
                  <div className="w-1/2 flex flex-col gap-2">
                    <div className="h-3 w-full bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                    <div className="h-3 w-4/5 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                    <div className="h-3 w-2/3 bg-indigo-200 dark:bg-indigo-700 rounded-full mt-2"></div>
                  </div>
                </div>
                
                {/* Charts and data visualization */}
                <div className="flex-1 grid grid-cols-2 gap-3">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
                    <div className="h-3 w-2/3 bg-gray-200 dark:bg-gray-600 rounded-full mb-2"></div>
                    <div className="flex items-end h-3/4 gap-1 pt-2">
                      <div className="h-full w-1/5 bg-blue-400 dark:bg-blue-600 rounded-t-sm"></div>
                      <div className="h-3/4 w-1/5 bg-blue-400 dark:bg-blue-600 rounded-t-sm"></div>
                      <div className="h-1/2 w-1/5 bg-blue-400 dark:bg-blue-600 rounded-t-sm"></div>
                      <div className="h-4/5 w-1/5 bg-blue-400 dark:bg-blue-600 rounded-t-sm"></div>
                      <div className="h-3/5 w-1/5 bg-blue-400 dark:bg-blue-600 rounded-t-sm"></div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center">
                    <MdCheckCircle className="text-4xl text-green-500" />
                  </div>
                  <div className="col-span-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-2 flex flex-col gap-2">
                    <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                    <div className="flex-1 flex gap-2">
                      <div className="w-1/2 bg-indigo-100 dark:bg-indigo-900/30 rounded flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-indigo-200 dark:bg-indigo-700"></div>
                      </div>
                      <div className="w-1/2 flex flex-col justify-center gap-1">
                        <div className="h-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                        <div className="h-2 w-4/5 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom metrics */}
                <div className="grid grid-cols-3 gap-2 mt-auto">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded p-2">
                    <div className="h-2 w-3/4 bg-green-200 dark:bg-green-700 rounded-full mb-1"></div>
                    <div className="h-4 w-1/2 bg-green-300 dark:bg-green-600 rounded-sm font-bold text-[8px] text-green-800 dark:text-green-200 flex items-center justify-center">92%</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-2">
                    <div className="h-2 w-3/4 bg-blue-200 dark:bg-blue-700 rounded-full mb-1"></div>
                    <div className="h-4 w-1/2 bg-blue-300 dark:bg-blue-600 rounded-sm"></div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-2">
                    <div className="h-2 w-3/4 bg-purple-200 dark:bg-purple-700 rounded-full mb-1"></div>
                    <div className="h-4 w-1/2 bg-purple-300 dark:bg-purple-600 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-300 dark:bg-yellow-500 rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
            <FaRuler className="text-white text-lg" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-500 dark:bg-indigo-600 rounded-xl shadow-lg rotate-12 flex items-center justify-center">
            <FaTshirt className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
