import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { lessonIds, getAllLessonMeta, getLesson, LessonMeta } from '../data/lessons/index';
import { Lesson, Exercise } from '../data/types';
import { 
  generateExercises, 
  generateMixedExercises,
  multipleChoiceGenerator, 
  fillInBlankGenerator 
} from '../lib/exercises';

const Debug = () => {
  const [metadata, setMetadata] = useState<LessonMeta[]>([]);
  const [fullLesson, setFullLesson] = useState<Lesson | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Exercise generation testing
  const [generatedExercises, setGeneratedExercises] = useState<Exercise[]>([]);
  const [exerciseType, setExerciseType] = useState<'multiple-choice' | 'fill-in-blank' | 'mixed'>('mixed');
  const [exerciseCount, setExerciseCount] = useState(4);

  useEffect(() => {
    const loadMetadata = async () => {
      try {
        console.log('Loading lesson metadata...');
        const meta = await getAllLessonMeta();
        console.log('Metadata loaded:', meta);
        setMetadata(meta || []);
      } catch (err) {
        console.error('Error loading metadata:', err);
        setError(`Error loading metadata: ${err instanceof Error ? err.message : String(err)}`);
      } finally {
        setLoading(false);
      }
    };

    loadMetadata();
  }, []);

  const loadSingleLesson = async (id: number) => {
    try {
      setLoading(true);
      console.log(`Loading lesson ${id}...`);
      const lesson = await getLesson(id);
      console.log(`Lesson ${id} loaded:`, lesson);
      setFullLesson(lesson);
      setError(null);
      
      // Reset generated exercises
      setGeneratedExercises([]);
    } catch (err) {
      console.error(`Error loading lesson ${id}:`, err);
      setError(`Error loading lesson ${id}: ${err instanceof Error ? err.message : String(err)}`);
      setFullLesson(null);
    } finally {
      setLoading(false);
    }
  };
  
  const generateExercisesForDebug = () => {
    if (!fullLesson) return;
    
    try {
      let exercises: Exercise[];
      
      switch (exerciseType) {
        case 'multiple-choice':
          exercises = generateExercises(fullLesson, 'multiple-choice', exerciseCount);
          break;
        case 'fill-in-blank':
          exercises = generateExercises(fullLesson, 'fill-in-blank', exerciseCount);
          break;
        case 'mixed':
        default:
          exercises = generateMixedExercises(fullLesson, exerciseCount);
          break;
      }
      
      setGeneratedExercises(exercises);
    } catch (err) {
      console.error('Error generating exercises:', err);
      setError(`Error generating exercises: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Debug Page</h1>
        
        <div className="mb-8 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-bold mb-2">Environment Information</h2>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-auto">
            {JSON.stringify({
              userAgent: navigator.userAgent,
              windowSize: `${window.innerWidth}x${window.innerHeight}`,
              location: window.location.href,
              availableLessonIds: lessonIds,
            }, null, 2)}
          </pre>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Lesson Metadata</h2>
          {loading && !metadata.length ? (
            <p>Loading metadata...</p>
          ) : error && !metadata.length ? (
            <div className="text-red-500">{error}</div>
          ) : !metadata.length ? (
            <p>No metadata available.</p>
          ) : (
            <div className="bg-gray-100 p-4 rounded">
              <p className="mb-2">{metadata.length} lessons found</p>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-auto">
                {JSON.stringify(metadata, null, 2)}
              </pre>
            </div>
          )}
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Load Single Lesson</h2>
          <div className="flex gap-4 mb-4">
            <select 
              value={selectedLessonId}
              onChange={(e) => setSelectedLessonId(Number(e.target.value))}
              className="px-3 py-2 border rounded"
            >
              {lessonIds.map(id => (
                <option key={id} value={id}>Lesson {id}</option>
              ))}
            </select>
            <button 
              onClick={() => loadSingleLesson(selectedLessonId)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load Lesson'}
            </button>
          </div>
          
          {error && !fullLesson && (
            <div className="text-red-500 mb-4">{error}</div>
          )}
          
          {fullLesson && (
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-bold mb-2">{fullLesson.title}</h3>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-auto">
                {JSON.stringify(fullLesson, null, 2)}
              </pre>
            </div>
          )}
        </div>
        
        {fullLesson && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Exercise Generator Test</h2>
            <div className="flex gap-4 mb-4">
              <select
                value={exerciseType}
                onChange={(e) => setExerciseType(e.target.value as any)}
                className="px-3 py-2 border rounded"
              >
                <option value="mixed">Mixed Exercises</option>
                <option value="multiple-choice">Multiple Choice Only</option>
                <option value="fill-in-blank">Fill in Blank Only</option>
              </select>
              
              <input
                type="number"
                min="1"
                max="10"
                value={exerciseCount}
                onChange={(e) => setExerciseCount(Number(e.target.value))}
                className="px-3 py-2 border rounded w-20"
              />
              
              <button
                onClick={generateExercisesForDebug}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Generate Exercises
              </button>
            </div>
            
            {generatedExercises.length > 0 && (
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold mb-2">Generated {exerciseType} Exercises</h3>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-auto">
                  {JSON.stringify(generatedExercises, null, 2)}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Debug; 