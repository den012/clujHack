import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Hero from "./components/Hero";
import Animals from "./components/Animals";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/Hero" element={<Hero/>} />
          <Route path="/Animals" element={<Animals />} />
        </Routes>
      </Router>
    </main>
  )
}
export default App;