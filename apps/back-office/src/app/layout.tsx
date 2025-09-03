import './global.css';
import { BrandHead, getBrandColors, AppContainer } from '@restaurante/shared';

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
