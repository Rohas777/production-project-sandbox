import type { Meta, StoryObj } from '@storybook/react-webpack5';

import LoginForm from './LoginForm';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { CenteredDecorator } from '@/shared/config/storybook/CenteredDecorator/CenteredDecorator';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
    decorators: [
        StyleDecorator,
    ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.DARK),
    ],
};
