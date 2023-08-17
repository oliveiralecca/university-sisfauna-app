import { AppLogo } from '../../components/AppLogo';
import { Form } from '../../components/Form';
import { OttersImage, TropicalBirdsImage } from '../../components/Icons';
import * as S from './styles';

export type FormPageProps = {
  type: 'register' | 'signin';
};

export function FormPage({ type }: FormPageProps) {
  return (
    <S.Container>
      <S.Left>
        <AppLogo />
        <TropicalBirdsImage />
        <a href="https://storyset.com/nature">Nature illustrations by Storyset</a>
      </S.Left>
      <S.LoginCard>
        <Form type={type} />
      </S.LoginCard>
      <S.Right>
        <OttersImage />
        <a href="https://storyset.com/nature">Nature illustrations by Storyset</a>
      </S.Right>
    </S.Container>
  );
}
