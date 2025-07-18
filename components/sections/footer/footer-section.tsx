'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { Dictionary } from '@/lib/i18n';

interface FooterProps {
  dictionary: Dictionary;
}

export default function Footer({ dictionary }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would call an API endpoint
      console.log(`Subscribing email: ${email}`);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-indigo-800 dark:from-gray-900 dark:to-gray-800 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-700/20 dark:bg-indigo-700/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-700/20 dark:bg-purple-700/10 rounded-full blur-3xl"></div>
      
      {/* Newsletter section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8 relative z-10">
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 mb-12 shadow-xl border border-white/10">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">{dictionary.footer.newsletter.title}</h3>
              <p className="text-indigo-100 dark:text-gray-300">
                {dictionary.footer.newsletter.description}
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={dictionary.footer.newsletter.placeholder}
                    className="w-full sm:w-64 md:w-72 px-4 py-3 pl-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-indigo-200"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-white text-indigo-700 hover:bg-indigo-100 font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  {dictionary.footer.newsletter.button} <FaArrowRight />
                </Button>
              </form>
              {subscribed && (
                <div className="mt-3 text-green-300 text-sm animate-fadeIn">
                  {dictionary.footer.newsletter.success}
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Company info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <Link href="/" className="flex items-center">
                <div className="bg-white text-indigo-800 font-bold text-xl rounded-lg w-10 h-10 flex items-center justify-center mr-3">M</div>
                <span className="font-extrabold text-2xl tracking-tight">MIQYAS</span>
              </Link>
              <p className="mt-4 text-sm text-indigo-200 dark:text-gray-400 max-w-xs">
                {dictionary.footer.company.about}
              </p>
            </div>
            
            <div className="flex gap-4 mt-auto">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <FaInstagram />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <FaGithub />
              </a>
            </div>
          </div>
          
          {/* Navigation links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{dictionary.footer.links.product}</h4>
            <ul className="space-y-3 text-indigo-200 dark:text-gray-400">
              <li><Link href="#features" className="hover:text-white transition-colors">{dictionary.footer.links.features}</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white transition-colors">{dictionary.footer.links.howItWorks}</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">{dictionary.footer.links.pricing}</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">{dictionary.footer.links.faq}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{dictionary.footer.links.sizingGuide}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">{dictionary.footer.links.resources}</h4>
            <ul className="space-y-3 text-indigo-200 dark:text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">{dictionary.footer.links.documentation}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{dictionary.footer.links.apiReference}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{dictionary.footer.links.caseStudies}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{dictionary.footer.links.blog}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{dictionary.footer.links.partners}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">{dictionary.footer.links.company}</h4>
            <ul className="space-y-3 text-indigo-200 dark:text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">{dictionary.footer.links.aboutUs}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{dictionary.footer.links.careers}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{dictionary.footer.links.contact}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{dictionary.footer.links.pressKit}</Link></li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <h4 className="font-bold text-lg mb-4">{dictionary.footer.links.legal}</h4>
              <ul className="space-y-3 text-indigo-200 dark:text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">{dictionary.footer.links.privacyPolicy}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{dictionary.footer.links.termsOfService}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <p className="text-sm text-indigo-200 dark:text-gray-400">
            {dictionary.footer.copyright.replace('2025', currentYear.toString())}
          </p>
          
          <div className="flex items-center gap-3">
            <span className="text-xs bg-indigo-700 dark:bg-indigo-800/60 py-1 px-3 rounded-full text-indigo-100">{dictionary.footer.beta}</span>
            <span className="text-xs md:text-sm text-indigo-200 dark:text-gray-400">
              {dictionary.footer.launchingSoon}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
