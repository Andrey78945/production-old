import React, { Suspense, useContext, useState } from "react";
import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { hovered: false }, [theme])}>
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
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
