'use client';
import * as React from "react";

export function Accordion({ children, ...props }: { children: React.ReactNode }) {
  return <div {...props}>{children}</div>;
}

export function AccordionItem({ value, title, content }: { 
  value: string; 
  title: React.ReactNode; 
  content: React.ReactNode 
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2 border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div
        role="button"
        tabIndex={0}
        className="w-full text-left py-3 sm:py-4 font-medium sm:font-semibold text-base sm:text-lg flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 transition-colors group cursor-pointer"
        onClick={toggleAccordion}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleAccordion();
          }
        }}
      >
        <span className="transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{title}</span>
        <span className="ml-2 text-indigo-600 dark:text-indigo-400 text-xl sm:text-2xl transition-transform transform group-hover:scale-125">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {isOpen && <div className="pb-3 sm:pb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">{content}</div>}
      </div>
    </div>
  );
}
