import { useState } from "react";
import cls from "./SideBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <section
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={() => setCollapsed((prev) => !prev)}>Toggle</button>
      <div className={classNames(cls.switchers, {}, [])}>
        <ThemeSwitcher />
      </div>
    </section>
  );
};
