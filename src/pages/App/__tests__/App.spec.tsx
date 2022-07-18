import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '../App';

describe('pages/App', () => {
  test('should render without crashing', () => {
    render(<App />);

    expect(screen.queryByTestId('app')).toHaveTextContent('Hello Vite + React!');
  });

  test('should increment number when clicking the button', () => {
    render(<App />);

    const button = screen.queryByTestId('button');

    fireEvent.click(button!);
    fireEvent.click(button!);

    expect(screen.queryByTestId('app')).toHaveTextContent('count is: 2');
  });
});
