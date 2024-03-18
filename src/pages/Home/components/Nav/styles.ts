import styled from "styled-components"

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  max-width: 270px;

  padding: 8px;

  .logo {
    width: 148.12px;
    height: 30px;
    margin-left: 15px;
    margin-top: 8px;
    margin-bottom: 25px;
  }

  .logo-small {
    width: 25px;
    display: none;
    margin-left: 12px;
    margin-top: 8px;
    margin-bottom: 25px;
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
