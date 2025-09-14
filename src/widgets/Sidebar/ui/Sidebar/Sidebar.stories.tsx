import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Sidebar from './Sidebar';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    decorators: [
        StyleDecorator,
        RouterDecorator,
    ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
