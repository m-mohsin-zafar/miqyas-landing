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
import { FaRocket, FaGift } from 'react-icons/fa';

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
        <DialogContent className="sm:max-w-md max-w-[90vw] p-0 overflow-hidden border-0 shadow-lg">
          {/* Top color bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500"></div>
          
          <DialogHeader className="relative pt-4 pb-2 px-4 md:px-6">
            {/* Compact coming soon badge */}
            <div className="flex items-center justify-center mb-2">
              <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                </span>
                Coming Soon
              </span>
            </div>
            
            <DialogTitle className="text-xl sm:text-2xl font-bold text-center">
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">MIQYAS</span>
              <span className="relative ml-1 inline-block">
                <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  Launching Soon
                </span>
              </span>
            </DialogTitle>
            
            <DialogDescription className="text-center text-xs sm:text-sm mt-2 text-gray-600 dark:text-gray-300">
              Be among the first to experience our AI sizing technology
            </DialogDescription>
          </DialogHeader>
        
        {/* Simplified content */}
        <div className="py-3 px-4 md:px-6 space-y-3 relative z-10">
          {/* Main feature card - simplified */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/30">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg text-white">
                <FaRocket className="text-xs sm:text-sm" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Launching Summer 2025</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-0.5 text-xs">
                  Join our waitlist for early access & special benefits.
                </p>
              </div>
            </div>
          </div>
          
          {/* Condensed benefits section */}
          <div className="bg-white dark:bg-gray-800/90 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                <FaGift className="text-xs sm:text-sm" />
              </div>
              <div>
                <h4 className="font-medium text-sm text-gray-900 dark:text-white">Waitlist Benefits</h4>
                <ul className="mt-1 space-y-0.5 text-xs text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                    <span>Early access & priority onboarding</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                    <span>Special founding member pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter className="p-3 sm:p-4 flex-row gap-2 relative z-10">
          <Button 
            variant="outline" 
            onClick={handleClose}
            className="flex-1 py-2 text-xs font-medium border hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Explore First
          </Button>
          <Button 
            className="flex-1 py-2 text-xs font-medium bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white" 
            onClick={() => {
              handleClose();
              // Scroll to contact section with a slight delay to ensure modal is closed
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          >
            <span>Join Waitlist</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5 animate-pulse">
              <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 12H4.75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
