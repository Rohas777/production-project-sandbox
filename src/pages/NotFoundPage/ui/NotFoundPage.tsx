import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage:FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation('not-found');

    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('not-found')}
        </div>
    );
};

export default NotFoundPage;
