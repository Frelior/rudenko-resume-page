import "./App.css"
import ParallaxCanvas from "../ParallaxCanvas/ParallaxCanvas.jsx"
import Slider from "../Slider/Slider.jsx"
import TextWindow from "../TextWindow/TextWindow.jsx"

function App() {
  return (
    <div className="App">
      <ParallaxCanvas></ParallaxCanvas>
      <TextWindow />
      <Slider />
    </div>
  )
}

export default App
