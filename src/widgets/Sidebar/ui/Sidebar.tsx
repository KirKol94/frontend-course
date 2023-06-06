import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button";
import SideBarIsCollapsed from "shared/assets/icons/sidebarIsCollapsed.svg";
import SideBarIsOpen from "shared/assets/icons/sidebarIsOpen.svg";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onCollapseToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <Button theme={ThemeButton.CLEAR} onClick={onCollapseToggle}>
        {isCollapsed ? (
          <SideBarIsCollapsed stroke="var(--bg-color)" width={40} height={40} />
        ) : (
          <SideBarIsOpen stroke="var(--bg-color)" width={40} height={40} />
        )}
      </Button>

      <div className={cls.icons}>
        <ThemeSwitcher className={cls.icon} />
      </div>
    </div>
  );
};
