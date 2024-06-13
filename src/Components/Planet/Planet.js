import styled from "styled-components"

export const StyledPlanet = styled.div`
  --i: ${(props) => props.id};

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: absolute;

  transition: all 0.5s ease;

  & img {
    // width: 100%;
    // height: 100%;
    width: 10vw;
    height: 10vw;
    filter: drop-shadow(0 0 40px white);
  }
`
