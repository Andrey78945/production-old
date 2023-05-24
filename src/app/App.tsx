import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { Suspense } from 'react';
import { AppRouter } from './providers/AppRouter';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', { hovered: false }, [theme])}>
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
