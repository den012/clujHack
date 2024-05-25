import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Hero from "./components/Hero";
import Animals from "./components/Animals";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Hero /> */}
      <Animals />
      {/* <1 />
      <2 /> */}
    </BrowserRouter>
  )
}

export default App;