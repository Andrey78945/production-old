import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/AppRouter";
import { Navbar } from "widgets/Navbar";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { hovered: false }, [theme])}>
      <Navbar />

      <button
        onClick={toggleTheme}
        style={{ marginLeft: "auto", marginRight: "0" }}
      >
        Theme
      </button>
      <AppRouter />
    </div>
  );
}

export default App;
