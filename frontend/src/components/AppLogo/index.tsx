import { BirdIcon } from '../Icons';
import * as S from './styles';

type AppLogoProps = {
  onClick?: () => void;
}

export function AppLogo({ onClick }: AppLogoProps) {
  return (
    <S.Logo onClick={onClick}>
      <BirdIcon />
      <h4>Sisfauna App</h4>
    </S.Logo>
  );
}
