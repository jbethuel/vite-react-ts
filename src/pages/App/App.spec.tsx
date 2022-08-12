import { fireEvent, render, screen } from '@testing-library/react';
import { App, buttonTestId, greetingTestId } from './App';

describe('pages/App', () => {
  test('should render without crashing', () => {
    render(<App />);

    expect(screen.queryByTestId(greetingTestId)).toHaveTextContent('Welcome to Vite + React!');
  });

  test('should increment number when clicking the button', () => {
    render(<App />);

    const button = screen.queryByTestId(buttonTestId);

    fireEvent.click(button!);
    fireEvent.click(button!);

    expect(screen.queryByTestId(buttonTestId)).toHaveTextContent('count is: 2');
  });
});
