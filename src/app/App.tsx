import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/AppRouter";
import { Navbar } from "widgets/Navbar";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", { hovered: false }, [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
}

export default App;
