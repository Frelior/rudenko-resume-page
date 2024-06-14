import Planet from "../Planet/Planet.jsx"
import { useSelector } from "react-redux"
import { StyledPlanetsCanvas } from "./PlanetsCanvas.js"

export default function PlanetsCanvas() {
  const planets = useSelector((state) => state.planets)

  return (
    <StyledPlanetsCanvas>
      {/* {planets.map((planet) => (
        <Planet
          planet={planet}
          key={planet.id}
        />
      ))} */}
    </StyledPlanetsCanvas>
  )
}
