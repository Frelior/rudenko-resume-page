import { StyledSolar } from "./StyledSolar.js"
import Planet from "./Planet/Planet.jsx"
import Sun from "./Sun/Sun.jsx"
import Orbit from "./Orbit/Orbit.jsx"
import { useSelector } from "react-redux"

export default function Solar() {
  const planets = useSelector((state) => state.planets.planets)
  return (
    <StyledSolar className="solar">
      <Sun></Sun>

      {Object.keys(planets).map((planet) => {
        return (
          <Orbit
            size={planets[planet].orbitRadius}
            key={planet}
          >
            <Planet planet={planets[planet]} />
          </Orbit>
        )
      })}
    </StyledSolar>
  )
}
