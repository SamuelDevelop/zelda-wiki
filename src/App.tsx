import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Characters from "./pages/Characters"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
    </Routes>
  )
}

export default App
