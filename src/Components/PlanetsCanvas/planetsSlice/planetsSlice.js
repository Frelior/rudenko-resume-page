import { createSlice } from "@reduxjs/toolkit"
import {
  planetsInitialState as initialState,
  positions,
} from "./planetsInitialState.js"

export const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    rotateCircle: (state) => {
      const step = 360 / (state.length - 1)
      const rotateObject = state.at(-1)

      rotateObject.rotateDegrees === 360 - step
        ? (rotateObject.rotateDegrees = 0)
        : (rotateObject.rotateDegrees += step)

      state.map((item) => {
        if (item.rotateIndex) {
          item.rotateIndex += 1
        }
      })
    },
  },
})

export const { rotateCircle } = planetsSlice.actions
export default planetsSlice.reducer
