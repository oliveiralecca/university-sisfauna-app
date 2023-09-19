import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AppLogo } from '../../../../components/AppLogo';
import { Button } from '../../../../components/Button';
import { useAuthContext } from '../../../../contexts/authContext';
import * as S from './styles';

export function NavBar() {
  const { pathname } = useLocation();
  const path = pathname.slice(1);

  const navigate = useNavigate();

  const { logout, user } = useAuthContext();

  return (
    <S.Container>
      <AppLogo onClick={() => navigate('/home')} />

      <S.Navigation>
        <Link to="/home" className={path === 'home' ? 'active' : ''}>Dashboard</Link>
        {/* <Link to="/sobre" className={path === 'sobre' ? 'active' : ''}>Sobre o projeto</Link> */}
        {/* <Link to="/contato" className={path === 'contato' ? 'active' : ''}>Contato</Link> */}
      </S.Navigation>

      <S.UserContent>
        <p>
          Olá,&nbsp;
          <strong>{user?.name}</strong>
        </p>
        <Button path="" label="Logout" onClick={logout} />
      </S.UserContent>
    </S.Container>
  );
}
