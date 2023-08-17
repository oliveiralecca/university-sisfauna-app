import { ReactNode } from "react";

import * as S from "./styles";

type ButtonProps = {
  path: string;
  label: string | ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({ path, label, onClick, disabled }: ButtonProps) {
  return (
    <S.StyledButton
      to={path}
      onClick={onClick}
      className={disabled ? "disabled" : ""}
    >
      {label}
    </S.StyledButton>
  );
}
