/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { Loader } from 'shared/ui/Loader/Loader';
import { AppRouter } from './providers/AppRouter';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

function App() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', { hovered: false }, [theme])}>
      <Suspense fallback={<Loader />}>
        <Navbar />

        <main className='main'>
          <SideBar />

          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
}

export default App;
