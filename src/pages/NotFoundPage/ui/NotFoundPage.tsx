import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotfoutndPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotfoutndPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <h1>{ t('Страница не найдена')}</h1>
        </div>
    );
};
