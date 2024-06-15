import { StyledPlanet } from "./Planet.js"
import { useDispatch } from "react-redux"

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
    >
      <img
        src={planet.src}
        alt=""
      />
    </StyledPlanet>
  )
}
