import { createSlice } from "@reduxjs/toolkit"
import { INITIAL_PLANETS } from "./initialState.js"

const planetsSlice = createSlice({
  name: "planets",
  initialState: INITIAL_PLANETS,
  reducers: {},
})

export default planetsSlice.reducer
