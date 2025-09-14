import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';

interface PageErrorProps {
    className?: string
}

const PageError:FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <h1>{t('Something went error')}</h1>
            <Button theme={ButtonTheme.PRIMARY} onClick={reloadPage}>
                {t('Refresh page')}
            </Button>
        </div>
    );
};

export default PageError;
