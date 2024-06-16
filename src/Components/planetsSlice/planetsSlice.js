import { createSlice } from "@reduxjs/toolkit"
import { planetsInitialState as initialState } from "./planetsInitialState.js"

export const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    rotateCircle: (state, action) => {
      let currentPosition = action.payload

      while (currentPosition < 5) {
        rotateCircleOneStep(state)
        currentPosition++
      }
    },
    rotateToggle: (state) => {
      state.at(-1).isRotating = !state.at(-1).isRotating
    },
  },
})

export const { rotateCircle, rotateToggle } = planetsSlice.actions
export default planetsSlice.reducer

function rotateCircleOneStep(state) {
  const step = 360 / (state.length - 1)
  const rotateObject = state.at(-1)

  rotateObject.rotateDegrees === 360 - step
    ? (rotateObject.rotateDegrees = 0)
    : (rotateObject.rotateDegrees += step)

  state.map((item) => {
    if (item.rotateIndex) {
      item.rotateIndex += 1

      item.position < 5 ? (item.position += 1) : (item.position = 1)
    }
    return item
  })
}
