import {
    ChangeEvent,
    FC,
    InputHTMLAttributes,
    memo,
} from 'react';
import cls from './Input.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    title?: string
}

const Input:FC<InputProps> = (props) => {
    const {
        className,
        value,
        onChange,
        title,
        ...otherProps
    } = props;

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <label htmlFor={otherProps.name} className={classNames(cls.label, {}, [className])}>
            {title && <span className={cls.title}>{title}</span>}
            <input
                className={cls.input}
                value={value}
                onChange={onChangeHandler}
                type="text"
                placeholder=""
                {...otherProps}
            />
        </label>
    );
};

export default memo(Input);
