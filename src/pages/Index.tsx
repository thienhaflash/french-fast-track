import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import LessonCard from '../components/LessonCard';
import { getAllLessonMeta, lessonIds } from '../data/lessons';
import { BookOpen, Clock, CheckCheck } from 'lucide-react';

const Index = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [currentDay, setCurrentDay] = useState(1);
  const [lessons, setLessons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
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
    
    // For demo purposes, let's assume the user has completed the first two lessons
    setCompletedLessons([1, 2]);
    setCurrentDay(3);
  }, []);

  const isLessonCompleted = (lessonId: number) => completedLessons.includes(lessonId);
  const isLessonLocked = (day: number) => day > currentDay;

  // For debugging purposes, let's render fallback content if no lessons are loaded
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="text-center">
            <p>Loading lessons...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="text-center text-red-500">
            <p>Error: {error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!lessons || lessons.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="text-center">
            <p>No lessons found. Please make sure your lesson data is correctly set up.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
        <section className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-semibold text-french-dark mb-4 tracking-tight">
            Learn French in Just 20 Days
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
              <span className="text-french-dark">20 focused lessons</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-french-blue/10 flex items-center justify-center">
                <CheckCheck className="w-5 h-5 text-french-blue" />
              </div>
              <span className="text-french-dark">300+ essential phrases</span>
            </div>
          </div>
        </section>
        
        <ProgressBar currentDay={currentDay} totalDays={20} />
        
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
