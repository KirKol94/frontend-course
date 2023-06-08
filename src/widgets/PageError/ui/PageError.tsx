import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation();

    const onReloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={cls.PageError}>
            <h1>{t('Что-то пошло не так')}</h1>

            <Button theme={ThemeButton.CLEAR} onClick={onReloadPage}>
                {t('Обновите страницу')}
            </Button>
        </div>
    );
};
