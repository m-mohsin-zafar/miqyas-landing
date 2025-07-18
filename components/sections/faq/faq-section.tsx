'use client';

import { useState } from 'react';
import { Accordion, AccordionItem } from "@/components/ui/accordion-advanced";
import { Button } from "@/components/ui/button";
import { FaQuestionCircle, FaSearch, FaAngleRight, FaLaptopCode, FaChartLine, FaRocket } from 'react-icons/fa';
import { DynamicIcon } from '@/lib/utils/icons/dynamic-icon';
import { FAQSchema } from '@/components/seo';
import { Dictionary } from '@/lib/i18n';

interface FAQSectionProps {
  dictionary: Dictionary;
}

export default function FAQSection({ dictionary }: FAQSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get FAQ content from dictionary
  const faqSection = dictionary.faqSection;
  const { faqs, categories } = faqSection;
  
  // Find the "all" category from the dictionary
  const allCategory = categories.find(cat => cat.id === 'all');
  // Set initial state to the ID of the "all" category
  const [selectedCategory, setSelectedCategory] = useState(allCategory?.id || 'all');
  
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
    <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Add FAQ Schema for SEO */}
        <FAQSchema faqs={schemaFaqs} />
        
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs font-medium px-3 py-1 rounded-full mb-3">
            {faqSection.badge}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
            {faqSection.heading}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-2xl">
            {faqSection.subheading}
          </p>
        </div>
        
        {/* Search and categories */}
        <div className="mb-6">
          <div className="max-w-md mx-auto relative mb-3">
            <div className="absolute rtl:right-3 ltr:left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch className="text-xs" />
            </div>
            <input 
              type="text" 
              placeholder={faqSection.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 rtl:pr-8 rtl:pl-3 ltr:pl-8 ltr:pr-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-xs text-gray-700 dark:text-gray-200"
              dir="auto"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-1">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedCategory === category.id 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 mb-6 sm:mb-8">
          {filteredFaqs.length > 0 ? (
            <Accordion>
              {filteredFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={faq.q}
                  title={
                    <div className="flex items-center">
                      <span className="ltr:mr-2 rtl:ml-2 text-xs">
                        <DynamicIcon iconName={faq.icon} className={faq.iconColor} />
                      </span>
                      <span className="text-xs sm:text-sm">{faq.q}</span>
                    </div>
                  }
                  content={
                    <div className="text-xs text-gray-600 dark:text-gray-300 pl-5">
                      {faq.a}
                    </div>
                  }
                />
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-4">
              <p className="text-xs text-gray-600 dark:text-gray-300">{faqSection.noResultsText}</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium"
              >
                {faqSection.clearSearch}
              </button>
            </div>
          )}
        </div>
        
        {/* Still have questions */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 rounded-lg shadow-md p-4 sm:p-6 text-white text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{faqSection.stillHaveQuestions.heading}</h3>
          <p className="mb-4 text-xs text-indigo-100 max-w-xl mx-auto">
            {faqSection.stillHaveQuestions.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button 
              className="text-xs py-1.5 px-3 bg-white text-indigo-600 hover:bg-gray-100"
              onClick={() => window.location.href = "mailto:support@miqyas.com"}
            >
              {faqSection.stillHaveQuestions.contactSupport}
            </Button>
            <Button 
              className="text-xs py-1.5 px-3 bg-indigo-900/30 text-white hover:bg-indigo-900/50 border border-white/20"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {faqSection.stillHaveQuestions.scheduleDemo}
            </Button>
          </div>
        </div>
        
        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {/* Developer Resources */}
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm flex items-center gap-2">
            <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900/30 rounded-md text-indigo-600 dark:text-indigo-400">
              <FaLaptopCode className="text-xs" />
            </div>
            <div>
              <h4 className="font-bold text-xs mb-0.5 text-gray-900 dark:text-white">
                {faqSection.quickLinks.developerResources.title}
              </h4>
              <a href="#" className="inline-flex items-center text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                {faqSection.quickLinks.developerResources.link} <FaAngleRight className="ltr:ml-1 rtl:mr-1 text-[10px] rtl:rotate-180" />
              </a>
            </div>
          </div>
          
          {/* Case Studies */}
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm flex items-center gap-2">
            <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-md text-green-600 dark:text-green-400">
              <FaChartLine className="text-xs" />
            </div>
            <div>
              <h4 className="font-bold text-xs mb-0.5 text-gray-900 dark:text-white">
                {faqSection.quickLinks.caseStudies.title}
              </h4>
              <a href="#" className="inline-flex items-center text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                {faqSection.quickLinks.caseStudies.link} <FaAngleRight className="ltr:ml-1 rtl:mr-1 text-[10px] rtl:rotate-180" />
              </a>
            </div>
          </div>
          
          {/* Getting Started */}
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm flex items-center gap-2">
            <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400">
              <FaRocket className="text-xs" />
            </div>
            <div>
              <h4 className="font-bold text-xs mb-0.5 text-gray-900 dark:text-white">
                {faqSection.quickLinks.gettingStarted.title}
              </h4>
              <a href="#" className="inline-flex items-center text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                {faqSection.quickLinks.gettingStarted.link} <FaAngleRight className="ltr:ml-1 rtl:mr-1 text-[10px] rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
