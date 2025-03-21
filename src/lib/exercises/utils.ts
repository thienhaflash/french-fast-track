import { Exercise, VocabularyItem, Lesson } from "../../data/types";
import { ExerciseOptions } from "./types";

/**
 * Shuffle an array using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Get a random item from an array
 */
export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Get random unique items from an array
 */
export function getRandomUniqueItems<T>(array: T[], count: number): T[] {
  if (count >= array.length) {
    return shuffleArray(array);
  }
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, count);
}

/**
 * Generate a unique ID for an exercise
 */
export function generateExerciseId(lesson: Lesson, index: number): number {
  return lesson.id * 100 + index + 1;
}

/**
 * Determine the number of options for multiple choice
 */
export function determineOptionsCount(options?: ExerciseOptions): number {
  const minOptions = options?.minOptions || 3;
  const maxOptions = options?.maxOptions || 4;
  
  // Ensure min is not greater than max
  const validMin = Math.min(minOptions, maxOptions);
  const validMax = Math.max(minOptions, maxOptions);
  
  // Get a random number between min and max
  return validMin + Math.floor(Math.random() * (validMax - validMin + 1));
}

/**
 * Helper to verify the language pair direction
 * e.g. "french-to-english" or "english-to-french"
 */
export type TranslationDirection = "french-to-english" | "english-to-french";

export function getRandomTranslationDirection(): TranslationDirection {
  return Math.random() > 0.5 ? "french-to-english" : "english-to-french";
}

/**
 * Create a question based on translation direction
 */
export function createTranslationQuestion(item: VocabularyItem, direction: TranslationDirection): string {
  if (direction === "french-to-english") {
    return `What does "${item.french}" mean in English?`;
  } else {
    return `How do you say "${item.english}" in French?`;
  }
}

/**
 * Get answer based on translation direction
 */
export function getTranslationAnswer(item: VocabularyItem, direction: TranslationDirection): string {
  return direction === "french-to-english" ? item.english : item.french;
} 