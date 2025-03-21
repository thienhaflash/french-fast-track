import { Exercise, VocabularyItem, Lesson } from "../../data/types";
import { ExerciseGenerator, ExerciseOptions } from "./types";
import { 
  getRandomUniqueItems,
  generateExerciseId,
  getRandomTranslationDirection,
  getTranslationAnswer
} from "./utils";

/**
 * Generate fill-in-blank exercises from a lesson's vocabulary
 */
export class FillInBlankGenerator implements ExerciseGenerator {
  type = 'fill-in-blank' as const;
  
  generate(lesson: Lesson, count: number = 3, options?: ExerciseOptions): Exercise[] {
    // If the lesson has fewer vocabulary items than requested count,
    // adjust the count to match the available vocabulary
    const availableCount = Math.min(count, lesson.vocabulary.length);
    
    // Get random vocabulary items to use for questions
    const selectedVocab = getRandomUniqueItems(lesson.vocabulary, availableCount);
    
    // Generate exercises for each selected vocabulary item
    return selectedVocab.map((vocabItem, index) => {
      // For fill-in-blank, we focus on translating from English to French
      // as this is more challenging and appropriate for this format
      const direction = "english-to-french";
      const correctAnswer = getTranslationAnswer(vocabItem, direction);
      
      // Create the question with a format appropriate for fill-in-blank
      const question = this.createFillInBlankQuestion(vocabItem);
      
      return {
        id: generateExerciseId(lesson, index),
        type: this.type,
        question,
        answer: correctAnswer
      };
    });
  }
  
  /**
   * Create a fill-in-blank question based on vocabulary item
   */
  private createFillInBlankQuestion(item: VocabularyItem): string {
    // Choose from a variety of formats to make the exercises more interesting
    const templates = [
      // Basic translation
      `Translate to French: "${item.english}"`,
      
      // Use in a sentence with English context
      `Complete this sentence in French: The French word for "${item.english}" is _____`,
      
      // Pronunciation clue
      `Write the French word that sounds like "${item.pronunciation}" and means "${item.english}"`,
      
      // Simple direct prompt
      `What is the French word for "${item.english}"?`
    ];
    
    // Randomly select a template
    const templateIndex = Math.floor(Math.random() * templates.length);
    return templates[templateIndex];
  }
  
  /**
   * Create an advanced context-based fill-in-blank exercise
   * This is more complex and could be used for advanced lessons
   */
  createContextFilledQuestion(item: VocabularyItem, vocabContext: VocabularyItem[]): string {
    // This would create a more complex contextual exercise
    // where the user needs to fill in a blank in a sentence
    
    // For now, we'll return a simpler implementation
    return `Translate the missing word: "I would like a _____ please." (${item.english})`;
  }
}

// Export a singleton instance
export const fillInBlankGenerator = new FillInBlankGenerator(); 