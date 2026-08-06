import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Tajweed from "./pages/HTML/Tajweed";
import NavBar from "./components/NavBar";
import SH from "./pages/HTML/SH/SH.jsx";
import SH_1 from "./pages/HTML/SH/SH_1.jsx";
import SH_2 from "./pages/HTML/SH/SH_2.jsx";

function App() {
  return (
    <>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/html/tajweed" element={<Tajweed />} />
        <Route path="/html/SH" element={<SH />} />
        <Route path="/html/SH/SH_1" element={<SH_1 />} />
        <Route path="/html/SH/SH_2" element={<SH_2 />} />
      </Routes>
    </>
  );
}

export default App;
