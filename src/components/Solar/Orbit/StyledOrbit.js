import { styled } from "styled-components"

export const StyledOrbit = styled.div`
  border-width: 0.1rem;
  border-style: solid;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  will-change: transform;
  border: 0.05rem solid rgba(128 128 128 / 20%);
  display: block;

  &:hover {
    box-shadow: 0 0 3.5rem -0.5rem rgba(128 128 128 / 3%);
  }
`
