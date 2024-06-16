import { StyledSliderElement } from "./SliderElement.js"
import { useDispatch } from "react-redux"
import { rotateCircle, rotateToggle } from "../../planetsSlice/planetsSlice.js"
import { useEffect, useRef } from "react"

export default function SliderElement({ sliderItem }) {
  const dispatch = useDispatch()
  const timeoutRef = useRef(null)

  const handleClick = (position) => {
    dispatch(rotateToggle())

    timeoutRef.current = setTimeout(() => {
      dispatch(rotateCircle(position))
      dispatch(rotateToggle())
    }, 500)
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
      $planetrotate={(360 / 5) * sliderItem.rotateIndex}
    >
      <div
        className={`imgBox no-select ${
          sliderItem.position === 5 ? "active" : ""
        }`}
        style={{ "--id": sliderItem.id }}
        onClick={() => handleClick(sliderItem.position)}
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
