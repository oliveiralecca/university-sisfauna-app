import styled from "styled-components";

export const Container = styled.div<{ $checktype: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ $checktype }) =>
    $checktype === "number" ? "60px" : "inherit"};
`;

export const TextData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 50px;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const CitiesData = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  
  height: 300px;
  width: 100%;
  gap: 20px;
`;
