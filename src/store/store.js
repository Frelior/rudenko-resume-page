import { configureStore } from "@reduxjs/toolkit"
import parallaxReducer from "../Components/ParallaxCanvas/parallaxSlice.js"

export default configureStore({
  reducer: {
    parallax: parallaxReducer,
  },
})
