import { useState, useEffect } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button';

export const BugButton = () => {
    const [isError, setisError] = useState(false);

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
            Throw error

        </Button>
    );
};
