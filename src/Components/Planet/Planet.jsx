import { StyledPlanet } from "./Planet.js"

export default function Planet({ planet }) {
  return (
    <StyledPlanet>
      <p> {planet.name} </p>
    </StyledPlanet>
  )
}
