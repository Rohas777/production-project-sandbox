import { PartialStoryFn } from 'storybook/internal/csf';
import { Decorator, ReactRenderer } from '@storybook/react-webpack5';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

//  TODO ЗАМЕНИТЬ НА ДЕКОРАТОР!!!
export const ThemeDecorator = (theme: Theme = Theme.LIGHT) => (
    (Story: PartialStoryFn<ReactRenderer>) => (
        <ThemeProvider initialTheme={theme}>
            <div
                id="root"
                className={`app ${theme}`}
                style={{ width: '100%' }}
            >
                <Story />
            </div>
        </ThemeProvider>
    )
);
