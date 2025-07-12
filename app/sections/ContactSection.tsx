'use client';

import React from 'react';
import { useState } from 'react';
import { 
  FaEnvelope, FaPhone, FaBuilding, FaUser, 
  FaGlobe, FaCheck, FaSpinner, FaPaperPlane
} from 'react-icons/fa';
import { Button } from "../components/ui/button";
import { Dictionary } from '../i18n/types';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactSectionProps {
  dictionary: Dictionary;
}

export default function ContactSection({ dictionary }: ContactSectionProps) {
  const contactSection = dictionary.contactSection;
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
      label: contactSection.formLabels.name,
      type: 'text',
      placeholder: contactSection.formPlaceholders.name,
      required: true,
      icon: <FaUser className="text-indigo-500" />,
    },
    {
      name: 'email',
      label: contactSection.formLabels.email,
      type: 'email',
      placeholder: contactSection.formPlaceholders.email,
      required: true,
      icon: <FaEnvelope className="text-indigo-500" />,
    },
    {
      name: 'company',
      label: contactSection.formLabels.company,
      type: 'text',
      placeholder: contactSection.formPlaceholders.company,
      required: false,
      icon: <FaBuilding className="text-indigo-500" />,
    },
    {
      name: 'phone',
      label: contactSection.formLabels.phone,
      type: 'tel',
      placeholder: contactSection.formPlaceholders.phone,
      required: false,
      icon: <FaPhone className="text-indigo-500" />,
    },
    {
      name: 'website',
      label: contactSection.formLabels.website,
      type: 'url',
      placeholder: contactSection.formPlaceholders.website,
      required: false,
      icon: <FaGlobe className="text-indigo-500" />,
    }
  ];

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 -right-20 w-40 sm:w-60 h-40 sm:h-60 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-40 sm:w-60 h-40 sm:h-60 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-100 to-blue-50 dark:from-indigo-900/50 dark:to-blue-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-xs font-medium mb-2 sm:mb-3 shadow-sm">
            {contactSection.badge}
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            {contactSection.heading.split(' ').slice(0, -1).join(' ')} <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">{contactSection.heading.split(' ').pop()}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            {contactSection.subheading}
          </p>
        </div>
        
        {/* Contact form and info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-5 border border-gray-100 dark:border-gray-700">
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-6">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3">
                  <FaCheck className="text-lg text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{contactSection.successMessage.title}</h3>
                <p className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {contactSection.successMessage.message}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Request type options */}
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-200 font-medium text-xs mb-1.5">
                    {contactSection.formLabels.requestType}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {contactSection.requestTypes.map((label, index) => {
                      const type = ['demo', 'pricing', 'partnership', 'other'][index];
                      return (
                      <div 
                        key={type}
                        onClick={() => handleRadioChange('requestType', type)}
                        className={`
                          p-1.5 rounded-md border cursor-pointer transition-colors text-center text-xs
                          ${formData.requestType === type 
                            ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300' 
                            : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600'
                          }
                        `}
                      >
                        {label}
                      </div>
                    );
                    })}
                  </div>
                </div>
                
                {/* Market type */}
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-200 font-medium text-xs mb-1.5">
                    {contactSection.formLabels.marketType}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {contactSection.marketTypes.map((option) => (
                      <div 
                        key={option.value}
                        onClick={() => handleRadioChange('marketType', option.value)}
                        className={`
                          p-1.5 rounded-md border cursor-pointer transition-colors text-center text-xs
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {formFields.map((field) => (
                    <div key={field.name} className="relative">
                      <label 
                        htmlFor={field.name} 
                        className="block text-gray-700 dark:text-gray-200 font-medium mb-1 text-xs"
                      >
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <div className="relative">
                        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                          {React.cloneElement(field.icon, { size: 12 })}
                        </div>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData] as string}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full pl-6 pr-2 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-700 dark:text-gray-200 text-xs"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Message field */}
                <div className="mb-4">
                  <label 
                    htmlFor="message" 
                    className="block text-gray-700 dark:text-gray-200 font-medium mb-1 text-xs"
                  >
                    {contactSection.formLabels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contactSection.formPlaceholders.message}
                    rows={2}
                    className="w-full p-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-700 dark:text-gray-200 text-xs"
                  ></textarea>
                </div>
                
                {/* Error message */}
                {errorMessage && (
                  <div className="mb-3 p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-red-700 dark:text-red-300 text-xs">
                    {contactSection.errorMessage}
                  </div>
                )}
                
                {/* Submit button */}
                <Button 
                  type="submit"
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs rounded-md flex items-center justify-center gap-2 transition-colors"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <FaSpinner className="animate-spin text-xs" />
                      <span>{contactSection.submittingText}</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      <span>{contactSection.submitButton}</span>
                    </>
                  )}
                </Button>
                
                <p className="text-[10px] text-gray-500 dark:text-gray-400 text-center mt-2">
                  {contactSection.privacyText}
                </p>
              </form>
            )}
          </div>
          
          {/* Contact info and benefits */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Contact info */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-800 dark:to-blue-800 rounded-lg shadow-md p-4 text-white">
              <h3 className="text-lg font-bold mb-3">{contactSection.contactInfo.title}</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="p-1.5 bg-white/10 rounded-full">
                    <FaEnvelope size={12} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/80 mb-0.5 text-xs">{contactSection.contactInfo.email.label}</h4>
                    <a href={`mailto:${contactSection.contactInfo.email.value}`} className="text-sm hover:underline">
                      {contactSection.contactInfo.email.value}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="p-1.5 bg-white/10 rounded-full">
                    <FaPhone size={12} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/80 mb-0.5 text-xs">{contactSection.contactInfo.phone.label}</h4>
                    <a href={`tel:${contactSection.contactInfo.phone.value.replace(/[^0-9+]/g, '')}`} className="text-sm hover:underline">
                      {contactSection.contactInfo.phone.value}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="p-1.5 bg-white/10 rounded-full">
                    <FaBuilding size={12} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/80 mb-0.5 text-xs">{contactSection.contactInfo.address.label}</h4>
                    <address className="text-sm not-italic">
                      {contactSection.contactInfo.address.value.split(',').map((line, i) => (
                        <React.Fragment key={i}>
                          {line.trim()}{i < contactSection.contactInfo.address.value.split(',').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{contactSection.benefits.title}</h3>
              
              <ul className="space-y-2">
                {contactSection.benefits.items.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full mt-0.5">
                      <FaCheck className="text-green-600 dark:text-green-400 text-[10px]" />
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300">
                      {benefit}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* FAQ note */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{contactSection.faqNote.title}</h3>
              <p className="text-xs text-gray-700 dark:text-gray-300 mb-3">
                {contactSection.faqNote.description}
              </p>
              <Button 
                onClick={() => window.location.href = '#faq'}
                className="py-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-md inline-flex items-center gap-1.5 transition-colors"
              >
                {contactSection.faqNote.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
