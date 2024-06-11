import { StyledPlanet } from "./Planet.js"

export default function Planet({ planet }) {
  return (
    <StyledPlanet>
      <h1> PLANET </h1>
      <p> {planet.name} </p>
    </StyledPlanet>
  )
}
