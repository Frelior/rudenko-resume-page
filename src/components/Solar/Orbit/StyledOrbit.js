import { styled } from "styled-components"

export const StyledOrbit = styled.div`
  border: 0.1rem solid #c5c5c587;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 50%;
  animation: orbit 36s infinite linear;

  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
`
