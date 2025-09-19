import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import { useInputState } from '@/shared/lib/hooks/useInputState/useInputState';

interface LoginFormProps {
    className?: string
}

const LoginForm:FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    const usernameInput = useInputState('');
    const passwordInput = useInputState('');

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input title={t('username')} autoFocus value={usernameInput.value} onChange={usernameInput.onChange} />
            <Input title={t('password')} value={passwordInput.value} onChange={passwordInput.onChange} />
            <Button theme={ButtonTheme.PRIMARY} className={cls.loginBtn}>
                {t('sign-in')}
            </Button>
        </div>
    );
};

export default LoginForm;
