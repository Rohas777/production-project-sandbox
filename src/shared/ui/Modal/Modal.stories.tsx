import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Modal from './Modal';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        StyleDecorator,
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
    args: {
        isOpen: true,
        container: '#root',
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        children: 'Quos, distinctio ipsum non illum libero iure quae facere, Lorem ipsum, dolor sit amet consectetur adipisicing elit. accusantium maxime odio neque, itaque blanditiis quis praesentium repellendus consequatur explicabo consequuntur sequi.',
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        (Story) => {
            document.getElementById('root').classList.remove('dark');
            document.getElementById('root').classList.add('light');

            return <Story />;
        },
    ],
};

export const Dark: Story = {
    args: {
        children: 'Quos, distinctio ipsum non illum libero iure quae facere, Lorem ipsum, dolor sit amet consectetur adipisicing elit. accusantium maxime odio neque, itaque blanditiis quis praesentium repellendus consequatur explicabo consequuntur sequi.',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        (Story) => {
            document.getElementById('root').classList.remove('light');
            document.getElementById('root').classList.add('dark');

            return <Story />;
        },
    ],
};
