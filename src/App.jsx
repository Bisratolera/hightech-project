import { Footer } from "./components/Footer"
import { Nav } from "./components/Nav"
import {Outlet} from "react-router-dom"

function App() {

  return (
    <div className="App">
        <Nav />
        <Outlet />
        
    </div>
  )
}

export default App
