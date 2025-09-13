import {
  Card,
  // CardAction,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from '@/components/ui/card';
import { FormCalculator } from './form-calculator';

// interface CalculatorProps {}

export const Calculator = () =>
  // props: CalculatorProps
  {
    return (
      <Card className="p-12">
        {/* <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader> */}
        <CardContent>
          <FormCalculator />
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    );
  };
