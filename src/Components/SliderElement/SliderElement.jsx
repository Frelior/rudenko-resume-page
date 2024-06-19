import { StyledSliderElement } from "./SliderElement.js"
import { useDispatch } from "react-redux"
import {
  rotateCircle,
  rotateToggle,
  changePositions,
} from "../planetsSlice/planetsSlice.js"
import { useEffect, useRef } from "react"

export default function SliderElement({ sliderItem }) {
  const dispatch = useDispatch()
  const timeoutRef = useRef(null)

  const handleClick = (sliderItem) => {
    if (sliderItem.position !== 5) {
      dispatch(rotateToggle())
      dispatch(rotateCircle(sliderItem))
      // timeout waits for the animation of fade out
      timeoutRef.current = setTimeout(() => {
        dispatch(changePositions(sliderItem))
        dispatch(rotateToggle())
      }, 300)
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <StyledSliderElement
      title={sliderItem.name}
      style={{ "--id": sliderItem.id }}
      $planetrotate={
        -((360 / 5) * sliderItem.id + 90 + sliderItem.rotateDegrees)
      }
    >
      <div
        className={`imgBox no-select ${
          sliderItem.position === 5 ? "active" : ""
        }`}
        onClick={() => handleClick(sliderItem)}
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
