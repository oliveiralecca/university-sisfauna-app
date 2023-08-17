import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  height: 100%;

  padding: 20px;

  & > :last-child > :last-child {
    max-height: inherit;

    span {
      width: 83%;
      height: 100%;

      display: flex;
      justify-content: center;

      svg {
        flex-basis: 100%;
      }

      & > .emptyLocations {
        display: flex;
        align-items: center;
      }

      & > .recharts-responsive-container {
        /* width: fit-content !important;
        height: fit-content !important; */
      }
    }
  }

  & > :nth-child(4) > :last-child {
    max-height: inherit;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex: 1;
  gap: 20px;
`;

export const ButtonContainer = styled.div<{ disabled: boolean }>`
  display: flex;
  justify-content: flex-end;
  gap: 15px;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `};

  a {
    justify-content: center;

    height: 54px;
    width: 10%;
    border-radius: 10px;

    border: none;

    background: #40513b;
    box-shadow: 0px 4px 19px 0px rgba(119, 147, 65, 0.3);

    color: #fff;
    font-size: 18px;
    font-weight: 500;

    transition: 0.2s;

    &:not(.disabled):hover {
      background: #609966;
    }

    &.disabled {
      background: #609966;
      pointer-events: none;
    }
  }
`;

export const ErrorState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;
  margin: 0 auto;

  a {
    width: fit-content;
  }
`;
