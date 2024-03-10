import styled from "styled-components"

export const Wrapper = styled.button`
  width: 100%;
  border: none;
  border-radius: 100vw;
  padding: 8px;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }

  &:disabled {
    filter: brightness(80%) grayscale(0.5);
    cursor: default;
  }
`
