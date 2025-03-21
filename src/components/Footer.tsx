
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-french-muted">
          <span className="font-serif">French<span className="text-french-accent">20</span></span> — Learn French in just 20 days
        </div>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="#" className="text-sm text-french-muted hover:text-french-dark transition-colors">
            About
          </a>
          <a href="#" className="text-sm text-french-muted hover:text-french-dark transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm text-french-muted hover:text-french-dark transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
