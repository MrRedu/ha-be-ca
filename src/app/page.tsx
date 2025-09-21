import { Skeleton } from '@/components/ui/skeleton';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';

const CALCULATORS = [
  {
    name: 'Calculadora de Calorías (Harris-Benedict)',
    href: '/calculators/harris-benedict',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="container mx-auto px-4 md:px-6 lg:px-8 my-10">
        <div className="space-y-4">
          <Typography variant="h2" className="border-none">
            Calculadoras
          </Typography>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CALCULATORS.map((calculator) => (
              <li key={calculator.href}>
                <Link href={calculator.href}>
                  <Skeleton className="h-50" />
                  <Typography variant="large">{calculator.name}</Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
