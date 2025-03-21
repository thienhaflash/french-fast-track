// This file now serves as a compatibility layer to maintain backward compatibility with imports
// while also correctly handling the new file structure

import { lessonIds, getLesson, getLessonMeta, getAllLessonMeta } from './lessons/index';

// Re-export the functions from lessons/index.ts
export { lessonIds, getLesson, getLessonMeta, getAllLessonMeta };

// Keep the original type definitions for backward compatibility
export interface Exercise {
  id: number;
  type: 'multiple-choice' | 'fill-in-blank' | 'listening' | 'speaking';
  question: string;
  options?: string[];
  answer: string;
}

export interface VocabularyItem {
  french: string;
  english: string;
  pronunciation: string;
}

export interface Lesson {
  id: number;
  day: number;
  title: string;
  description: string;
  vocabulary: VocabularyItem[];
  exercises: Exercise[];
}

// Backward compatibility for direct imports of the lessons array
// This will load all lessons on demand
export const getLessons = async () => {
  const lessonPromises = lessonIds.map(id => getLesson(id));
  const lessons = await Promise.all(lessonPromises);
  return lessons.filter(lesson => lesson !== null);
};

// Default export for backward compatibility
// Note: This is not efficient as it loads all lessons at once
// and should be avoided in new code in favor of the async methods
let lessons: Lesson[] = [];
// Lazily load all lessons when this module is imported
getLessons().then(loadedLessons => {
  lessons = loadedLessons as Lesson[];
});

export default lessons;
