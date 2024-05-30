import { configureStore } from "@reduxjs/toolkit"
import planetsSlice from "./solarSystemReducers/planetsSlice/planetsSlice.js"

export const store = configureStore({
  reducer: {
    planets: planetsSlice,
  },
})
