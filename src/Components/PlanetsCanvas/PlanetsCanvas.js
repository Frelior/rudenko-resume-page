import styled from "styled-components"

export const StyledPlanetsCanvas = styled.div`
  // #ff00006b
  background-color: #ff5353;
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  & .wheel {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px groove #ccc;
    border-radius: 50%;
    width: 30vw;
    height: 30vw;

    & .wheel__inner {
      position: absolute;
      left: 50%;
      bottom: 50%;
      width: 0;
      transform-origin: 0% 100%;
      outline: 3px dashed yellow;
      padding-bottom: 40%;

      animation: spin 5s linear infinite;

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      & .wheel__content {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 3px solid #ccc;
        background-image: linear-gradient(black, #ff5353);
        animation: spin 5s ease infinite;

        display: flex;
        justify-content: center;
        align-items: center;

        animation: spin-inner 5s linear infinite;

        @keyframes spin-inner {
          to {
            transform: rotate(-360deg);
          }
        }
      }
    }
  }
`
