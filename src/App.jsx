import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import Tajweed from "./pages/HTML/Tajweed"
import NavBar from "./components/NavBar"

function App() {


  return (
    <>
    {/* <NavBar/> */}
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/html/tajweed" element={<Tajweed/>}/>
    </Routes>
    </>
  )
}

export default App
