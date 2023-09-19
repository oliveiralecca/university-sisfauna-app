import { ReactNode } from "react";

import { Select } from "../Select";
import * as S from "./styles";

export type BoxProps = {
  size: "s" | "m" | "l";
  title: string;
  boxId: string;
  options?: { value: string; text: string }[];
  $hasSelect?: boolean;
  $hasList?: boolean;
  children?: ReactNode;
  $error?: string;
};

export function Box({
  size,
  title,
  boxId,
  options,
  $hasSelect,
  $hasList,
  children,
  $error,
}: BoxProps) {
  return (
    <S.Container size={size}>
      <S.Header>
        <h3>{title}</h3>
        {$hasSelect && <Select boxId={boxId} options={options!} />}
      </S.Header>
      <S.Content $hasSelect={$hasSelect} $error={$error} $hasList={$hasList}>
        <span>{children}</span>
      </S.Content>
    </S.Container>
  );
}
