import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <div className="font-sans min-h-screen bg-white text-gray-800 flex flex-col">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/works" element={<Projects />} />
              <Route path="/letters" element={<Contact />} />
              <Route path="/about-page" element={<AboutPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}
