import { createSlice } from "@reduxjs/toolkit"
import { INITIAL_PLANETS } from "./initialState.js"

const planetsSlice = createSlice({
  name: "planets",
  initialState: INITIAL_PLANETS,
  reducers: {
    stopAnimation: (state, action) => {
      state.planets[action.payload.name].isOrbitStopped =
        !state.planets[action.payload.name].isOrbitStopped
    },
  },
})

export const { stopAnimation } = planetsSlice.actions
export default planetsSlice.reducer
