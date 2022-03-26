// __tests__/api/results/exports/
import { createMocks } from 'node-mocks-http';
import handlerMinMax from '../../pages/api/minmax';

describe('/api/results/exports?currency=czk', () => {
  test('returns a JSOn with the minimal and maximum exhcange rate available for CZK', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });

    await handlerMinMax(req, res);

    expect(res._getStatusCode()).toBe(200);
});
})