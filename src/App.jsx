import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Hero from "./components/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <Hero />
      {/* <1 />
      <2 /> */}
    </BrowserRouter>
  )
}

export default App;