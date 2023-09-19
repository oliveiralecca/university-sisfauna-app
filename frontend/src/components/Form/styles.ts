import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 18px;
    font-weight: 400;
    color: #000;
  }

  div {
    display: flex;
    flex-direction: column;

    font-size: 15px;
    color: #8D8D8D;

    a {
      color: #40513B;
      text-decoration: none;
    }

    a:hover {
      color: #609966;
    }
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    row-gap: 5px;

    div {
      flex-direction: row;
      column-gap: 8px;
      width: 100%;
      padding-right: 9px;
    }
  }
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #000;

  width: fit-content;
  margin-top: -3px;
  margin-left: -2px;

  @media (max-width: 480px) {
    align-self: center;
    margin: 0;
    margin-top: 15px;
    font-size: 30px;
  }
`;
