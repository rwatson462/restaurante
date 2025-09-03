import './global.css';
import { BrandHead, getBrandColors } from '@restaurante/shared';
import { AppContainer } from '@restaurante/ui-components';

export const metadata = {
  title: 'Front of House - Restaurante',
  description: 'Customer seating and order management',
};

const brandColors = getBrandColors('front-of-house');

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
