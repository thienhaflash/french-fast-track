// This file helps manage lesson loading without loading all lessons at once

// Define the total number of lessons
export const TOTAL_LESSONS = 20;

// Generate the lesson IDs based on total lessons
export const lessonIds = Array.from({ length: TOTAL_LESSONS }, (_, i) => i + 1);

// Function to dynamically import a specific lesson
export const getLesson = async (id: number) => {
  try {
    if (id < 1 || id > TOTAL_LESSONS) {
      throw new Error(`Lesson ID ${id} is out of range (1-${TOTAL_LESSONS})`);
    }
    const module = await import(`./lesson${id}`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load lesson ${id}:`, error);
    return null;
  }
};

// Create a type for lesson metadata
export interface LessonMeta {
  id: number;
  day: number;
  title: string;
  description: string;
  vocabularyCount: number;
  exercisesCount: number;
}

// Function to get lesson metadata (without the full content)
export const getLessonMeta = async (id: number): Promise<LessonMeta | null> => {
  try {
    const lesson = await getLesson(id);
    if (!lesson) return null;
    
    // Return just the metadata without the full vocabulary and exercises
    return {
      id: lesson.id,
      day: lesson.day,
      title: lesson.title,
      description: lesson.description,
      vocabularyCount: lesson.vocabulary.length,
      exercisesCount: lesson.exercises.length
    };
  } catch (error) {
    console.error(`Failed to get lesson metadata for ${id}:`, error);
    return null;
  }
};

// Function to get all lesson metadata (for the index page)
export const getAllLessonMeta = async (): Promise<LessonMeta[]> => {
  const metaPromises = lessonIds.map(id => getLessonMeta(id));
  const metaResults = await Promise.all(metaPromises);
  return metaResults.filter((meta): meta is LessonMeta => meta !== null);
}; 