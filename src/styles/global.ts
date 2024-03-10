import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  .invalid {
    border: 1px solid tomato !important;
  }

  .invalid + label {
    color: tomato !important;
  }
`
