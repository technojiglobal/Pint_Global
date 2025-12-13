import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./pages/Services/Service";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"; // <-- import your About page
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";

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
          <Route path="/contact" element={<Contact/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/services" element={<Service/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
