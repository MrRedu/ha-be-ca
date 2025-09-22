'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
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
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Repeat2, Weight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod';

const formSchema = z.object({
  ['exercise-name']: z.string().min(2, {
    message: 'El nombre del ejercicio debe tener al menos 2 caracteres.',
  }),
});

const EXERCISE_DURATIONS_OPTIONS = [
  { label: 'Repeticiones', value: 'reps' },
  { label: 'Segundos', value: 'seconds' },
  { label: 'Minutos', value: 'minutes' },
];

const UNIT_WEIGHT_OPTIONS = [
  { label: 'kg', value: 'kg' },
  { label: 'lb', value: 'lb' },
];

export const RoutineCreatorFormCalculator = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ['exercise-name']: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(JSON.stringify(values, undefined, 2));
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="exercise-name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del ejercicio</FormLabel>
              <FormControl>
                <Input placeholder="Sentadilla con barra libre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full">
          <FormField
            control={form.control}
            name="duration-value"
            render={({ field }) => (
              <FormItem className="w-full ">
                <FormLabel>Duración</FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      placeholder="12"
                      type="number"
                      className="ps-9"
                      {...field}
                    />
                    <div
                      className={
                        'text-muted-foreground pointer-events-none absolute inset-y-0 flex items-center justify-center peer-disabled:opacity-50 start-0 ps-3'
                      }
                    >
                      <Repeat2 className="size-4" strokeWidth={2} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="duration-option"
            render={({ field }) => (
              <FormItem className="min-w-[150px] mt-auto">
                <FormLabel className="sr-only">Opción de duración</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={EXERCISE_DURATIONS_OPTIONS[0].value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {EXERCISE_DURATIONS_OPTIONS.map((duration) => (
                      <SelectItem key={duration.value} value={duration.value}>
                        {duration.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex w-full">
          <FormField
            control={form.control}
            name="weight-value"
            render={({ field }) => (
              <FormItem className="w-full ">
                <FormLabel>Peso</FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      placeholder="220"
                      type="number"
                      className="ps-9"
                      {...field}
                    />
                    <div
                      className={
                        'text-muted-foreground pointer-events-none absolute inset-y-0 flex items-center justify-center peer-disabled:opacity-50 start-0 ps-3'
                      }
                    >
                      <Weight className="size-4" strokeWidth={2} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="duration-option"
            render={({ field }) => (
              <FormItem className="min-w-[150px] mt-auto">
                <FormLabel className="sr-only">Unidad de medida</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={UNIT_WEIGHT_OPTIONS[0].value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {UNIT_WEIGHT_OPTIONS.map((weight) => (
                      <SelectItem key={weight.value} value={weight.value}>
                        {weight.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem className="col-span-3 w-full">
              <FormLabel>Notas</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Notas del ejercicio, consejos, etc."
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
};
