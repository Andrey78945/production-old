import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/AppRouter";

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
      <AppRouter />
    </div>
  );
}

export default App;
