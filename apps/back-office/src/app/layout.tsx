import './global.css';
import { BrandHead, getBrandColors } from '@restaurante/shared';
import { AppContainer } from '@restaurante/ui-components';

export const metadata = {
  title: 'Back Office - Restaurante',
  description: 'Restaurant management and administration',
};

const brandColors = getBrandColors('back-office');

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
