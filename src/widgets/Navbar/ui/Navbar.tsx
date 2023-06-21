/* eslint-disable i18next/no-literal-string */
import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button type="button" theme={ThemeButton.CLEAR_INVERTED} onClick={onToggleModal}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isOpen} onClose={onToggleModal}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        atque incidunt dolor nobis tempora nostrum fuga eius, odit esse
        molestias nisi eligendi dolorum cumque tenetur maiores ipsum, blanditiis
        aut debitis?
      </Modal>
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
