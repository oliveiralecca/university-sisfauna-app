import { DataProvider } from './contexts/dataContext';
import { Router } from './Router';

export function App() {
  return (
    <DataProvider>
      <Router />
    </DataProvider>
  );
}
