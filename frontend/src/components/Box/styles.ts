import styled, { css } from "styled-components";

import { BoxProps } from ".";

type BoxSize = {
  [key: string]: {
    w: string;
    h: string;
  };
};

const BOX_SIZE: BoxSize = {
  s: {
    w: "300px",
    h: "150px",
  },
  m: {
    w: "100%",
    h: "150px",
  },
  l: {
    w: "100%",
    h: "450px",
  },
};

export const Container = styled.div<Pick<BoxProps, "size">>`
  display: flex;
  flex-direction: column;
  flex: ${({ size }) => (size === "s" ? 1 : null)};
  gap: 10px;

  width: ${({ size }) => BOX_SIZE[size].w};
  height: ${({ size }) => BOX_SIZE[size].h};

  background-color: #edf1d6;
  border-radius: 20px;

  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: #40513b;
    font-weight: 600;
  }
`;

export const Content = styled.div<Pick<BoxProps, "$hasSelect" | "$error">>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  max-height: 76px;
  padding: 10px;

  ${({ $hasSelect, $error }) =>
    ($hasSelect || $error) &&
    css`
      color: ${$error ? "#FF0000" : "inherit"};
      font-size: 18px;
      border: 1px dotted ${$error ? "#FF0000" : "#9DC08B"};
      border-radius: 20px;
    `}

  span {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-word;
    text-overflow: ellipsis;

    width: 100%;
    text-align: center;
  }
`;
