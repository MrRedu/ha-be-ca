'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Textarea } from '@/components/ui/textarea';
import { useRoutineCreator } from '@/hooks/routine-creator/use-routine-creator';
import {
  EXERCISE_DURATIONS_OPTIONS,
  UNIT_WEIGHT_OPTIONS,
} from '@/lib/constants';
import { Plus } from 'lucide-react';

export const RoutineCreatorForm = () => {
  const { form, onSubmit } = useRoutineCreator();

  return (
    <>
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Agregar ejercicio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del ejercicio</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Press de banca" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-4 items-start">
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem className="w-full col-span-3">
                      <FormLabel>Duración</FormLabel>
                      <FormControl>
                        <Input placeholder="12" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="durationType"
                  render={({ field }) => (
                    <FormItem className="grid-cols-1">
                      <FormLabel>Tipo</FormLabel>
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
                            <SelectItem
                              key={duration.value}
                              value={duration.value}
                            >
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

              <FormField
                control={form.control}
                name="sets"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de series</FormLabel>
                    <FormControl>
                      <Input placeholder="6" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-4 items-start">
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem className="w-full col-span-3">
                      <FormLabel>Peso</FormLabel>
                      <FormControl>
                        <Input placeholder="220" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="weightUnit"
                  render={({ field }) => (
                    <FormItem className="grid-cols-1">
                      <FormLabel>Unidad</FormLabel>
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
                name="note"
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

              <Button type="submit" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Agregar a la rutina
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};
