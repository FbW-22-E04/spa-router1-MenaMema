import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Error404 from "./components/Error404";
import Me from "./components/Me";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

//ReactDOM.render(<App />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Me />} />
      <Route path="/me" element={<Me />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);
