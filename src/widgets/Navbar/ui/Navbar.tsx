import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.PRIMARY} onClick={onShowModal}>
                    {t('sign-in')}
                </Button>
            </div>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </nav>
    );
};

export default Navbar;
