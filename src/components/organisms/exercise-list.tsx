'use client';

import { useState } from 'react';
import { Dumbbell, Share, Trash2, GripVertical, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  useExerciseListStore,
  type ExerciseGroup,
} from '@/stores/exercises.store';
import { exportToWhatsApp } from '@/lib/utils';
import { Typography } from '../ui/typography';

export const ExerciseList = () => {
  const routineItems = useExerciseListStore((state) => state.routineItems);
  const removeItem = useExerciseListStore((state) => state.removeItem);
  const removeExerciseFromGroup = useExerciseListStore(
    (state) => state.removeExerciseFromGroup
  );
  const createGroup = useExerciseListStore((state) => state.createGroup);
  const moveItem = useExerciseListStore((state) => state.moveItem);

  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  const handleDragStart = (id: string) => setDraggedId(id);
  const handleDragOver = (id: string, e: React.DragEvent) => {
    e.preventDefault();
    setDragOverId(id);
  };
  const handleDragLeave = () => setDragOverId(null);

  const handleDrop = (targetId: string) => {
    if (!draggedId || draggedId === targetId) {
      setDraggedId(null);
      setDragOverId(null);
      return;
    }
    const draggedItem = routineItems.find((item) => item.id === draggedId);
    const targetItem = routineItems.find((item) => item.id === targetId);

    if (!draggedItem || !targetItem) {
      setDraggedId(null);
      setDragOverId(null);
      return;
    }

    // If dropping on a group, add to that group
    if ('exercises' in targetItem && !('exercises' in draggedItem)) {
      // Only allow adding single exercises to group
      const updatedGroup: ExerciseGroup = {
        ...targetItem,
        exercises: [...targetItem.exercises, draggedItem],
      };
      // Remove dragged from list, update group
      const newItems = routineItems
        .filter((item) => item.id !== draggedId)
        .map((item) => (item.id === targetId ? updatedGroup : item));
      useExerciseListStore.setState({ routineItems: newItems });
    }
    // If dropping an individual exercise on another individual exercise, create a group
    else if (!('exercises' in draggedItem) && !('exercises' in targetItem)) {
      createGroup([targetItem.id, draggedItem.id]);
    }
    // Otherwise, just reorder
    else {
      moveItem(draggedId, targetId);
    }

    setDraggedId(null);
    setDragOverId(null);
  };

  const getTotalExercises = () =>
    routineItems.reduce(
      (total, item) =>
        total + ('exercises' in item ? item.exercises.length : 1),
      0
    );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Mi rutina ({getTotalExercises()} ejercicios)</CardTitle>
        {routineItems.length > 0 && (
          <Button
            onClick={() => exportToWhatsApp(routineItems)}
            className="gap-2"
          >
            <Share className="h-4 w-4" />
            Exportar a WhatsApp
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {routineItems.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Dumbbell className="h-12 w-12 mx-auto mb-4" />
            <Typography variant="large">No hay ejercicios aún</Typography>
            {/* <Typography variant="small">
              Agrega tu primer ejercicio para comenzar
            </Typography> */}
            <Typography variant="muted" className="text-xs mt-2">
              (Arrastra ejercicios para crear biseries/triseries o supersets)
            </Typography>
          </div>
        ) : (
          <div className="space-y-4">
            {routineItems.map((item, index) => (
              <div
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(item.id)}
                onDragOver={(e) => handleDragOver(item.id, e)}
                onDragLeave={handleDragLeave}
                onDrop={() => handleDrop(item.id)}
                className={`border rounded-lg p-4 bg-card cursor-move transition-all duration-200 ${
                  dragOverId === item.id
                    ? 'border-primary bg-primary/5 scale-105'
                    : ''
                } ${draggedId === item.id ? 'opacity-50' : ''}`}
              >
                {'exercises' in item ? (
                  <div className="border-l-4 border-l-accent pl-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                        <Users className="h-4 w-4 text-accent" />
                        <Badge variant="secondary" className="text-xs">
                          {item.exercises.length === 2
                            ? 'BISERIE'
                            : item.exercises.length === 3
                            ? 'TRISERIE'
                            : `SUPERSET (${item.exercises.length})`}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Sin descanso entre ejercicios
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {item.exercises.map((exercise, exerciseIndex) => (
                        <div
                          key={exercise.id}
                          className="bg-muted/50 rounded p-3"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">
                                  #{index + 1}.{exerciseIndex + 1}
                                </Badge>
                                <Typography variant="h4">
                                  {exercise.name}
                                </Typography>
                              </div>
                              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {exercise.duration} {exercise.durationType}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {exercise.sets} sets
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {exercise.weight} {exercise.weightUnit}
                                </Badge>
                              </div>
                              {exercise.note && (
                                <Typography
                                  variant="muted"
                                  className="bg-background p-2 rounded"
                                >
                                  📝 {exercise.note}
                                </Typography>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                removeExerciseFromGroup(item.id, exercise.id)
                              }
                              className="text-destructive hover:text-destructive ml-2"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <GripVertical className="h-4 w-4 text-muted-foreground mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            #{index + 1}
                          </Badge>
                          <Typography variant="h4">{item.name}</Typography>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-2">
                          <Badge variant="outline" className="text-xs">
                            {item.duration} {item.durationType}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {item.sets} sets
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {item.weight} {item.weightUnit}
                          </Badge>
                        </div>
                        {item.note && (
                          <Typography
                            variant="muted"
                            className="bg-muted p-2 rounded"
                          >
                            📝 {item.note}
                          </Typography>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
