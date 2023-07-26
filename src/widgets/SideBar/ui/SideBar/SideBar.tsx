import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './SideBar.module.scss';
import { SideBarItemsList } from './model/items';
import { SideBarItem } from '../SideBarItem/SideBarItem';

interface SideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const itemsList = useMemo(
    () => SideBarItemsList.map((item) => <SideBarItem item={item} collapsed={collapsed} key={item.path} />),
    [collapsed]
  );

  return (
    <section data-testid='sidebar' className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        data-testid='sidebar-toggle'
        onClick={() => setCollapsed((prev) => !prev)}
        className={cls.collapseBtn}
        type='button'
        square='square'
        size='size_l'
        theme={ThemeButton.BACKGROUND_INVERTED}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>{itemsList}</div>
      <div className={classNames(cls.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </section>
  );
});
