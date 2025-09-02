import './global.css';

export const metadata = {
  title: 'Front of House - Restaurante',
  description: 'Customer seating and order management',
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
