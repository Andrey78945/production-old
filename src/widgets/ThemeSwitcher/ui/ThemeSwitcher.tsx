import { useTheme } from "app/providers/ThemeProvider";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={classNames(cls.ThemeSwitcher, {}, [])}
      onClick={toggleTheme}
    >
      TOGGLE
    </button>
  );
};
