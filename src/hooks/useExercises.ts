import { useState, useEffect } from 'react';
import { Lesson, Exercise } from '../data/types';
import { generateMixedExercises, ExerciseOptions } from '../lib/exercises';

interface UseExercisesOptions {
  count?: number;
  exerciseOptions?: ExerciseOptions;
  preferGeneratedExercises?: boolean;
}

/**
 * Custom hook to manage exercises for a lesson
 */
export function useExercises(
  lesson: Lesson | null, 
  options: UseExercisesOptions = {}
) {
  const { 
    count = 6, 
    exerciseOptions,
    preferGeneratedExercises = true
  } = options;
  
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>([]);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [isCorrect, setIsCorrect] = useState<(boolean | null)[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Generate exercises when lesson changes
  useEffect(() => {
    if (!lesson) return;
    
    const generateExercises = async () => {
      try {
        setIsGenerating(true);
        
        // Generate dynamic exercises
        const dynamicExercises = generateMixedExercises(lesson, count, {}, exerciseOptions);
        
        // Choose between dynamic or static exercises based on preference
        const finalExercises = preferGeneratedExercises && dynamicExercises.length > 0
          ? dynamicExercises
          : lesson.exercises;
          
        setExercises(finalExercises);
        setAnswered(new Array(finalExercises.length).fill(false));
        setUserAnswers(new Array(finalExercises.length).fill(null));
        setIsCorrect(new Array(finalExercises.length).fill(null));
        setCurrentIndex(0);
        setError(null);
      } catch (err) {
        console.error('Failed to generate exercises:', err);
        setError(`Failed to generate exercises: ${err instanceof Error ? err.message : String(err)}`);
        
        // Fall back to static exercises if available
        if (lesson.exercises && lesson.exercises.length > 0) {
          setExercises(lesson.exercises);
          setAnswered(new Array(lesson.exercises.length).fill(false));
          setUserAnswers(new Array(lesson.exercises.length).fill(null));
          setIsCorrect(new Array(lesson.exercises.length).fill(null));
        }
      } finally {
        setIsGenerating(false);
      }
    };
    
    generateExercises();
  }, [lesson, count, preferGeneratedExercises]);
  
  const getCurrentExercise = () => exercises[currentIndex] || null;
  
  const answerCurrentExercise = (answer: string) => {
    if (!exercises[currentIndex]) return;
    
    const currentExercise = exercises[currentIndex];
    const correct = isCorrectAnswer(currentExercise, answer);
    
    // Update the state arrays
    const newAnswered = [...answered];
    newAnswered[currentIndex] = true;
    
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentIndex] = answer;
    
    const newIsCorrect = [...isCorrect];
    newIsCorrect[currentIndex] = correct;
    
    setAnswered(newAnswered);
    setUserAnswers(newUserAnswers);
    setIsCorrect(newIsCorrect);
    
    return correct;
  };
  
  const isCorrectAnswer = (exercise: Exercise, answer: string): boolean => {
    // Make comparison more forgiving
    const normalizedInput = answer.trim().toLowerCase();
    const normalizedAnswer = exercise.answer.toLowerCase();
    
    return normalizedInput === normalizedAnswer;
  };
  
  const goToNextExercise = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
      return true;
    }
    return false;
  };
  
  const goToPreviousExercise = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      return true;
    }
    return false;
  };
  
  const regenerateExercises = () => {
    if (!lesson) return;
    
    // Reset state
    setAnswered([]);
    setUserAnswers([]);
    setIsCorrect([]);
    setCurrentIndex(0);
    
    // Regenerate exercises
    const dynamicExercises = generateMixedExercises(lesson, count, {}, exerciseOptions);
    setExercises(dynamicExercises);
    setAnswered(new Array(dynamicExercises.length).fill(false));
    setUserAnswers(new Array(dynamicExercises.length).fill(null));
    setIsCorrect(new Array(dynamicExercises.length).fill(null));
  };
  
  return {
    exercises,
    currentExercise: getCurrentExercise(),
    currentIndex,
    isAnswered: answered[currentIndex] || false,
    userAnswer: userAnswers[currentIndex],
    isCurrentCorrect: isCorrect[currentIndex],
    isGenerating,
    error,
    totalExercises: exercises.length,
    progress: {
      completed: answered.filter(Boolean).length,
      total: exercises.length,
      correct: isCorrect.filter(Boolean).length
    },
    answerCurrentExercise,
    goToNextExercise,
    goToPreviousExercise,
    regenerateExercises
  };
} 