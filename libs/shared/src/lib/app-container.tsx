import './app-container.css';

interface AppContainerProps {
  children: React.ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {
  return (
    <div className="app-container">
      {children}
    </div>
  );
}