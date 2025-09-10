import { FC } from 'react';
import cls from './Loader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string
}

const Loader:FC<LoaderProps> = ({ className }) => (
    <div className={classNames(cls.ldsHourglass, {}, [className])}></div>
);

export default Loader;
