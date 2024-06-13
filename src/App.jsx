import "./App.css"
import ParallaxCanvas from "./Components/ParallaxCanvas/ParallaxCanvas.jsx"
import PlanetsCanvas from "./Components/PlanetsCanvas/PlanetsCanvas.jsx"

function App() {
  return (
    <div className="App">
      <PlanetsCanvas></PlanetsCanvas>

      <ParallaxCanvas></ParallaxCanvas>
    </div>
  )
}

export default App
