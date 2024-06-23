import styled from "styled-components"

export const StyledSlider = styled.div`
  pointer-events: none;
  width: var(--slider-size);
  height: var(--slider-size);
  min-width: var(--slider-min-size);
  min-height: var(--slider-min-size);
  position: relative;
  box-shadow: 0 0 0.5vw 0.1vw white, 0 0 1vw 1vw #00000075;
  border-radius: 50%;
  transition: all var(--slider-rotating-animation-duration) ease;
  transform: rotate(${(props) => props.rotate}deg);
`
