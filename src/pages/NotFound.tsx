import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Collect debug information
    const info = [
      `Current route: ${location.pathname}`,
      `Window location: ${window.location.href}`,
      `User agent: ${navigator.userAgent}`,
      `Screen size: ${window.innerWidth}x${window.innerHeight}`,
      `Available routes: /, /lesson/:id, *`
    ];
    setDebugInfo(info);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline block mb-8">
          Return to Home
        </a>
        
        <div className="text-left bg-white p-4 rounded shadow-sm text-sm">
          <h2 className="font-bold mb-2">Debug Information:</h2>
          <ul className="list-disc pl-5 space-y-1">
            {debugInfo.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
          <div className="mt-4 p-2 bg-gray-100 rounded">
            <p className="font-bold">If you're seeing a blank page:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Check the browser console for errors (F12 or right-click {'>'} Inspect)</li>
              <li>Verify that all required dependencies are installed</li>
              <li>Make sure the data files are correctly formatted</li>
              <li>Clear browser cache and reload</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
