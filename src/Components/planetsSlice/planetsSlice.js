import { createSlice } from "@reduxjs/toolkit"
import { planetsInitialState as initialState } from "./planetsInitialState.js"

export const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    rotateCircle: (state, action) => {
      let targetPlanet = action.payload

      if (targetPlanet.position <= 2) {
        for (let i = targetPlanet.position; i > 0; i--) {
          rotateCircleOneStep(state, true)
        }
      } else if (targetPlanet.position <= 4) {
        for (let i = targetPlanet.position; i < 5; i++) {
          rotateCircleOneStep(state, false)
        }
      }
    },
    rotateToggle: (state) => {
      state.at(-1).isRotating = !state.at(-1).isRotating
    },
    changePositions: (state, action) => {
      let targetPlanet = action.payload

      if (targetPlanet.position <= 2) {
        for (let i = targetPlanet.position; i > 0; i--) {
          changePositionsOneStep(state, true)
        }
      } else if (targetPlanet.position <= 4) {
        for (let i = targetPlanet.position; i < 5; i++) {
          changePositionsOneStep(state, false)
        }
      }
    },
  },
})

function rotateCircleOneStep(state, direction) {
  const step = direction
    ? -state.at(-1).rotatingStep
    : state.at(-1).rotatingStep
  const rotateObject = state.at(-1)
  rotateObject.rotateDegrees += step

  state.map((item) => {
    if (item.id) {
      item.rotateIndex += step
    }
    return item
  })
}

function changePositionsOneStep(state, direction) {
  state.map((item) => {
    if (item.id) {
      if (direction) {
        item.position > 1 ? (item.position -= 1) : (item.position = 5)
      } else {
        item.position < 5 ? (item.position += 1) : (item.position = 1)
      }
    }
    return item
  })
}

export const { rotateCircle, rotateToggle, changePositions } =
  planetsSlice.actions
export default planetsSlice.reducer
