import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { TestProvider } from '../TestProvider';

function Component() {
  const params = useParams<{ id: string }>();
  return <div data-testid="children">{params.id}</div>;
}

describe('utils/TestProvider', () => {
  test('should render without crashing', () => {
    render(
      <TestProvider>
        <div data-testid="children">hello</div>
      </TestProvider>,
    );

    expect(screen.queryByTestId('children')).toHaveTextContent('hello');
  });

  test('should display url params', () => {
    render(
      <TestProvider routes={['/app/:id']} urlIndex={0} urls={['/app/123']}>
        <Component />
      </TestProvider>,
    );

    expect(screen.queryByTestId('children')).toHaveTextContent('123');
  });
});
