import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Loader from './Loader';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { CenteredDecorator } from '@/shared/config/storybook/CenteredDecorator/CenteredDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

const meta = {
    title: 'shared/Loader',
    component: Loader,
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
} satisfies Meta<typeof Loader>;

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
