import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  z-index: 5;

  width: 100%;
  height: 60px;

  position: fixed;
  top: 0;

  border-bottom: 1px solid #609966;
  background-color: #9DC08B;

  & > div:first-of-type {
    cursor: pointer;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  font-size: 14px;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: inherit;
    transition: .2s;
  }

  a:hover {
    color: #CBFFA9;
  }

  .active {
    color: #EDF1D6;
  }
`;

export const UserContent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  font-size: 16px;
`;
