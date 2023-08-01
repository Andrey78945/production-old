import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';
import { Loader } from 'shared/ui/Loader/Loader';
import { AppRouter } from './providers/AppRouter';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', { hovered: false }, [theme])}>
      <Suspense fallback={<Loader />}>
        <Navbar />

        <main className='main'>
          <SideBar />

          {inited && <AppRouter />}
        </main>
      </Suspense>
    </div>
  );
}

export default App;
