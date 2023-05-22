import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/AppRouter";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import { Suspense } from "react";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", { hovered: false }, [theme])}>
      <Suspense fallback="Loading...">
        <Navbar />
        <main className="main">
          <SideBar />

          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
}

export default App;
