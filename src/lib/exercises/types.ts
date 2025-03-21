import { Exercise, VocabularyItem, Lesson } from "../../data/types";

export type ExerciseType = 'multiple-choice' | 'fill-in-blank' | 'listening' | 'speaking';

export interface ExerciseGenerator {
  type: ExerciseType;
  generate: (lesson: Lesson, count?: number) => Exercise[];
}

export interface ExerciseOptions {
  // The minimum number of options to generate for multiple choice
  minOptions?: number;
  // The maximum number of options to generate for multiple choice
  maxOptions?: number;
  // Include distractors from other lessons
  includeGlobalDistractions?: boolean;
  // Focus on specific vocabulary items (by index)
  focusVocabularyIndices?: number[];
}

export interface ExerciseContext {
  currentLesson: Lesson;
  allLessons?: Lesson[];
} 