import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type Exercise } from '@/schemas/routine-creator.schema';

interface ExerciseListState {
  exerciseList: Exercise[];
  addExercise: (exercise: Exercise) => void;
  removeExercise: (id: string) => void;
  updateExercise: (id: string, updatedExercise: Exercise) => void;
}

export const useExerciseListStore = create<ExerciseListState>()(
  persist(
    (set) => ({
      exerciseList: [] as Exercise[],
      addExercise: (exercise) =>
        set((state) => ({ exerciseList: [...state.exerciseList, exercise] })),
      removeExercise: (id) =>
        set((state) => ({
          exerciseList: state.exerciseList.filter((ex) => ex.id !== id),
        })),
      updateExercise: (id, updatedExercise) =>
        set((state) => ({
          exerciseList: state.exerciseList.map((ex) =>
            ex.id === id ? updatedExercise : ex
          ),
        })),
    }),
    {
      name: 'exercise-list-storage',
    }
  )
);
