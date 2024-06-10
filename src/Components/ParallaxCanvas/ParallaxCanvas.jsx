import ParallaxItem from "../ParallaxItem/ParallaxItem.jsx"
import { StyledParallaxCanvas } from "./ParallaxCanvas.js"
import { PARALLAXITEMSTORE } from "./parallaxItemStore.js"

export default function ParallaxCanvas({ children }) {
  return (
    <>
      <StyledParallaxCanvas>
        {PARALLAXITEMSTORE.map((item) => (
          <ParallaxItem
            strength={item.strength}
            key={item.id}
            className={item.classList}
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
