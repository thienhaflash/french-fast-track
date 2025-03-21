
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const isLessonPage = location.pathname.includes('/lesson');

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white/80 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 animate-fade-in">
      <Link 
        to="/" 
        className="flex items-center space-x-2 group transition-all duration-300"
      >
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-french-blue to-french-accent flex items-center justify-center shadow-subtle group-hover:shadow-md transition-all duration-300">
          <BookOpen className="text-white w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-lg font-semibold text-french-dark">
            French<span className="text-french-accent">20</span>
          </span>
          <span className="text-xs text-french-muted -mt-1">
            20 days. 20 minutes. C'est tout.
          </span>
        </div>
      </Link>
      
      {isLessonPage && (
        <Link 
          to="/"
          className="px-4 py-2 text-sm text-french-dark hover:text-french-accent transition-colors duration-300"
        >
          Back to Lessons
        </Link>
      )}
    </header>
  );
};

export default Header;
