import "./App.css"
import Solar from "./components/Solar/Solar.jsx"
import { Provider } from "react-redux"
import { store } from "./store/index.js"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Solar />
      </div>
    </Provider>
  )
}

export default App
