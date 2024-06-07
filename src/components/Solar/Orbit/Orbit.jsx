import { StyledOrbit } from "./StyledOrbit"
import Planet from "../Planet/Planet"

export default function Orbit({ planet }) {
  return (
    <StyledOrbit
      className={`solar_orbit ${planet.classListOrbit} ${
        planet.isOrbitStopped ? "animation-stopped" : ""
      }`}
    >
      <Planet planet={planet} />
    </StyledOrbit>
  )
}
