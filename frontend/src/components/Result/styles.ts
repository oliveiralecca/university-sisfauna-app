import styled from "styled-components";

export const Container = styled.div<{ dataType: string }>`
  font-size: ${({ dataType }) => (dataType === "number" ? "60px" : "inherit")};
`;
