import { styled } from "styled-components"

export const StyledPlanet = styled.div`
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);

  // background-color: rgb(49, 145, 231);
  box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(
    271deg,
    rgb(255 220 220 / 0%) 0%,
    rgb(255 220 220 / 10%) 10%,
    #000000c7 94%
  );
`
