'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ACTIVITY_LEVELS,
  GENDERS_OPTIONS,
  OBJECTIVE_OPTIONS,
} from '@/lib/constants';
import {
  formCalculatorSchema,
  type FormCalculatorValues,
} from '@/schemas/form-calculator.schema';

// interface FormCalculatorProps {}

export const FormCalculator = () =>
  // props: FormCalculatorProps
  {
    const form = useForm<FormCalculatorValues>({
      resolver: zodResolver(formCalculatorSchema),
      defaultValues: {},
    });

    const onSubmit = (values: FormCalculatorValues) => {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values);
      alert(JSON.stringify(values, undefined, 2));
    };

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 grid grid-cols-2 gap-x-4"
        >
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Género</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona tu sexo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {GENDERS_OPTIONS.map((gender) => (
                      <SelectItem key={gender.value} value={gender.value}>
                        {gender.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Edad</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Introduce tu edad"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Peso</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Introduce el peso en kg"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Altura</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Introduce la altura en cm"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="activityLevel"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>
                  ¿Cuál es tu nivel de actividad física diaria?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona tu nivel de actividad" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {ACTIVITY_LEVELS.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="objective"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>¿Cuál es tu objetivo?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona tu objetivo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {OBJECTIVE_OPTIONS.map((objetive) => (
                      <SelectItem key={objetive.value} value={objetive.value}>
                        {objetive.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="col-span-2">
            Calcular
          </Button>
        </form>
      </Form>
    );
  };
