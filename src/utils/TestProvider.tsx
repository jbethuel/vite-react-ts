import { ReactElement } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

interface TestProviderProps {
  children: ReactElement | ReactElement[];
  urls?: string[];
  urlIndex?: number;
  routes?: string[];
}

export function TestProvider(props: TestProviderProps) {
  const appRoute = '/app/123';
  const { children, urls = [appRoute], urlIndex = 0, routes = ['/app/:id'] } = props;
  return (
    <MemoryRouter initialIndex={urlIndex} initialEntries={urls}>
      <Routes>
        {routes.map((route) => (
          <Route key={route} path={route} element={children} />
        ))}
      </Routes>
    </MemoryRouter>
  );
}
