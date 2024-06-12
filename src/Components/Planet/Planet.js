import styled from "styled-components"

export const StyledPlanet = styled.div`
  --i: ${(props) => props.id};

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
  }
`
