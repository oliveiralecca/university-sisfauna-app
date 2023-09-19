import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-top: 15px;

  button {
    height: 54px;
    border-radius: 10px;

    border: none;
    cursor: pointer;

    background: #609966;
    box-shadow: 0px 4px 19px 0px rgba(119, 147, 65, 0.30);

    color: #FFF;
    font-size: 16px;
    font-weight: 500;

    transition: .2s;

    &:hover {
      background: #9DC08B;
    }

    &:disabled {
      background: #9DC08B;
      cursor: not-allowed;
    }
  }

  @media (max-width: 480px) {
    padding-top: 5px;
    gap: 10px;

    button {
      height: 40px;
      margin-top: 20px;
    }
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;

  label {
    color: #000;
    font-size: 16px;
    font-weight: 400;
  }

  input {
    height: 57px;
    padding: 19px 25px;

    border: 1px solid #ADADAD;
    border-radius: 9px;

    background: #FFF;
    outline-color: #9DC08B;

    &.error {
      border: 1px solid #FF0000;
    }
  }

  input::placeholder {
    color: #808080;
    font-size: 14px;
    font-weight: 300;
  }

  @media (max-width: 480px) {
    input {
      height: 40px;
    }
  }
`;

export const GroupField = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 20px;
`;

export const Error = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  color: red;   

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const Success = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  height: 500px;

  color: #009E04;
  font-size: 25px;

  svg {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 480px) {
    height: fit-content;
    text-align: center;
    margin-top: 25px;
  }
`;
