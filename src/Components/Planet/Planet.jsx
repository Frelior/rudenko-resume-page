import { StyledPlanet } from "./Planet.js"
import { useDispatch } from "react-redux"
import { movePlanets } from "../PlanetsCanvas/planetsSlice/planetsSlice.js"

export default function Planet({ planet }) {
  const dispatch = useDispatch()

  return (
    <StyledPlanet
      style={{
        top: planet.currentPosition.top + "%",
        left: planet.currentPosition.left + "%",
      }}
      className={`${planet.classList} no-select`}
      id={planet.id}
      onClick={() => dispatch(movePlanets())}
    >
      <img
        src={planet.src}
        alt=""
      />
    </StyledPlanet>
  )
}
