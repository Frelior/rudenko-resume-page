import { StyledTextWindow } from "./TextWindow.js"
import { useSelector } from "react-redux"
import { planetsTabs } from "./planetsTabs/planetsTabs.js"

export default function TextWindow() {
  const planets = useSelector((state) => state.planets)
  const activePlanet = planets.find((planet) => planet.position === 5)
  const isRotating = planets.at(-1).isRotating

  return (
    <StyledTextWindow>
      <div
        className="text-block"
        style={{ opacity: isRotating ? 0 : 1 }}
      >
        {planetsTabs[activePlanet.id]}
      </div>
    </StyledTextWindow>
  )
}
