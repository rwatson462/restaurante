import './global.css';
import { BrandHead, getBrandColors } from '@restaurante/shared';

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
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
