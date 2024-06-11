import { MouseParallax } from "react-just-parallax"
import { StyledParallaxItem } from "./ParallaxItem.js"

export default function ParallaxItem({
  children,
  className,
  strength,
  lerpEase,
}) {
  return (
    <MouseParallax
      isAbsolutelyPositioned={true}
      strength={strength}
      shouldResetPosition={true}
      lerpEase={lerpEase}
    >
      <StyledParallaxItem className={className}>{children}</StyledParallaxItem>
    </MouseParallax>
  )
}
