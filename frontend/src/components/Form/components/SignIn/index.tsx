import { useEffect, useState } from 'react';

import { useAuthContext } from '../../../../contexts/authContext';
import { setUserLocation } from '../../../../services/api';
import { Loader } from '../../../Loader';
import * as S from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    login, error, setError, loading, setLoading,
  } = useAuthContext();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);

    e.preventDefault();

    login(email, password);
    setUserLocation();
  }

  useEffect(() => {
    if (error && email && password) {
      setError('');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Field>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Insira seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={error ? 'error' : ''}
        />
      </S.Field>
      <S.Field>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Insira sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={error ? 'error' : ''}
        />
      </S.Field>
      <button type="submit" disabled={loading}>{loading ? <Loader /> : 'Entrar'}</button>
      {error && <S.Error>{error}</S.Error>}
    </S.FormContainer>
  );
}
