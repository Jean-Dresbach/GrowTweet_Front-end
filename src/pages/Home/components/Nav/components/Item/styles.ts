import styled from "styled-components"

export const Item = styled.div`
  display: flex;
  gap: 5px;

  img {
    width: 40px;
    height: 30px;
  }

  @media (max-width: 1280px) {
    span {
      display: none;
    }
  }
`
