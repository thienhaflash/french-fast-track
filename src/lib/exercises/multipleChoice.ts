import { Exercise, VocabularyItem, Lesson } from "../../data/types";
import { ExerciseGenerator, ExerciseOptions } from "./types";
import { 
  shuffleArray, 
  getRandomItem, 
  getRandomUniqueItems, 
  generateExerciseId,
  determineOptionsCount,
  getRandomTranslationDirection,
  createTranslationQuestion,
  getTranslationAnswer
} from "./utils";

/**
 * Generate multiple choice exercises from a lesson's vocabulary
 */
export class MultipleChoiceGenerator implements ExerciseGenerator {
  type = 'multiple-choice' as const;
  
  generate(lesson: Lesson, count: number = 3, options?: ExerciseOptions): Exercise[] {
    // If the lesson has fewer vocabulary items than requested count,
    // adjust the count to match the available vocabulary
    const availableCount = Math.min(count, lesson.vocabulary.length);
    
    // Get random vocabulary items to use for questions
    const selectedVocab = getRandomUniqueItems(lesson.vocabulary, availableCount);
    
    // Generate exercises for each selected vocabulary item
    return selectedVocab.map((vocabItem, index) => {
      const direction = getRandomTranslationDirection();
      const question = createTranslationQuestion(vocabItem, direction);
      const correctAnswer = getTranslationAnswer(vocabItem, direction);
      
      // Determine number of options to generate
      const optionsCount = determineOptionsCount(options);
      
      // Get distractors (incorrect options)
      const distractors = this.generateDistractors(
        lesson.vocabulary,
        vocabItem,
        optionsCount - 1,
        direction
      );
      
      // Combine correct answer with distractors and shuffle
      const allOptions = shuffleArray([correctAnswer, ...distractors]);
      
      return {
        id: generateExerciseId(lesson, index),
        type: this.type,
        question,
        options: allOptions,
        answer: correctAnswer
      };
    });
  }
  
  /**
   * Generate incorrect options (distractors) for multiple choice
   */
  private generateDistractors(
    allVocab: VocabularyItem[],
    currentItem: VocabularyItem,
    count: number,
    direction: 'french-to-english' | 'english-to-french'
  ): string[] {
    // Filter out the current item
    const otherVocab = allVocab.filter(item => 
      direction === 'french-to-english' 
        ? item.english !== currentItem.english 
        : item.french !== currentItem.french
    );
    
    // If we don't have enough vocabulary for distractors, generate some plausible ones
    if (otherVocab.length < count) {
      const available = otherVocab.map(item => 
        direction === 'french-to-english' ? item.english : item.french
      );
      
      // Create additional distractors by modifying the correct answer
      const correctAnswer = direction === 'french-to-english' ? currentItem.english : currentItem.french;
      const additionalDistractors = this.createSyntheticDistractors(correctAnswer, count - available.length);
      
      return [...available, ...additionalDistractors];
    }
    
    // Get random unique vocabulary items for distractors
    const distractorItems = getRandomUniqueItems(otherVocab, count);
    
    // Map to the appropriate language based on direction
    return distractorItems.map(item =>
      direction === 'french-to-english' ? item.english : item.french
    );
  }
  
  /**
   * Create synthetic distractors when we don't have enough real vocabulary
   */
  private createSyntheticDistractors(correctAnswer: string, count: number): string[] {
    const distractors: string[] = [];
    
    for (let i = 0; i < count; i++) {
      // Simple strategy: Add a random prefix or suffix, or remove part of the word
      // In a real app, you would use more sophisticated techniques
      const randomMod = Math.floor(Math.random() * 3);
      let distractor = correctAnswer;
      
      switch (randomMod) {
        case 0: // Add prefix
          distractor = `non-${correctAnswer}`;
          break;
        case 1: // Add suffix
          distractor = `${correctAnswer} (informal)`;
          break;
        case 2: // Remove or change part of the word if it's long enough
          if (correctAnswer.length > 4) {
            const pos = Math.floor(Math.random() * (correctAnswer.length - 2)) + 1;
            distractor = correctAnswer.substring(0, pos) + 
                         String.fromCharCode(correctAnswer.charCodeAt(pos) + 1) + 
                         correctAnswer.substring(pos + 1);
          } else {
            distractor = `${correctAnswer}s`;
          }
          break;
      }
      
      distractors.push(distractor);
    }
    
    return distractors;
  }
}

// Export a singleton instance
export const multipleChoiceGenerator = new MultipleChoiceGenerator(); 