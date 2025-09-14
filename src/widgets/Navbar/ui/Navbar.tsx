import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
            </div>
        </nav>
    );
};

export default Navbar;
