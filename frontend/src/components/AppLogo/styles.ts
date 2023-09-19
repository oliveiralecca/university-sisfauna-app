import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 25px;
    height: 25px;
  }

  h4 {
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;
