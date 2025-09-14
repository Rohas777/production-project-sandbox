import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button, { ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            {t(short ? 'short-lang-name' : 'Язык')}
        </Button>
    );
};

export default LangSwitcher;
