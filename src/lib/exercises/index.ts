import { Lesson } from "../../data/types";
import { ExerciseType, ExerciseOptions } from "./types";
import { multipleChoiceGenerator } from "./multipleChoice";
import { fillInBlankGenerator } from "./fillInBlank";

// Export all types
export * from "./types";

// Export utility functions
export * from "./utils";

// Export individual generators
export { multipleChoiceGenerator } from "./multipleChoice";
export { fillInBlankGenerator } from "./fillInBlank";

/**
 * Map of all exercise generators by type
 */
const exerciseGenerators = {
  'multiple-choice': multipleChoiceGenerator,
  'fill-in-blank': fillInBlankGenerator,
  // Add new exercise types here
};

/**
 * Generate exercises of a specific type for a lesson
 */
export function generateExercises(
  lesson: Lesson, 
  type: ExerciseType, 
  count: number = 3,
  options?: ExerciseOptions
) {
  const generator = exerciseGenerators[type];
  if (!generator) {
    throw new Error(`Exercise generator for type "${type}" not found`);
  }
  
  return generator.generate(lesson, count, options);
}

/**
 * Generate a mix of different exercise types for a lesson
 */
export function generateMixedExercises(
  lesson: Lesson,
  count: number = 6,
  typeDistribution: Partial<Record<ExerciseType, number>> = {},
  options?: ExerciseOptions
) {
  const results = [];
  
  // Default distribution if not specified
  const distribution: Record<ExerciseType, number> = {
    'multiple-choice': typeDistribution['multiple-choice'] || Math.ceil(count * 0.6),
    'fill-in-blank': typeDistribution['fill-in-blank'] || Math.floor(count * 0.4),
    'listening': typeDistribution['listening'] || 0,
    'speaking': typeDistribution['speaking'] || 0,
  };
  
  // Generate each type of exercise
  for (const [type, typeCount] of Object.entries(distribution) as [ExerciseType, number][]) {
    if (typeCount > 0 && exerciseGenerators[type]) {
      const exercises = exerciseGenerators[type].generate(lesson, typeCount, options);
      results.push(...exercises);
    }
  }
  
  return results;
} 