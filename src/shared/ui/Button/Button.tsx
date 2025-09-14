import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum ButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

const Button:FC<ButtonProps> = (props) => {
    const {
        className, children, theme = ButtonTheme.CLEAR, square, size = ButtonSize.M, ...otherProps
    } = props;

    const styleMods: Record<string, boolean> = {
        [cls.square]: square,
    };

    const additionalStyles: string[] = [
        className,
        cls[theme],
        cls[size],
    ];

    return (
        <button
            type="button"
            className={classNames(cls.button, styleMods, additionalStyles)}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
