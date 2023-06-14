import { Button, ThemeButton } from 'shared/ui/Button';

import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import SideBarIsCollapsed from 'shared/assets/icons/sidebarIsCollapsed.svg';
import SideBarIsOpen from 'shared/assets/icons/sidebarIsOpen.svg';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onCollapseToggle = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                theme={ThemeButton.CLEAR}
                onClick={onCollapseToggle}
            >
                {isCollapsed ? (
                    <SideBarIsCollapsed stroke="var(--bg-color)" width={40} height={40} />
                ) : (
                    <SideBarIsOpen stroke="var(--bg-color)" width={40} height={40} />
                )}
            </Button>

            <div className={cls.icons}>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
