import { type FormCalculatorValues } from '@/schemas/form-calculator.schema';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

interface CalculateCaloriesByObjective {
  rmb: string;
  tdee: string;
  objective: {
    title: string;
    levels: Record<string, string>;
  };
}

export const calculateCaloriesByObjective = (
  values: FormCalculatorValues
): CalculateCaloriesByObjective => {
  // Convertir los valores a número
  const weight = Number(values.weight);
  const height = Number(values.height);
  const age = Number(values.age);

  let rmb = 0;
  if (values.gender === 'male') {
    rmb = 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (values.gender === 'female') {
    rmb = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Multiplicadores de actividad física
  let activityMultiplier = 0;
  switch (values.activityLevel) {
    case 'sedentary':
      activityMultiplier = 1.2;
      break;
    case 'lightly-active':
      activityMultiplier = 1.375;
      break;
    case 'moderately-active':
      activityMultiplier = 1.55;
      break;
    case 'very-active':
      activityMultiplier = 1.725;
      break;
    case 'extra-active':
      activityMultiplier = 1.9;
      break;
  }

  const tdee = rmb * activityMultiplier;

  // Objeto para almacenar los resultados
  const results = {
    rmb: rmb.toFixed(2),
    tdee: tdee.toFixed(2),
    objective: { title: '', levels: {} as Record<string, string> },
  };

  if (values.objective === 'lose-weight') {
    results.objective = {
      title: 'calorie-deficit',
      levels: {
        light: (tdee * 0.9).toFixed(2),
        moderate: (tdee * 0.85).toFixed(2),
        aggressive: (tdee * 0.8).toFixed(2),
      },
    };
  } else if (values.objective === 'gain-weight') {
    results.objective = {
      title: 'caloric-surplus',
      levels: {
        light: (tdee * 1.1).toFixed(2),
        moderate: (tdee * 1.15).toFixed(2),
        aggressive: (tdee * 1.2).toFixed(2),
      },
    };
  } else {
    results.objective = {
      title: 'maintenance',
      levels: {
        maintenance: tdee.toFixed(2),
      },
    };
  }

  return results;
};
