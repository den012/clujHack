import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Hero from "./components/Hero";
import Animals from "./components/Animals";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/Hero" element={<Hero/>} />
          <Route path="/Animals" element={<Animals />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </Router>
    </main>
  )
}
export default App;