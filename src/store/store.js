import { configureStore } from "@reduxjs/toolkit"
import parallaxReducer from "../Components/ParallaxCanvas/parallaxSlice/parallaxSlice.js"
import planetsReducer from "../Components/PlanetsCanvas/planetsSlice/planetsSlice.js"

export default configureStore({
  reducer: {
    parallax: parallaxReducer,
    planets: planetsReducer,
  },
})
