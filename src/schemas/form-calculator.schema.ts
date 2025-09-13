import z from 'zod';

export const formCalculatorSchema = z.object({
  gender: z.enum(['male', 'female']),
  age: z.number().min(10).max(120),
  weight: z.number().min(30).max(300),
  height: z.number().min(50).max(300),
  activityLevel: z.enum([
    'sedentary',
    'lightly-active',
    'moderately-active',
    'very-active',
    'extra-active',
  ]),
  objective: z.enum(['lose-weight', 'maintain-weight', 'gain-weight']),
});

export type FormCalculatorValues = z.infer<typeof formCalculatorSchema>;