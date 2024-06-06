import { StyledSolar } from "./StyledSolar.js"
import Sun from "./Sun/Sun.jsx"
import Orbit from "./Orbit/Orbit.jsx"
import { useSelector } from "react-redux"

export default function Solar() {
  const planets = useSelector((state) => state.planets.planets)
  return (
    <StyledSolar className="solar">
      <Sun></Sun>

      {Object.keys(planets).map((planetTitle) => {
        return (
          <Orbit
            planet={planets[planetTitle]}
            key={planets[planetTitle].classList}
          />
        )
      })}
    </StyledSolar>
  )
}
