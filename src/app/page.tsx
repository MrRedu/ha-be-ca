import { HarrisBenedictCalculator } from '@/components/organisms/calculators/harris-benedict-calculator';

export default function HomePage() {
  return (
    <article className="">
      <header className="bg-[#ffe636] pt-32 pb-16">
        <h1 className="font-bold text-5xl text-center ">
          Calculadora de Calorías (Harris-Benedict)
        </h1>
      </header>
      <div className=" max-w-4xl m-auto lg:p-16 p-8 space-y-16">
        <section className="text-xl text-center space-y-4">
          <p>
            Esta <strong>calculadora automática</strong> te indica cuáles son
            las
            <strong>calorías diarias</strong> que gastas (en total) según la
            fórmula de <strong>Harris-Benedict</strong>, la más popular y usada
            en la actualidad.
          </p>
          <p>
            Seguido de este resultado, se incluye una sección que te permite
            calcular <strong>cuántas calorías deberías comer</strong> aprox.
            para ganar peso (ganar músculo) o bajar de peso (definir).
          </p>
        </section>
        <HarrisBenedictCalculator />
      </div>
    </article>
  );
}
