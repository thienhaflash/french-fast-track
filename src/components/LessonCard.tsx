import React from 'react';
import { Link } from 'react-router-dom';
import { Lesson } from '../data/types';
import { Check, Lock } from 'lucide-react';

interface LessonCardProps {
  lesson: Lesson | {
    id: number;
    day: number;
    title: string;
    description: string;
    vocabularyCount?: number;
    exercisesCount?: number;
    vocabulary?: any[];
    exercises?: any[];
  };
  isCompleted: boolean;
  isLocked: boolean;
  currentDay: number;
}

const LessonCard: React.FC<LessonCardProps> = ({ 
  lesson, 
  isCompleted, 
  isLocked,
  currentDay 
}) => {
  // Handle both full lesson objects and metadata-only objects
  const vocabularyCount = 'vocabularyCount' in lesson 
    ? lesson.vocabularyCount 
    : (lesson.vocabulary?.length || 0);
  
  const exercisesCount = 'exercisesCount' in lesson 
    ? lesson.exercisesCount 
    : (lesson.exercises?.length || 0);

  return (
    <div 
      className={`relative w-full max-w-sm rounded-xl overflow-hidden transition-all duration-300 ${
        isLocked 
          ? 'opacity-60 pointer-events-none' 
          : 'hover:shadow-elevated hover:translate-y-[-2px]'
      }`}
    >
      <Link 
        to={isLocked ? '#' : `/lesson/${lesson.id}`}
        className="block h-full"
      >
        <div className="glass-card h-full p-5 flex flex-col">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <span className="inline-block px-3 py-1 bg-gray-100 text-french-muted rounded-full text-xs font-medium">
                Day {lesson.day}
              </span>
              {currentDay === lesson.day && (
                <span className="ml-2 px-3 py-1 bg-french-blue/10 text-french-blue rounded-full text-xs font-medium animate-pulse-subtle">
                  Today
                </span>
              )}
            </div>
            
            <div className="w-8 h-8 flex items-center justify-center rounded-full">
              {isCompleted ? (
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              ) : isLocked ? (
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <Lock className="w-3 h-3 text-gray-500" />
                </div>
              ) : (
                <div className="w-2 h-2 bg-french-blue rounded-full" />
              )}
            </div>
          </div>
          
          <h3 className="mt-4 text-xl font-medium">{lesson.title}</h3>
          
          <p className="mt-2 text-french-muted text-sm line-clamp-2">
            {lesson.description}
          </p>
          
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <div className="text-xs text-french-muted">
              {vocabularyCount} phrases • {exercisesCount} exercises
            </div>
            <div className="text-xs font-medium text-french-accent">
              20 mins
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LessonCard;
