import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string
}

const Counter:FC<CounterProps> = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    const increment = () => {
        dispatch(counterActions.increment());
    };

    return (
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <Button data-testid="decrement-btn" theme={ButtonTheme.OUTLINE} onClick={decrement}>-</Button>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" theme={ButtonTheme.OUTLINE} onClick={increment}>+</Button>
        </div>
    );
};

export default Counter;
