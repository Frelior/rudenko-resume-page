import { StyledPlanet } from "./Planet.js"

export default function Planet({ planet }) {
  return (
    <StyledPlanet
      style={{
        top: planet.currentPosition.top + "%",
        left: planet.currentPosition.left + "%",
      }}
      className={`${planet.classList} no-select`}
      id={planet.id}
    >
      <img
        src={planet.src}
        alt=""
      />
    </StyledPlanet>
  )
}
