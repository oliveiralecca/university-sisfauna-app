/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from 'react';

import { useAuthContext } from '../../../../contexts/authContext';
import { CheckIcon } from '../../../Icons';
import { Loader } from '../../../Loader';
import * as S from './styles';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {
    registerUser, error, setError, success, loading, setLoading,
  } = useAuthContext();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    registerUser(name, email, password, confirmPassword);
  }

  useEffect(() => {
    if (error && (name || email || password || confirmPassword)) {
      setError('');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email, password, confirmPassword]);

  return (
    <>
      {success ? (
        <S.Success>
          {success}
          <CheckIcon />
        </S.Success>
      ) : (
        <S.FormContainer onSubmit={handleSubmit}>
          <S.Field>
            <label htmlFor="name">Nome</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Insira seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={error ? 'error' : ''}
            />
          </S.Field>
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
          <S.GroupField>
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
            <S.Field>
              <label htmlFor="confirmPassword">Confirmar senha</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={error ? 'error' : ''}
              />
            </S.Field>
          </S.GroupField>
          <button type="submit" disabled={loading}>{loading ? <Loader /> : 'Registrar'}</button>
          {error && <S.Error>{error}</S.Error>}
        </S.FormContainer>
      )}
    </>
  );
}
