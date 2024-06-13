import { createSlice } from "@reduxjs/toolkit"
import {
  planetsInitialState as initialState,
  positions,
} from "./planetsInitialState.js"

export const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    movePlanets: (state) => {
      state.forEach((planet) => {
        const nextIndex = (planet.positionIndex + 1) % positions.length
        planet.currentPosition = positions[nextIndex]
        planet.positionIndex = nextIndex
      })
    },
  },
})

export const { movePlanets } = planetsSlice.actions
export default planetsSlice.reducer
