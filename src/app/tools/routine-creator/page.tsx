// interface RoutineCreatorPageProps {}

import { type Metadata } from 'next';
import { ExerciseList } from '@/components/organisms/exercise-list';
import { RoutineCreatorForm } from '@/components/organisms/forms/routine-creator/routine-creator-form';
import { Typography } from '@/components/ui/typography';
import { Dumbbell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FiTool - Creador de rutinas',
  description:
    'Herramienta para crear rutinas de entrenamiento personalizadas de manera sencilla.',
};

export default function RoutineCreatorPage() {
  return (
    <>
      <article className="">
        <header className="bg-[#297AFF] pt-40 pb-20">
          <div className="flex items-center justify-center gap-3">
            <Dumbbell className="h-8 w-8" />
            <Typography variant="h1">Creador de rutinas</Typography>
          </div>
          <Typography className="text-center mt-2!">
            Crea tu rutina perfecta y compártela fácilmente
          </Typography>
        </header>
        <div className="max-w-4xl m-auto lg:p-16 p-8 space-y-16">
          <section className="text-center space-y-4">
            <Typography variant="large">
              Crea tu programa de entrenamiento y compártelo con tus amigos.
            </Typography>
          </section>
          <RoutineCreatorForm />
          <ExerciseList />
        </div>
      </article>
    </>
  );
}
