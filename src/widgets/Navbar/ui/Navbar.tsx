import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "@/shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>Главная</AppLink>
          <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>О нас</AppLink>
      </div>
    </nav>
  );
};

export default Navbar;
