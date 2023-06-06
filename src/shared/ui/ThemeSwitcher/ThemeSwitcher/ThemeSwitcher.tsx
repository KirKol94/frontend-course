import { HTMLProps } from "react";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

interface ThemeSwitcherProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      toggle theme
    </button>
  );
};
