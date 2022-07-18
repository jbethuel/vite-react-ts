import { useCallback, useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div className="App" data-testid="app">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <button type="button" onClick={increment} data-testid="button">
          count is: {count}
        </button>
      </header>
    </div>
  );
}
