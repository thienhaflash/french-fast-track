// This file helps manage lesson loading without loading all lessons at once
export const lessonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Function to dynamically import a specific lesson
export const getLesson = async (id: number) => {
  try {
    const module = await import(`./lesson${id}`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load lesson ${id}:`, error);
    return null;
  }
};

// Function to get lesson metadata (without the full content)
export const getLessonMeta = async (id: number) => {
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
export const getAllLessonMeta = async () => {
  const metaPromises = lessonIds.map(id => getLessonMeta(id));
  const metaResults = await Promise.all(metaPromises);
  return metaResults.filter(meta => meta !== null);
}; 