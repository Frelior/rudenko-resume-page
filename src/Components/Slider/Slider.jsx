import { StyledSlider } from "./Slider.js"
import SliderElement from "./SliderElement/SliderElement.jsx"
import { useSelector } from "react-redux"

export default function Slider() {
  const sliderItems = useSelector((state) => state.planets)

  return (
    <StyledSlider rotate={sliderItems.at(-1)?.rotateDegrees}>
      {sliderItems.map((sliderItem) => {
        if (sliderItem.id) {
          return (
            <SliderElement
              key={sliderItem.id}
              sliderItem={sliderItem}
            />
          )
        }
      })}
    </StyledSlider>
  )
}
