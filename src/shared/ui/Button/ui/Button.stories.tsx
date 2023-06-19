import { Button, ThemeButton } from 'shared/ui/Button';
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Button> = {
    title: 'ui/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Click',
    },
};

export const ClearDark: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Click',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Click',
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Click',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
