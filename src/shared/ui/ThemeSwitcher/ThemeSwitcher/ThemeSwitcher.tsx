import { HTMLProps } from "react";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import LightMode from "shared/assets/icons/lightmode.svg";
import DarkMode from "shared/assets/icons/darkmode.svg";
import { Theme } from "app/providers/ThemeProvider";

interface ThemeSwitcherProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <DarkMode /> : <LightMode />}
    </button>
  );
};
