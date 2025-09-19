import { fireEvent, screen } from '@testing-library/react';
import renderComponent from '@/shared/lib/tests/renderComponent/renderComponent';
import Counter from './Counter';

describe('Counter', () => {
    test('Test render', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toBeInTheDocument();
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        expect(screen.getByTestId('increment-btn')).toBeInTheDocument();
        expect(screen.getByTestId('decrement-btn')).toBeInTheDocument();
    });
    test('Increment', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const valueTitle = screen.getByTestId('value-title');
        const incrementBtn = screen.getByTestId('increment-btn');
        expect(valueTitle).toHaveTextContent('10');
        fireEvent.click(incrementBtn);
        expect(valueTitle).toHaveTextContent('11');
    });
    test('Decrement', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const valueTitle = screen.getByTestId('value-title');
        const decrementBtn = screen.getByTestId('decrement-btn');
        expect(valueTitle).toHaveTextContent('10');
        fireEvent.click(decrementBtn);
        expect(valueTitle).toHaveTextContent('9');
    });
});
