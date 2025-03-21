import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProgressBar from '../components/ProgressBar';
import LessonCard from '../components/LessonCard';
import { getAllLessonMeta, LessonMeta, TOTAL_LESSONS } from '../data/lessons/index';
import { BookOpen, Clock, CheckCheck, Star } from 'lucide-react';
import { getCompletedLessons, getCurrentDay, isVipMode, toggleVipMode } from '../lib/progressManager';

const Index = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [currentDay, setCurrentDay] = useState(1);
  const [lessons, setLessons] = useState<LessonMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [vipMode, setVipMode] = useState(false);
  
  useEffect(() => {
    // Load all lesson metadata
    const loadLessons = async () => {
      try {
        console.log('Loading lessons metadata...');
        const lessonMeta = await getAllLessonMeta();
        console.log('Loaded metadata:', lessonMeta);
        setLessons(lessonMeta);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load lessons:', error);
        setError(`Failed to load lessons: ${error instanceof Error ? error.message : String(error)}`);
        setLoading(false);
      }
    };
    
    loadLessons();
    
    // Load user progress from localStorage
    const storedCompletedLessons = getCompletedLessons();
    const storedCurrentDay = getCurrentDay();
    const storedVipMode = isVipMode();
    
    setCompletedLessons(storedCompletedLessons);
    setCurrentDay(storedCurrentDay);
    setVipMode(storedVipMode);
  }, []);

  const isLessonCompleted = (lessonId: number) => completedLessons.includes(lessonId);
  const isLessonLocked = (day: number) => !vipMode && day > currentDay;
  
  const handleToggleVipMode = () => {
    const newVipMode = toggleVipMode();
    setVipMode(newVipMode);
  };

  if (loading) {
    return (
      <Layout>
        <div className="text-center">
          <p>Loading lessons...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center text-red-500">
          <p>Error: {error}</p>
        </div>
      </Layout>
    );
  }

  if (!lessons || lessons.length === 0) {
    return (
      <Layout>
        <div className="text-center">
          <p>No lessons found. Please make sure your lesson data is correctly set up.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-semibold text-french-dark mb-4 tracking-tight">
          Learn French in Just {TOTAL_LESSONS} Days
        </h1>
        <p className="text-french-muted text-lg md:text-xl max-w-2xl mx-auto">
          Master the most essential 20% of French that will help you communicate 
          in 80% of everyday situations.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-french-blue/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-french-blue" />
            </div>
            <span className="text-french-dark">Just 20 minutes a day</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-french-blue/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-french-blue" />
            </div>
            <span className="text-french-dark">{TOTAL_LESSONS} focused lessons</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-french-blue/10 flex items-center justify-center">
              <CheckCheck className="w-5 h-5 text-french-blue" />
            </div>
            <span className="text-french-dark">300+ essential phrases</span>
          </div>
        </div>
        
        {/* VIP Mode Toggle */}
        <div className="mt-8">
          <button 
            onClick={handleToggleVipMode}
            className={`flex items-center gap-2 mx-auto px-4 py-2 rounded-full transition-colors ${
              vipMode 
                ? 'bg-yellow-400 text-gray-800 hover:bg-yellow-500' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            <Star className={`w-4 h-4 ${vipMode ? 'fill-current' : ''}`} />
            <span>{vipMode ? 'VIP Mode: ON' : 'VIP Mode: OFF'}</span>
          </button>
          <p className="text-sm text-french-muted mt-2">
            {vipMode 
              ? 'All lessons are unlocked! Enjoy unlimited access.' 
              : 'Enable VIP Mode to unlock all lessons instantly.'}
          </p>
        </div>
      </section>
      
      <ProgressBar currentDay={currentDay} totalDays={TOTAL_LESSONS} />
      
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="animate-scale-in" style={{ animationDelay: `${lesson.id * 50}ms` }}>
            <LessonCard
              lesson={lesson}
              isCompleted={isLessonCompleted(lesson.id)}
              isLocked={isLessonLocked(lesson.day)}
              currentDay={currentDay}
            />
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Index;
