import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import i18nForTests from 'shared/config/i18n/i18nConfig/i18nConfigForTests';
import { render } from '@testing-library/react';

export function renderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nForTests}>
            {component}
        </I18nextProvider>,
    );
}
