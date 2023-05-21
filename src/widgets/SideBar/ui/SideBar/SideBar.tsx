import { useState } from "react";
import cls from "./SideBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

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
    </section>
  );
};
