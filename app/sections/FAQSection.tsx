'use client';

import { useState } from 'react';
import { Accordion, AccordionItem } from "../components/ui/new-accordion";
import CTAButton from "../components/CTAButton";
import { 
  FaQuestionCircle, FaSearch, FaAngleRight, 
  FaShoppingCart, FaLaptopCode, FaUserShield, 
  FaChartLine, FaCog, FaRocket 
} from 'react-icons/fa';

const faqs = [
  {
    q: "How accurate is the sizing?",
    a: "Our AI system achieves over 98% accuracy in size recommendations. This is accomplished through our unique algorithm trained on over 100,000+ body scans and fit samples. We continuously improve our models using real-world feedback from retailers and shoppers to maintain the highest standards of accuracy across all body types and clothing categories.",
    icon: <FaChartLine className="text-indigo-500" />
  },
  {
    q: "What platforms do you support?",
    a: "MIQYAS integrates seamlessly with all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom stores via our REST API. We offer plug-and-play modules for quick setup, as well as developer-friendly documentation for custom implementations. Our platform also works with mobile applications through our iOS and Android SDKs.",
    icon: <FaLaptopCode className="text-blue-500" />
  },
  {
    q: "How fast is setup?",
    a: "Integration typically takes just 2-5 business days from start to finish. Our team handles the technical implementation, including setting up the API connections, configuring your size charts, and performing initial calibration. For standard e-commerce platforms, we have one-click installers that can have you up and running in as little as 24 hours.",
    icon: <FaRocket className="text-purple-500" />
  },
  {
    q: "Can I use my own size charts?",
    a: "Absolutely! You can upload or build custom size charts in your dashboard. Our system works with your existing sizing standards and can adapt to brand-specific measurements. We also offer a calibration period where we analyze your current sizing recommendations against our AI predictions to ensure a smooth transition for your customers.",
    icon: <FaCog className="text-green-500" />
  },
  {
    q: "Is my data secure?",
    a: "We prioritize data security with industry-standard encryption protocols and strict compliance with GDPR, CCPA, and other privacy regulations. Customer measurement data is anonymized and never sold to third parties. We use secure cloud infrastructure with regular security audits and penetration testing to protect all data.",
    icon: <FaUserShield className="text-red-500" />
  },
  {
    q: "Do you offer custom features?",
    a: "Yes! We pride ourselves on flexibility. From white-label branding to custom workflows, we build to fit your specific business needs. Common customizations include retailer-specific dashboards, specialized size charts for unique product categories, custom analytics reporting, and tailor-made shopper experiences that align with your brand identity.",
    icon: <FaShoppingCart className="text-yellow-500" />
  },
];

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'tech', name: 'Technology' },
    { id: 'integration', name: 'Integration' },
    { id: 'pricing', name: 'Pricing' },
  ];
  
  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 px-4 md:px-16 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-full">
              <FaQuestionCircle className="text-2xl text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about MIQYAS and how it can transform your online shopping experience
          </p>
        </div>
        
        {/* Search and categories */}
        <div className="mb-12">
          <div className="max-w-lg mx-auto relative mb-6">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch />
            </div>
            <input 
              type="text" 
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 pl-12 pr-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-gray-700 dark:text-gray-200"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
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
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 mb-16">
          {filteredFaqs.length > 0 ? (
            <Accordion>
              {filteredFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={faq.q}
                  title={
                    <div className="flex items-center">
                      <span className="mr-3">{faq.icon}</span>
                      <span>{faq.q}</span>
                    </div>
                  }
                  content={faq.a}
                />
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300">No questions found matching your search.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-indigo-600 dark:text-indigo-400 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
        
        {/* Still have questions */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-8 text-indigo-100 max-w-2xl mx-auto">
            Our team is just a message away. Whether you need technical support, have integration questions, or want to discuss custom features, we're here to help.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <CTAButton primary href="mailto:support@miqyas.com">
              Contact Support
            </CTAButton>
            <CTAButton href="#contact">
              Schedule Demo
            </CTAButton>
          </div>
        </div>
        
        {/* Quick links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start gap-4">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
              <FaLaptopCode />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Developer Resources</h4>
              <a href="#" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                View API Documentation <FaAngleRight className="ml-1" />
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start gap-4">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
              <FaChartLine />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Case Studies</h4>
              <a href="#" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                Read Success Stories <FaAngleRight className="ml-1" />
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
              <FaRocket />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Getting Started</h4>
              <a href="#" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                Integration Guide <FaAngleRight className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
