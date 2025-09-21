'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { HarrisBenedictFormCalculator } from '../forms/harris-benedict/harris-benedict-form-calculator';
import { useHarrisBenedictCalculator } from '@/hooks/harris-benedict-calculator/use-harris-benedict-calculator';
import { LEVELS_OPTIONS, TITLE_OPTIONS } from '@/lib/constants';

export const HarrisBenedictCalculator = () => {
  const { objectives, onSubmit, harrisBenedictCalculatorForm } =
    useHarrisBenedictCalculator();

  return (
    <div className="flex flex-col gap-8">
      <Card className="p-6 py-8 md:p-8 md:py-12 lg:p-12 lg:py-16">
        <CardContent className="p-0">
          <HarrisBenedictFormCalculator
            onSubmit={onSubmit}
            form={harrisBenedictCalculatorForm}
          />
        </CardContent>
      </Card>

      {objectives && (
        <>
          <h3 className="font-bold text-2xl text-center">
            {
              TITLE_OPTIONS[
                objectives.objective?.title as keyof typeof TITLE_OPTIONS
              ]
            }
          </h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Nivel</TableHead>
                <TableHead className="w-[250px]">kcal/día</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {objectives.objective &&
                Object.entries(objectives.objective.levels).map(
                  ([level, calories]: [string, string]) => (
                    <TableRow key={level}>
                      <TableCell>
                        {LEVELS_OPTIONS[level as keyof typeof LEVELS_OPTIONS]}
                      </TableCell>
                      <TableCell>{calories} kcal</TableCell>
                    </TableRow>
                  )
                )}
            </TableBody>
          </Table>
        </>
      )}

      {/* {objectives && (
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="cursor-help font-semibold">RMB</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      RMB: <strong>Requerimiento Metabólico Basal</strong>.
                      <br />
                      Es la cantidad mínima de energía (calorías) que tu cuerpo
                      necesita para funcionar en reposo.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell>{objectives.rmb} kcal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="cursor-help font-semibold">TDEE</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      TDEE: <strong>Total Daily Energy Expenditure</strong>.
                      <br />
                      Es la cantidad total de calorías que quemas en un día,
                      incluyendo todas tus actividades diarias.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell>{objectives.tdee} kcal</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )} */}
    </div>
  );
};
