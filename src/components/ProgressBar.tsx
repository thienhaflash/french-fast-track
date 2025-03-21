
import React from 'react';

interface ProgressBarProps {
  currentDay: number;
  totalDays: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentDay, totalDays }) => {
  const progress = (currentDay / totalDays) * 100;
  
  return (
    <div className="w-full max-w-md mx-auto mb-8 px-4 animate-fade-in">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs uppercase tracking-wider text-french-muted font-medium">Progress</span>
        <span className="text-sm font-medium">
          Day {currentDay} of {totalDays}
        </span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-french-blue to-french-accent rounded-full transition-all duration-700 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-xs text-french-muted">Beginner</span>
        <span className="text-xs text-french-muted">Advanced</span>
      </div>
    </div>
  );
};

export default ProgressBar;
