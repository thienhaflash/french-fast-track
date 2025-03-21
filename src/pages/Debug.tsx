import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getCompletedLessons, getCurrentDay, isVipMode, toggleVipMode, resetProgress, setCurrentDay } from '../lib/progressManager';
import { TOTAL_LESSONS } from '../data/lessons/index';

const Debug = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [currentDay, setCurrentDayState] = useState(1);
  const [vipEnabled, setVipEnabled] = useState(false);
  const [customDay, setCustomDay] = useState('1');
  
  useEffect(() => {
    // Load progress data
    loadProgressData();
  }, []);
  
  const loadProgressData = () => {
    setCompletedLessons(getCompletedLessons());
    setCurrentDayState(getCurrentDay());
    setVipEnabled(isVipMode());
  };
  
  const handleResetProgress = () => {
    resetProgress();
    loadProgressData();
  };
  
  const handleToggleVIP = () => {
    const newValue = toggleVipMode();
    setVipEnabled(newValue);
  };
  
  const handleCompleteLesson = (lessonId: number) => {
    // Simulate lesson completion
    const updatedCompleted = [...completedLessons];
    if (!updatedCompleted.includes(lessonId)) {
      updatedCompleted.push(lessonId);
      localStorage.setItem('frenchFastTrack_completedLessons', JSON.stringify(updatedCompleted));
    }
    
    // Unlock next day if needed
    const nextDay = lessonId + 1;
    if (nextDay > currentDay) {
      setCurrentDay(nextDay);
    }
    
    // Reload data
    loadProgressData();
  };
  
  const handleSetCustomDay = () => {
    const day = parseInt(customDay);
    if (!isNaN(day) && day >= 1 && day <= TOTAL_LESSONS) {
      setCurrentDay(day);
      loadProgressData();
    }
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Debug Panel</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Current Progress</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-french-muted">Completed Lessons:</p>
                <p className="font-medium">{completedLessons.length === 0 ? 'None' : completedLessons.join(', ')}</p>
              </div>
              
              <div>
                <p className="text-sm text-french-muted">Current Unlocked Day:</p>
                <p className="font-medium">{currentDay}</p>
              </div>
              
              <div>
                <p className="text-sm text-french-muted">VIP Mode:</p>
                <p className="font-medium">{vipEnabled ? 'Enabled' : 'Disabled'}</p>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <button 
                onClick={handleResetProgress}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Reset All Progress
              </button>
              
              <button 
                onClick={handleToggleVIP}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  vipEnabled 
                    ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                    : 'bg-yellow-400 text-gray-800 hover:bg-yellow-500'
                }`}
              >
                {vipEnabled ? 'Disable VIP Mode' : 'Enable VIP Mode'}
              </button>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Test Controls</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Mark Lesson as Completed</h3>
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: TOTAL_LESSONS }, (_, i) => i + 1).map(lessonId => (
                    <button
                      key={lessonId}
                      onClick={() => handleCompleteLesson(lessonId)}
                      className={`p-2 rounded-lg transition-colors ${
                        completedLessons.includes(lessonId)
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      {lessonId}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Set Unlocked Day</h3>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    max={TOTAL_LESSONS}
                    value={customDay}
                    onChange={e => setCustomDay(e.target.value)}
                    className="w-20 p-2 border border-gray-300 rounded-lg mr-2"
                  />
                  <button
                    onClick={handleSetCustomDay}
                    className="px-4 py-2 bg-french-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Set Day
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <Link to="/" className="text-french-blue hover:underline">
            Back to Lessons
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Debug; 