import styled from "styled-components";

export const Container = styled.div<{ $checktype: string }>`
  font-size: ${({ $checktype }) => ($checktype === "number" ? "60px" : "inherit")};
`;
