'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white">
          <div className="text-6xl mb-6">⚠️</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Critical Error</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            A critical error occurred that prevented the page from loading. Please try refreshing.
          </p>
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Refresh Page
          </button>
        </div>
      </body>
    </html>
  );
}