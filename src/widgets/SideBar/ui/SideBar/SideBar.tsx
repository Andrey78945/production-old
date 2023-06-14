import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export function SideBar({ className }: SideBarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  return (
    <section
      data-testid="sidebar"
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={() => setCollapsed((prev) => !prev)}
        className={cls.collapseBtn}
        type="button"
        square="square"
        size="size_l"
        theme={ThemeButton.BACKGROUND_INVERTED}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>

        <AppLink
          className={cls.item}
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
        >
          <HomeIcon className={cls.icon} />
          <span className={cls.link}>{t('Главная страница')}</span>
        </AppLink>

        <AppLink
          className={cls.item}
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('О сайте')}</span>
        </AppLink>

      </div>
      <div className={classNames(cls.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </section>
  );
}
