import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/app/App';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { PageError } from '@/widgets/PageError';
import '@/app/styles/index.scss';

import '@/shared/config/i18n/i18n';
import { StoreProvider } from './app/providers/StoreProvider';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary fallback={<PageError />}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
);
