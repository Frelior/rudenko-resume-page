import styled from "styled-components"

export const StyledSliderElement = styled.div`
  top: 45%;
  position: absolute;
  left: -5%;
  width: 10%;
  height: 10%;

  & .imgBox {
    position: absolute;
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    transition: all 0.5s ease;
    border: 0.1vw solid white;
    box-shadow: 0 0 0 0.2vw #222, 0 0 0 0.3vw #fff;
    transform: rotate(calc(360deg / 5 * var(--id)));
    transform-origin: 22vw;
    overflow: hidden;

    &.active {
      animation: pulsating 5s infinite;
      @keyframes pulsating {
        0% {
          box-shadow: 0 0 0 0.2vw #222, 0 0 0 0.3vw #fff, 0 0 2vw 1vw #c3e3ff;
        }
        50% {
          box-shadow: 0 0 0 0.2vw #222, 0 0 0 0.3vw #fff, 0 0 2vw 2.3vw #c3e3ff;
        }
        100% {
          box-shadow: 0 0 0 0.2vw #222, 0 0 0 0.3vw #fff, 0 0 2vw 1vw #c3e3ff;
        }
      }
    }

    .planet {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      transform: rotate(-${(props) => props.$planetrotate}deg);
      transition: all var(--animation-duration) ease;

      & img {
        width: 100%;
        height: 100%;
      }

      & .title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1vw;
        z-index: 1;
        text-align: center;
        color: #fff;
        text-shadow: 0 0 0.2vw #222, 0 0 0.3vw #fff;
      }
    }
  }
`
