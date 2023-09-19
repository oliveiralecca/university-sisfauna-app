import styled from "styled-components";

export const Container = styled.div``;

export const Select = styled.select`
  margin: 0;
  box-sizing: border-box;
  appearance: none;

  width: 35%;
  height: 29px;
  padding: 0 50px 0 8px;
  display: inline-block;

  background: #edf1d6;
  border: 1px solid #9dc08b;
  border-radius: 8px;

  color: #40513b;
  font-family: "Poppins", sans-serif;
  font-size: 14px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  outline: none;

  background-image: linear-gradient(45deg, transparent 50%, #9dc08b 50%),
    linear-gradient(135deg, #9dc08b 50%, transparent 50%),
    linear-gradient(to right, #9dc08b, #9dc08b);
  background-position:
    calc(100% - 18px) calc(1em - 2px),
    calc(100% - 13px) calc(1em - 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1em;
  background-repeat: no-repeat;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
