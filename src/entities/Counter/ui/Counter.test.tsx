import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('test render', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toBeInTheDocument();
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('test increment', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('btn-increment')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('btn-increment'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('test decrement', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('btn-decrement')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('btn-decrement'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
