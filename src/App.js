import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./First Page/FirstPage";
import './App.css'
import SecondPage1 from "./Second Page/SecondPage1";
import SecondPage2 from "./Second Page/SecondPage2";
import SecondPage3 from "./Second Page/SecondPage3";
import SecondPage4 from "./Second Page/SecondPage4";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/details1" element={<SecondPage1 />} />
          <Route path="/details2" element={<SecondPage2 />} />
          <Route path="/details3" element={<SecondPage3 />} />
          <Route path="/details4" element={<SecondPage4 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
