import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/AppRouter";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", { hovered: false }, [theme])}>
      <Navbar />
      <ThemeSwitcher />
      <AppRouter />
    </div>
  );
}

export default App;
