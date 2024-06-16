import styled from "styled-components"

export const StyledSliderElement = styled.div`
  top: 45%;
  position: absolute;
  left: -5%;
  width: 10%;
  height: 10%;
  pointer-events: all;

  & .imgBox {
    position: absolute;
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    transition: rotate 0.5s ease, box-shadow 0.05s ease;
    border: 0.2vw solid white;
    box-shadow: 0 0 0 0.2vw #222, 0 0 0 0.3vw #fff;
    transform: rotate(calc(360deg / 5 * var(--id)));
    transform-origin: 21.8vw;
    overflow: hidden;
    cursor: pointer;

    &.active {
      animation: pulsating 2s infinite;
      @keyframes pulsating {
        0% {
          box-shadow: 0 0 0 0.2vw #ababab, 0 0 0 0.3vw #fff, 0 0 1vw 1vw #c3e3ff;
        }
        50% {
          box-shadow: 0 0 0 0.2vw #ababab, 0 0 0 0.3vw #fff,
            0 0 1vw 1.2vw #c3e3ff;
        }
        100% {
          box-shadow: 0 0 0 0.2vw #ababab, 0 0 0 0.3vw #fff, 0 0 1vw 1vw #c3e3ff;
        }
      }
    }

    &:hover {
      box-shadow: 0 0 0 0.2vw #ababab, 0 0 0 0.3vw #fff, 0 0 1vw 1vw #41a6ff99;
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
        width: 80%;
        // background-color: #00000099;
        // border-radius: 50%;
        text-shadow: 0 0 1vw #222;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1vw;
        z-index: 1;
        text-align: center;
        color: #fff;
        text-shadow: 0vw 0.1vw 0.5vw #000;
      }
    }
  }
`
