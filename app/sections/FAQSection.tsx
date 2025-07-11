'use client';

import { useState } from 'react';
import { Accordion, AccordionItem } from "../components/ui/new-accordion";
import CTAButton from "../components/CTAButton";
import { FaQuestionCircle, FaSearch, FaAngleRight, FaLaptopCode, FaChartLine, FaRocket } from 'react-icons/fa';
import { DynamicIcon } from '../utils/iconUtils';
import FAQSchema from '../components/seo/FAQSchema';
import { Dictionary } from '../i18n/types';

interface FAQSectionProps {
  dictionary: Dictionary;
}

export default function FAQSection({ dictionary }: FAQSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Get FAQ content from dictionary
  const faqSection = dictionary.faqSection;
  const { faqs, categories } = faqSection;
  
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
    <section id="faq" className="py-12 md:py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Add FAQ Schema for SEO */}
        <FAQSchema faqs={schemaFaqs} />
        
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs md:text-sm font-medium px-3 py-1 rounded-full mb-3">
            {faqSection.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {faqSection.heading}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-3xl">
            {faqSection.subheading}
          </p>
        </div>
        
        {/* Search and categories */}
        <div className="mb-8 sm:mb-10">
          <div className="max-w-lg mx-auto relative mb-4 sm:mb-6">
            <div className="absolute rtl:right-3 rtl:sm:right-4 ltr:left-3 ltr:sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch className="text-xs sm:text-sm" />
            </div>
            <input 
              type="text" 
              placeholder={faqSection.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 sm:py-3 rtl:pr-8 rtl:sm:pr-12 rtl:pl-4 ltr:pl-8 ltr:sm:pl-12 ltr:pr-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-xs sm:text-sm text-gray-700 dark:text-gray-200"
              dir="auto"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === 'all' 
                ? 'bg-indigo-600 text-white shadow' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
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
                      <span className="ltr:mr-2 ltr:sm:mr-3 rtl:ml-2 rtl:sm:ml-3 text-xs sm:text-sm">
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
              <p className="text-sm text-gray-600 dark:text-gray-300">{faqSection.noResultsText}</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-3 text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium"
              >
                {faqSection.clearSearch}
              </button>
            </div>
          )}
        </div>
        
        {/* Still have questions */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 text-white text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{faqSection.stillHaveQuestions.heading}</h3>
          <p className="mb-5 sm:mb-6 text-xs sm:text-sm text-indigo-100 max-w-2xl mx-auto">
            {faqSection.stillHaveQuestions.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <CTAButton primary href="mailto:support@miqyas.com">
              {faqSection.stillHaveQuestions.contactSupport}
            </CTAButton>
            <CTAButton href="#contact">
              {faqSection.stillHaveQuestions.scheduleDemo}
            </CTAButton>
          </div>
        </div>
        
        {/* Quick links */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto place-items-center">
          {/* Developer Resources */}
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
              <FaLaptopCode className="text-xs sm:text-sm" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-gray-900 dark:text-white">
                {faqSection.quickLinks.developerResources.title}
              </h4>
              <a href="#" className="inline-flex items-center text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                {faqSection.quickLinks.developerResources.link} <FaAngleRight className="ltr:ml-1 rtl:mr-1 text-xs rtl:rotate-180" />
              </a>
            </div>
          </div>
          
          {/* Case Studies */}
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
              <FaChartLine className="text-xs sm:text-sm" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-gray-900 dark:text-white">
                {faqSection.quickLinks.caseStudies.title}
              </h4>
              <a href="#" className="inline-flex items-center text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                {faqSection.quickLinks.caseStudies.link} <FaAngleRight className="ltr:ml-1 rtl:mr-1 text-xs rtl:rotate-180" />
              </a>
            </div>
          </div>
          
          {/* Getting Started */}
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
              <FaRocket className="text-xs sm:text-sm" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-gray-900 dark:text-white">
                {faqSection.quickLinks.gettingStarted.title}
              </h4>
              <a href="#" className="inline-flex items-center text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                {faqSection.quickLinks.gettingStarted.link} <FaAngleRight className="ltr:ml-1 rtl:mr-1 text-xs rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
