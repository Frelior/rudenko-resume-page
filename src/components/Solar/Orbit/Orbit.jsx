import { StyledOrbit } from "./StyledOrbit"
import Planet from "../Planet/Planet"
import { memo } from "react"

export default memo(function Orbit({ planet }) {
  return (
    <StyledOrbit
      className={`solar_orbit ${planet.classListOrbit} ${
        planet.isOrbitStopped ? "animation-stopped" : ""
      }`}
    >
      <Planet planet={planet} />
    </StyledOrbit>
  )
})
