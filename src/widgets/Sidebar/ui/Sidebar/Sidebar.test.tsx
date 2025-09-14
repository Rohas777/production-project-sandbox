import { fireEvent, screen } from '@testing-library/react';
import Sidebar from '@/widgets/Sidebar/ui/Sidebar/Sidebar';
import renderComponent from '@/shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar', () => {
    test('Test render', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Test toggle collapsible', () => {
        renderComponent(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');
    });
});
