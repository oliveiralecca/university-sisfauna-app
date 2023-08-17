import { Link } from 'react-router-dom';

import { FormPageProps } from '../../pages/FormPage';
import { Register } from './components/Register';
import { SignIn } from './components/SignIn';
import * as S from './styles';

type FormProps = FormPageProps;

export function Form({ type }: FormProps) {
  return (
    <S.Container>
      <S.Header>
        <h2>Bem-vindo ao Sisfauna</h2>
        <div>
          {type === 'register' ? 'Já tem conta?' : 'Não tem conta? '}
          {type === 'register' ? <Link to="/signin">Entrar</Link> : <Link to="/registrar">Registrar</Link>}
        </div>
      </S.Header>
      <S.Title>
        {type === 'register' ? 'Registrar' : 'Entrar'}
      </S.Title>
      {type === 'register' ? <Register /> : <SignIn />}
    </S.Container>
  );
}
