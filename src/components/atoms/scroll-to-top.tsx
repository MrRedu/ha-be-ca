'use client';
import { ChevronUpIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToTop } from '@/lib/utils';

export const ScrollToTop = () => {
  return (
    <Button
      size="lg"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 py-6"
    >
      <ChevronUpIcon className="size-6 " />
    </Button>
  );
};
