import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  height: 100%;

  svg {
    width: 300px;
    height: 60.76px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;

    svg {
      width: 150px;
      height: 30.38px;
    }

    & > div {
      flex-grow: 1;

      .flip-form-inner {
        display: flex;
        align-items: center;
      }
    }
  }
`

export const FlipForm = styled.div`
  background-color: transparent;
  width: 300px;
  height: 556.5px;
  perspective: 1000px;

  .flip-form-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s ease-out;
    transform-style: preserve-3d;
  }

  form {
    position: absolute;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  form:nth-child(1) {
    display: flex;
    justify-content: center;
  }

  form:nth-child(2) {
    transform: rotateY(180deg);
  }
`
