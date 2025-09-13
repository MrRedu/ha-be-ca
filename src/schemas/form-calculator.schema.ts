import z from 'zod';
import {
  GENDERS_OPTIONS,
  ACTIVITY_LEVELS,
  OBJECTIVE_OPTIONS,
} from '@/lib/constants';

export const formCalculatorSchema = z.object({
  gender: z.enum(
    GENDERS_OPTIONS.map((g) => g.value),
    {
      error: 'Selecciona un género',
    }
  ),
  age: z
    .string()
    .min(2, 'La edad debe tener al menos 2 dígitos')
    .max(3, 'La edad debe tener como máximo 3 dígitos')
    .refine(
      (val) => {
        const num = parseInt(val, 10);
        return !isNaN(num) && num >= 10;
      },
      {
        message: 'La edad mínima debe ser mayor a 10 años',
      }
    ),
  weight: z
    .string()
    .min(2, 'El peso debe tener al menos 2 dígitos')
    .max(3, 'El peso debe tener como máximo 3 dígitos')
    .refine(
      (val) => {
        const num = parseInt(val, 10);
        return !isNaN(num) && num >= 30;
      },
      {
        message: 'El peso mínimo debe ser mayor a 30kg',
      }
    ),
  height: z
    .string()
    .min(2, 'La altura debe tener al menos 2 dígitos')
    .max(3, 'La altura debe tener como máximo 3 dígitos')
    .refine(
      (val) => {
        const num = parseInt(val, 10);
        return !isNaN(num) && num >= 50;
      },
      {
        message: 'La altura mínima debe ser mayor a 50cm',
      }
    ),
  activityLevel: z.enum(
    ACTIVITY_LEVELS.map((a) => a.value),
    {
      error: 'Selecciona un nivel de actividad',
    }
  ),
  objective: z.enum(
    OBJECTIVE_OPTIONS.map((o) => o.value),
    {
      error: 'Selecciona un objetivo',
    }
  ),
});

export type FormCalculatorValues = z.infer<typeof formCalculatorSchema>;
