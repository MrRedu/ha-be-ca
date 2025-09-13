import { ScrollToTop } from '@/components/atoms/scroll-to-top';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
};
