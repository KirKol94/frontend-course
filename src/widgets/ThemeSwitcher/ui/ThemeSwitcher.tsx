import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkMode from 'shared/assets/icons/darkmode.svg';
import LightMode from 'shared/assets/icons/lightmode.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? (
                <DarkMode width={40} height={40} fill="var(--bg-color)" />
            ) : (
                <LightMode width={40} height={40} fill="var(--bg-color)" />
            )}
        </Button>
    );
};
