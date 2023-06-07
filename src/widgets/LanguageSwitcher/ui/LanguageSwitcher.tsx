import { Button, ThemeButton } from 'shared/ui/Button';
import TranslateIcon from 'shared/assets/icons/translate.svg';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
            className={classNames(cls.LanguageSwitcher, {}, [className])}
        >
            <TranslateIcon fill="var(--bg-color)" width={40} height={40} />
        </Button>
    );
};
