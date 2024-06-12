import { StyledPlanet } from "./Planet.js"

export default function Planet({ planet }) {
  return (
    <StyledPlanet
      className={`planet ${planet.classList}`}
      id={planet.id}
    >
      <p> {planet.name} </p>
      <img
        src={planet.src}
        alt=""
      />
    </StyledPlanet>
  )
}
