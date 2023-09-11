import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import cls from './SideBar.module.scss';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import { getSidebarItems } from './model/selectors/getSidebarItems';

interface SideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const SideBarItemsList = useSelector(getSidebarItems);

  const itemsList = useMemo(
    () => SideBarItemsList.map((item) => <SideBarItem item={item} collapsed={collapsed} key={item.path} />),
    [SideBarItemsList, collapsed]
  );

  return (
    <aside data-testid='sidebar' className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
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
      <VStack gap='8' role='navigation' className={cls.items}>
        {itemsList}
      </VStack>
      <div className={classNames(cls.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </aside>
  );
});
