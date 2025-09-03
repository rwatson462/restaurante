import './global.css';
import { BrandHead, getBrandColors } from '@restaurante/shared';
import { AppContainer } from '@restaurante/ui-components';
import { FooterWrapper as Footer } from '@restaurante/shared';

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
          <Footer />
        </AppContainer>
      </body>
    </html>
  );
}
