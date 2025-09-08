import { useState } from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import ThemeSwitcher from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";
import LangSwitcher from "@/shared/ui/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {t} = useTranslation()

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>{t('otkryt')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};

export default Sidebar;
