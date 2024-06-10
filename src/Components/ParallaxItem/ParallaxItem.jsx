import { MouseParallax } from "react-just-parallax"
import { StyledParallaxItem } from "./ParallaxItem.js"

export default function ParallaxItem({ children, className, strength }) {
  return (
    <MouseParallax
      isAbsolutelyPositioned={true}
      strength={strength}
      shouldResetPosition={true}
    >
      <StyledParallaxItem className={className}>{children}</StyledParallaxItem>
    </MouseParallax>
  )
}
