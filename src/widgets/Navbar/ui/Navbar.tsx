/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        type="button"
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      <nav className={classNames(cls.header__nav, {}, [])}>
        <AppLink
          to="/"
          style={{ marginRight: '30px' }}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Главная страница')}
        </AppLink>
      </nav>
    </header>
  );
}
