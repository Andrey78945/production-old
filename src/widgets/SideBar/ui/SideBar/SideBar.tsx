import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
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
      <div className={classNames(cls.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </section>
  );
}
