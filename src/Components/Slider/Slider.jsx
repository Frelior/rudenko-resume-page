import { StyledSlider } from "./Slider.js"
import SliderElement from "./SliderElement/SliderElement.jsx"
import { useSelector } from "react-redux"

export default function Slider() {
  const sliderItems = useSelector((state) => state.planets)

  return (
    <StyledSlider>
      {sliderItems.map((sliderItem) => (
        <SliderElement
          key={sliderItem.id}
          sliderItem={sliderItem}
        />
      ))}
    </StyledSlider>
  )
}
