import { createSlice } from "@reduxjs/toolkit"

const INITIAL_PLANETS = {
  planets: {
    aboutMe: {
      orbitRadius: 1000,
      rotationPeriod: 10,
      orbitalPeriod: 10,
      diameter: 150,
      classList: "solar_orbit solar_planet",
    },
    education: {},
    skills: {},
    projects: {},
    contact: {},
    languages: {},
    awards: {},
    interests: {},
    experience: {},
  },
}

const planetsSlice = createSlice({
  name: "planets",
  initialState: INITIAL_PLANETS,
  reducers: {},
})

export default planetsSlice.reducer
