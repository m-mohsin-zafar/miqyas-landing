import { FaShoppingBag, FaCamera, FaTshirt, FaSmile } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 md:px-16 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-60 h-60 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-blue-50 dark:from-indigo-900/50 dark:to-blue-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium mb-4 shadow-sm">Simple Process</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white drop-shadow-sm">
            How <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">getfit</span> Works
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-400 mt-6 rounded-full shadow-sm"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 mt-20 relative">
          
          
          {/* Step 1 */}
          <div className="w-full md:w-1/4 flex flex-col items-center text-center relative">
            <div className="absolute -top-12 text-6xl font-black bg-gradient-to-r from-indigo-200 to-blue-100 dark:from-indigo-800 dark:to-indigo-600 bg-clip-text text-transparent select-none z-0">1</div>
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-500 dark:to-blue-400 rounded-full p-4 mb-6 shadow-lg flex items-center justify-center z-10 ring-8 ring-white dark:ring-gray-900 transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
              <FaShoppingBag className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-indigo-800 to-blue-700 dark:from-indigo-400 dark:to-blue-300 bg-clip-text text-transparent relative z-10">Start Shopping</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">Customer visits your online store and browses your products</p>
          </div>
          
          {/* Arrow for mobile */}
          <div className="md:hidden w-full flex justify-center my-4">
            <div className="h-16 w-1 bg-gradient-to-b from-indigo-400 to-blue-500 dark:from-indigo-600 dark:to-blue-400 rounded-full"></div>
          </div>
          
          {/* Step 2 */}
          <div className="w-full md:w-1/4 flex flex-col items-center text-center relative">
            <div className="absolute -top-12 text-6xl font-black bg-gradient-to-r from-indigo-200 to-blue-100 dark:from-indigo-800 dark:to-indigo-600 bg-clip-text text-transparent select-none z-0">2</div>
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-500 dark:to-blue-400 rounded-full p-4 mb-6 shadow-lg flex items-center justify-center z-10 ring-8 ring-white dark:ring-gray-900 transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
              <FaCamera className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-indigo-800 to-blue-700 dark:from-indigo-400 dark:to-blue-300 bg-clip-text text-transparent relative z-10">AI Measurement</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">Our AI quickly estimates measurements from simple photos and data inputs</p>
          </div>
          
          {/* Arrow for mobile */}
          <div className="md:hidden w-full flex justify-center my-4">
            <div className="h-16 w-1 bg-gradient-to-b from-indigo-400 to-blue-500 dark:from-indigo-600 dark:to-blue-400 rounded-full"></div>
          </div>
          
          {/* Step 3 */}
          <div className="w-full md:w-1/4 flex flex-col items-center text-center relative">
            <div className="absolute -top-12 text-6xl font-black bg-gradient-to-r from-indigo-200 to-blue-100 dark:from-indigo-800 dark:to-indigo-600 bg-clip-text text-transparent select-none z-0">3</div>
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-500 dark:to-blue-400 rounded-full p-4 mb-6 shadow-lg flex items-center justify-center z-10 ring-8 ring-white dark:ring-gray-900 transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
              <FaTshirt className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-indigo-800 to-blue-700 dark:from-indigo-400 dark:to-blue-300 bg-clip-text text-transparent relative z-10">Size Recommendation</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">Customer receives an instant, accurate size recommendation</p>
          </div>
          
          {/* Arrow for mobile */}
          <div className="md:hidden w-full flex justify-center my-4">
            <div className="h-16 w-1 bg-gradient-to-b from-indigo-400 to-blue-500 dark:from-indigo-600 dark:to-blue-400 rounded-full"></div>
          </div>
          
          {/* Step 4 */}
          <div className="w-full md:w-1/4 flex flex-col items-center text-center relative">
            <div className="absolute -top-12 text-6xl font-black bg-gradient-to-r from-indigo-200 to-blue-100 dark:from-indigo-800 dark:to-indigo-600 bg-clip-text text-transparent select-none z-0">4</div>
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-500 dark:to-blue-400 rounded-full p-4 mb-6 shadow-lg flex items-center justify-center z-10 ring-8 ring-white dark:ring-gray-900 transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
              <FaSmile className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-indigo-800 to-blue-700 dark:from-indigo-400 dark:to-blue-300 bg-clip-text text-transparent relative z-10">Perfect Fit</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">Returns drop, customer satisfaction soars, and business grows</p>
          </div>
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
