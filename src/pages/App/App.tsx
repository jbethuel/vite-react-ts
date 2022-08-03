import { useCallback, useMemo, useState } from 'react';

interface AppProps {
  name?: string;
}

export function App(props: AppProps) {
  const { name } = props;

  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const renderGreeting = useMemo(() => {
    let message = 'Welcome to Vite + React';

    if (name) {
      return `${message}, ${name}!`;
    }

    return `${message}!`;
  }, [name]);

  return (
    <div className="App" data-testid="app">
      <header className="App-header">
        <p>{renderGreeting}</p>
        <button type="button" onClick={increment} data-testid="button">
          count is: {count}
        </button>
      </header>
    </div>
  );
}
