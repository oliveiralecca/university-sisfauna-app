import { Outlet } from 'react-router-dom';

import { Container } from '../../components/Container';
import { NavBar } from './components/NavBar';

export function DefaultLayout() {
  return (
    <Container>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
