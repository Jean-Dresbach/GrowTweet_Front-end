import styled from "styled-components"

export const Item = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  border-radius: 100vw;
  padding: 12px;
  padding-left: 15px;
  padding-right: 32px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.quaternary};
  }

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }

  span {
    font-size: larger;
    color: ${({ theme }) => theme.colors.senary};
  }

  @media (max-width: 1280px) {
    padding: 12px;

    img {
      width: 25px;
      height: 25px;
    }

    span {
      display: none;
    }
  }
`
