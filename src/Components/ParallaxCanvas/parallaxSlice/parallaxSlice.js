import { createSlice } from "@reduxjs/toolkit"
import { parallaxInitialState as initialState } from "./parallaxInitialState.js"

export const parallaxSlice = createSlice({
  name: "parallax",
  initialState,
  reducers: {},
})

export default parallaxSlice.reducer
