import { MouseParallax } from "react-just-parallax"
import { StyledParallaxItem } from "./ParallaxItem.js"

export default function ParallaxItem({ children }) {
  return (
    <MouseParallax strength={0.01}>
      <StyledParallaxItem>{children}</StyledParallaxItem>
    </MouseParallax>
  )
}
