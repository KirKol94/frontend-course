import { Button, ThemeButton } from 'shared/ui/Button';
import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

export const BugButton = () => {
    const [isError, setisError] = useState(false);
    const { t } = useTranslation();

    const onThrowError = () => {
        setisError((p) => !p);
    };

    useEffect(() => {
        if (isError) {
            throw new Error('Тестовая ошибка');
        }
    }, [isError]);

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={onThrowError}
        >
            {t('Throw error')}
        </Button>
    );
};
