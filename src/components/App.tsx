import React, { Suspense, useContext, useState } from "react";
import { Counter } from "./Counter/Counter";
import "../styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import { Theme, ThemeContext } from "../theme/themeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <div className={"app " + theme}>
      <nav>
        <Link to="/" style={{ marginRight: "30px" }}>
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>

      <button
        onClick={toggleTheme}
        style={{ marginLeft: "auto", marginRight: "0" }}
      >
        Theme
      </button>
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
