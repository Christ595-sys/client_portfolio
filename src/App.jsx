import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import clientData from "./data/clientData";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#07111f] text-white">
        <Navbar data={clientData} />

        <Routes>
          <Route path="/" element={<Home data={clientData} />} />
          <Route path="/about" element={<About data={clientData} />} />
          <Route path="/projects" element={<Projects data={clientData} />} />
        </Routes>

        <Footer data={clientData} />
      </div>
    </HashRouter>
  );
}