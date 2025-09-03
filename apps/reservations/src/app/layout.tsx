import './global.css';
import { BrandHead, getBrandColors } from '@restaurante/shared';
import { AppContainer } from '@restaurante/ui-components';

export const metadata = {
  title: 'Reservations - Restaurante',
  description: 'Table booking and reservation management',
};

const brandColors = getBrandColors('reservations');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <BrandHead colors={brandColors} />
      <body>
        <AppContainer>
          {children}
        </AppContainer>
      </body>
    </html>
  );
}
