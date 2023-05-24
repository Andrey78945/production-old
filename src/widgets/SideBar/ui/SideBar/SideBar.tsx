import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export function SideBar({ className }: SideBarProps) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <section
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={() => setCollapsed((prev) => !prev)} type="button">
        Toggle
      </button>
      <div className={classNames(cls.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </section>
  );
}
