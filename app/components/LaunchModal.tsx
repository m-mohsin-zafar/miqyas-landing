'use client';

import { useEffect, useState } from 'react';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { FaCalendarCheck, FaEnvelope, FaBell, FaGift, FaRocket } from 'react-icons/fa';

export default function LaunchModal() {
  // Use a single isMounted state to prevent hydration issues
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mark component as mounted (client-side only code)
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    // Only access localStorage after the component is mounted
    if (isMounted) {
      const hasSeenModal = localStorage.getItem('miqyas-modal-seen');
      
      if (!hasSeenModal) {
        // Show modal after a small delay for better UX
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1000);
        
        return () => clearTimeout(timer);
      }
    }
  }, [isMounted]); // Run only when isMounted changes

  const handleClose = () => {
    // Mark the modal as seen (with safety check for localStorage)
    if (isMounted) {
      localStorage.setItem('miqyas-modal-seen', 'true');
    }
    setIsOpen(false);
  };


  // Only render on client-side to prevent hydration mismatch
  if (!isMounted) {
    return null;
  }
  
  return (
    <Dialog 
      open={isOpen} 
      onOpenChange={(open) => {
        if (!open) handleClose();
        setIsOpen(open);
      }}>
        <DialogContent className="sm:max-w-md lg:max-w-2xl p-0 overflow-hidden border-0 shadow-2xl">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.1),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.15),transparent_25%)] z-0"></div>
          
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500"></div>
          
          <DialogHeader className="relative pt-10 px-8 md:px-12">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-10 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-30 blur-3xl -z-10"></div>
            
            <div className="flex items-center justify-center mb-8">
              <span className="px-5 py-2.5 bg-gradient-to-r from-indigo-100 to-blue-50 dark:from-indigo-900/60 dark:to-blue-900/40 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-semibold shadow-sm flex items-center gap-2.5">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-indigo-600"></span>
                </span>
                Coming Soon
              </span>
            </div>
            
            <DialogTitle className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">MIQYAS</span> is 
              <span className="relative ml-2 inline-block">
                <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  Launching Soon!
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></span>
              </span>
            </DialogTitle>
            
            <DialogDescription className="text-center text-lg mt-6 text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              Be the first to experience our revolutionary AI-powered sizing technology 
              that's transforming fashion retail forever
            </DialogDescription>
            
            {/* Decorative label */}
            <div className="absolute -right-12 top-8 rotate-45 bg-indigo-600 dark:bg-indigo-700 px-10 py-1 text-sm text-white font-medium shadow-md">
              Beta Access
            </div>
          </DialogHeader>
        
        {/* Launch timeline - Improved UI */}
        <div className="py-10 px-8 md:px-12 space-y-6 relative z-10">
          {/* Main feature card */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800/40 shadow-md hover:shadow-lg transition-all group">
            <div className="flex items-start gap-5">
              <div className="p-4 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl text-white shadow-lg group-hover:scale-105 transition-transform">
                <FaRocket className="text-2xl" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 dark:text-white">Launching Summer 2025</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2.5 leading-relaxed">
                  We're putting the final touches on MIQYAS. Join our exclusive waitlist to be the first to know when we launch and receive special early adopter benefits reserved for our founding members!
                </p>
              </div>
            </div>
          </div>
          
          {/* Feature cards - 2 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-gray-800/90 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-blue-100 dark:bg-blue-900/40 rounded-xl text-blue-600 dark:text-blue-400 shadow-md group-hover:bg-blue-200 dark:group-hover:bg-blue-900/60 transition-colors">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">Priority Access</h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                    Skip the line! Waitlist members will be the first to access our platform when we go live with premium onboarding support.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800/90 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-purple-100 dark:bg-purple-900/40 rounded-xl text-purple-600 dark:text-purple-400 shadow-md group-hover:bg-purple-200 dark:group-hover:bg-purple-900/60 transition-colors">
                  <FaGift className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">Exclusive Perks</h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                    Early access members receive premium features at no additional cost and lifetime discounted pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits section with glass morphism effect */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 dark:from-indigo-700 dark:to-blue-800 p-7 rounded-xl text-white shadow-xl backdrop-blur-sm relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
            
            <h4 className="font-bold text-xl mb-4 relative z-10">Exclusive Waitlist Benefits</h4>
            <ul className="space-y-3 mb-4 relative z-10">
              <li className="flex items-center gap-3.5">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                </span>
                <span className="font-medium text-lg">Early access to all premium features</span>
              </li>
              <li className="flex items-center gap-3.5">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                </span>
                <span className="font-medium text-lg">Special founding member pricing (50% off)</span>
              </li>
              <li className="flex items-center gap-3.5">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                </span>
                <span className="font-medium text-lg">Priority support & custom feature requests</span>
              </li>
            </ul>
            <div className="text-base mt-6 text-white/90 flex items-center gap-2 relative z-10">
              <FaBell className="text-amber-300" />
              <span>Limited spots available for founding members</span>
            </div>
          </div>
        </div>
        
        <DialogFooter className="p-8 md:px-12 pt-2 pb-8 sm:justify-between flex-row gap-4 relative z-10">
          <Button 
            variant="outline" 
            onClick={handleClose}
            className="flex-1 py-6 text-gray-700 dark:text-gray-200 text-base font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            Explore First
          </Button>
          <Button 
            className="flex-1 py-6 text-base font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all" 
            onClick={() => {
              handleClose();
              // Scroll to contact section with a slight delay to ensure modal is closed
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          >
            <span className="mr-2.5">Join Waitlist</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
              <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 12H4.75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </DialogFooter>
        
        {/* Add a subtle pattern overlay to the entire modal */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEuOSAyLjEgMi4xdjE5LjhjMCAxLjItLjkgMi4xLTIuMSAyLjFIMTguMWMtMS4yIDAtMi4xLS45LTIuMS0yLjFWMjAuMWMwLTEuMi45LTIuMSAyLjEtMi4xaDE3Ljh6IiBzdHJva2U9InJnYmEoMTAwLDExNiwyMzksMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTQyIDZjMS4yIDAgMi4xLjkgMi4xIDIuMXYxOS44YzAgMS4yLS45IDIuMS0yLjEgMi4xSDI0LjFjLTEuMiAwLTIuMS0uOS0yLjEtMi4xVjguMWMwLTEuMi45LTIuMSAyLjEtMi4xaDE3Ljh6IiBzdHJva2U9InJnYmEoMTAwLDExNiwyMzksMC4wNikiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
      </DialogContent>
    </Dialog>
  );
}
