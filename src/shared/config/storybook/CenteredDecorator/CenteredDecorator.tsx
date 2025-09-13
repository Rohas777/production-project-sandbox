import '@/app/styles/index.scss';
import { Decorator } from '@storybook/react-webpack5';

export const CenteredDecorator: Decorator = (Story) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        }}
    >
        <Story />
    </div>
);
