import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';

import Button, { ButtonSize, ButtonTheme } from './Button';
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
        theme: ButtonTheme.PRIMARY,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const OutlineL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const OutlineXL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.DARK),
    ],
};

export const Background: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const BackgroundDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.DARK),
    ],
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const BackgroundInvertedDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.DARK),
    ],
};

export const SquareM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.PRIMARY,
        square: true,
        size: ButtonSize.M,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const SquareL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.PRIMARY,
        square: true,
        size: ButtonSize.L,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const SquareXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.PRIMARY,
        square: true,
        size: ButtonSize.XL,
    },
    decorators: [
        CenteredDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};
