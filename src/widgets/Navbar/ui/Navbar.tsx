import React from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={classNames(cls.Navbar, {}, [])}>
      <nav className={classNames(cls.header__nav, {}, [])}>
        <AppLink to="/" style={{ marginRight: "30px" }}>
          Home
        </AppLink>
        <AppLink to="/about">About</AppLink>
      </nav>
    </header>
  );
};
