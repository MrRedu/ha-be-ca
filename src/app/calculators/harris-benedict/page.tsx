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
            <Typography variant="h2">
              Uso de la calculadora de calorías Harris Benedict
            </Typography>
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
            <Typography variant="h2">
              Fórmula de Harris Benedict explicada
            </Typography>
            <Typography>
              La fórmula de <strong>Harris – Benedict</strong> representa el{' '}
              <strong>Ritmo Metabólico Basal (RMB)</strong>, también denominado
              <em>Tasa Metabólica Basal (TMB)</em>, que es la cantidad de
              energía necesaria para mantener las funciones vitales del
              organismo en reposo.
            </Typography>
            <Typography>
              La <strong>fórmula original</strong>, creada en 1918, tiene en
              cuenta el sexo, la edad, el peso y la estatura para calcular el
              metabolismo basal y, posteriormente, estimar el gasto calórico
              total.
            </Typography>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <Typography>
                  Para <strong>hombres</strong>, la fórmula original de
                  Harris-Benedict es la siguiente: <br />
                  RMB = 66 + (13.75 x peso en kg) + (5 x altura en cm) – (6.75 x
                  edad en años)
                </Typography>
              </li>
              <li>
                <Typography>
                  Para <strong>mujeres</strong>, la fórmula es ligeramente
                  diferente: <br />
                  RMB = 655 + (9.56 x peso en kg) + (1.85 x altura en cm) -
                  (4.68 x edad en años)
                </Typography>
              </li>
            </ul>
            <Typography>
              En 1990, Mifflin y St. Jeor revisaron la fórmula original de
              Harris – Benedict <strong>para mejorar la precisión</strong> y
              tener en cuenta las diferencias en el sexo y en la{' '}
              <strong>masa libre de grasa</strong>.
            </Typography>
            <Typography>
              A pesar de que en las fórmulas de Mifflin y St. Jeor no aparece de
              manera explícita el porcentaje de grasa corporal, su investigación
              comparó algunos métodos que sí lo tenían en cuenta. Las ecuaciones
              finales son regresiones lineales utilizando las mismas variables
              (sexo, edad y altura) que Harris-Benedict, simplemente, por
              simplicidad:
            </Typography>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <Typography>
                  <strong>Para hombres</strong>: RMB = (10 x peso en kg) + (6.25
                  x altura en cm) – (5 x edad en años) + 5
                </Typography>
              </li>
              <li>
                <Typography>
                  <strong>Para mujeres</strong>: RMB = (10 x peso en kg) + (6.25
                  x altura en cm) – (5 x edad en años) – 161
                </Typography>
              </li>
            </ul>
            <Typography>
              Estas fórmulas son, en la actualidad, más utilizadas que las
              originales, aunque eso no significa que las de 1918 sean malas
              opciones. Es importante tener en cuenta que todas las fórmulas son
              aproximaciones generales y puede haber variaciones individuales.
            </Typography>
          </section>
        </div>
      </article>
    </>
  );
}
