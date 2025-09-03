import './global.css';
import { BrandHead, getBrandColors } from '@restaurante/shared';

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
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
