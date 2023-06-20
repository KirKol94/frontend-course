import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from 'widgets/Sidebar';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Button> = {
    title: 'widget/Sidebar',
    component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
