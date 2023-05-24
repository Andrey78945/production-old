import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  return (
    <header className={classNames(cls.Navbar, {}, [])}>
      <nav className={classNames(cls.header__nav, {}, [])}>
        <AppLink
          to="/"
          style={{ marginRight: '30px' }}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Главная страница')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          {t('О сайте')}
        </AppLink>
      </nav>
    </header>
  );
}
