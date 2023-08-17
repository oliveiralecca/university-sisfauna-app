import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 250px;

  width: 50%;
  height: 100%;

  padding: 15px 30px;

  & > :nth-child(2) {
    width: 400px;
    height: 400px; 

    margin-left: 50px;
  }

  a {
    color: transparent;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  width: 50%;
  height: 100%;

  padding: 90px 70px;

  background: #EDF1D6;

  svg {
    width: 400px;
    height: 400px; 
  }

  a {
    color: transparent;
  }
`;

export const LoginCard = styled.div`
  width: 40%;
  max-width: 500px;
  height: 75%;
  max-height: fit-content;

  padding: 40px 35px;

  background: #FFF;
  border-radius: 40px;
  box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);

  position: absolute;
`;
