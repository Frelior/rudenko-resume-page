import "./App.css"
import ParallaxCanvas from "./Components/ParallaxCanvas/ParallaxCanvas.jsx"
import Slider from "./Components/Slider/Slider.jsx"
import TextWindow from "./Components/TextWindow/TextWindow.jsx"

function App() {
  return (
    <div className="App">
      <ParallaxCanvas></ParallaxCanvas>
      <TextWindow />
      <Slider></Slider>
    </div>
  )
}

export default App
