import { useCallback, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <button type="button" onClick={increment}>
          count is: {count}
        </button>
      </header>
    </div>
  );
};

export default App;
