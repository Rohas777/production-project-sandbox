import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Navbar from './Navbar';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    decorators: [
        StyleDecorator,
        RouterDecorator,
        (Story) => {
            if (!document.getElementById('root')) {
                const portalRoot = document.createElement('div');
                portalRoot.id = ('root');
                document.body.appendChild(portalRoot);
            }
            document.getElementById('root').classList.add('app');
            return <Story />;
        },
    ],
} satisfies Meta<typeof Navbar>;

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
