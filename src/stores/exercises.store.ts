import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type Exercise } from '@/schemas/routine-creator.schema';

export interface ExerciseGroup {
  id: string;
  type: 'group';
  exercises: Exercise[];
}

export type RoutineItem = Exercise | ExerciseGroup;

interface ExerciseListState {
  routineItems: RoutineItem[];
  addExercise: (exercise: Exercise) => void;
  removeItem: (id: string) => void;
  removeExerciseFromGroup: (groupId: string, exerciseId: string) => void;
  createGroup: (exerciseIds: string[]) => void;
  moveItem: (fromId: string, toId: string) => void;
}

export const useExerciseListStore = create<ExerciseListState>()(
  persist(
    (set, get) => ({
      routineItems: [],
      addExercise: (exercise) =>
        set((state) => ({
          routineItems: [...state.routineItems, exercise],
        })),
      removeItem: (id) =>
        set((state) => ({
          routineItems: state.routineItems.filter((item) => {
            if ('exercises' in item) return item.id !== id;
            return item.id !== id;
          }),
        })),
      removeExerciseFromGroup: (groupId, exerciseId) =>
        set((state) => ({
          routineItems: state.routineItems.flatMap((item) => {
            if ('exercises' in item && item.id === groupId) {
              const updatedExercises = item.exercises.filter(
                (ex) => ex.id !== exerciseId
              );
              if (updatedExercises.length === 1) {
                return updatedExercises[0];
              }
              return { ...item, exercises: updatedExercises };
            }
            return item;
          }),
        })),
      createGroup: (exerciseIds) =>
        set((state) => {
          const items = state.routineItems;
          const exercises = items.filter(
            (item) => !('exercises' in item) && exerciseIds.includes(item.id)
          ) as Exercise[];
          if (exercises.length < 2) return { routineItems: items };
          const newGroup: ExerciseGroup = {
            id: `group-${Date.now()}`,
            type: 'group',
            exercises,
          };
          const newItems = items.filter(
            (item) => !exerciseIds.includes(item.id)
          );
          // Insert group at the position of the first exercise
          const firstIdx = items.findIndex(
            (item) => item.id === exerciseIds[0]
          );
          newItems.splice(firstIdx, 0, newGroup);
          return { routineItems: newItems };
        }),
      moveItem: (fromId, toId) =>
        set((state) => {
          const items = [...state.routineItems];
          const fromIdx = items.findIndex((item) => item.id === fromId);
          const toIdx = items.findIndex((item) => item.id === toId);
          if (fromIdx === -1 || toIdx === -1) return { routineItems: items };
          const [moved] = items.splice(fromIdx, 1);
          items.splice(toIdx, 0, moved);
          return { routineItems: items };
        }),
    }),
    {
      name: 'exercise-list-storage',
    }
  )
);
