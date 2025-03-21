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
  practiceSentences?: string[];
  exercises: Exercise[];
} 