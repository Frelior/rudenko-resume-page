import Planet from "../Planet/Planet.jsx"
import { useSelector } from "react-redux"
import { StyledPlanetsCanvas } from "./PlanetsCanvas.js"

export default function PlanetsCanvas() {
  const planets = useSelector((state) => state.planets)

  return (
    <StyledPlanetsCanvas length={planets.length}>
      <div className="container">
        <div className="planets">
          {planets.map((planet) => (
            <Planet
              planet={planet}
              key={planet.id}
            />
          ))}
        </div>
      </div>
    </StyledPlanetsCanvas>
  )
}
