import { FC, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';

interface BugButtonProps {
    className?: string
}

const BugButton: FC<BugButtonProps> = ({ className }) => {
    const [error, setError] = useState(false);

    const throwError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            theme={ThemeButton.PRIMARY}
            className={classNames('', {}, [className])}
            onClick={throwError}
        // eslint-disable-next-line i18next/no-literal-string
        >
            Throw error
        </Button>
    );
};

export default BugButton;
