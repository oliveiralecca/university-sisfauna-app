import { Link } from "react-router-dom";

import styled from "styled-components";

export const StyledButton = styled(Link)`
  display: flex;
  align-items: center;

  font-size: 14px;
  text-decoration: none;
  color: inherit;

  border: 2px solid #edf1d6;
  border-radius: 30px;

  padding: 4px 10px;

  transition: 0.2s;

  &:hover {
    background-color: #edf1d6;
  }
`;
