import styled from "styled-components"

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  max-width: 270px;

  padding: 8px;

  display: flex;
  flex-direction: column;

  .logo {
    width: 197.5px;
    height: 40px;
    margin: 8px 0;
  }

  .logo-small {
    width: 40px;
    display: none;
    margin: 8px 0;
  }

  @media (max-width: 1280px) {
    width: 72px;

    .logo {
      display: none;
    }

    .logo-small {
      display: block;
    }
  }

  @media (max-width: 620px) {
    width: 60px;
    padding: 4px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`
