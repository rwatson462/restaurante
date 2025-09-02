import './global.css';

export const metadata = {
  title: 'Kitchen - Restaurante',
  description: 'Kitchen order management and preparation tracking',
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
