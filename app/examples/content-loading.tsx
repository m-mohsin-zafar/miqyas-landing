'use client';

import { useState, useEffect, Suspense } from 'react';
import { getFeatureGridContent } from '@/lib/utils/content/content-loader';
import { fetchFeatureGridContent } from '@/lib/utils/content/dynamic-content-loader';
import { FeatureGridContent } from '@/lib/types/content';
import { DynamicIcon } from '@/lib/utils/icons/dynamic-icon';

// Component that uses static content
function StaticFeatureExample() {
  const { features } = getFeatureGridContent();
  const firstFeature = features[0];
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
      <h3 className="font-bold mb-2">Static Content</h3>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
          <DynamicIcon iconName={firstFeature.icon} className="text-sm" />
        </div>
        <span>{firstFeature.title}</span>
      </div>
    </div>
  );
}

// Component that uses dynamic content
function DynamicFeatureExample() {
  const [content, setContent] = useState<FeatureGridContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function loadContent() {
      try {
        const data = await fetchFeatureGridContent();
        setContent(data);
      } catch (err) {
        setError('Failed to load content');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    
    loadContent();
  }, []);
  
  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md animate-pulse">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-3/4"></div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    );
  }
  
  if (error || !content) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
        <h3 className="font-bold mb-2">Dynamic Content</h3>
        <p className="text-red-500">{error || 'No content available'}</p>
      </div>
    );
  }
  
  const firstFeature = content.features[0];
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
      <h3 className="font-bold mb-2">Dynamic Content</h3>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
          <DynamicIcon iconName={firstFeature.icon} className="text-sm" />
        </div>
        <span>{firstFeature.title}</span>
      </div>
    </div>
  );
}

export default function ContentExamplePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Content Loading Examples</h1>
      <p className="mb-6">
        This page demonstrates both static and dynamic content loading approaches.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StaticFeatureExample />
        
        <Suspense fallback={
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md animate-pulse">
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        }>
          <DynamicFeatureExample />
        </Suspense>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">When to use each approach:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Static imports:</strong> Use for content that rarely changes 
            and is known at build time. Fastest performance but requires rebuilding to update.
          </li>
          <li>
            <strong>API fetching:</strong> Use for content that changes frequently
            or needs to be updated without rebuilding. More flexible but slightly slower.
          </li>
        </ul>
      </div>
    </div>
  );
}
