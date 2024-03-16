import styled from "styled-components"

export const Wrapper = styled.aside`
  width: 100%;
  height: 100%;
  max-width: 350px;

  display: flex;

  background-color: purple;
  margin-left: 30px;

  @media (max-width: 1095px) {
    max-width: 290px;
    margin-left: 20px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`
