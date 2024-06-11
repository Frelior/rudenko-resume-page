import ParallaxItem from "../ParallaxItem/ParallaxItem.jsx"
import { StyledParallaxCanvas } from "./ParallaxCanvas.js"
import { useSelector } from "react-redux"

export default function ParallaxCanvas() {
  const parallaxItems = useSelector((state) => state.parallax)
  return (
    <>
      <StyledParallaxCanvas>
        {parallaxItems.map((item) => (
          <ParallaxItem
            strength={item.strength}
            key={item.id}
            className={item.classList}
            lerpEase={item.lerpEase}
          >
            <img
              src={item.src}
              alt={item.name}
            />
          </ParallaxItem>
        ))}
      </StyledParallaxCanvas>
    </>
  )
}
