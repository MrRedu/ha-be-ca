export const GENDERS_OPTIONS = [
  { value: 'male', label: 'Hombre' },
  { value: 'female', label: 'Mujer' },
];

export const ACTIVITY_LEVELS = [
  {
    value: 'sedentary',
    label: 'Sedentario: poco o ningún ejercicio al día',
  },
  {
    value: 'lightly-active',
    label: 'Actividad ligera: ejercicio ligero o deporte 1-3 días a la semana',
  },
  {
    value: 'moderately-active',
    label:
      'Activad moderada: ejercicio moderado o deporte 3-5 días a la semana',
  },
  {
    value: 'very-active',
    label:
      'Actividad intensa: ejercicio intenso o deporte 6-7 días a la semana',
  },
  {
    value: 'extra-active',
    label: 'Actividad extra activa: ejercicio muy intenso o deporte a diario',
  },
];

export const OBJECTIVE_OPTIONS = [
  { value: 'lose-weight', label: 'Perder peso' },
  { value: 'maintain-weight', label: 'Mantener peso' },
  { value: 'gain-weight', label: 'Ganar peso' },
];

export const TITLE_OPTIONS = {
  'calorie-deficit': 'Las calorías para estar en déficit calórico',
  maintenance: 'Las calorías para mantenimiento',
  'caloric-surplus': 'Las calorías para estar en superávit calórico',
};

export const LEVELS_OPTIONS = {
  light: 'Ligero',
  moderate: 'Moderado',
  aggressive: 'Agresivo',
  maintenance: 'Mantenimiento',
};

export const EXERCISE_DURATIONS_OPTIONS = [
  { label: 'Repeticiones', value: 'reps' },
  { label: 'Segundos', value: 'seconds' },
  { label: 'Minutos', value: 'minutes' },
];

export const UNIT_WEIGHT_OPTIONS = [
  { label: 'kg', value: 'kg' },
  { label: 'lb', value: 'lb' },
];


export const DURATION_TYPES_MAPPING = {
  reps: 'reps',
  seconds: 's',
  minutes: 'min',
} as const;