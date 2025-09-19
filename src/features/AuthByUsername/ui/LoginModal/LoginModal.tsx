import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LoginModal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import Modal from '@/shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void,
}

const LoginModal:FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;
    const { t } = useTranslation();

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.loginModal, {}, [className])}
        >
            <h2 className={cls.title}>{t('sign-in')}</h2>
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;
