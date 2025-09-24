'use client';

import { Dumbbell, Share, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { useExerciseListStore } from '@/stores/exercises.store';
import { exportToWhatsApp } from '@/lib/utils';
import { Typography } from '../ui/typography';

// interface ExerciseListProps {}

export const ExerciseList = () => {
  const exercises = useExerciseListStore((state) => state.exerciseList);
  const removeExercise = useExerciseListStore((state) => state.removeExercise);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Mi rutina ({exercises.length} ejercicios)</CardTitle>
        {exercises.length > 0 && (
          <Button onClick={() => exportToWhatsApp(exercises)} className="gap-2">
            <Share className="h-4 w-4" />
            Exportar a WhatsApp
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {exercises.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Dumbbell className="h-12 w-12 mx-auto mb-4" />
            <Typography variant="large">No hay ejercicios aún</Typography>
            <Typography variant="muted">
              Agrega tu primer ejercicio para comenzar
            </Typography>
          </div>
        ) : (
          <div className="space-y-4">
            {exercises.map((exercise, index) => (
              <div key={exercise.id} className="border rounded-lg p-4 bg-card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        #{index + 1}
                      </Badge>
                      <Typography variant="h4">{exercise.name}</Typography>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-2">
                      <Badge variant="outline" className="text-xs">
                        {exercise.duration} {exercise.durationType}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {exercise.sets} sets
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {exercise.weight}
                        {exercise.weightUnit}
                      </Badge>
                    </div>

                    {exercise.note && (
                      <Typography
                        variant="muted"
                        className="bg-muted p-2 rounded"
                      >
                        📝 {exercise.note}
                      </Typography>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeExercise(exercise.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
