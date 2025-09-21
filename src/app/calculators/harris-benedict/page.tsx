// interface CalculatorHarrisBenedictPageProps {}

import { HarrisBenedictCalculator } from '@/components/organisms/calculators/harris-benedict-calculator';
import { Typography } from '@/components/ui/typography';

export default function CalculatorHarrisBenedictPage() {
  return (
    <>
      <article className="">
        <header className="bg-[#297AFF] pt-40 pb-20">
          <Typography variant="h1">
            Calculadora de Calorías (Harris-Benedict)
          </Typography>
        </header>
        <div className="max-w-4xl m-auto lg:p-16 p-8 space-y-16">
          <section className="text-center space-y-4">
            <Typography variant="large">
              Esta <strong>calculadora automática</strong> te indica cuáles son
              las <strong>calorías diarias</strong> que gastas (en total) según
              la fórmula de <strong>Harris-Benedict</strong>, la más popular y
              usada en la actualidad.
            </Typography>
            <Typography variant="large">
              Seguido de este resultado, se incluye una sección que te permite
              calcular <strong>cuántas calorías deberías comer</strong> aprox.
              para ganar peso (ganar músculo) o bajar de peso (definir).
            </Typography>
          </section>
          <HarrisBenedictCalculator />
          <section className="space-y-4">
            <Typography variant="h2">¿Cómo funciona?</Typography>
            <Typography>
              En el ámbito de la{' '}
              <strong>salud, la nutrición y el ejercicio</strong>, es
              fundamental comprender y calcular las calorías necesarias para
              mantener, aumentar o disminuir el peso corporal.
            </Typography>
            <Typography>
              La fórmula de <strong>{`Harris – Benedict`}</strong>, desarrollada
              en 1918, es ampliamente utilizada para estimar las calorías
              diarias necesarias para el metabolismo basal y la actividad
              física. Concretamente,{' '}
              <strong>la variante más utilizada en la actualidad</strong>
              es la propuesta por <strong>Mifflin y St. Jeor en 1990</strong> a
              partir de una revisión de la original.
            </Typography>
            <Typography>
              A continuación, exploraremos en detalle esta fórmula, su utilidad
              y sus limitaciones, y también discutiremos alternativas y enfoques
              adicionales para deportistas y personas que buscan controlar su
              peso.
            </Typography>
          </section>
        </div>
      </article>
    </>
  );
}
