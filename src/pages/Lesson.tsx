import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { getLesson } from '../data/lessons/index';
import { Lesson as LessonType, VocabularyItem, Exercise } from '../data/types';
import { ChevronLeft, ChevronRight, Volume2, Check } from 'lucide-react';

const Lesson = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lessonId = parseInt(id || '1');
  
  const [lesson, setLesson] = useState<LessonType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [currentStep, setCurrentStep] = useState<'vocabulary' | 'exercises' | 'completed'>('vocabulary');
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [userInput, setUserInput] = useState('');
  
  useEffect(() => {
    const loadLesson = async () => {
      try {
        const lessonData = await getLesson(lessonId);
        if (!lessonData) {
          setError('Lesson not found');
        } else {
          setLesson(lessonData);
        }
      } catch (error) {
        console.error('Failed to load lesson:', error);
        setError('Failed to load lesson');
      } finally {
        setLoading(false);
      }
    };
    
    loadLesson();
  }, [lessonId]);
  
  if (loading) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <p>Loading lesson...</p>
        </div>
      </Layout>
    );
  }
  
  if (error || !lesson) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <p>{error || 'Lesson not found'}</p>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-french-blue text-white rounded-lg"
          >
            Back to Lessons
          </button>
        </div>
      </Layout>
    );
  }
  
  const handleNext = () => {
    if (currentStep === 'vocabulary') {
      setCurrentStep('exercises');
      return;
    }
    
    if (currentStep === 'exercises') {
      if (currentExerciseIndex < lesson.exercises.length - 1) {
        setCurrentExerciseIndex(currentExerciseIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setUserInput('');
      } else {
        setCurrentStep('completed');
      }
    }
  };
  
  const handleBack = () => {
    if (currentStep === 'exercises' && currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setUserInput('');
      return;
    }
    
    if (currentStep === 'exercises' && currentExerciseIndex === 0) {
      setCurrentStep('vocabulary');
      return;
    }
    
    if (currentStep === 'completed') {
      setCurrentStep('exercises');
      setCurrentExerciseIndex(lesson.exercises.length - 1);
    }
  };
  
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    
    const currentExercise = lesson.exercises[currentExerciseIndex];
    setIsCorrect(answer === currentExercise.answer);
  };
  
  const handleFillInBlankSubmit = () => {
    const currentExercise = lesson.exercises[currentExerciseIndex];
    const isAnswerCorrect = userInput.trim().toLowerCase() === currentExercise.answer.toLowerCase();
    
    setSelectedAnswer(userInput);
    setIsCorrect(isAnswerCorrect);
  };
  
  const handleFinish = () => {
    // In a real app, this would save progress
    navigate('/');
  };
  
  const renderVocabulary = () => (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">Vocabulary</h2>
      
      <div className="grid grid-cols-1 gap-4">
        {lesson.vocabulary.map((item, index) => (
          <VocabularyCard key={index} item={item} />
        ))}
      </div>
      
      <div className="mt-10 flex justify-end">
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-french-blue text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors button-hover"
        >
          Continue to Exercises <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
  
  const renderExercises = () => {
    const currentExercise = lesson.exercises[currentExerciseIndex];
    
    return (
      <div className="w-full max-w-2xl mx-auto animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Exercise {currentExerciseIndex + 1} of {lesson.exercises.length}</h2>
          <span className="text-sm text-french-muted">
            {currentExercise.type === 'multiple-choice' ? 'Multiple Choice' : 'Fill in the Blank'}
          </span>
        </div>
        
        <div className="glass-card p-8 rounded-xl mb-8">
          <h3 className="text-xl mb-6">{currentExercise.question}</h3>
          
          {currentExercise.type === 'multiple-choice' && (
            <div className="space-y-3">
              {currentExercise.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full py-3 px-4 rounded-lg border text-left transition-all ${
                    selectedAnswer === option
                      ? isCorrect
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 hover:border-french-blue hover:bg-blue-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
          
          {currentExercise.type === 'fill-in-blank' && (
            <div className="space-y-4">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your answer here"
                className={`w-full py-3 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-french-blue ${
                  selectedAnswer
                    ? isCorrect
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-red-500 bg-red-50 text-red-700'
                    : ''
                }`}
                disabled={selectedAnswer !== null}
              />
              
              {selectedAnswer === null && (
                <button
                  onClick={handleFillInBlankSubmit}
                  className="px-6 py-2 bg-french-blue text-white rounded-lg hover:bg-blue-700 transition-colors button-hover"
                >
                  Check Answer
                </button>
              )}
            </div>
          )}
          
          {selectedAnswer !== null && (
            <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex items-start">
                <div className={`p-1 rounded-full ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                  {isCorrect ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <span className="text-white text-xs px-1">✕</span>
                  )}
                </div>
                <div className="ml-3">
                  <p className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-red-600 mt-1">
                      The correct answer is: {currentExercise.answer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors button-hover"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          
          {selectedAnswer !== null && (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-french-blue text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors button-hover"
            >
              {currentExerciseIndex < lesson.exercises.length - 1 ? (
                <>Next <ChevronRight className="w-4 h-4" /></>
              ) : (
                <>Complete Lesson <ChevronRight className="w-4 h-4" /></>
              )}
            </button>
          )}
        </div>
      </div>
    );
  };
  
  const renderCompleted = () => (
    <div className="w-full max-w-2xl mx-auto text-center animate-scale-in">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-10 h-10 text-white" />
      </div>
      
      <h2 className="text-3xl font-semibold mb-4">Lesson Completed!</h2>
      <p className="text-french-muted text-lg mb-8">
        You've successfully completed Day {lesson.day}: {lesson.title}
      </p>
      
      <div className="glass-card p-8 rounded-xl mb-12">
        <h3 className="text-xl mb-4">You learned:</h3>
        <ul className="text-left space-y-2">
          {lesson.vocabulary.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <span className="font-medium">{item.french}</span>
              <span className="text-french-muted">— {item.english}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <button
        onClick={handleFinish}
        className="px-8 py-3 bg-french-blue text-white rounded-lg hover:bg-blue-700 transition-colors button-hover"
      >
        Return to Lessons
      </button>
    </div>
  );
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-french-muted hover:text-french-dark transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to lessons
          </button>
        </div>
        
        <div className="mb-8">
          <span className="text-sm font-medium text-french-muted uppercase tracking-wider">
            Day {lesson.day}
          </span>
          <h1 className="text-3xl font-semibold text-french-dark mt-1">{lesson.title}</h1>
          <p className="text-french-muted mt-2">{lesson.description}</p>
        </div>
        
        {currentStep === 'vocabulary' && renderVocabulary()}
        {currentStep === 'exercises' && renderExercises()}
        {currentStep === 'completed' && renderCompleted()}
      </div>
    </Layout>
  );
};

const VocabularyCard: React.FC<{ item: VocabularyItem }> = ({ item }) => {
  const playPronunciation = () => {
    // In a real app, this would play audio
    console.log(`Playing pronunciation: ${item.pronunciation}`);
  };
  
  return (
    <div className="glass-card p-6 rounded-xl transition-all hover:shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-medium">{item.french}</h3>
            <button 
              onClick={playPronunciation}
              className="p-1 text-french-muted hover:text-french-blue transition-colors"
              aria-label="Play pronunciation"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
          <p className="text-french-muted text-sm">{item.english}</p>
        </div>
        <div className="text-sm px-3 py-1 bg-gray-100 rounded-full text-french-muted">
          {item.pronunciation}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
