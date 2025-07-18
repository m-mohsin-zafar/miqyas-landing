import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CTAButton({ 
  children, 
  primary = false, 
  href, 
  ...props 
}: { 
  children: React.ReactNode; 
  primary?: boolean; 
  href?: string;
  [key: string]: any 
}) {
  // If href is provided, wrap Button with Link
  if (href) {
    return (
      <Link href={href} className="inline-block">
        <Button
          className={cn(
            "text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 font-medium sm:font-bold rounded-full transition-all duration-200",
            primary
              ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md sm:shadow-lg"
              : "border border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50"
          )}
          {...props}
        >
          {children}
        </Button>
      </Link>
    );
  }
  
  // Otherwise, return just the Button
  return (
    <Button
      className={cn(
        "text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 font-medium sm:font-bold rounded-full transition-all duration-200",
        primary
          ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md sm:shadow-lg"
          : "border border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50"
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
