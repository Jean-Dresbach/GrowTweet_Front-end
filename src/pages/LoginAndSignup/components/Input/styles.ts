import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  padding-top: 13px;
  width: 100%;

  input {
    width: 100%;

    outline: none;
    margin-bottom: 16px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.quinary};
    border: 1px solid ${({ theme }) => theme.colors.quinary};
    background-color: transparent;
    padding: 16px;

    transition: all 0.1s linear;
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  label {
    position: absolute;
    top: calc(28%);
    left: 15px;

    color: ${({ theme }) => theme.colors.quinary};

    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 5px;

    transition: all 0.1s linear;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 13px;
    top: 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  input:not(:placeholder-shown) {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  span {
    position: absolute;
    left: 0;
    bottom: 0;

    font-size: 11px;
    color: tomato;
  }
`
