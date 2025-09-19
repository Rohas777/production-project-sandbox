import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice', () => {
    test('decrement by 1', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.decrement()))
            .toEqual({ value: 9 });
    });
    test('increment by 1', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.increment()))
            .toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment()))
            .toEqual({ value: 1 });
    });
});
