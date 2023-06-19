import { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator/StyleDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT)],
};

export default preview;
