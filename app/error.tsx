'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In the future (Phase 5), we can log this to Sentry or another error tracking service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">Something went wrong!</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred while loading this section.
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold hover:shadow-lg transition-all shadow-md"
      >
        Try again
      </button>
    </div>
  );
}