import styled from "styled-components"

export const Wrapper = styled.button`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 100vw;
  padding: 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    filter: brightness(80%);
  }

  &:disabled {
    filter: brightness(80%) grayscale(0.3);
    cursor: default;
  }
`
