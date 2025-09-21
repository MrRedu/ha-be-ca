import { useState } from 'react';
import { calculateCaloriesByObjective } from '@/lib/utils';
import {
  formCalculatorSchema,
  type FormCalculatorValues,
} from '@/schemas/form-calculator.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export interface UseHarrisBenedictCalculator {
  objectives: ReturnType<typeof calculateCaloriesByObjective> | undefined;
  onSubmit: (values: FormCalculatorValues) => void;
  harrisBenedictCalculatorForm: ReturnType<
    typeof useForm<FormCalculatorValues>
  >;
}

export function useHarrisBenedictCalculator(): UseHarrisBenedictCalculator {
  const [objectives, setObjectives] =
    useState<ReturnType<typeof calculateCaloriesByObjective>>();

  const form = useForm<FormCalculatorValues>({
    resolver: zodResolver(formCalculatorSchema),
    defaultValues: {
      gender: '',
      age: '',
      weight: '',
      height: '',
      activityLevel: '',
      objective: '',
    },
  });

  const onSubmit = (values: FormCalculatorValues) => {
    const finalResults = calculateCaloriesByObjective(values);
    console.log(finalResults);
    setObjectives(finalResults);
  };
  return {
    objectives,
    onSubmit,
    harrisBenedictCalculatorForm: form,
  };
}
