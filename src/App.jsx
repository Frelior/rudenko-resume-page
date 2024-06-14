import "./App.css"
import ParallaxCanvas from "./Components/ParallaxCanvas/ParallaxCanvas.jsx"
import PlanetsCanvas from "./Components/PlanetsCanvas/PlanetsCanvas.jsx"
import Slider from "./Components/Slider/Slider.jsx"

function App() {
  return (
    <div className="App">
      {/* <PlanetsCanvas></PlanetsCanvas> */}
      <Slider />
      <ParallaxCanvas></ParallaxCanvas>
    </div>
  )
}

export default App
