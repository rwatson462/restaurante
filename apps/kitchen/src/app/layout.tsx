import './global.css';
import { BrandHead, getBrandColors, AppContainer } from '@restaurante/shared';

export const metadata = {
  title: 'Kitchen - Restaurante',
  description: 'Kitchen order management and preparation tracking',
};

const brandColors = getBrandColors('kitchen');

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
