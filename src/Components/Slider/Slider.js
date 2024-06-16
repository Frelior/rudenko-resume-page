import styled from "styled-components"

export const StyledSlider = styled.div`
  --animation-duration: 0.5s;

  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);

  pointer-events: none;
  width: 40vw;
  height: 40vw;
  position: relative;
  border: solid 0.2vw #ffffff00;
  box-shadow: 0 0 0.5vw 0.1vw white, 0 0 1vw 1vw #00000075;
  border-radius: 50%;

  transition: all var(--animation-duration) ease;
  transform: rotate(${(props) => props.rotate}deg);
`
