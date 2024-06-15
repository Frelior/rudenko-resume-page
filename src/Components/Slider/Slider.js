import styled from "styled-components"

export const StyledSlider = styled.div`
  --animation-duration: 1s;

  //   background-color: yellow;
  width: 40vw;
  height: 40vw;
  position: relative;
  border: solid 0.2vw white;
  border-radius: 50%;

  transition: all var(--animation-duration) ease;
  transform: rotate(${(props) => props.rotate}deg);
`
