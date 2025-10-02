import {
  Exercise,
  type ExerciseForm,
  exerciseFormSchema,
} from '@/schemas/routine-creator.schema';
import { useExerciseListStore } from '@/stores/exercises.store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export function useRoutineCreator() {
  const addExercise = useExerciseListStore((state) => state.addExercise);

  const form = useForm<ExerciseForm>({
    resolver: zodResolver(exerciseFormSchema),
    defaultValues: {
      name: '',
      duration: '',
      durationType: 'reps',
      sets: '',
      weight: '',
      weightUnit: 'kg',
      note: '',
    },
  });

  const onSubmit = (data: ExerciseForm) => {
    const newExercise: Exercise = {
      id: Date.now().toString(),
      name: data.name,
      duration: Number(data.duration),
      durationType: data.durationType,
      sets: Number(data.sets),
      weight: Number(data.weight),
      weightUnit: data.weightUnit,
      note: data.note || '',
    };

    addExercise(newExercise);
    form.reset();
  };

  return {
    form,
    onSubmit,
    reset: () => form.reset(),
  };
}
