import { routeContext } from '../routeContext';

describe('Test routeContext', () => {
  test('Should properly parse params and query', () => {
    const context = routeContext<{ storeId: string }, { section: string }>('/:storeId/info');
    const url = context.url({ params: { storeId: '123' }, query: { section: 'description' } });
    expect(url).toBe('/123/info?section=description');
  });

  test('Should properly parse multiple params and query', () => {
    const context = routeContext<{ storeId: string; day: string }, { time: string }>(
      '/:storeId/info/:day',
    );
    const url = context.url({
      params: { storeId: '123', day: 'tuesday' },
      query: { time: '1200' },
    });
    expect(url).toBe('/123/info/tuesday?time=1200');
  });
});
