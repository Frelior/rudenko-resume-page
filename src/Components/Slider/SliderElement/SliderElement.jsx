import { StyledSliderElement } from "./SliderElement.js"
import { useDispatch } from "react-redux"
import { rotateCircle } from "../../PlanetsCanvas/planetsSlice/planetsSlice.js"

export default function SliderElement({ sliderItem }) {
  const dispatch = useDispatch()
  return (
    <StyledSliderElement
      title={sliderItem.name}
      $planetrotate={(360 / 5) * sliderItem.rotateIndex}
    >
      <div
        className={`imgBox no-select ${
          sliderItem.position === 5 ? "active" : ""
        }`}
        style={{ "--id": sliderItem.id }}
        onClick={() => dispatch(rotateCircle(sliderItem.position))}
      >
        <div className="planet">
          <p className="title">{sliderItem.name}</p>
          <img
            src={sliderItem.src}
            alt=""
          />
        </div>
      </div>
    </StyledSliderElement>
  )
}
