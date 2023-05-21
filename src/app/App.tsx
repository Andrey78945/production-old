import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/AppRouter";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", { hovered: false }, [theme])}>
      <Navbar />
      <main className="main">
        <SideBar />
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
