import { type UseHarrisBenedictCalculator } from '@/hooks/harris-benedict-calculator/use-harris-benedict-calculator';

export interface HarrisBenedictFormCalculatorProps {
  onSubmit: UseHarrisBenedictCalculator['onSubmit'];
  form: UseHarrisBenedictCalculator['harrisBenedictCalculatorForm'];
}
