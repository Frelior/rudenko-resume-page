import { styled } from "styled-components"

export const StyledPlanet = styled.div`
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(
    271deg,
    rgb(255 220 220 / 0%) 0%,
    rgb(255 220 220 / 10%) 10%,
    #000000c7 94%
  );

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 0.1rem;
    background-color: white;
    box-shadow: 0 0 0.3rem 0.1rem white;
    border-radius: 50%;
    z-index: -1;
  }

  .animation-stopped &::before {
    content: "BEFORE STOPPED";
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .planet__description {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 100%;
    height: 100%;
    border: 0.1rem solid white;
  }
`
