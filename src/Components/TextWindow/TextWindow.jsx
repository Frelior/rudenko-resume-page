import { StyledTextWindow } from "./TextWindow.js"
import { useSelector } from "react-redux"
import { planetsTabs } from "./planetsTabs/export.js"

export default function TextWindow() {
  const planets = useSelector((state) => state.planets)
  const activePlanet = planets.find((planet) => planet.position === 5)

  return <StyledTextWindow>{planetsTabs[activePlanet.id]}</StyledTextWindow>
}
