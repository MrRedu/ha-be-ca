// interface RoutineCreatorPageProps {}

import { RoutineCreatorFormCalculator } from '@/components/organisms/forms/routine-creator/routine-creator-form-calculator';
import { Typography } from '@/components/ui/typography';

export default function RoutineCreatorPage() {
  return (
    <>
      <article className="">
        <header className="bg-[#297AFF] pt-40 pb-20">
          <Typography variant="h1">Creador de rutinas</Typography>
        </header>
        <div className="max-w-4xl m-auto lg:p-16 p-8 space-y-16">
          <section className="text-center space-y-4">
            <Typography variant="large">
              Crea tu programa de entrenamiento ordenadamente para poder
              observar tu progreso en el tiempo.
            </Typography>
          </section>
          <RoutineCreatorFormCalculator />
          <div>
            <Typography variant="h2">Rutina</Typography>
          </div>
        </div>
      </article>
    </>
  );
}
