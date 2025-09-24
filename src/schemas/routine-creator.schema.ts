import { z } from 'zod';

export const exerciseSchema = z.object({
  name: z.string().min(1, 'El nombre del ejercicio es requerido'),
  duration: z.number().min(1, 'La duración debe ser mayor a 0'),
  durationType: z.enum(['reps', 'seconds', 'minutes']),
  sets: z.number().min(1, 'El número de series debe ser mayor a 0'),
  weight: z.number().min(0, 'El peso debe ser mayor o igual a 0'),
  weightUnit: z.enum(['kg', 'lb']),
  note: z.string().optional(),
});

export const exerciseFormSchema = z.object({
  name: z.string().min(1, 'El nombre del ejercicio es requerido'),
  duration: z
    .string()
    .min(1, 'La duración es requerida')
    .max(4, 'La duración no puede tener más de 4 dígitos')
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) > 0,
      'Debe ser un número mayor a 0'
    ),
  durationType: z.enum(['reps', 'seconds', 'minutes']),
  sets: z
    .string()
    .min(1, 'El número de series es requerido')
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) > 0,
      'Debe ser un número mayor a 0'
    ),
  weight: z
    .string()
    .min(1, 'El peso es requerido')
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0,
      'Debe ser un número mayor o igual a 0'
    ),
  weightUnit: z.enum(['kg', 'lb']),
  note: z.string().optional(),
});

export type Exercise = z.infer<typeof exerciseSchema> & { id: string };
export type ExerciseForm = z.infer<typeof exerciseFormSchema>;
