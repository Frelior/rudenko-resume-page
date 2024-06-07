import { StyledPlanet } from "./StyledPlanet.js"
import { useDispatch } from "react-redux"
import { stopAnimation } from "../../../store/solarSystemReducers/planetsSlice/planetsSlice.js"

export default function Planet({ planet }) {
  const dispatch = useDispatch()
  function toggleAnimation(planet) {
    dispatch(stopAnimation(planet))
  }

  return (
    <StyledPlanet
      className={planet.classList}
      onClick={() => toggleAnimation(planet)}
    />
  )
}
