import { StyledSolar } from "./StyledSolar.js"
import Planet from "./Planet/Planet.jsx"
import Sun from "./Sun/Sun.jsx"
import Orbit from "./Orbit/Orbit.jsx"
import { useSelector } from "react-redux"

export default function Solar() {
  const planets = useSelector((state) => state.planets.planets)
  return (
    <StyledSolar>
      <Sun></Sun>

      <Orbit size={planets.aboutMe.orbitRadius}>
        <Planet />
      </Orbit>

      <Orbit size={450}>
        <Planet />
      </Orbit>
    </StyledSolar>
  )
}
