import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export interface renderWithRouterOptions {
    route?: string;
}

const renderWithRouter = (
    component: ReactNode,
    options: renderWithRouterOptions = {},
):ReturnType<typeof render> => {
    const { route } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            {component}
        </MemoryRouter>,
    );
};

export default renderWithRouter;
