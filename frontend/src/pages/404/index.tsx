import { Button } from '../../components/Button';
import { Error404Icon } from '../../components/Icons';
import * as S from './styles';

export function Page404() {
  return (
    <S.Container>
      <Error404Icon />
      <a href="https://storyset.com/web">Web illustrations by Storyset</a>
      <Button
        path="/home"
        label="Voltar para o início"
      />
    </S.Container>
  );
}
