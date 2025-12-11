import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"; // <-- import your About page

const App: React.FC = () => {
  return (
    <Router>
      <header className="fixed left-0 right-0 top-6 z-20">
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
