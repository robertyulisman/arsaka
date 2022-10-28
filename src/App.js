import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from "./pages/Company";
import AboutCompany from "./pages/Company/AboutCompany";
import Dashboard from "./pages/Company/Dashboard";

import Error404 from "./pages/Error404";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:_id" element={<Company />} />
        {/* <Route path="/company/:_id" element={<Dashboard />} />
        <Route path="/company/:_id/about" element={<AboutCompany />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
