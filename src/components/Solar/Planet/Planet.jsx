import { StyledPlanet } from "./StyledPlanet.js"

export default function Planet({ planet }) {
  return <StyledPlanet className={planet.classList} />
}
