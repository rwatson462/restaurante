import { BrandColors } from './brand-colors';

interface BrandHeadProps {
  colors: BrandColors;
}

export function BrandHead({ colors }: BrandHeadProps) {
  return (
    <head>
      <style dangerouslySetInnerHTML={{
        __html: `
          :root {
            --brand-primary: ${colors.primary};
            --brand-gradient: ${colors.gradient};
          }
        `
      }} />
    </head>
  );
}