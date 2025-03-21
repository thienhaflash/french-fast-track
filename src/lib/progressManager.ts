/**
 * Progress Manager - handles user's lesson progress and VIP mode
 */

// Storage keys
const COMPLETED_LESSONS_KEY = 'frenchFastTrack_completedLessons';
const CURRENT_DAY_KEY = 'frenchFastTrack_currentDay';
const VIP_MODE_KEY = 'frenchFastTrack_vipMode';

/**
 * Get the array of completed lesson IDs from localStorage
 */
export const getCompletedLessons = (): number[] => {
  try {
    const saved = localStorage.getItem(COMPLETED_LESSONS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Failed to get completed lessons:', error);
    return [];
  }
};

/**
 * Save a lesson as completed and unlock the next one
 */
export const completeLesson = (lessonId: number): void => {
  try {
    const completedLessons = getCompletedLessons();
    
    // Only add if not already completed
    if (!completedLessons.includes(lessonId)) {
      completedLessons.push(lessonId);
      localStorage.setItem(COMPLETED_LESSONS_KEY, JSON.stringify(completedLessons));
    }
    
    // Also update current day to unlock next lesson
    const currentDay = getCurrentDay();
    const nextDay = lessonId + 1;
    
    if (nextDay > currentDay) {
      setCurrentDay(nextDay);
    }
  } catch (error) {
    console.error('Failed to save lesson completion:', error);
  }
};

/**
 * Get the current day/lesson the user has access to
 */
export const getCurrentDay = (): number => {
  try {
    const saved = localStorage.getItem(CURRENT_DAY_KEY);
    return saved ? parseInt(saved) : 1; // Default to day 1
  } catch (error) {
    console.error('Failed to get current day:', error);
    return 1;
  }
};

/**
 * Set the current day/lesson the user has access to
 */
export const setCurrentDay = (day: number): void => {
  try {
    localStorage.setItem(CURRENT_DAY_KEY, day.toString());
  } catch (error) {
    console.error('Failed to set current day:', error);
  }
};

/**
 * Check if VIP mode is enabled
 */
export const isVipMode = (): boolean => {
  try {
    const saved = localStorage.getItem(VIP_MODE_KEY);
    return saved ? JSON.parse(saved) : false;
  } catch (error) {
    console.error('Failed to check VIP mode:', error);
    return false;
  }
};

/**
 * Toggle VIP mode on or off
 */
export const toggleVipMode = (enabled?: boolean): boolean => {
  try {
    const newValue = enabled !== undefined ? enabled : !isVipMode();
    localStorage.setItem(VIP_MODE_KEY, JSON.stringify(newValue));
    return newValue;
  } catch (error) {
    console.error('Failed to toggle VIP mode:', error);
    return false;
  }
};

/**
 * Reset all progress (for testing)
 */
export const resetProgress = (): void => {
  localStorage.removeItem(COMPLETED_LESSONS_KEY);
  localStorage.removeItem(CURRENT_DAY_KEY);
}; 