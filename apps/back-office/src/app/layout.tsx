import './global.css';
import { BrandHead, getBrandColors } from '@restaurante/shared';

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
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
