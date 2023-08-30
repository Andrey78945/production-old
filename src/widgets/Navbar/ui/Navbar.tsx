/* eslint-disable i18next/no-literal-string */
import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogOut = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      {authData ? (
        <>
          <Button type='button' theme={ThemeButton.CLEAR_INVERTED} onClick={onLogOut}>
            {t('Выйти')}
          </Button>
          <Text className={cls.appName} title={t('Ulbi TV App')} theme={TextTheme.INVERTED} />
          <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY} className={cls.createBtn}>
            {t('Создать статью')}
          </AppLink>
        </>
      ) : (
        <Button type='button' theme={ThemeButton.CLEAR_INVERTED} onClick={onShowModal}>
          {t('Войти')}
        </Button>
      )}
      <LoginModal isOpen={isAuthModal && !authData} onClose={onCloseModal} />
      <nav className={classNames(cls.header__nav, {}, [])}>
        <AppLink to='/' style={{ marginRight: '30px' }} theme={AppLinkTheme.SECONDARY}>
          {t('Главная страница')}
        </AppLink>
      </nav>
    </header>
  );
});
