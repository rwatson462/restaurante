import './global.css';

export const metadata = {
  title: 'Back Office - Restaurante',
  description: 'Restaurant management and administration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
