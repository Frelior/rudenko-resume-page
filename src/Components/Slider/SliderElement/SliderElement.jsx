import { StyledSliderElement } from "./SliderElement.js"

export default function SliderElement({ sliderItem }) {
  return (
    <StyledSliderElement>
      <div
        className="imgBox active no-select"
        style={{ "--id": sliderItem.id }}
      >
        <img
          src={sliderItem.src}
          alt=""
        />
      </div>
    </StyledSliderElement>
  )
}
