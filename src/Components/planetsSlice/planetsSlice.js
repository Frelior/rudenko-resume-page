import { createSlice } from "@reduxjs/toolkit"
import { planetsInitialState as initialState } from "./planetsInitialState.js"

export const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    rotateCircle: (state, action) => {
      let targetPosition = action.payload

      // while (targetPosition < 5) {
      //   rotateCircleOneStepLeft(state)
      //   targetPosition++
      // }

      if (targetPosition <= 3) {
        rotateCircleOneStepRight(state)
        targetPosition--
      } else {
        rotateCircleOneStepLeft(state)
        targetPosition++
      }
    },
    rotateToggle: (state) => {
      state.at(-1).isRotating = !state.at(-1).isRotating
    },
  },
})

export const { rotateCircle, rotateToggle } = planetsSlice.actions
export default planetsSlice.reducer

function rotateCircleOneStepLeft(state) {
  const step = 360 / (state.length - 1)
  const rotateObject = state.at(-1)

  // rotateObject.rotateDegrees === 450 - step
  //   ? (rotateObject.rotateDegrees = 90)
  //   : (rotateObject.rotateDegrees += step)
  rotateObject.rotateDegrees += step

  state.map((item) => {
    if (item.rotateIndex) {
      item.rotateIndex += 1

      item.position < 5 ? (item.position += 1) : (item.position = 1)
    }
    return item
  })
}

function rotateCircleOneStepRight(state) {
  const step = -360 / (state.length - 1)
  const rotateObject = state.at(-1)

  // rotateObject.rotateDegrees === 450 - step
  //   ? (rotateObject.rotateDegrees = 90)
  //   : (rotateObject.rotateDegrees += step)
  rotateObject.rotateDegrees += step

  state.map((item) => {
    if (item.rotateIndex) {
      item.rotateIndex -= 1

      item.position > 1 ? (item.position -= 1) : (item.position = 5)
    }
    return item
  })
}
