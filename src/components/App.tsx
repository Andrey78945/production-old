import React, { Suspense } from "react";
import { Counter } from "./Counter/Counter";
import "../index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

function App() {
  return (
    <div className="app">
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
}

export default App;
