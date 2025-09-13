import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';

import Button, { ThemeButton } from './Button';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { CenteredDecorator } from '@/shared/config/storybook/CenteredDecorator/CenteredDecorator';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: { onClick: fn() },
    decorators: [
        StyleDecorator,
    ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.PRIMARY,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.DARK),
    ],
};
