import React from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={classNames(cls.Navbar, {}, [])}>
      <ThemeSwitcher />
      <nav className={classNames(cls.header__nav, {}, [])}>
        <AppLink
          to="/"
          style={{ marginRight: "30px" }}
          theme={AppLinkTheme.SECONDARY}
        >
          Home
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </nav>
    </header>
  );
};
