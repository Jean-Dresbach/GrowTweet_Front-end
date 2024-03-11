import styled from "styled-components"

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  h2 {
    color: ${({ theme }) => theme.colors.senary};
    margin-bottom: 8px;
    text-align: center;
  }

  div {
    position: relative;
    width: 100%;
    text-align: center;
  }

  hr {
    margin-top: 13px;
    margin-bottom: 8px;
    width: 100%;
    height: 0.5px;
    border: none;
    background-color: ${({ theme }) => theme.colors.quinary};
  }

  span {
    padding: 5px;
    border-radius: 100vw;
    line-height: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    transform: translate(-50%, -90%);
    color: ${({ theme }) => theme.colors.senary};
    font-size: 13px;
    z-index: 1;
  }

  button {
    margin-top: 13px;
    margin-bottom: 8px;
  }
`
