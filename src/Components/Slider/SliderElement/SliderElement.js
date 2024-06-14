import styled from "styled-components"

export const StyledSliderElement = styled.div`
  position: absolute;
  left: -50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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
      box-shadow: 0 0 0 0.2vw #2d2dff, 0 0 0 0.3vw #4b00ff,
        0 0 1vw 0.5vw #c3e3ff;
    }

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      transform: rotate(calc(-360deg / 5 * var(--id)));
    }
  }
`
