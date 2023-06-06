import { useTheme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
};
