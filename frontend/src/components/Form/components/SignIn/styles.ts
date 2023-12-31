import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 38px;

  padding-top: 34px;

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
    padding-top: 15px;
    gap: 20px;

    button {
      height: 40px;
      margin-top: 10px;
    }
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
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

export const Error = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #FF0000;  
  
  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;
