'use client';

import { useState } from 'react';
import { Accordion, AccordionItem } from "../components/ui/new-accordion";
import CTAButton from "../components/CTAButton";
import { FaQuestionCircle, FaSearch, FaAngleRight, FaLaptopCode, FaChartLine, FaRocket } from 'react-icons/fa';
import { getFAQSectionContent } from '../utils/contentLoader';
import { DynamicIcon } from '../utils/iconUtils';
import FAQSchema from '../components/seo/FAQSchema';

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Load content from JSON
  const content = getFAQSectionContent();
  const { faqs, categories } = content;
  
  const filteredFaqs = faqs.filter(faq => 
    (faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'all' || faq.category === selectedCategory)
  );

  // Transform FAQ data for schema
  const schemaFaqs = faqs.map(faq => ({
    question: faq.q,
    answer: faq.a
  }));

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Add FAQ Schema for SEO */}
      <FAQSchema faqs={schemaFaqs} />
      
      {/* Background decorations */}
      <div className="absolute top-40 -left-20 w-60 sm:w-80 h-60 sm:h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 sm:w-60 h-40 sm:h-60 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-full">
              <FaQuestionCircle className="text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Frequently Asked <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about MIQYAS and how it transforms online shopping
          </p>
        </div>
        
        {/* Search and categories */}
        <div className="mb-8 sm:mb-10">
          <div className="max-w-lg mx-auto relative mb-4 sm:mb-6">
            <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch className="text-xs sm:text-sm" />
            </div>
            <input 
              type="text" 
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 sm:py-3 pl-8 sm:pl-12 pr-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-xs sm:text-sm text-gray-700 dark:text-gray-200"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id 
                  ? 'bg-indigo-600 text-white shadow' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
          {filteredFaqs.length > 0 ? (
            <Accordion>
              {filteredFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={faq.q}
                  title={
                    <div className="flex items-center">
                      <span className="mr-2 sm:mr-3 text-xs sm:text-sm">
                        <DynamicIcon iconName={faq.icon} className={faq.iconColor} />
                      </span>
                      <span className="text-sm sm:text-base">{faq.q}</span>
                    </div>
                  }
                  content={
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      {faq.a}
                    </div>
                  }
                />
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-8 sm:py-12">
              <p className="text-sm text-gray-600 dark:text-gray-300">No questions found matching your search.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-3 text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
        
        {/* Still have questions */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 text-white text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Still have questions?</h3>
          <p className="mb-5 sm:mb-6 text-xs sm:text-sm text-indigo-100 max-w-2xl mx-auto">
            Our team is just a message away. Whether you need support, have questions, or want to discuss custom features, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <CTAButton primary href="mailto:support@miqyas.com">
              Contact Support
            </CTAButton>
            <CTAButton href="#contact">
              Schedule Demo
            </CTAButton>
          </div>
        </div>
        
        {/* Quick links */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-md flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
              <FaLaptopCode className="text-xs sm:text-sm" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-gray-900 dark:text-white">Developer Resources</h4>
              <a href="#" className="inline-flex items-center text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                View API Docs <FaAngleRight className="ml-1 text-xs" />
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-md flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
              <FaChartLine className="text-xs sm:text-sm" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-gray-900 dark:text-white">Case Studies</h4>
              <a href="#" className="inline-flex items-center text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                Success Stories <FaAngleRight className="ml-1 text-xs" />
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-md flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
              <FaRocket className="text-xs sm:text-sm" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-gray-900 dark:text-white">Getting Started</h4>
              <a href="#" className="inline-flex items-center text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                Integration Guide <FaAngleRight className="ml-1 text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
