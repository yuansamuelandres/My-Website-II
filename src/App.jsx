import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Tajweed from "./pages/HTML/Tajweed";
import SH from "./pages/HTML/SH/SH.jsx";
import SH_1 from "./pages/HTML/SH/SH_1.jsx";
import SH_2 from "./pages/HTML/SH/SH_2.jsx";
import D from "./pages/HTML/D/D.jsx";
import D_1 from "./pages/HTML/D/D_1.jsx";
import D_2 from "./pages/HTML/D/D_2.jsx";
import F from "./pages/HTML/F/F.jsx";
import F_1 from "./pages/HTML/F/F_1.jsx";
import Lectures from "./pages/Lectures.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lectures" element={<Lectures nav="lectures"/>} />
        <Route path="/html/tajweed" element={<Tajweed />} />
        <Route path="/html/SH" element={<SH />} />
        <Route path="/html/SH/SH_1" element={<SH_1 />} />
        <Route path="/html/SH/SH_2" element={<SH_2 />} />
        <Route path="/html/D" element={<D />} />
        <Route path="/html/D/D_1" element={<D_1 />} />
        <Route path="/html/D/D_2" element={<D_2 />} />
        <Route path="/html/F" element={<F />} />
        <Route path="/html/F/F_1" element={<F_1 />} />
      </Routes>
    </>
  );
}

export default App;
