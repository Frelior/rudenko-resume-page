import { configureStore } from "@reduxjs/toolkit"
import parallaxReducer from "../Components/ParallaxCanvas/parallaxSlice.js"
import planetsReducer from "../Components/PlanetsCanvas/planetsSlice.js"

export default configureStore({
  reducer: {
    parallax: parallaxReducer,
    planets: planetsReducer,
  },
})
