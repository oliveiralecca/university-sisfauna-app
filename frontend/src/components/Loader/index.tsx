import { Oval } from "react-loader-spinner";

import * as S from "./styles";

export function Loader({ size = "25" }: { size?: string }) {
  return (
    <S.Container>
      <Oval
        color="#FFF"
        secondaryColor="#609966"
        width={size}
        height={size}
        visible
      />
    </S.Container>
  );
}
