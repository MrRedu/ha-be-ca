// interface footerProps {}

import { Typography } from '../ui/typography';

export const Footer = () => {
  return (
    <>
      <footer className="border-t border-t-slate-200 py-4">
        <Typography variant="muted" className="text-center">
          Copyright 2025 © Todos los derechos reservados.
        </Typography>
      </footer>
    </>
  );
};
