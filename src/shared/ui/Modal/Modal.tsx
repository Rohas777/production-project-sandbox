import {
    FC,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from 'react';
import cls from './Modal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import Portal from '@/shared/ui/Portal/Portal';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    container?: React.ComponentProps<typeof Portal>['container'];
    lazy?: boolean;
}

const Modal:FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        container,
        lazy,
    } = props;
    const [isMounted, setIsMounted] = useState(false);

    const closeHandler = useCallback(() => {
        if (onClose) onClose();
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') closeHandler();
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const styleMods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    if (lazy && !isMounted) return null;

    return (
        <Portal container={container}>
            <div className={classNames(cls.modal, styleMods, [className])}>
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    <div
                        className={cls.content}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
