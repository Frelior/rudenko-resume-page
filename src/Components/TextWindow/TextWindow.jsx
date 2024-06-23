import { StyledTextWindow } from "./TextWindow.js"
import { useSelector } from "react-redux"
import { planetsTabs } from "./planetsTabs/planetsTabs.js"
import { useEffect, useRef } from "react"

export default function TextWindow() {
  const planets = useSelector((state) => state.planets)
  const activePlanet = planets.find((planet) => planet.position === 5)
  const isRotating = planets.at(-1).isRotating
  const scrollableRef = useRef(null)

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTo ({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [activePlanet])

  return (
    <StyledTextWindow>
      <div
        className="text-block"
        style={{ opacity: isRotating ? 0 : 1 }}
        ref={scrollableRef}
      >
        {planetsTabs[activePlanet.id]}
      </div>
    </StyledTextWindow>
  )
}
