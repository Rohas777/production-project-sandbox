import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import Modal from '@/shared/ui/Modal/Modal';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.PRIMARY} onClick={onToggleModal}>
                    {t('sign-in')}
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('Quos, distinctio ipsum non illum libero iure quae facere, Lorem ipsum, dolor sit amet consectetur adipisicing elit. accusantium maxime odio neque, itaque blanditiis quis praesentium repellendus consequatur explicabo consequuntur sequi.')}
            </Modal>
        </nav>
    );
};

export default Navbar;
