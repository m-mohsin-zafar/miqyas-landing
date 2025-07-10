'use client';

import React from 'react';
import { useState } from 'react';
import { 
  FaEnvelope, FaPhone, FaBuilding, FaUser, 
  FaGlobe, FaCheck, FaSpinner, FaPaperPlane
} from 'react-icons/fa';
import { Button } from "../components/ui/button";

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactSection() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    message: '',
    requestType: 'demo', // demo, pricing, partnership, other
    marketType: '', // retailer, consumer, both
  });
  
  // Form status state
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle radio button changes
  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }
    
    // Set form to submitting state
    setFormStatus('submitting');
    
    // In a real implementation, you would send this data to your API endpoint
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, we'll just log the data and set success state
      console.log('Form submitted:', formData);
      
      // Set success state
      setFormStatus('success');
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          website: '',
          message: '',
          requestType: 'demo',
          marketType: '',
        });
      }, 5000);
    } catch (error) {
      // Set error state
      setFormStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };
  
  // Form fields configuration
  const formFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'John Doe',
      required: true,
      icon: <FaUser className="text-indigo-500" />,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'john@example.com',
      required: true,
      icon: <FaEnvelope className="text-indigo-500" />,
    },
    {
      name: 'company',
      label: 'Company',
      type: 'text',
      placeholder: 'Your Company',
      required: false,
      icon: <FaBuilding className="text-indigo-500" />,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: '+1 (123) 456-7890',
      required: false,
      icon: <FaPhone className="text-indigo-500" />,
    },
    {
      name: 'website',
      label: 'Website URL',
      type: 'url',
      placeholder: 'https://yourwebsite.com',
      required: false,
      icon: <FaGlobe className="text-indigo-500" />,
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-16 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 -right-20 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-60 sm:w-80 h-60 sm:h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-indigo-100 to-blue-50 dark:from-indigo-900/50 dark:to-blue-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 shadow-sm">
            Get Started
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gray-900 dark:text-white">
            Request a <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Demo</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let us show you how MIQYAS can transform your sizing experience and boost your sales
          </p>
        </div>
        
        {/* Contact form and info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-5 sm:p-6 md:p-8 border border-gray-100 dark:border-gray-700">
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-8 md:py-12">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <FaCheck className="text-xl sm:text-2xl text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">Thank You!</h3>
                <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  We've received your request and will contact you shortly to schedule your personalized demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Request type options */}
                <div className="mb-5 md:mb-8">
                  <label className="block text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base mb-2 md:mb-3">
                    I'm interested in:
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                    {['demo', 'pricing', 'partnership', 'other'].map((type) => (
                      <div 
                        key={type}
                        onClick={() => handleRadioChange('requestType', type)}
                        className={`
                          p-2 sm:p-3 rounded-lg border cursor-pointer transition-colors text-center text-xs sm:text-sm
                          ${formData.requestType === type 
                            ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300' 
                            : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600'
                          }
                        `}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Market type */}
                <div className="mb-5 md:mb-8">
                  <label className="block text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base mb-2 md:mb-3">
                    I represent:
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { value: 'retailer', label: 'A Retailer' },
                      { value: 'consumer', label: 'A Consumer' },
                      { value: 'both', label: 'Both' }
                    ].map((option) => (
                      <div 
                        key={option.value}
                        onClick={() => handleRadioChange('marketType', option.value)}
                        className={`
                          p-2 sm:p-3 rounded-lg border cursor-pointer transition-colors text-center text-xs sm:text-sm
                          ${formData.marketType === option.value 
                            ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300' 
                            : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600'
                          }
                        `}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-5 sm:mb-6">
                  {formFields.map((field) => (
                    <div key={field.name} className="relative">
                      <label 
                        htmlFor={field.name} 
                        className="block text-gray-700 dark:text-gray-200 font-medium mb-1.5 sm:mb-2 text-sm"
                      >
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <div className="relative">
                        <div className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          {React.cloneElement(field.icon, { size: 14 })}
                        </div>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData] as string}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full pl-7 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 dark:text-gray-200 text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Message field */}
                <div className="mb-5 sm:mb-8">
                  <label 
                    htmlFor="message" 
                    className="block text-gray-700 dark:text-gray-200 font-medium mb-1.5 sm:mb-2 text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about your needs..."
                    rows={3}
                    className="w-full p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 dark:text-gray-200 text-xs sm:text-sm"
                  ></textarea>
                </div>
                
                {/* Error message */}
                {errorMessage && (
                  <div className="mb-4 sm:mb-6 p-2 sm:p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 text-xs sm:text-sm">
                    {errorMessage}
                  </div>
                )}
                
                {/* Submit button */}
                <Button 
                  type="submit"
                  className="w-full py-2.5 sm:py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base md:text-lg rounded-lg flex items-center justify-center gap-2 sm:gap-3 transition-colors"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <FaSpinner className="animate-spin text-sm sm:text-base" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm sm:text-base" />
                      <span>Request Demo</span>
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3 sm:mt-4">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </div>
          
          {/* Contact info and benefits */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
            {/* Contact info */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-800 dark:to-blue-800 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-5 sm:p-6 md:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-white/10 rounded-full">
                    <FaEnvelope size={14} className="sm:hidden" />
                    <FaEnvelope size={16} className="hidden sm:block" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/80 mb-0.5 md:mb-1 text-sm md:text-base">Email Us</h4>
                    <a href="mailto:demo@miqyas.com" className="text-base sm:text-lg hover:underline">
                      demo@miqyas.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-white/10 rounded-full">
                    <FaPhone size={14} className="sm:hidden" />
                    <FaPhone size={16} className="hidden sm:block" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/80 mb-0.5 md:mb-1 text-sm md:text-base">Call Us</h4>
                    <a href="tel:+11234567890" className="text-base sm:text-lg hover:underline">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-white/10 rounded-full">
                    <FaBuilding size={14} className="sm:hidden" />
                    <FaBuilding size={16} className="hidden sm:block" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/80 mb-0.5 md:mb-1 text-sm md:text-base">Visit Us</h4>
                    <address className="text-base sm:text-lg not-italic">
                      MIQYAS HQ<br />
                      123 Tech Blvd, Suite 500<br />
                      San Francisco, CA 94105
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-5 sm:p-6 md:p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                What to Expect
              </h3>
              
              <ul className="space-y-3 md:space-y-5">
                {[
                  "Personalized 30-minute demo tailored to your business needs",
                  "Live walkthrough of the MIQYAS dashboard and API",
                  "Discussion of implementation options and timeline",
                  "Q&A session with our product specialists",
                  "Custom pricing proposal based on your requirements"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-4">
                    <div className="p-0.5 sm:p-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mt-0.5">
                      <FaCheck className="text-indigo-600 dark:text-indigo-400" size={12} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-5 md:mt-8 pt-4 md:pt-6 border-t border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1 md:mb-2 text-sm md:text-base">
                  Ready to get started?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Our team typically responds within 24 hours to schedule your demo.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ note */}
        <div className="mt-10 md:mt-16 text-center">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            Have more questions? Check our <a href="#faq" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">FAQ section</a> or reach out to our support team.
          </p>
        </div>
      </div>
    </section>
  );
}
