import { createSlice } from "@reduxjs/toolkit"
import { planetsInitialState as initialState } from "./planetsInitialState.js"

export const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {},
})

export default planetsSlice.reducer
