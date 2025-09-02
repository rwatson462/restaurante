import './global.css';
import { getBrandColors } from '@restaurante/shared';

export const metadata = {
  title: 'Reservations - Restaurante',
  description: 'Table booking and reservation management',
};

const colors = getBrandColors('reservations');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
