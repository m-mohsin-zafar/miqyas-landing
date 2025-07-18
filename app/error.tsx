"use client";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Something went wrong</h1>
      <p className="text-base sm:text-lg mb-4">An unexpected error has occurred. Please try again.</p>
      <button
        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded text-sm sm:text-base"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </main>
  );
}
