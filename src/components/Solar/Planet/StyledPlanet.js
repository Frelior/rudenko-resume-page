import { styled } from "styled-components"

export const StyledPlanet = styled.div`
  background-color: orange;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);

  width: ${({ planet }) => planet.diameter}rem;
  height: ${({ planet }) => planet.diameter}rem;
`
