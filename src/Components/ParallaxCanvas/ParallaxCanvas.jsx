import ParallaxItem from "../ParallaxItem/ParallaxItem.jsx"
import { StyledParallaxCanvas } from "./ParallaxCanvas.js"

export default function ParallaxCanvas({ children }) {
  return (
    <StyledParallaxCanvas>
      <ParallaxItem>
        <img
          src="../../images/parallaxImages/cloud-dark.png"
          alt="MEOW"
        />
        <h1>DCOJHNAISDFYBGHAOHDSIFJB</h1>
      </ParallaxItem>
    </StyledParallaxCanvas>
  )
}
