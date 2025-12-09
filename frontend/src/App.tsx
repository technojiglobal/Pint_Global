import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home"

const App: React.FC = () => {
  return (
    <>
      <header className="absolute left-0 right-0 top-6 z-20">
        <Navbar />
      </header>

      <main>
        <Home />
      </main>
    </>
  );
};

export default App;
