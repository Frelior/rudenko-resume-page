import styled from "styled-components"

export const StyledParallaxItem = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);

  & img {
    width: 100%;
    filter: drop-shadow(0 0 30px #000000b8);
  }
`
